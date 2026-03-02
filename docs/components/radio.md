# Radio 单选框

用于从一组选项中选择一个值。

## 基本用法

```jsx
import { Radio } from 'preact-nanometerui';

function App() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Radio 
        value="1" 
        checked={value === '1'} 
        onChange={(checked) => setValue(checked ? '1' : '')}
      >
        选项1
      </Radio>
      <Radio 
        value="2" 
        checked={value === '2'} 
        onChange={(checked) => setValue(checked ? '2' : '')}
      >
        选项2
      </Radio>
    </div>
  );
}
```

## 与 RadioGroup 配合使用

```jsx
import { Radio, RadioGroup } from 'preact-nanometerui';

function App() {
  const [value, setValue] = useState('1');

  return (
    <RadioGroup value={value} onChange={setValue}>
      <Radio value="1">选项1</Radio>
      <Radio value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </RadioGroup>
  );
}
```

## 禁用状态

```jsx
import { Radio, RadioGroup } from 'preact-nanometerui';

function App() {
  return (
    <RadioGroup>
      <Radio value="1">选项1</Radio>
      <Radio value="2" disabled>选项2（禁用）</Radio>
      <Radio value="3">选项3</Radio>
    </RadioGroup>
  );
}
```

## API

### Radio Props

| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `autoFocus` | `boolean` | 是否自动聚焦 | `false` |
| `checked` | `boolean` | 是否选中 | `undefined` |
| `defaultChecked` | `boolean` | 默认是否选中 | `false` |
| `disabled` | `boolean` | 是否禁用 | `false` |
| `value` | `any` | 选项值 | `undefined` |
| `name` | `string` | 单选框组名 | `undefined` |
| `onClick` | `(checked: boolean, event: Event) => void` | 点击时的回调函数 | `undefined` |
| `onChange` | `(checked: boolean, event: Event) => void` | 值变化时的回调函数 | `undefined` |
| `className` | `string` | 自定义类名 | `""` |
| `children` | `any` | 选项文本 | `undefined` |

### RadioGroup Props

| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `value` | `any` | 当前选中的值 | `undefined` |
| `onChange` | `(value: any) => void` | 值变化时的回调函数 | `undefined` |
| `name` | `string` | 单选框组名 | `undefined` |
| `className` | `string` | 自定义类名 | `""` |
| `children` | `ReactNode` | 子组件 | `undefined` |

## 样式

### 类名说明

| 类名 | 说明 |
| --- | --- |
| `na-radio` | 单选框容器 |
| `na-radio--checked` | 选中状态 |
| `na-radio--disabled` | 禁用状态 |
| `na-radio__input` | 输入区域 |
| `na-radio__inner` | 单选框内部 |
| `na-radio__label` | 标签文本 |
| `na-radio-group` | 单选框组容器 |
| `na-radio-group--horizontal` | 水平排列的单选框组 |