export default function sleep (ms, returnValue) {
  return new Promise(resolve => setTimeout(() => resolve(returnValue), ms))
}
