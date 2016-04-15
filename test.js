'use strict';
var test = require('ava');
var intoStream = require('into-stream');
var neatCsv = require('./');

test('buffer', function (t) {
	t.plan(2);

	neatCsv(new Buffer('name,val\nfoo,1\nbar,2')).then(function (data) {
		t.assert(data[0].name === 'foo');
		t.assert(data[1].name === 'bar');
	});
});

test('string', function (t) {
	t.plan(2);

	neatCsv('name;val\nfoo;1\nbar;2', {separator: ';'}).then(function (data) {
		t.assert(data[0].name === 'foo');
		t.assert(data[1].name === 'bar');
	});
});

test('stream', function (t) {
	t.plan(2);

	neatCsv(intoStream('name,val\nfoo,1\nbar,2')).then(function (data) {
		t.assert(data[0].name === 'foo');
		t.assert(data[1].name === 'bar');
	});
});
