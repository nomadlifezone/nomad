import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'zh']),
    // 分类系统
    category: z.string(), // 主分类：国内旅游、国际旅游、出行攻略、生活服务
    subcategory: z.string().optional(), // 子分类：城市攻略、自然景观等
    icon: z.string().default('📝'), // 自定义图标
    // 位置信息
    country: z.string().optional(),
    city: z.string().optional(),
    location: z.string().optional(), // 具体位置描述
    // 标签和元数据
    tags: z.array(z.string()),
    difficulty: z.enum(['简单', '中等', '困难', 'easy', 'medium', 'hard']).optional(),
    duration: z.string().optional(), // 如："1天"、"3-5天"
    // 推荐和展示
    featured: z.boolean().default(false), // 是否在首页推荐
    // 日期和图片
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
