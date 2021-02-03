import {getAllIssues} from '../../../utils/getAll'
import { baseURL } from '../../../utils/baseURL'

{/* Image for the feed. Can add it after the lastBuildDate <image>
<url>${baseURL}/profile-pic-small.jpg</url>
<title><![CDATA[David's Blog]]></title>
<link>${baseURL}</link>
</image> */}

const renderXmlRssFeed = (issues) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
<channel>
    <title><![CDATA[Optimised Newsletter]]></title>
    <link>${baseURL}</link>
  <description><![CDATA[A fortnightly email about website performance.]]></description>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${issues.map(issue => `
        <item>
            <title>${issue.title}</title>
      <link>${baseURL}/${issue.slug}</link>
      <guid isPermaLink="false">${baseURL}/${issue.slug}</guid>
            <description><![CDATA[${issue.description}]]></description>
            <pubDate>${new Date(issue.date).toUTCString()}</pubDate>
        </item>
    `).join('\n')}
</channel>
</rss>`;

export async function get(req, res) {

  res.writeHead(200, {
    'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
    'Content-Type': 'application/rss+xml'
  });

  const issues = getAllIssues('src/issues')
    .map(issue=> {
      return {
        title: issue.title,
        date: issue.date,
        description: issue.excerpt,
        slug: issue.slug,
      };
    });
  const feed = await renderXmlRssFeed(issues);
  res.end(feed);
}

