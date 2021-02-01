// import posts from './_posts.js';
import path from 'path';
import fs from 'fs';
import marked from 'marked';
import grayMatter from 'gray-matter'


// const lookup = new Map();
// posts.forEach(post => {
// 	lookup.set(post.slug, JSON.stringify(post));
// });

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		// Read the correct file
		const post = fs.readFileSync(path.resolve('src/posts', `${slug}.md`), "utf-8")

		// Get front matter
		const {data,content} = grayMatter(post)

		// Render HTML from string
		const renderer = new marked.Renderer();
		const html = marked(content, {renderer});

		res.end(JSON.stringify({
			...data,
			html
		}));
}
