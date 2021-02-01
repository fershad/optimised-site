import path from 'path';
import fs from 'fs';
import marked from 'marked';
import grayMatter from 'gray-matter'
import slugify from 'slugify'

function getAllIssues(filesPath) {
	const data = fs.readdirSync(filesPath).map((fileName) => {
		const issue = fs.readFileSync(path.resolve(filesPath, fileName), "utf-8")
		// Parse frontmatter
		const {data, content} = grayMatter(issue)

		// Turns markdown in HTML
		const renderer = new marked.Renderer();
		const html = marked(content, {renderer});
		const slug = slugify(fileName)

		// Builds data
		return {
			...data,
			slug: slug.substring(0, slug.length - 3),
			html
		}
	})
	return data;
}

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