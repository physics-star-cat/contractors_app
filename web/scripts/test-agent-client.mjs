import test from 'node:test'
import assert from 'node:assert/strict'
import { classifyClient } from '../src/lib/agent-client.ts'

test('named clients win over generic libraries', () => {
  assert.equal(classifyClient('claude-code/2.0 (node)'), 'claude')
  assert.equal(classifyClient('python-httpx/0.27'), 'python')
  assert.equal(classifyClient('Mozilla/5.0 (compatible; bingbot/2.0)'), 'bot')
  assert.equal(classifyClient('Mozilla/5.0 Chrome/126'), 'browser')
  assert.equal(classifyClient('something-else'), 'other')
  assert.equal(classifyClient(''), '(none)')
  assert.equal(classifyClient(null), '(none)')
})
