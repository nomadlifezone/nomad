# Google AdSense 配置指南

## ✅ 已完成的集成

### 1. **全局脚本加载**
已在 `src/layouts/Layout.astro` 中添加 AdSense 脚本，所有页面自动加载。

### 2. **广告组件**
创建了可复用的广告组件 `src/components/AdUnit.astro`，支持多种广告格式。

### 3. **广告位置**

#### 📄 文章详情页（最佳收益）
- **标题下方**：横幅广告（提高可见度）
- **文章底部**：矩形广告（阅读完成后）

#### 🏠 首页
- **页面底部**：横幅广告（不影响首屏体验）

---

## 🔧 接下来需要做的配置

### 步骤 1：登录 Google AdSense
访问 [https://www.google.com/adsense/](https://www.google.com/adsense/)

### 步骤 2：创建广告单元
1. 点击**广告** → **按广告单元**
2. 创建以下广告单元：

#### 广告单元配置建议：

**广告单元 1：文章顶部横幅**
- 名称：`Article-Top-Banner`
- 类型：展示广告
- 格式：自适应
- 复制生成的 `data-ad-slot` ID

**广告单元 2：文章底部矩形**
- 名称：`Article-Bottom-Rectangle`
- 类型：展示广告
- 格式：矩形 (300x250)
- 复制生成的 `data-ad-slot` ID

**广告单元 3：首页底部横幅**
- 名称：`Homepage-Bottom-Banner`
- 类型：展示广告
- 格式：自适应
- 复制生成的 `data-ad-slot` ID

### 步骤 3：替换广告位 ID

替换以下文件中的 `slot` 值（示例中的占位符 ID）：

#### 中文文章详情页 (`src/pages/zh/guides/[slug].astro`)
```astro
<!-- 广告位 1: 标题下方 -->
<AdUnit slot="你的广告单元ID-1" format="horizontal" />

<!-- 广告位 2: 文章底部 -->
<AdUnit slot="你的广告单元ID-2" format="rectangle" />
```

#### 英文文章详情页 (`src/pages/en/guides/[slug].astro`)
```astro
<!-- Ad Unit 1: Below Title -->
<AdUnit slot="你的广告单元ID-1" format="horizontal" />

<!-- Ad Unit 2: Bottom of Article -->
<AdUnit slot="你的广告单元ID-2" format="rectangle" />
```

#### 首页 (`src/pages/index.astro` 和 `src/pages/zh.astro`)
```astro
<!-- 广告位: 首页底部 -->
<AdUnit slot="你的广告单元ID-3" format="horizontal" />
```

---

## 📊 广告位置说明

### 当前广告布局：

```
┌─────────────────────────────┐
│   导航栏                     │
├─────────────────────────────┤
│   文章标题                   │
│   描述 & 标签                │
├─────────────────────────────┤
│   [广告 1 - 横幅]           │  ← 标题下方
├─────────────────────────────┤
│                             │
│   文章内容                   │
│   ...                       │
│   ...                       │
│                             │
├─────────────────────────────┤
│   [广告 2 - 矩形]           │  ← 文章底部
├─────────────────────────────┤
│   相关文章 / CTA            │
└─────────────────────────────┘
```

---

## ⚠️ AdSense 政策注意事项

### ✅ 符合规范：
- 广告位置明确标注 "Advertisement"
- 响应式设计，移动端自适应
- 不会误导用户点击
- 每页广告数量适中（2-3个）

### ❌ 避免：
- 广告靠近导航栏/菜单
- 页面广告过多（超过3个）
- 误导性点击
- 覆盖主要内容

---

## 🎨 自定义广告样式

广告组件已包含默认样式，如需调整，编辑 `src/components/AdUnit.astro`：

```css
.ad-container {
  /* 修改背景、边框、间距等 */
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;
  padding: 1rem;
}
```

---

## 🧪 测试广告显示

### 本地开发环境：
广告可能不会立即显示，这是正常的。需要：
1. 部署到生产环境
2. 等待 AdSense 审核通过（24-48小时）
3. 验证网站所有权

### 生产环境检查：
1. 推送代码到 GitHub
2. 等待自动部署完成
3. 访问线上网站
4. 打开浏览器控制台，检查是否有 AdSense 脚本加载
5. 使用 Chrome DevTools → Network 标签，搜索 `adsbygoogle`

---

## 📈 收益优化建议

### 短期（1-2周）：
- ✅ 完成 AdSense 账号验证
- ✅ 观察广告展示和点击数据
- ✅ 调整广告位置（如果需要）

### 中期（1-2个月）：
- 🔥 创建更多高质量内容
- 🔥 优化 SEO，增加自然流量
- 🔥 A/B 测试不同广告位置

### 长期（3个月+）：
- 💰 分析高收益内容主题
- 💰 扩展多语言内容
- 💰 考虑添加侧边栏广告（桌面端）

---

## 🛠️ 故障排查

### 广告不显示？
1. 检查 AdSense 账号是否通过审核
2. 确认广告单元 ID 正确
3. 查看浏览器控制台是否有错误
4. 确保网站已部署到生产环境

### 广告显示空白？
- 等待 24-48 小时（新网站需要审核）
- 检查 AdSense 账号状态
- 确认网站符合 AdSense 政策

### 移动端显示异常？
- 已启用 `data-full-width-responsive="true"`
- 检查移动端浏览器兼容性

---

## 📞 需要帮助？

- [Google AdSense 帮助中心](https://support.google.com/adsense)
- [AdSense 政策中心](https://support.google.com/adsense/answer/48182)

---

**祝你广告收益节节高升！** 🎉💰
