import {Buffer} from 'node:buffer';
import {Readable as ReadableStream} from 'node:stream';
import {Options} from 'csv-parser';

export type Row = Record<string, string>;

/**
Fast CSV parser.

Convenience wrapper around the super-fast streaming [`csv-parser`](https://github.com/mafintosh/csv-parser) module. Use that one if you want streamed parsing.

@param data - The CSV data to parse.
@param options - See the [`csv-parser` options](https://github.com/mafintosh/csv-parser#options).

@example
```
import neatCsv from 'neat-csv';

const csv = 'type,part\nunicorn,horn\nrainbow,pink';

console.log(await neatCsv(csv));
//=> [{type: 'unicorn', part: 'horn'}, {type: 'rainbow', part: 'pink'}]
```
*/
export default function neatCsv<RowType = Row>(
	data: string | Buffer | ReadableStream,
	options?: Options
): Promise<RowType[]>;

export {Options} from 'csv-parser';
