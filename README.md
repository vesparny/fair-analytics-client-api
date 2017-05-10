# Fair Analytics client JavaScript API


> The quickest way to integrate [Fair Analytics](https://github.com/vesparny/fair-analytics) in your app

[![Travis](https://img.shields.io/travis/vesparny/fair-analytics-client-api.svg)](https://travis-ci.org/vesparny/fair-analytics-client-api)
[![Code Coverage](https://img.shields.io/codecov/c/github/vesparny/fair-analytics-client-api.svg?style=flat-square)](https://codecov.io/github/vesparny/fair-analytics-client-api)
[![David](https://img.shields.io/david/vesparny/fair-analytics-client-api.svg)](https://david-dm.org/vesparny/fair-analytics-client-api)
[![npm](https://img.shields.io/npm/v/fair-analytics-client-api.svg)](https://www.npmjs.com/package/fair-analytics-client-api)
[![npm](https://img.shields.io/npm/dm/fair-analytics-client-api.svg)](https://npm-stat.com/charts.html?package=fair-analytics-client-api&from=2017-04-01)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![MIT License](https://img.shields.io/npm/l/fair-analytics-client-api.svg?style=flat-square)](https://github.com/vesparny/fair-analytics-client-api/blob/master/LICENSE)
[![gzip size](http://img.badgesize.io/https://unpkg.com/fair-analytics-client-api/dist/fair-analytics-client-api.umd.min.js?compression=gzip&label=gzip%20size&style=flat-square)](https://unpkg.com/fair-analytics-client-api/dist/)


## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm i fair-analytics-client-api
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import fairAnalytics from 'fair-analytics-client-api'

// using CommonJS modules
var fairAnalytics = require('fair-analytics-client-api')
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/fair-analytics-client-api/dist/fair-analytics-client-api.umd.js"></script>
```

You can find the library on `window.fairAnalytics`.

## Usage

```js
import fairAnalytics from 'fair-analytics-client-api'

// create a fa instance
const fa = fairAnalytics({
  url: 'https://fa.yoursite.com' // the URL of your hosted Fair Analytics instance
})

// track events
fa.send({
  event: 'pageView', // event is mandatory and can be anything
  pathname: window.location.pathname
})
.then(res => {
  if (res.ok) {
    console.log('success')
  }
})
.catch(err => {
  console.error(err.message)
})
```

## Tests

```sh
$ npm test
```

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).  
Every release, along with the migration instructions, is documented in the [CHANGELOG.md](https://github.com/vesparny/fair-analytics-client-api/blob/master/CHANGELOG.md) file.

## License

MIT
