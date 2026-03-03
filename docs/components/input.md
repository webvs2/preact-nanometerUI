# Input 输入框

用于接收用户输入的文本。

## 基本用法

```jsx
import { Input } from 'preact-nanometerui';
import { useState } from 'preact/hooks';

function App() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Input
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="请输入内容"
      />
    </div>
  );
}
```

## 禁用状态

```jsx
import { Input } from 'preact-nanometerui';
import { useState } from 'preact/hooks';

function App() {
  const [value, setValue] = useState('禁用状态');

  return (
    <div>
      <Input
        value={value}
        onChange={(val) => setValue(val)}
        disabled
        placeholder="请输入内容"
      />
    </div>
  );
}
```

## 带占位符

```jsx
import { Input } from 'preact-nanometerui';
import { useState } from 'preact/hooks';

function App() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Input
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="请输入用户名"
      />
    </div>
  );
}
```

## 带验证

```jsx
import { Input } from 'preact-nanometerui';
import { useState } from 'preact/hooks';

function App() {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (val) => {
    setValue(val);
    // 简单的验证逻辑
    setIsError(val.length < 3);
  };

  return (
    <div>
      <Input
        value={value}
        onChange={handleChange}
        type={isError ? 'error' : undefined}
        placeholder="请输入至少3个字符"
      />
    </div>
  );
}
```

## API

### Input Props

| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `id` | `string` | 输入框ID | `undefined` |
| `value` | `string \| number \| undefined` | 输入框值 | `undefined` |
| `autocomplete` | `string` | 自动完成属性 | `undefined` |
| `onChange` | `(value: string \| number \| undefined, e: any) => void` | 值变化时的回调函数 | `undefined` |
| `disabled` | `boolean` | 是否禁用 | `false` |
| `max` | `number` | 最大值 | `undefined` |
| `maxlength` | `number` | 最大长度 | `undefined` |
| `min` | `number` | 最小值 | `undefined` |
| `minlength` | `number` | 最小长度 | `undefined` |
| `pattern` | `string` | 正则表达式验证 | `undefined` |
| `type` | `string` | 输入框类型，支持 'error' 错误状态 | `'text'` |
| `placeholder` | `string` | 占位符文本 | `undefined` |
| `isPrefix` | `boolean` | 是否显示前缀 | `false` |

## 样式

### 类名说明

| 类名 | 说明 |
| --- | --- |
| `na-input-box` | 输入框容器 |
| `na-input` | 输入框 |
| `na-input__disabled` | 禁用状态 |
| `na-input-error` | 错误状态 |
