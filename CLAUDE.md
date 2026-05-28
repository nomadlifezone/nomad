# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

**Nomad** 是一个内容优先的多语言指南平台，面向全球游牧者、旅行者和 expatriate。初期专注于帮助外国人了解中国生活（支付系统、交通、通讯工具），以英文为主语言以利于 SEO。站点基于 Astro 静态生成，架构可扩展，未来可扩展到游戏攻略、城市指南、产品评测等各种攻略类型内容。

**口号：** "Your global companion, locally informed" | 中文："走遍全球，立足本地"

## 技术栈

- **框架：** Astro 5.x（内容集合、内置 i18n 路由、零 JS 默认）
- **样式：** Tailwind CSS 4.x
- **内容：** Markdown/MDX + Zod schema 校验
- **部署：** Vercel 或 Cloudflare Pages（静态输出到 `./dist/`）
- **Node 版本：** >= 22.12.0

## 常用命令

```bash
npm install          # 安装依赖
npm run dev         # 启动开发服务器 localhost:4321
npm run build       # 构建生产版本到 ./dist/
npm run preview     # 本地预览生产构建
npm run astro ...   # 运行 Astro CLI 命令（如 astro add, astro check）
```

## 架构

### 目录结构

```
src/
├── content/
│   ├── guides/           # 中国生活指南（通过 frontmatter 的 country/city 分组）
│   └── tools/            # 实用工具（汇率转换器、计算器等）
├── components/
│   ├── layout/           # Shell、Header、Footer、Navigation
│   ├── content/          # ArticleCard、TableOfContents、Breadcrumb
│   ├── tools/            # 工具专属组件
│   └── ads/              # AdUnit、AdSlot（集中式广告管理）
├── pages/
│   └── [lang]/           # i18n 路由：/en/、/zh/
│       ├── index.astro
│       ├── guides/[...slug].astro
│       └── tools/[...slug].astro
├── i18n/
│   └── translations/     # 语言 JSON 文件
└── styles/
    └── global.css
```

### 内容集合

Guides 集合 schema：`title`、`description`、`lang`（en/zh）、`country`、`city`、`tags`、`publishedAt`、`updatedAt`、`coverImage`。

Tools 集合 schema：`title`、`description`、`lang`、`category`、`tags`、`publishedAt`。

新增内容类型只需创建 `src/content/[type]/` 目录并添加集合配置，无需架构改动。

### 多语言策略

- URL 结构：`/en/guides/...`、`/zh/guides/...`
- 主语言：英文（全球 SEO、更高广告 CPM）
- 副语言：中文（补充内容）
- 语言切换器位于 Header

### 工具实现规则

工具为纯前端组件，依赖外部 API：

| 工具类型 | 数据来源 | 示例 |
|----------|----------|------|
| 货币转换 | exchangerate-api.com 或 frankfurter.app（免费层） | 无需后端 |
| 单位转换 | 客户端 JS 逻辑 | 无需后端 |
| 天气 | Open-Meteo（免费，无需 API key） | 无需后端 |
| 翻译 | 浏览器原生 `translate` API | 无需后端 |

**原则：** 工具不依赖后端，数据源必须是前端可直接访问的免费 API。

### 盈利模式

- **Google AdSense：** 文章页中部嵌入 + 每 3 个标题后插入；工具页横幅 + 侧边栏
- **开发者联盟计划：** JetBrains、GitHub Copilot、云服务商、VPN 等
- **工具页联盟链接：** 金融工具 → 金融产品广告

## 扩展方式

新增内容类型只需：

1. 创建 `src/content/[type]/` 目录
2. 在 `src/content/config.ts` 添加集合配置
3. 添加对应页面路由

无需架构改动即可支持：新语言（在 `src/i18n/` 添加文件夹）、新国家（在 frontmatter 添加 `country` 字段）。

## 项目阶段

| 阶段 | 重点 |
|------|------|
| 1 | 基础 — 域名、Astro 脚手架、5-10 篇指南、2-3 个工具、申请 AdSense |
| 2 | 增长 — 30+ 文章、SEO 优化、10+ 工具、联盟链接接入 |
| 3 | 扩展 — 游戏攻略、城市指南、多语言 SEO |
| 4 | 规模化 — 社区功能、邮件列表、付费内容层 |

*设计规范状态：已批准 — 可进行实施规划*