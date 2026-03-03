# Card 卡片

用于展示内容的容器组件。

## 基本用法

```jsx
import { Card } from 'preact-nanometerui';

function App() {
  return (
    <Card>
      <p>卡片内容</p>
      <p>这是一个基本的卡片组件</p>
    </Card>
  );
}
```

## 带标题的卡片

```jsx
import { Card } from 'preact-nanometerui';

function App() {
  return (
    <Card isShowTopBar title="卡片标题">
      <p>卡片内容</p>
      <p>这是一个带标题的卡片</p>
    </Card>
  );
}
```

## 带底部栏的卡片

```jsx
import { Card } from 'preact-nanometerui';

function App() {
  return (
    <Card isShowTopBar isShowBottomBar title="卡片标题">
      <p>卡片内容</p>
      <p>这是一个带底部栏的卡片</p>
    </Card>
  );
}
```

## 自定义宽度

```jsx
import { Card } from 'preact-nanometerui';

function App() {
  return (
    <Card width="300px">
      <p>卡片内容</p>
      <p>这是一个宽度为300px的卡片</p>
    </Card>
  );
}
```

## API

### Card Props

| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `isShowTopBar` | `boolean` | 是否显示顶部栏 | `false` |
| `isShowBottomBar` | `boolean` | 是否显示底部栏 | `false` |
| `title` | `string` | 卡片标题 | `undefined` |
| `width` | `string` | 卡片宽度 | `'500px'` |
| `children` | `any` | 卡片内容 | `undefined` |

## 样式

### 类名说明

| 类名 | 说明 |
| --- | --- |
| `na-card` | 卡片容器 |
| `na-card__head` | 卡片顶部栏 |
| `na-card__body` | 卡片内容区域 |
| `na-card__bottom-bar` | 卡片底部栏 |
| `postfix` | 标题后缀区域 |
