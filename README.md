# preact-nanometerUI

基于 Preact.js 开发的轻量化 UI 框架，旨在为嵌入式界面和小型网站提供高性能、低内存占用的 UI 组件。

## ✨ 特性

- **轻量化**：基于 Preact.js，体积小，内存占用低
- **高性能**：组件渲染速度快，适合资源受限的环境
- **易用性**：API 设计简洁直观，易于集成和使用
- **可定制**：支持自定义主题和样式
- **TypeScript 支持**：提供完整的类型定义
- **组件丰富**：包含常用的 UI 组件

## 📦 安装

```bash
# 使用 pnpm
pnpm add preact-nanometerui

# 使用 npm
npm install preact-nanometerui

# 使用 yarn
yarn add preact-nanometerui
```

## 🚀 快速开始

### 基本使用

```jsx
import { Button, Input, Select, Radio, RadioGroup } from "preact-nanometerui";

function App() {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <Input placeholder="请输入内容" />
      <Select
        options={[
          { value: "option1", label: "选项1" },
          { value: "option2", label: "选项2" },
        ]}
        placeholder="请选择"
      />
      <RadioGroup value="option1" onChange={(value) => console.log(value)}>
        <Radio value="option1">选项1</Radio>
        <Radio value="option2">选项2</Radio>
      </RadioGroup>
    </div>
  );
}

export default App;
```

## 📁 组件列表

| 组件名称    | 描述         | 状态      |
| ----------- | ------------ | --------- |
| Button      | 按钮组件     | ✅ 已完成 |
| Input       | 输入框组件   | ✅ 已完成 |
| Textarea    | 文本域组件   | ✅ 已完成 |
| Select      | 选择器组件   | ✅ 已完成 |
| Radio       | 单选框组件   | ✅ 已完成 |
| RadioGroup  | 单选框组组件 | ✅ 已完成 |
| Badge       | 徽章组件     | ✅ 已完成 |
| Card        | 卡片组件     | ✅ 已完成 |
| Divider     | 分割线组件   | ✅ 已完成 |
| Loading     | 加载组件     | ✅ 已完成 |
| Message     | 消息提示组件 | ✅ 已完成 |
| Tooltip     | 提示组件     | ✅ 已完成 |
| Menu        | 菜单组件     | ✅ 已完成 |
| FormItem    | 表单项组件   | ✅ 已完成 |
| Schedule    | 日程组件     | ✅ 已完成 |
| Floating    | 浮动组件     | ✅ 已完成 |
| Perspective | 透视组件     | ✅ 已完成 |

## 🛠️ 开发指南

### 克隆仓库

```bash
git clone https://github.com/yourusername/preact-nanometerui.git
cd preact-nanometerui
```

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm run dev
```

### 构建项目

```bash
pnpm run build
```

### 运行测试

```bash
pnpm test
```

## 📖 文档

项目文档使用 VitePress 构建，位于 `docs` 目录中。

### 启动文档服务器

```bash
pnpm run docs:dev
```

### 构建文档

```bash
pnpm run docs:build
```

## 🤝 贡献指南

我们欢迎任何形式的贡献！请参考以下步骤：

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目使用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 🌟 鸣谢

- [Preact](https://preactjs.com/) - 轻量级 React 替代方案
- [Vite](https://vitejs.dev/) - 现代前端构建工具
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript 超集
- [Sass](https://sass-lang.com/) - CSS 预处理器

## � 联系方式

- 项目地址：[https://github.com/yourusername/preact-nanometerui](https://github.com/yourusername/preact-nanometerui)
- 问题反馈：[https://github.com/yourusername/preact-nanometerui/issues](https://github.com/yourusername/preact-nanometerui/issues)

---

<p align="center">
  <img src="./logo.png" alt="preact-nanometerUI" width="200" />
</p>
<p align="center">
  轻量 · 高性能 · 易用
</p>
