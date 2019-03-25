const Tom = require('test-runner').Tom
const a = require('assert')
const sleep = require('./')

const tom = module.exports = new Tom('sleep-anywhere')

tom.test('simple', async function () {
  const before = Date.now()
  const result = await sleep(1000, 1)
  const after = Date.now()
  a.ok(after - before >= 1000)
  a.strictEqual(result, 1)
})
