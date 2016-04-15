'use strict';
const intoStream = require('into-stream');
const csvParser = require('csv-parser');
const concatStream = require('concat-stream');

module.exports = (input, opts) => {
	opts = opts || {};

	if (typeof input === 'string' || Buffer.isBuffer(input)) {
		input = intoStream(input);
	}

	return new Promise((resolve, reject) => {
		input
			.pipe(csvParser(opts).on('error', reject))
			.pipe(concatStream(resolve));
	});
};
