'use strict';
const {promisify} = require('util');
const {pipeline} = require('stream');
const toReadableStream = require('to-readable-stream');
const csvParser = require('csv-parser');
const getStream = require('get-stream');
// TODO: Use `const {pipeline: pipelinePromise} = require('stream/promises');` when targeting Node.js 16.

const pipelinePromise = promisify(pipeline);

module.exports = async (data, options) => {
	if (typeof data === 'string' || Buffer.isBuffer(data)) {
		// TODO: Use https://nodejs.org/api/stream.html#stream_stream_readable_from_iterable_options when targeting Node.js 12.
		data = toReadableStream(data);
	}

	const parserStream = csvParser(options);

	// Node.js 15.5 has a bug with `.pipeline` for large strings. It works fine in Node.js 14 and 12.
	if (Number(process.versions.node.split('.')[0]) >= 15) {
		return getStream.array(data.pipe(parserStream));
	}

	await pipelinePromise([data, parserStream]);
	return getStream.array(parserStream);
};
