'use strict';

// This file is a CommonJS wrapper for the ESM module.
module.exports = async (...args) =>
	// eslint-disable-next-line node/no-unsupported-features/es-syntax
	(await import('../index.js')).default(...args);
