// filepath: /Volumes/case-sensitive/tmp/neat-csv/index.d.ts
// Note: This file should contain the CommonJS type declarations.
// We use the .d.ts extension for compatibility with older TS versions,
// but it will be mapped to the `require` export.
import { Options as CsvParserOptions } from "csv-parser";

declare namespace neatCsv {
	export interface Options extends CsvParserOptions {}
}

declare function neatCsv<T = Record<string, any>>(
	data: string | Buffer | NodeJS.ReadableStream,
	options?: neatCsv.Options
): Promise<T[]>;

export = neatCsv;
