import path from 'path';
import fs from 'fs';
// import marked from 'marked';
import grayMatter from 'gray-matter'
import slugify from 'slugify'
// import dayjs from "dayjs";
import { getAllSummary } from './getAll'

export const getSeries = (filesPath) => {
	const data = fs.readdirSync(filesPath).map((fileName, index, elements) => {
		const issue = fs.readFileSync(path.resolve(filesPath, fileName), "utf-8")
		// Parse frontmatter
		const {data} = grayMatter(issue)

		const slug = `${slugify(data.title, {
			remove: /[*+~.()'"!:@]/g,
			lower: true,
			strict: true
		})}`

		const issueCount = data.issues.length;
		const summaryData = getAllSummary('src/issues')
		
		const issueData = summaryData.filter( i => data.issues.includes(i.issue))

		// Builds data
		return {
			...data,
			issueCount,
			slug,
			issueData
		}
	})
	return data;
}