import {Buffer} from 'node:buffer';
import {Readable as ReadableStream} from 'node:stream';
import test from 'ava';
import neatCsv from './index.js';

test('buffer', async t => {
	const data = await neatCsv(Buffer.from('name,val\nfoo,1\nbar,2'));
	t.is(data[0].name, 'foo');
	t.is(data[1].name, 'bar');
});

test('string', async t => {
	const data = await neatCsv('name;val\nfoo;1\nbar;2', {separator: ';'});
	t.is(data[0].name, 'foo');
	t.is(data[1].name, 'bar');
});

test('stream', async t => {
	const data = await neatCsv(ReadableStream.from('name,val\nfoo,1\nbar,2'));
	t.is(data[0].name, 'foo');
	t.is(data[1].name, 'bar');
});

test('error', async t => {
	await t.throwsAsync(neatCsv('name,val\nfoo,1,3\nbar,2', {strict: true}), {
		message: /Row length does not match headers/,
	});
});

const largeStringFixture = `provider_name,provider_id,url,mds_api_url,gbfs_api_url
JUMP,c20e08cf-8488-46a6-a66c-5d8fb827f7e0,https://jump.com,https://api.uber.com/v0.2/emobility/mds,
Lime,63f13c48-34ff-49d2-aca7-cf6a5b6171c3,https://li.me,https://data.lime.bike/api/partners/v1/mds,
Bird,2411d395-04f2-47c9-ab66-d09e9e3c3251,https://www.bird.co,https://mds.bird.co,https://mds.bird.co/gbfs
Razor,6ddcc0ad-1d66-4046-bba4-d1d96bb8ca4d,https://www.razor.com/share,https://razor-200806.appspot.com/api/v2/mds,
Lyft,e714f168-ce56-4b41-81b7-0b6a4bd26128,https://www.lyft.com,https://api.lyft.com/v1/last-mile/mds,
Skip,d73fcf80-22b1-450f-b535-042b4e30aac7,https://www.skipscooters.com,https://api.skipscooters.com/mds,
HOPR,2e4cb206-b475-4a9d-80fb-0880c9a033e0,https://gohopr.com,https://gbfs.hopr.city/api/mds,
Wheels,b79f8687-526d-4ae6-80bf-89b4c44dc071,https://wheels.co,https://mds.getwheelsapp.com,
Spin,70aa475d-1fcd-4504-b69c-2eeb2107f7be,https://www.spin.app,https://web.spin.pm/api/mds/v1,
WIND,d56d2df6-fa92-43de-ab61-92c3a84acd7d,https://www.wind.co,https://partners.wind.co/v1/mds,
Tier,264aad41-b47c-415d-8585-0208d436516e,https://www.tier.app,https://partner.tier-services.io/mds,
Cloud,bf95148b-d1d1-464e-a140-6d2563ac43d4,https://www.cloud.tt,https://mds.cloud.tt,https://mds.cloud.tt/gbfs
BlueLA,f3c5a65d-fd85-463e-9564-fc95ea473f7d,https://www.bluela.com,https://api.bluela.com/mds/v0,https://api.bluela.com/gbfs/v1/meta
Bolt,3291c288-c9c8-42f1-bc3e-8502b077cd7f,https://www.micromobility.com/,https://bolt.miami/bolt2/api/mds,
CLEVR,daecbe87-a9f2-4a5a-b5df-8e3e14180513,https://clevrmobility.com,https://portal.clevrmobility.com/api/mds,
SherpaLA,3c95765d-4da6-41c6-b61e-1954472ec6c9,,https://mds.bird.co,https://mds.bird.co/gbfs/platform-partner/sherpa-la
OjO Electric,8d293326-8464-4256-8312-617ebcd0efad,https://www.ojoelectric.com,https://api.ojoelectric.com/api/mds,https://api.ojoelectric.com/api/mds/gbfs.json
VOI,1f129e3f-158f-4df5-af9c-a80de238e334,https://www.voiscooters.com/,https://mds.voiapp.io,https://mds.voiapp.io/v1/gbfs
MOVO,40dad54c-e199-4fd8-9f5b-cff93ffced63,https://movo.me,https://mds.movo.me,https://gbfs.movo.me
Baus,638ba503-4006-4c53-bf34-cd625cc03d61,https://bausmoves.com,https://mds.bird.co,https://mds.bird.co/gbfs/platform-partner/v2/baus
Bolt Technology,7ea695ca-9de7-4b3b-9f3c-241b2045a1fe,https://bolt.eu,https://mds.bolt.eu,https://mds.bolt.eu/gbfs/1
Grin,8a0ecfce-5fb3-451e-8069-434b79c8b01a,https://ongrin.com,https://open-data.grow.mobi/mds/,https://open-data.grow.mobi/api/v1/gbfs/
Dott,0a899e3a-705a-46f2-9189-d78cc83a2db4,https://ridedott.com,https://mds.api.ridedott.com,https://gbfs.api.ridedott.com
Superpedestrian,420e6e94-55a6-4946-b6b3-4398fe22e912,https://www.superpedestrian.com,https://wrangler-mds-production.herokuapp.com/mds,
Circ,03d5d605-e5c9-45a1-a1dd-144aa8649525,https://www.circ.com,https://mds.bird.co,
GIG,42475742-8618-4fc0-aa8f-3b3948b84b85,https://gigcarshare.com/,https://global.us.prod.svc.ridecell.io/reporting/api/mds,
Zisch,fb62cfe6-757c-4e5b-a264-18b43b3fc40b,https://www.e-zisch.ch,https://mds.bird.co,
Seven Group,7fca7812-c718-48dd-b9f2-d1ae160f2ae4,https://www.group-seven.ch,https://mds.bird.co,
Pony,f190d330-b49e-4590-871b-0bcbec565a8c,https://getapony.com/,https://mds.getapony.com/v1`;

test('large string', async t => {
	const data = await neatCsv(largeStringFixture);
	t.is(data[0].provider_name, 'JUMP');
	t.is(data[data.length - 1].provider_name, 'Pony');
});
