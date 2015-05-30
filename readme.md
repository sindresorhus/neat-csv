# neat-csv [![Build Status](https://travis-ci.org/sindresorhus/neat-csv.svg?branch=master)](https://travis-ci.org/sindresorhus/neat-csv)

> Fast CSV parser

Convenience wrapper around the superfast streaming [`csv-parser`](https://github.com/mafintosh/csv-parser) module. Use that one if you want streamed parsing.


## Install

```
$ npm install --save neat-csv
```


## Usage

```js
var neatCsv = require('neat-csv');
var csv = 'type,part\nunicorn,horn\nrainbow,pink';

neatCsv(csv, function (err, data) {
	console.log(data);
	//=> [{type: 'unicorn', part: 'horn'}, {type: 'rainbow', part: 'pink'}]
});
```


## API

### neatCsv(input, [options], callback)

#### input

Type: `buffer`, `string`, `stream`

CSV to parse.

#### options

Type: `object`

See the `csv-parser` [options](https://github.com/mafintosh/csv-parser#usage).

#### callback(error, data)

##### data

Type: `array`

Parsed CSV.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
