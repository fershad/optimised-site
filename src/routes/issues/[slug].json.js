import path from 'path';
import fs from 'fs';
import marked from 'marked';
import grayMatter from 'gray-matter'

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		// Read the correct file
		const issue = fs.readFileSync(path.resolve('src/issues', `${slug}.md`), "utf-8")

		// Get front matter
		const {data,content} = grayMatter(issue)

		// Render HTML from string
		const renderer = new marked.Renderer();
		const html = marked(content, {renderer});

		res.end(JSON.stringify({
			...data,
			html
		}));
}
