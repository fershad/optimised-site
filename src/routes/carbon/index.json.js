import {getTotalCarbon} from '../../../utils/getTotalCarbon'

export async function get(req, res) {

	const totalCarbon = await getTotalCarbon();
    

    // const { Carbon } = totalCarbon

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(totalCarbon));
}