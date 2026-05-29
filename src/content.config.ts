import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    // 多语言标题和描述（支持单语言和双语言两种格式）
    title: z.union([
      z.string(), // 单语言格式
      z.object({
        zh: z.string(),
        en: z.string(),
      })
    ]),
    description: z.union([
      z.string(), // 单语言格式
      z.object({
        zh: z.string(),
        en: z.string(),
      })
    ]),
    // 分类系统
    category: z.string(), // 主分类：国内旅游、国际旅游、出行攻略、生活服务
    subcategory: z.string().optional(), // 子分类：城市攻略、自然景观等
    icon: z.string().default('📝'), // 自定义图标
    // 位置信息（支持多语言）
    country: z.string().optional(),
    city: z.string().optional(),
    location: z.union([
      z.string(), // 单语言格式
      z.object({
        zh: z.string(),
        en: z.string(),
      })
    ]).optional(),
    // 标签（支持多语言）
    tags: z.union([
      z.array(z.string()), // 单语言格式
      z.object({
        zh: z.array(z.string()),
        en: z.array(z.string()),
      })
    ]),
    // 难度（统一使用英文，前端展示时翻译）
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    // 时长（支持多语言）
    duration: z.union([
      z.string(), // 单语言格式
      z.object({
        zh: z.string(),
        en: z.string(),
      })
    ]).optional(),
    // 推荐和展示
    featured: z.boolean().default(false), // 是否在首页推荐
    // 日期和图片
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
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
    publishedAt: z.coerce.date(),
  }),
});

export const collections = { guides, tools };
