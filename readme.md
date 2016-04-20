# neat-csv [![Build Status](https://travis-ci.org/sindresorhus/neat-csv.svg?branch=master)](https://travis-ci.org/sindresorhus/neat-csv)

> Fast CSV parser

Convenience wrapper around the super-fast streaming [`csv-parser`](https://github.com/mafintosh/csv-parser) module. Use that one if you want streamed parsing.


## Install

```
$ npm install --save neat-csv
```


## Usage

```js
const neatCsv = require('neat-csv');
const csv = 'type,part\nunicorn,horn\nrainbow,pink';

neatCsv(csv).then(data => {
	console.log(data);
	//=> [{type: 'unicorn', part: 'horn'}, {type: 'rainbow', part: 'pink'}]
});
```


## API

### neatCsv(input, [options])

Returns a promise for an array with the parsed CSV.

#### input

Type: `buffer`, `string`, `stream`

CSV to parse.

#### options

Type: `object`

See the `csv-parser` [options](https://github.com/mafintosh/csv-parser#usage).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
