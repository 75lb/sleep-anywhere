[![view on npm](https://img.shields.io/npm/v/sleep-anywhere.svg)](https://www.npmjs.org/package/sleep-anywhere)
[![npm module downloads](https://img.shields.io/npm/dt/sleep-anywhere.svg)](https://www.npmjs.org/package/sleep-anywhere)
[![Build Status](https://travis-ci.org/75lb/sleep-anywhere.svg?branch=master)](https://travis-ci.org/75lb/sleep-anywhere)
[![Dependency Status](https://badgen.net/david/dep/75lb/sleep-anywhere)](https://david-dm.org/75lb/sleep-anywhere)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# sleep-anywhere

An asynchronous sleep function for use with any module loader (CommonJS, AMD, ECMAScript Modules).

## Synopsis

Install the module.

```
$ npm install sleep-anywhere
```

Load as a native ECMAScript module from the browser or node.
```js
import sleep from './node_modules/sleep-anywhere/index.mjs'
```

Load as a CommonJS module.
```js
const sleep = require('sleep-anywhere')
```

Load as a global function from the browser.
```html
<script src="./node_modules/sleep-anywhere/dist/index.js"></script>
```

To use the function, supply a sleep period in milliseconds. The function returns a promise which resolves after the specified period.

```js
await sleep(5000)
console.log('5s later')
```

* * *

&copy; 2018-19 Lloyd Brookes \<75pound@gmail.com\>.