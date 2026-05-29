# Nomad Guide 🌍

一个为数字游民和旅行者打造的多语言指南网站。

**在线访问：** https://nomadlifezone.github.io/nomad

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install


# 启动开发服务器
npm run dev
```

访问 `http://localhost:4321`

### 构建生产版本

```bash
npm run build
```

构建产物在 `./dist/` 目录。

### 预览生产版本

```bash
npm run preview
```

## 🌐 部署到 GitHub Pages

### 自动部署（已配置 ✅）

项目已配置 GitHub Actions 自动部署：

1. **首次配置 GitHub Pages**：
   - 进入仓库 **Settings** → **Pages**
   - **Source** 选择：`GitHub Actions`
   - 保存

2. **推送代码自动部署**：
   ```bash
   git add .
   git commit -m "your message"
   git push origin main
   ```

3. **查看部署状态**：
   - 查看 **Actions** 标签页
   - 等待工作流完成（约 2-3 分钟）
   - 访问：https://nomadlifezone.github.io/nomad

## 📁 项目结构

```
/
├── public/              # 静态资源
├── src/
│   ├── components/      # Astro 组件
│   │   ├── content/    # 内容组件
│   │   └── tools/      # 工具组件
│   ├── content/         # MDX/Markdown 内容
│   │   ├── guides/     # 指南文章
│   │   └── tools/      # 工具页面
│   ├── layouts/         # 布局组件
│   ├── pages/           # 页面路由
│   │   ├── en/         # 英文页面
│   │   └── zh/         # 中文页面
│   └── styles/         # 全局样式
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions 部署配置
├── astro.config.mjs    # Astro 配置
└── package.json
```

## 🛠️ 技术栈

- **Astro 6.3** - 静态站点生成器
- **TailwindCSS 4.3** - CSS 框架
- **MDX** - Markdown + JSX
- **TypeScript** - 类型支持

## 📝 添加新内容

### 添加新指南

在 `src/content/guides/` 创建新的 `.md` 或 `.mdx` 文件：

```markdown
---
title: "指南标题"
description: "指南描述"
---

指南内容...
```

### 添加新工具

在 `src/content/tools/` 创建新的 `.md` 文件。

## 🌍 多语言支持

项目支持中文（zh）和英文（en）：

- `/zh/` - 中文页面
- `/en/` - 英文页面
- 首页自动重定向到中文

## 🧞 命令说明

| 命令 | 说明 |
| :--- | :--- |
| `npm install` | 安装依赖 |
| `npm run dev` | 启动开发服务器 (localhost:4321) |
| `npm run build` | 构建生产版本到 ./dist/ |
| `npm run preview` | 本地预览生产版本 |
| `npm run astro ...` | 运行 Astro CLI 命令 |

## 📄 License

MIT

## 🤝 贡献

欢迎提交 Pull Request！

## 📚 相关文档

- [Astro 文档](https://docs.astro.build)
- [TailwindCSS 文档](https://tailwindcss.com)
- [MDX 文档](https://mdxjs.com)
