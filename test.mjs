import sleep from './index.mjs'
import a from 'assert'

async function start () {
  const before = Date.now()
  const result = await sleep(1000, 1)
  const after = Date.now()
  a.ok(after - before >= 1000)
  a.strictEqual(result, 1)
  console.log('OK')
}

start().catch(function (err) {
	console.error(err)
	process.exitCode = 1
})
