// Same list as databutler's api/_track.js. Ordered: named clients and registry
// crawlers first, generic HTTP libraries last. Only the label is ever sent; the
// raw User-Agent is not (the privacy page promises that).
const CLIENTS: [RegExp, string][] = [
  [/verifymcp/, 'verifymcp'],
  [/smithery/, 'smithery'],
  [/pulsemcp/, 'pulsemcp'],
  [/claude|anthropic/, 'claude'],
  [/cursor/, 'cursor'],
  [/windsurf/, 'windsurf'],
  [/cline/, 'cline'],
  [/vscode|visual studio code/, 'vscode'],
  [/openai|chatgpt/, 'openai'],
  [/mcp/, 'mcp-other'],
  [/bot|crawler|spider/, 'bot'],
  [/curl|wget/, 'curl'],
  [/python|httpx|aiohttp|requests/, 'python'],
  [/node|undici|axios/, 'node'],
  [/go-http-client/, 'go'],
  [/mozilla/, 'browser'],
];

export function classifyClient(ua: string | null | undefined): string {
  if (!ua) return '(none)'
  const s = ua.toLowerCase()
  for (const [pattern, label] of CLIENTS) if (pattern.test(s)) return label
  return 'other'
}
