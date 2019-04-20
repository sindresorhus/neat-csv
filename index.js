'use strict';
const toReadableStream = require('to-readable-stream');
const csvParser = require('csv-parser');
const getStream = require('get-stream');

module.exports = async (data, options) => {
	if (typeof data === 'string' || Buffer.isBuffer(data)) {
		data = toReadableStream(data);
	}

	// TODO: Use `stream.pipeline` here when targeting Node.js 10
	return getStream.array(data.pipe(csvParser(options)));
};
