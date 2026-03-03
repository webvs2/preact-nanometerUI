# 安装

## 前置要求

- Node.js 18 或更高版本
- npm, yarn 或 pnpm 包管理器

## 安装方式

### 使用 npm

```bash
npm install preact-nanometerui
```

### 使用 yarn

```bash
yarn add preact-nanometerui
```

### 使用 pnpm

```bash
pnpm add preact-nanometerui
```

## 快速开始

### 1. 导入样式

在你的项目入口文件中导入样式：

```javascript
import 'preact-nanometerui/dist/style.css'
```

### 2. 使用组件

```jsx
import { Button, Input, Card } from 'preact-nanometerui'

function App() {
  return (
    <div>
      <Card>
        <h1>Hello preact-nanometerUI</h1>
        <Input placeholder="请输入..." />
        <Button>点击我</Button>
      </Card>
    </div>
  )
}
```

## CDN 使用

你也可以通过 CDN 直接使用：

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/preact-nanometerui/dist/style.css">
</head>
<body>
  <script type="module">
    import { Button } from 'https://unpkg.com/preact-nanometerui'
  </script>
</body>
</html>
```
