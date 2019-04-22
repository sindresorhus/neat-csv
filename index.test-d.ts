import {expectType} from 'tsd';
import * as fs from 'fs';
import toReadableStream = require('to-readable-stream');
import neatCsv = require('.');

const options: neatCsv.Options = {};
const csvText = 'type,part\nunicorn,horn\nrainbow,pink';

expectType<Promise<neatCsv.Row[]>>(neatCsv(csvText));
expectType<Promise<neatCsv.Row[]>>(neatCsv(Buffer.from(csvText)));
expectType<Promise<neatCsv.Row[]>>(neatCsv(toReadableStream(csvText)));
expectType<Promise<neatCsv.Row[]>>(neatCsv(fs.createReadStream('test.csv')));
expectType<Promise<neatCsv.Row[]>>(neatCsv(csvText, {separator: ','}));
