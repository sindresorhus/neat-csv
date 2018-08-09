'use strict';
const toReadableStream = require('to-readable-stream');
const csvParser = require('csv-parser');
const getStream = require('get-stream');

module.exports = (input, options) => {
	if (typeof input === 'string' || Buffer.isBuffer(input)) {
		input = toReadableStream(input);
	}

	return getStream.array(input.pipe(csvParser(options)));
};
