'use strict';
var intoStream = require('into-stream');
var csvParser = require('csv-parser');
var concatStream = require('concat-stream');

module.exports = function (input, opts, cb) {
	if (typeof input === 'string' || Buffer.isBuffer(input)) {
		input = intoStream(input);
	}

	if (typeof opts !== 'object') {
		cb = opts;
		opts = {};
	}

	input
	.pipe(csvParser(opts).on('error', cb))
	.pipe(concatStream(function (data) {
		cb(null, data);
	}));
};
