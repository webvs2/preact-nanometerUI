# Select 选择器

用于从一组选项中选择一个值。

## 基本用法

```jsx
import { Select } from 'preact-nanometerui';

function App() {
  const [value, setValue] = useState('');

  return (
    <Select
      options={['选项1', '选项2', '选项3', '选项4', '选项5']}
      value={value}
      onChange={setValue}
      placeholder="请选择"
    />
  );
}
```

## 带对象选项的用法

```jsx
import { Select } from 'preact-nanometerui';

function App() {
  const [value, setValue] = useState('');

  const options = [
    { value: '1', label: '选项1' },
    { value: '2', label: '选项2' },
    { value: '3', label: '选项3' },
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={setValue}
      placeholder="请选择"
    />
  );
}
```

## 禁用状态

```jsx
import { Select } from 'preact-nanometerui';

function App() {
  return (
    <Select
      options={['选项1', '选项2', '选项3']}
      placeholder="请选择"
      disabled
    />
  );
}
```

## API

### Select Props

| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `options` | `(string \| { value: string \| number, label: string })[]` | 选项列表 | `[]` |
| `value` | `string \| number` | 当前选中的值 | `undefined` |
| `onChange` | `(value: string \| number) => void` | 值变化时的回调函数 | `undefined` |
| `placeholder` | `string` | 占位文本 | `"请选择"` |
| `disabled` | `boolean` | 是否禁用 | `false` |
| `className` | `string` | 自定义类名 | `""` |

## 样式

### 类名说明

| 类名 | 说明 |
| --- | --- |
| `na-select` | 选择器容器 |
| `na-select--disabled` | 禁用状态 |
| `na-select__trigger` | 触发区域 |
| `na-select__value` | 值显示区域 |
| `na-select__arrow` | 箭头图标 |
| `na-select__arrow--open` | 展开状态的箭头 |
| `na-select__options` | 选项列表容器 |
| `na-select__option` | 单个选项 |
| `na-select__option--active` | 激活状态的选项 |
| `na-select__option--selected` | 选中状态的选项 |
| `na-select__option__check` | 选中标记 |