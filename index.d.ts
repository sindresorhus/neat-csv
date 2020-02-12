/// <reference types="node"/>
import {Readable as ReadableStream} from 'stream';
import {Options as CsvParserOptions} from 'csv-parser';

declare namespace neatCsv {
	type Options = CsvParserOptions;

	interface Row {
		[header: string]: string;
	}
}

/**
Fast CSV parser.

Convenience wrapper around the super-fast streaming [`csv-parser`](https://github.com/mafintosh/csv-parser) module. Use that one if you want streamed parsing.

@param data - CSV data to parse.
@param options - See the [`csv-parser` options](https://github.com/mafintosh/csv-parser#options).

@example
```
import neatCsv = require('neat-csv');

const csv = 'type,part\nunicorn,horn\nrainbow,pink';

(async () => {
	console.log(await neatCsv(csv));
	//=> [{type: 'unicorn', part: 'horn'}, {type: 'rainbow', part: 'pink'}]
})();
```
*/
declare function neatCsv<Row = neatCsv.Row>(
	data: string | Buffer | ReadableStream,
	options?: neatCsv.Options
): Promise<Row[]>;

export = neatCsv;
