import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'zh']),
    country: z.string().optional(),
    city: z.string().optional(),
    tags: z.array(z.string()),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    coverImage: z.string().optional(),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'zh']),
    category: z.string(),
    tags: z.array(z.string()),
    publishedAt: z.date(),
  }),
});

export const collections = { guides, tools };
