import { strict as a } from 'assert'
import sleep from 'sleep-anywhere'

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('simple', async function () {
  const before = Date.now()
  const result = await sleep(1000, 1)
  const after = Date.now()
  a.ok(after - before >= 1000)
  a.strictEqual(result, 1)
})

export { test, only, skip }
