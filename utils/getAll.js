import path from 'path';
import fs from 'fs';
import marked from 'marked';
import grayMatter from 'gray-matter'
import slugify from 'slugify'
import dayjs from "dayjs";


export const getAllIssues = (filesPath) => {
	const files = fs.readdirSync(filesPath);
	files.sort(function (a, b) {
		a.replace(/\.[^/.]+$/, "");
		b.replace(/\.[^/.]+$/, "");

		const numA = parseInt(a);
		const numB = parseInt(b);

		return numA - numB;
	});

	const data = files.map((fileName, index, elements) => {
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
		const slug = `${slugify(`issue-${data.issue}-${data.title}`, {
			remove: /[*+~.()'"!:@]/g,
			lower: true,
			strict: true
		})}`

		const formattedDate = dayjs(data.date).format("MMMM D, YYYY");
		const nextIssueDate = dayjs(data.date).add(2, 'week').format("MMMM D, YYYY");
		let nextIssue;
		let prevIssue;

		if (elements[index + 1]) {
			const nextIssueRaw = elements[index + 1];
			nextIssue = getNextPrev(nextIssueRaw, filesPath)
		}

		if (elements[index - 1]) {
			const prevIssueRaw = elements[index - 1];
			prevIssue = getNextPrev(prevIssueRaw, filesPath)
		}


		// Builds data
		return {
			...data,
			formattedDate,
			nextIssueDate,
			slug,
			html,
			nextIssue,
			prevIssue
		}
	})
	return data;
}

const getIssueDate = (issue) => {
    return new Date(issue);
  };

const currentTime = new Date();

export const getPublishedIssues = (filesPath) => {
	const files = fs.readdirSync(filesPath);
	files.sort(function (a, b) {
		a.replace(/\.[^/.]+$/, "");
		b.replace(/\.[^/.]+$/, "");

		const numA = parseInt(a);
		const numB = parseInt(b);

		return numA - numB;
	});

	const data = files.map((fileName, index, elements) => {
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
		const slug = `${slugify(`issue-${data.issue}-${data.title}`, {
			remove: /[*+~.()'"!:@]/g,
			lower: true,
			strict: true
		})}`

		const formattedDate = dayjs(data.date).format("MMMM D, YYYY");
		const nextIssueDate = dayjs(data.date).add(2, 'week').format("MMMM D, YYYY");
		let nextIssue;
		let prevIssue;

		if (elements[index + 1]) {
			const nextIssueRaw = elements[index + 1];
			nextIssue = getNextPrev(nextIssueRaw, filesPath)
		}

		if (elements[index - 1]) {
			const prevIssueRaw = elements[index - 1];
			prevIssue = getNextPrev(prevIssueRaw, filesPath)
		}

		// Builds data
		if (getIssueDate(data.date) < currentTime) {
			return {
				...data,
				formattedDate,
				nextIssueDate,
				slug,
				html,
				nextIssue,
				prevIssue
			}
		}

	})
	return data;
}

export const getAllSummary = (filesPath) => {
	const data = fs.readdirSync(filesPath).map((fileName, index, elements) => {
		const issue = fs.readFileSync(path.resolve(filesPath, fileName), "utf-8")
		// Parse frontmatter
		const {data} = grayMatter(issue)

		const slug = `${slugify(`issue-${data.issue}-${data.title}`, {
			remove: /[*+~.()'"!:@]/g,
			lower: true,
			strict: true
		})}`

		const formattedDate = dayjs(data.date).format("MMMM D, YYYY");

		// Builds data
		return {
			...data,
			formattedDate,
			slug
		}
	})
	return data;
}

const getNextPrev = (otherIssue, filesPath) => {
	const issueFile = fs.readFileSync(path.resolve(filesPath, otherIssue), "utf-8")
	const {data } = grayMatter(issueFile);

			const slug = `${slugify(`issue-${data.issue}-${data.title}`, {
				remove: /[*+~.()'"!:@]/g,
				lower: true,
				strict: true
			})}`;

			const { issue, title} = data;

			return { slug, issue, title };
}