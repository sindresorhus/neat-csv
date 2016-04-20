import test from 'ava';
import intoStream from 'into-stream';
import fn from './';

test('buffer', async t => {
	const data = await fn(new Buffer('name,val\nfoo,1\nbar,2'));
	t.is(data[0].name, 'foo');
	t.is(data[1].name, 'bar');
});

test('string', async t => {
	const data = await fn('name;val\nfoo;1\nbar;2', {separator: ';'});
	t.is(data[0].name, 'foo');
	t.is(data[1].name, 'bar');
});

test('stream', async t => {
	const data = await fn(intoStream('name,val\nfoo,1\nbar,2'));
	t.is(data[0].name, 'foo');
	t.is(data[1].name, 'bar');
});

test('error', async t => {
	t.throws(fn('name,val\nfoo,1,3\nbar,2', {strict: true}), /Row length does not match headers/);
});
