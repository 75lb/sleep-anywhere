import TestRunner from 'test-runner'
import { strict as a } from 'assert'
import sleep from 'sleep-anywhere'

const tom = new TestRunner.Tom()

tom.test('simple', async function () {
  const before = Date.now()
  const result = await sleep(1000, 1)
  const after = Date.now()
  a.ok(after - before >= 1000)
  a.strictEqual(result, 1)
})

export default tom
