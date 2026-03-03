# Badge 徽章

用于显示徽标、角标等信息。

## 基本用法

```jsx
import { Badge } from 'preact-nanometerui';

function App() {
  return (
    <Badge value="5">
      <button>消息</button>
    </Badge>
  );
}
```

## 不同尺寸

```jsx
import { Badge } from 'preact-nanometerui';

function App() {
  return (
    <div>
      <Badge size="large" value="10">
        <button>大徽章</button>
      </Badge>
      <Badge size="normal" value="5">
        <button>默认徽章</button>
      </Badge>
      <Badge size="small" value="1">
        <button>小徽章</button>
      </Badge>
    </div>
  );
}
```

## 纯数字徽章

```jsx
import { Badge } from 'preact-nanometerui';

function App() {
  return (
    <div>
      <Badge value="99+">
        <button>通知</button>
      </Badge>
      <Badge value="new">
        <button>新品</button>
      </Badge>
    </div>
  );
}
```

## API

### Badge Props

| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `value` | `string \| number` | 徽章显示的值 | `undefined` |
| `size` | `'large' \| 'normal' \| 'small'` | 徽章尺寸 | `'normal'` |
| `children` | `any` | 徽章附加的元素 | `undefined` |

## 样式

### 类名说明

| 类名 | 说明 |
| --- | --- |
| `na-badge` | 徽章容器 |
| `na-badge__large` | 大徽章 |
| `na-badge__normal` | 普通徽章 |
| `na-badge__small` | 小徽章 |
| `after` | 徽章内容 |
