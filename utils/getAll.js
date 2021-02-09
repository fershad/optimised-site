import path from 'path';
import fs from 'fs';
import marked from 'marked';
import grayMatter from 'gray-matter'
import slugify from 'slugify'
import dayjs from "dayjs";


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
		const slug = `${slugify(`issue-${issue.issue}-${data.title}`, {
			remove: /[*+~.()'"!:@]/g,
			lower: true,
			strict: true
		})}`

		const formattedDate = dayjs(data.date).format("MMMM D, YYYY");


		// Builds data
		return {
			...data,
			formattedDate,
			slug,
			html
		}
	})
	return data;
}