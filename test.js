import test from 'ava';
import m from './';

test('apology()', async t => {
	const apology = await m();

	t.is(apology, apology);
});
