import {getAllIssues} from '../../../utils/getAll'

function sortIssues(Issues) {
	return Issues.sort( (issue1, issue2) => {
		const date1 = new Date(issue1.date)
		const date2 = new Date(issue2.date)
		return date2 - date1;
	})
}

export function get(req, res) {

	const Issues = getAllIssues('src/issues')

	// Sort the Issues
	const sortedIssues = sortIssues(Issues)

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(sortedIssues));
}