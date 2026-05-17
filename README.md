# 宁宁云 IDC Apple Style

一个基于 Next.js 和 Tailwind CSS 构建的云服务器产品站与控制台原型。项目以 `DESIGN.md` 中提炼的 Apple 风格设计系统为准：低调 UI、单一蓝色操作色、SF Pro 字体栈、浅深全宽板块交替，以及克制的控制台信息密度。

## 功能

- 服务器产品首页：展示 VPS、独立服务器、存储服务器与 GPU 算力产品。
- 产品详情页：按产品类型呈现卖点、规格、适用场景和购买入口。
- 配置器：面向服务器选型的配置流程页面。
- 云服务器控制台：包含资源概览、实例列表、区域容量、安全态势、流量趋势、操作提醒和扩容建议。
- Apple 风格设计系统：颜色、字体、圆角、按钮、导航、卡片和页面节奏均来自 `DESIGN.md`。

## 技术栈

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- lucide-react 图标库

## 快速开始

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

打开浏览器访问：

```text
http://localhost:3000
```

如果 3000 端口被占用，Next.js 会自动尝试下一个可用端口。

## 可用脚本

```bash
npm run dev
```

启动本地开发服务器。

```bash
npm run build
```

生成生产构建并执行类型检查。

```bash
npm run start
```

启动生产模式服务，需要先执行 `npm run build`。

```bash
npm run lint
```

运行 Next.js lint。当前项目尚未初始化 ESLint 配置，首次执行可能会进入交互式配置流程。

## 页面路由

- `/`：服务器解决方案首页
- `/vps`：VPS 产品页
- `/dedicated`：独立服务器产品页
- `/storage`：存储服务器产品页
- `/configure`：服务器配置器
- `/console`：云服务器控制台

## 项目结构

```text
src/
  app/                 Next.js App Router 页面
  components/          通用 UI 与产品展示组件
  lib/                 产品、配置器和常量数据
DESIGN.md             Apple 风格设计系统说明
tailwind.config.ts    设计 token 与 Tailwind 扩展
```

## 设计说明

项目的视觉语言遵循 `DESIGN.md`：

- 交互色统一使用 `#0066cc`。
- 全局导航使用黑色 44px 顶栏，子导航使用磨砂浅色栏。
- 卡片保持轻边框、无投影；投影只用于产品图形。
- 控制台界面避免营销式大面积装饰，优先保证扫描、比较和重复操作效率。

## 构建验证

当前代码已通过：

```bash
npm run build
```

