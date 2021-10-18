import {promisify} from 'node:util';
import {Readable as ReadableStream, pipeline} from 'node:stream';
import process from 'node:process';
import {Buffer} from 'node:buffer';
import csvParser from 'csv-parser';
import getStream from 'get-stream';
// TODO: Use `import {pipeline as pipelinePromise} from 'node:stream/promises';` when targeting Node.js 16.

const pipelinePromise = promisify(pipeline);

export default async function neatCsv(data, options) {
	if (typeof data === 'string' || Buffer.isBuffer(data)) {
		data = ReadableStream.from(data);
	}

	const parserStream = csvParser(options);

	// Node.js 16 has a bug with `.pipeline` for large strings. It works fine in Node.js 14 and 12.
	if (Number(process.versions.node.split('.')[0]) >= 16) {
		return getStream.array(data.pipe(parserStream));
	}

	await pipelinePromise([data, parserStream]);
	return getStream.array(parserStream);
}
