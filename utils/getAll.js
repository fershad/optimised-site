import path from 'path';
import fs from 'fs';
import marked from 'marked';
import grayMatter from 'gray-matter'
import slugify from 'slugify'


export const getAllIssues = (filesPath) => {
	const data = fs.readdirSync(filesPath).map((fileName) => {
		const issue = fs.readFileSync(path.resolve(filesPath, fileName), "utf-8")
		// Parse frontmatter
		const {data, content} = grayMatter(issue)

		// Turns markdown in HTML
		const renderer = new marked.Renderer();
		const html = marked(content, {
			renderer, 
			highlight: function(code, language) {
				const hljs = require('highlight.js');
				const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
				return hljs.highlight(validLanguage, code).value;
			  },
		});
		const slug = `issue-${data.issue}-${slugify(data.title, {
			remove: /[*+~.()'"!:@]/g,
			lower: true,
			strict: true
		})}`

		// Builds data
		return {
			...data,
			slug,
			html
		}
	})
	return data;
}