import {Buffer} from 'node:buffer';

// eslint-disable-next-line import/no-extraneous-dependencies
import {Options as CsvParserOptions} from 'csv-parser';

declare namespace neatCsv {
	export interface Options extends CsvParserOptions {}
}

declare function neatCsv<T = Record<string, any>>(
	data: string | Buffer | NodeJS.ReadableStream,
	options?: neatCsv.Options
): Promise<T[]>;

export = neatCsv;
