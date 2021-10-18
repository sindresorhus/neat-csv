import {Buffer} from 'node:buffer';
import fs from 'node:fs';
import {expectType} from 'tsd';
import neatCsv, {Options, Row} from './index.js';

const options: Options = {}; // eslint-disable-line @typescript-eslint/no-unused-vars
const csvText = 'type,part\nunicorn,horn\nrainbow,pink';

expectType<Promise<Row[]>>(neatCsv(csvText));
expectType<Promise<Row[]>>(neatCsv(Buffer.from(csvText)));
expectType<Promise<Row[]>>(neatCsv(fs.createReadStream('test.csv')));
expectType<Promise<Row[]>>(neatCsv(csvText, {separator: ','}));
