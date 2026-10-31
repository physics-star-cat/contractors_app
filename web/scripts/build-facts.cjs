#!/usr/bin/env node
/**
 * Verified Facts (verified-facts/0.3, conformance L1) publisher for lowriskquotes.com.
 * Source of truth: data/facts-source.json. Writes the static files served from public/:
 *   /.well-known/facts.json   discovery document
 *   /f/index.json             index (every key with its hash; digest)
 *   /f/<key>.json             one record per fact
 * Generator and checker are vendored unchanged from physics-star-cat/databutler in vendor/verified-facts/
 * (see the header of vendor/verified-facts/facts-static.js). Spec: https://databutler.dev/protocol/facts
 *   node scripts/build-facts.cjs          write public files, then run the L1 conformance check over public/
 *   node scripts/build-facts.cjs --check  fail if public files are stale, then run the L1 conformance check
 *   add --online                          also fetch every official source (item 4); the site's own files still come
 *                                         from public/, so this works before deploy
 * Without --online the check skips item 4 (npm test stays network-free). After deploy:
 * `node vendor/verified-facts/facts-check.js https://lowriskquotes.com --level L1`.
 */
const fs = require('fs');
const path = require('path');
const { buildStatic, checkOutput, dirFetch } = require('../vendor/verified-facts/facts-static.js');
const { checkSite, format } = require('../vendor/verified-facts/facts-check.js');

const root = path.join(__dirname, '..');
const pub = path.join(root, 'public');
const src = JSON.parse(fs.readFileSync(path.join(root, 'data/facts-source.json'), 'utf8'));
const check = process.argv.includes('--check');

const { files, conformance } = buildStatic(src);
const stale = [];
for (const [rel, body] of Object.entries(files)) {
  const full = path.join(pub, rel);
  if (check) {
    const cur = fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : null;
    if (cur !== body) stale.push(`public/${rel}`);
  } else {
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, body);
  }
}
// A record file under public/f/ that the source no longer produces is stale too.
const fDir = path.join(pub, 'f');
const walk = (d) => (fs.existsSync(d) ? fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]) : []);
for (const f of walk(fDir)) {
  const rel = path.relative(pub, f).split(path.sep).join('/');
  if (!files[rel]) stale.push(`public/${rel} (not in data/facts-source.json${check ? '' : '; delete it'})`);
}
if (stale.length) {
  console.error(`Stale (run node scripts/build-facts.cjs): ${stale.join(', ')}`);
  process.exit(1);
}

const online = process.argv.includes('--online');
const origin = new URL(src.publisher.url).origin;
const local = dirFetch(pub, src.publisher.url);
const run = online
  ? checkSite(origin, { fetchFn: (u, o) => (new URL(u).origin === origin ? local(u, o) : fetch(u, o)), level: conformance })
      .then((report) => ({ report, text: format(report) }))
  : checkOutput(pub, src.publisher.url, conformance);
run.then(({ report, text }) => {
  console.log(text);
  if (!report.ok) process.exit(1);
  console.log(`verified-facts: ${src.facts.length} records, ${conformance} ${check ? 'up to date and conformant' : 'written and conformant'}`);
}, (e) => { console.error(`build-facts: ${e.message}`); process.exit(1); });
