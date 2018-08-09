import test from 'ava';
import toReadableStream from 'to-readable-stream';
import m from '.';

test('buffer', async t => {
	const data = await m(Buffer.from('name,val\nfoo,1\nbar,2'));
	t.is(data[0].name, 'foo');
	t.is(data[1].name, 'bar');
});

test('string', async t => {
	const data = await m('name;val\nfoo;1\nbar;2', {separator: ';'});
	t.is(data[0].name, 'foo');
	t.is(data[1].name, 'bar');
});

test('stream', async t => {
	const data = await m(toReadableStream('name,val\nfoo,1\nbar,2'));
	t.is(data[0].name, 'foo');
	t.is(data[1].name, 'bar');
});

test('error', async t => {
	await t.throws(m('name,val\nfoo,1,3\nbar,2', {strict: true}), /Row length does not match headers/);
});
