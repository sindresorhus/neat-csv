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
	await pipelinePromise([data, parserStream]);
	return getStream.array(parserStream);
};
