# my-portfolio · 个人作品集网站

- 在线演示：[点我跳转](https://CQUPT-CZL.github.io/my-portfolio/)

## 项目简介

- 使用 `Vite + React + Tailwind CSS` 构建的个人作品集与履历展示网站，聚焦 AI 工程方向（Agent、LLM 微调、RAG 等）。
- 数据驱动的页面结构：在 `src/App.jsx` 中维护 `profile`、`skills`、`experience`、`projects`、`awards` 等数据即可快速更新展示内容。

## 技术栈

- React `^19.x`、Vite `^7.x`
- Tailwind CSS `^4.x`（通过 `src/index.css` 直接引入）
- 图标：`lucide-react`
- 代码质量：ESLint（Flat Config）

## 主要特性

- 响应式布局与暗色主题，适配移动端与桌面端
- 平滑滚动与渐变动效（自定义 `blob` 动画，见 `tailwind.config.js`）
- 数据即内容：无需改动组件结构即可更新站点信息（`src/App.jsx`）
- 一键部署到 GitHub Pages（见 `package.json` 中 `deploy` 脚本）

## 本地开发

- 环境要求：Node.js `>= 18`
- 安装依赖：`npm install`
- 启动开发：`npm run dev`

## 构建与预览

- 生产构建：`npm run build`
- 本地预览：`npm run preview`
  - 预览默认地址：`http://localhost:4173/`
  - 若配置了 `base` 前缀，示例地址：`http://localhost:4173/my-portfolio/`

## 部署（GitHub Pages）

- 预设脚本：`npm run deploy`（自动将 `dist` 推送到 `gh-pages` 分支）
- 线上地址与路径前缀：`package.json` 已设置 `homepage` 为 `https://CQUPT-CZL.github.io/my-portfolio`
- 如果仓库名或发布路径调整，建议在 Vite 配置中设置 `base: '/<repo>/'` 以确保静态资源路径正确

## 项目结构

- `index.html`：入口 HTML
- `src/main.jsx`：应用入口，挂载到 `#root`
- `src/App.jsx`：主页面与数据源（个人信息、技能、经历、项目、奖项）
- `src/index.css`：样式入口（引入 Tailwind）
- `tailwind.config.js`：Tailwind 配置与动画定义
- `eslint.config.js`：ESLint 配置（Flat）

## 内容配置指引

- 个人信息 `profile`：`src/App.jsx:40`
- 技能栈 `skills`：`src/App.jsx:65`
- 工作经历 `experience`：`src/App.jsx:72`
- 精选项目 `projects`：`src/App.jsx:97`
- 荣誉奖项 `awards`：`src/App.jsx:132`

## 代码质量

- 运行 ESLint：`npm run lint`
- 配置参考：`eslint.config.js`

## 反馈与联系

- 邮箱：`230201019@stu.cqupt.edu.cn`
- GitHub：`https://github.com/CQUPT-CZL`
