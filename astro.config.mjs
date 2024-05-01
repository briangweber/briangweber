import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://briangweber.github.io',
	integrations: [mdx(), sitemap()],
	redirects: { "/index.astro": "/photo-blog/blog", "": "/photo-blog/blog"},
	base: "/photo-blog"
});
