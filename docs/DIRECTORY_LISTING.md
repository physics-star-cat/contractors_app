# Directory listing assets — lowriskquotes MCP server

Submission copy for the Claude connectors directory and, later, the ChatGPT
apps directory. Everything here is factual and matches what the server
actually does (`web/src/app/api/mcp/route.ts`). Keep this file in step with
the tool definitions when they change.

| Field | Value |
|---|---|
| Name (≤30 chars) | `lowriskquotes Monte Carlo` (25) |
| Short description (≤30 chars) | `Monte Carlo cost estimates` (26) |
| Server URL (Streamable HTTP) | `https://lowriskquotes.com/api/mcp/` |
| Transport | Streamable HTTP, stateless JSON-RPC 2.0 over POST (`application/json` responses, no SSE, no sessions) |
| Authentication | None (no auth, no API key, CORS-open) |
| Documentation URL | `https://lowriskquotes.com/api/` |
| Privacy policy URL | `https://lowriskquotes.com/privacy/` |
| Support / contact | `https://github.com/physics-star-cat` (GitHub issues; the site has no email contact route) |
| Icon 512×512 | `https://lowriskquotes.com/icon.png` (`web/public/icon.png`, 16 KB) |
| Icon 64×64 (ChatGPT, <5 KB) | `https://lowriskquotes.com/icon-64.png` (`web/public/icon-64.png`, 643 bytes) |
| MCP Registry name | `io.github.physics-star-cat/lowriskquotes-montecarlo` (`server.json`) |
| Server name / version | `lowriskquotes-montecarlo` / `1.0.0` |
| Protocol version | `2025-06-18` |
| Tools | `monte_carlo_estimate`, `retirement_drawdown` — both `readOnlyHint: true`, `destructiveHint: false`, `openWorldHint: false` |

## Long description (≤4,000 chars)

lowriskquotes gives AI assistants two Monte Carlo simulation tools for turning uncertain numbers into honest ranges. Nothing is looked up and nothing is stored: every result is computed from the inputs supplied in the call, so the server needs no authentication and holds no data.

- monte_carlo_estimate (Monte Carlo cost estimate) — takes a list of cost line items, each with a three-point estimate (low / likely / high), and runs a triangular-distribution Monte Carlo over them. Returns the total-cost mean and percentiles (p10, p50, p80, p90) plus a per-item p50/p80 breakdown. Built for contractors, builders, freelancers and anyone pricing a job, budget or project who needs a defensible range rather than a single guess; the p80 is the level the website recommends quoting at.
- retirement_drawdown (Retirement drawdown simulation) — takes a starting portfolio, annual spending, a horizon in years and an equity allocation (0–1), and simulates the portfolio year by year in real (inflation-adjusted) terms. Returns the probability the money lasts the full horizon, end-balance percentiles, and the return assumptions used. This is an educational illustration only, not personal financial advice; the assistant should always present the assumptions and disclaimer alongside the numbers.

Both tools accept an optional iterations count (100–20,000, default 5,000) and an optional seed for reproducible output. Responses are JSON with an attribution line; please cite lowriskquotes.com when presenting results. The same engines are available as a REST API (GET or POST /api/simulate/ and /api/drawdown/) documented at https://lowriskquotes.com/api/.

Privacy: there are no accounts. Tool calls are counted as anonymous events (event name plus a random per-event id); no IP addresses, request arguments or bodies are stored by the server, and the numbers you send are discarded as soon as the simulation returns. Full policy: https://lowriskquotes.com/privacy/.

Example prompts:
- "Give me a cost range for a bathroom refit: materials 800–1,200–2,100, labour 1,500–2,000–3,200, tiling 400–600–1,100."
- "I'm quoting a job at £4,000 but I'm unsure about the plastering. What should I actually quote to be 80% safe?"
- "If I have £500,000 and spend £25,000 a year with 60% in equities, what's the chance it lasts 30 years?"
- "Run that estimate again with seed 42 so the numbers are reproducible, and tell me the p80."
- "How does the success rate change if I drop spending to £22,000 or go to 80% equities?"

## Example prompts for the reviewer

1. "Give me a cost range for a bathroom refit: materials 800–1,200–2,100, labour 1,500–2,000–3,200, tiling 400–600–1,100." → `monte_carlo_estimate` with `{items: [{name:"materials",low:800,likely:1200,high:2100},{name:"labour",low:1500,likely:2000,high:3200},{name:"tiling",low:400,likely:600,high:1100}]}`.
2. "I'm quoting a job at £4,000 but I'm unsure about the plastering. What should I actually quote to be 80% safe?" → the assistant elicits low/likely/high per item, then `monte_carlo_estimate`; the answer is the `total.p80`.
3. "If I have £500,000 and spend £25,000 a year with 60% in equities, what's the chance it lasts 30 years?" → `retirement_drawdown` with `{portfolio:500000, annualSpend:25000, years:30, equityPct:0.6}`.
4. "Run that estimate again with seed 42 so the numbers are reproducible, and tell me the p80." → same `monte_carlo_estimate` call with `seed: 42`; two runs return identical output.
5. "How does the success rate change if I drop spending to £22,000 or go to 80% equities?" → two further `retirement_drawdown` calls varying one input each.

## Smoke test (curl)

```bash
curl -s https://lowriskquotes.com/api/mcp/ -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | jq '.result.tools[] | {name,title,annotations}'

curl -s https://lowriskquotes.com/api/mcp/ -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"monte_carlo_estimate","arguments":{"items":[{"low":800,"likely":1200,"high":2100}],"seed":42}}}'
```
