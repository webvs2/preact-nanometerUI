# 快速开始

本指南将帮助您快速上手 preact-nanometerUI 框架。

## 安装

首先，您需要安装 preact-nanometerUI 及其依赖。

```bash
npm install preact preact-nanometerui
# 或
yarn add preact preact-nanometerui
```

## 导入组件

在您的项目中，您可以按需导入所需的组件。

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

export default App;
```

## 基本使用

### Button 按钮

```jsx
import { Button } from 'preact-nanometerui';

function App() {
  return (
    <div>
      <Button>默认按钮</Button>
      <Button disabled>禁用按钮</Button>
    </div>
  );
}
```

### Input 输入框

```jsx
import { Input } from 'preact-nanometerui';

function App() {
  const [value, setValue] = useState('');

  return (
    <Input 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      placeholder="请输入"
    />
  );
}
```

### Select 选择器

```jsx
import { Select } from 'preact-nanometerui';

function App() {
  const [value, setValue] = useState('');

  return (
    <Select 
      options={['选项1', '选项2', '选项3']} 
      value={value} 
      onChange={setValue} 
      placeholder="请选择"
    />
  );
}
```

### Radio 单选框

```jsx
import { Radio, RadioGroup } from 'preact-nanometerui';

function App() {
  const [value, setValue] = useState('1');

  return (
    <RadioGroup value={value} onChange={setValue}>
      <Radio value="1">选项1</Radio>
      <Radio value="2">选项2</Radio>
    </RadioGroup>
  );
}
```

## 下一步

- 查看 [组件文档](../components/) 了解更多组件的使用方法
- 查看 [主题定制](./theme.md) 了解如何定制主题