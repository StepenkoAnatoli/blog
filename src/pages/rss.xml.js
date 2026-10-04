import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export async function GET(context) {
	const posts = await getCollection('blog');
	// The site lives under its base (/blog/), so the channel link carries it;
	// the item links are absolute paths and resolve the same either way.
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: new URL(import.meta.env.BASE_URL, context.site).href,
		items: posts.map((post) => ({
			...post.data,
			link: `${base}/blog/${post.id}/`,
		})),
	});
}
