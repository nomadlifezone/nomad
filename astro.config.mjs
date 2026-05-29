// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/configs
export default defineConfig({
  site: 'https://bg.nomadsguide.help',
  // 使用自定义域名时，不需要 base 路径
  // base: '/nomad',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()]
});