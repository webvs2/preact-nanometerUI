# Button 按钮

用于触发操作的基础组件。

## 基本用法

```jsx
import { Button } from 'preact-nanometerui';

function App() {
  return (
    <div>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </div>
  );
}
```

## 不同尺寸

```jsx
import { Button } from 'preact-nanometerui';

function App() {
  return (
    <div>
      <Button size="large">大按钮</Button>
      <Button size="normal">默认按钮</Button>
      <Button size="small">小按钮</Button>
    </div>
  );
}
```

## 禁用状态

```jsx
import { Button } from 'preact-nanometerui';

function App() {
  return (
    <div>
      <Button disabled>禁用按钮</Button>
      <Button type="primary" disabled>禁用主要按钮</Button>
    </div>
  );
}
```

## 加载状态

```jsx
import { Button } from 'preact-nanometerui';

function App() {
  return (
    <div>
      <Button loading>加载中</Button>
      <Button type="primary" loading>加载中</Button>
    </div>
  );
}
```

## 圆形按钮

```jsx
import { Button } from 'preact-nanometerui';

function App() {
  return (
    <div>
      <Button round>圆形按钮</Button>
      <Button type="primary" round>圆形主要按钮</Button>
    </div>
  );
}
```

## 朴素按钮

```jsx
import { Button } from 'preact-nanometerui';

function App() {
  return (
    <div>
      <Button plain>朴素按钮</Button>
      <Button type="primary" plain>朴素主要按钮</Button>
    </div>
  );
}
```

## 带图标按钮

```jsx
import { Button } from 'preact-nanometerui';

function App() {
  return (
    <div>
      <Button icon="icon-search">搜索</Button>
      <Button type="primary" icon="icon-plus">添加</Button>
    </div>
  );
}
```

## API

### Button Props

| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `type` | `'primary' \| 'success' \| 'warning' \| 'danger'` | 按钮类型 | `undefined` |
| `size` | `'large' \| 'normal' \| 'small'` | 按钮尺寸 | `'normal'` |
| `disabled` | `boolean` | 是否禁用 | `false` |
| `loading` | `boolean` | 是否加载中 | `false` |
| `plain` | `boolean` | 是否朴素按钮 | `false` |
| `round` | `boolean` | 是否圆形按钮 | `false` |
| `icon` | `string` | 图标类名 | `undefined` |
| `onClick` | `(event: Event) => void` | 点击事件回调 | `undefined` |
| `form` | `string` | 表单ID | `undefined` |
| `text` | `string` | 按钮文本 | `undefined` |
| `children` | `any` | 子元素 | `undefined` |

## 样式

### 类名说明

| 类名 | 说明 |
| --- | --- |
| `na-button` | 按钮容器 |
| `na-button--primary` | 主要按钮 |
| `na-button--success` | 成功按钮 |
| `na-button--warning` | 警告按钮 |
| `na-button--danger` | 危险按钮 |
| `na-button--large` | 大按钮 |
| `na-button--normal` | 普通按钮 |
| `na-button--small` | 小按钮 |
| `na-button--disabled` | 禁用按钮 |
| `na-button--loading` | 加载中按钮 |
| `na-button--plain` | 朴素按钮 |
| `na-button--round` | 圆形按钮 |
