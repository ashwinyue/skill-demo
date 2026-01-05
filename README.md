# Admin System

基于 React + Ant Design + Tailwind CSS 的现代化前端管理系统。

## ✨ 特性

- 🎨 **现代科技风格** - 深色主题配合靛蓝/青色渐变，玻璃态效果
- 🚀 **技术栈** - React 18 + Ant Design 5 + Tailwind CSS + Framer Motion
- 📊 **数据可视化** - 使用 Recharts 实现图表展示
- 🎭 **动画效果** - 基于 Framer Motion 的流畅动画
- 🔧 **完整功能** - 仪表盘、用户管理等核心模块
- 📦 **自动部署** - GitHub Actions 自动部署到 GitHub Pages

## 🛠️ 技术栈

| 技术 | 说明 |
|------|------|
| React 18 | UI 框架 |
| Ant Design 5 | 组件库 |
| Tailwind CSS 3 | 样式框架 |
| React Router 6 | 路由管理 |
| Recharts | 图表库 |
| Framer Motion | 动画库 |
| Vite 5 | 构建工具 |

## 📁 项目结构

```
awesomeProject9/
├── .claude/              # Claude Code 配置
│   └── skills/           # 自定义 Skills
│       ├── frontend-design/  # 前端设计 Skill
│       └── go-code-review/   # Go 代码审查 Skill
├── .github/              # GitHub Actions workflow
│   └── workflows/
│       └── deploy.yml    # 自动部署配置
├── admin/                # 前端项目
│   ├── src/
│   │   ├── components/   # 组件
│   │   │   ├── Layout/   # 布局组件
│   │   │   └── Dashboard/# 仪表盘组件
│   │   ├── pages/        # 页面
│   │   ├── utils/        # 工具函数
│   │   ├── App.jsx       # 路由配置
│   │   └── main.jsx      # 入口文件
│   ├── public/           # 静态资源
│   ├── package.json      # 依赖配置
│   └── vite.config.js    # Vite 配置
└── README.md             # 项目说明
```

## 🚀 快速开始

### 安装依赖

```bash
cd admin
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📋 功能模块

| 模块 | 状态 | 说明 |
|------|:----:|------|
| 登录页面 | ✅ | 账号登录/扫码登录切换 |
| 仪表盘 | ✅ | 数据统计、图表展示、最近订单、最近活动 |
| 用户管理 | ✅ | 列表、搜索、添加/编辑/删除 |
| 产品管理 | 🚧 | 开发中 |
| 订单管理 | 🚧 | 开发中 |
| 团队管理 | 🚧 | 开发中 |
| 数据分析 | 🚧 | 开发中 |
| 系统设置 | 🚧 | 开发中 |

## 🎨 设计风格

### 色彩方案

- **主色调**: 靛蓝 (#6366f1) → 青色 (#22d3ee) 渐变
- **背景色**: 深色系 (#0f172a, #1e293b)
- **状态色**: 成功(绿) / 警告(黄) / 错误(红)

### 视觉效果

- 玻璃态效果 (Glass Morphism)
- 渐变边框
- 微妙动画
- 悬浮反馈

## 🤖 Claude Skills 使用

本项目配置了自定义 Claude Skills，提升 AI 辅助开发体验：

### frontend-design

**用途**: 创建高质量、独特的前端界面

**触发方式**: 当你需要构建网页组件、页面、仪表盘、React 组件、HTML/CSS 布局或任何 Web UI 时

**示例**:
- "帮我设计一个登录页面"
- "创建一个深色主题的数据可视化面板"
- "写一个响应式的卡片组件"

**特点**:
- 避免千篇一律的 AI 生成风格
- 精心设计的字体、色彩和动画
- 每次设计都有独特的视觉方向

### go-code-review

**用途**: Go 代码质量审查

**触发方式**: 当你请求审查 Go 代码、检查最佳实践或分析代码质量时

**示例**:
- "审查这段 Go 代码"
- "检查 Go 代码的潜在问题"

### 配置 Skills

Skills 位于 `.claude/skills/` 目录，每个 Skill 包含：

```
.claude/skills/[skill-name]/
├── SKILL.md      # Skill 说明文档
└── LICENSE.txt   # 许可证文件
```

## 📦 部署

### GitHub Pages 自动部署

项目已配置 GitHub Actions，推送到 `main` 分支后自动部署。

部署地址: https://ashwinyue.github.io/skill-demo/

### 手动部署

```bash
cd admin
npm run build
# 将 dist/ 目录部署到静态服务器
```

## 📄 License

MIT
