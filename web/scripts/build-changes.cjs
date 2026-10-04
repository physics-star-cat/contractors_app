#!/usr/bin/env node
/**
 * Verified Changes (verified-changes/0.1) publisher for lowriskquotes.com.
 * Source of truth: data/changes/changelog.json (entries, append-only) and
 * data/changes/publisher.json (discovery metadata). Writes the two static
 * documents served from public/:
 *   /.well-known/changes.json  discovery document
 *   /changes.json              changes document (static; ignores ?since=)
 * Spec: https://databutler.dev/protocol
 *   node scripts/build-changes.cjs          write public files
 *   node scripts/build-changes.cjs --check  validate + fail if public files are stale
 */
const fs = require('fs');
const path = require('path');
const { assertValid } = require('../vendor/verified-changes/schema_check.cjs');

const root = path.join(__dirname, '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const SITE = 'https://lowriskquotes.com';
const PROTOCOL = 'verified-changes/0.1';
const SCHEMA_URL = 'https://databutler.dev/schema/changes.v0.json';

function build() {
  const meta = read('data/changes/publisher.json');
  const entries = [...read('data/changes/changelog.json')].sort((a, b) =>
    b.verifiedDate.localeCompare(a.verifiedDate));
  const latest = entries.length ? entries[0].verifiedDate : meta.updated;
  const coverageStart = entries.length
    ? entries.map((e) => e.verifiedDate).sort()[0] : undefined;

  const discovery = {
    protocol: PROTOCOL,
    publisher: meta.publisher,
    updated: meta.updated,
    ...(coverageStart ? { coverageStart } : {}),
    areas: meta.areas,
    endpoints: { json: `${SITE}/changes.json` },
    schema: SCHEMA_URL,
    specification: 'https://databutler.dev/protocol',
    licence: meta.licence,
    contact: meta.contact,
  };
  const changes = {
    protocol: PROTOCOL,
    schema: SCHEMA_URL,
    publisher: meta.publisher,
    generated: latest > meta.updated ? latest : meta.updated,
    ...(coverageStart ? { coverageStart } : {}),
    ...(entries.length ? {} : { note: meta.note }),
    count: entries.length,
    entries,
  };
  return { discovery, changes };
}

function verify({ discovery, changes }) {
  const wk = read('vendor/verified-changes/well-known-changes.v0.json');
  const cs = read('vendor/verified-changes/changes.v0.json');
  assertValid(wk, discovery, '/.well-known/changes.json');
  assertValid(cs, changes, '/changes.json');
  const areas = new Set(discovery.areas.map((a) => a.name));
  const seen = new Set();
  changes.entries.forEach((e, i) => {
    if (!areas.has(e.area)) throw new Error(`entry ${i}: undeclared area "${e.area}"`);
    if (!e.source.startsWith('https:')) throw new Error(`entry ${i}: source must be https`);
    const id = `${e.area}|${e.key}|${e.verifiedDate}`;
    if (seen.has(id)) throw new Error(`entry ${i}: duplicate identity ${id}`);
    seen.add(id);
    if (i && changes.entries[i - 1].verifiedDate < e.verifiedDate) throw new Error(`entry ${i}: not newest-first`);
  });
}

const OUT = {
  'public/.well-known/changes.json': 'discovery',
  'public/changes.json': 'changes',
};
const docs = build();
verify(docs);
const check = process.argv.includes('--check');
let stale = [];
for (const [file, k] of Object.entries(OUT)) {
  const body = JSON.stringify(docs[k], null, 2) + '\n';
  const full = path.join(root, file);
  if (check) {
    const cur = fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : null;
    if (cur !== body) stale.push(file);
    else assertValid(read(`vendor/verified-changes/${k === 'discovery' ? 'well-known-changes' : 'changes'}.v0.json`), JSON.parse(cur), file);
  } else {
    fs.writeFileSync(full, body);
  }
}
if (stale.length) {
  console.error(`Stale (run node scripts/build-changes.cjs): ${stale.join(', ')}`);
  process.exit(1);
}
console.log(`verified-changes: ${docs.changes.count} entries, discovery + changes documents ${check ? 'valid and up to date' : 'written'}`);
