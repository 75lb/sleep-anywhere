const TestRunner = require('test-runner')
const a = require('assert')
const sleep = require('./')

const runner = new TestRunner()

runner.test('simple', async function () {
  const before = Date.now()
  const result = await sleep(1000, 1)
  const after = Date.now()
  a.ok(after - before >= 1000)
  a.strictEqual(result, 1)
})
