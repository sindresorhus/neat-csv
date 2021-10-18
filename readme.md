# neat-csv

> Fast CSV parser

Convenience wrapper around the super-fast streaming [`csv-parser`](https://github.com/mafintosh/csv-parser) module. Use that one if you want streamed parsing.

Parsing-related issues should be reported to [`csv-parser`](https://github.com/mafintosh/csv-parser/issues).

## Install

```sh
npm install neat-csv
```

## Usage

```js
import neatCsv from 'neat-csv';

const csv = 'type,part\nunicorn,horn\nrainbow,pink';

console.log(await neatCsv(csv));
//=> [{type: 'unicorn', part: 'horn'}, {type: 'rainbow', part: 'pink'}]
```

## API

### neatCsv(data, options?)

Returns a `Promise<object[]>` with the parsed CSV.

#### data

Type: `string | Buffer | stream.Readable`

The CSV data to parse.

#### options

Type: `object`

See the [`csv-parser` options](https://github.com/mafintosh/csv-parser#options).
