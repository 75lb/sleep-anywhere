[![view on npm](https://img.shields.io/npm/v/sleep-anywhere.svg)](https://www.npmjs.org/package/sleep-anywhere)
[![npm module downloads](https://img.shields.io/npm/dt/sleep-anywhere.svg)](https://www.npmjs.org/package/sleep-anywhere)
[![Build Status](https://travis-ci.org/75lb/sleep-anywhere.svg?branch=master)](https://travis-ci.org/75lb/sleep-anywhere)
[![Dependency Status](https://badgen.net/david/dep/75lb/sleep-anywhere)](https://david-dm.org/75lb/sleep-anywhere)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# sleep-anywhere

A sleep function you can use anywhere.

## Synopsis

```js
const sleep = require('sleep-anywhere')

await sleep(5000)
console.log('5s later')
```

## Load anywhere

This library can be loaded anywhere, natively without transpilation.

Node.js:

```js
const sleep = require('sleep-anywhere')
```

Within Node.js with ECMAScript Module support enabled:

```js
import sleep from 'sleep-anywhere'
```

Within a modern browser ECMAScript Module:

```js
import sleep from './node_modules/sleep-anywhere/index.mjs'
```

Old browser (adds `window.sleep`):

```html
<script nomodule src="./node_modules/sleep-anywhere/dist/index.js"></script>
```

* * *

&copy; 2018-19 Lloyd Brookes \<75pound@gmail.com\>.
