import rss from '@astrojs/rss';

import { formatBlogPosts } from "../utils"

const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
const posts = formatBlogPosts(Object.values(postImportResult));

export const get = (context) => rss({
  stylesheet: '/rss/styles.xsl',
  title: 'My Astro Blog',
  description: 'A humble Astronaut’s guide to the stars',
  site: context.site || 'http://localhost:3000',
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.date,
    description: post.frontmatter.description,
    customData: `
      <author>${post.frontmatter.author}</author>
    `
  }))
});