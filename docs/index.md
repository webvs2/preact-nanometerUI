---
title: preact-nanometerUI
---

# preact-nanometerUI

基于 Preact.js 的轻量化 UI 框架，为嵌入式界面和小型网站设计。

## 特性

- **轻量化**：基于 Preact.js，体积小，性能高
- **响应式**：适配不同屏幕尺寸
- **易于使用**：简洁的 API 设计，易于集成
- **主题定制**：支持自定义主题
- **组件丰富**：提供常用的 UI 组件

## 快速开始

### 安装

```bash
npm install preact-nanometerui
# 或
yarn add preact-nanometerui
```

### 导入组件

```jsx
import { Button, Input, Select, Radio, RadioGroup } from 'preact-nanometerui';

function App() {
  return (
    <div>
      <Button>按钮</Button>
      <Input placeholder="请输入" />
      <Select 
        options={['选项1', '选项2', '选项3']} 
        placeholder="请选择" 
      />
      <RadioGroup>
        <Radio value="1">选项1</Radio>
        <Radio value="2">选项2</Radio>
      </RadioGroup>
    </div>
  );
}
```

## 浏览器支持

- Chrome
- Firefox
- Safari
- Edge

## 贡献

欢迎贡献代码，提交 Issue 或 Pull Request。

## 许可证

MIT 许可证