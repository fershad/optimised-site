import {getSeries} from '../../../utils/getSeries'

export function get(req, res) {

	const Series = getSeries('src/series')

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(Series));
}