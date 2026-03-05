# Dialog 对话框

模态对话框，用于重要信息提示或需要用户确认的操作。

## 基本用法

```jsx
import { useState } from 'preact/hooks';
import { Dialog, Button } from 'preact-nanometerui';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开对话框
      </Button>
      <Dialog
        visible={visible}
        title="提示"
        onClose={() => setVisible(false)}
        onConfirm={() => {
          alert('确认');
          setVisible(false);
        }}
      >
        <p>这是对话框的内容</p>
      </Dialog>
    </div>
  );
}
```

## 自定义宽度

```jsx
import { useState } from 'preact/hooks';
import { Dialog, Button } from 'preact-nanometerui';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>
        自定义宽度对话框
      </Button>
      <Dialog
        visible={visible}
        title="自定义宽度"
        width={800}
        onClose={() => setVisible(false)}
        onConfirm={() => setVisible(false)}
      >
        <p>这个对话框的宽度是 800px</p>
      </Dialog>
    </div>
  );
}
```

## 无底部栏

```jsx
import { useState } from 'preact/hooks';
import { Dialog, Button } from 'preact-nanometerui';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>
        无底部栏对话框
      </Button>
      <Dialog
        visible={visible}
        title="无底部栏"
        showFooter={false}
        onClose={() => setVisible(false)}
      >
        <p>这个对话框隐藏了底部操作栏</p>
      </Dialog>
    </div>
  );
}
```

## 自定义按钮文字

```jsx
import { useState } from 'preact/hooks';
import { Dialog, Button } from 'preact-nanometerui';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>
        自定义按钮文字
      </Button>
      <Dialog
        visible={visible}
        title="保存确认"
        confirmText="保存"
        cancelText="放弃"
        onClose={() => setVisible(false)}
        onConfirm={() => setVisible(false)}
      >
        <p>确定要保存更改吗？</p>
      </Dialog>
    </div>
  );
}
```

## API

### Dialog Props

| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `visible` | `boolean` | 是否显示对话框 | `false` |
| `title` | `string` | 对话框标题 | `'提示'` |
| `width` | `string \| number` | 对话框宽度 | `520` |
| `onClose` | `() => void` | 关闭回调 | `undefined` |
| `onConfirm` | `() => void` | 确认回调 | `undefined` |
| `confirmText` | `string` | 确认按钮文字 | `'确定'` |
| `cancelText` | `string` | 取消按钮文字 | `'取消'` |
| `showFooter` | `boolean` | 是否显示底部栏 | `true` |
| `showCloseIcon` | `boolean` | 是否显示关闭按钮 | `true` |
| `maskClosable` | `boolean` | 点击遮罩是否关闭 | `true` |
| `children` | `any` | 对话框内容 | `undefined` |

## 样式

### 类名说明

| 类名 | 说明 |
| --- | --- |
| `na-dialog-mask` | 遮罩层 |
| `na-dialog` | 对话框容器 |
| `na-dialog__header` | 对话框头部 |
| `na-dialog__title` | 对话框标题 |
| `na-dialog__close` | 关闭按钮 |
| `na-dialog__body` | 对话框内容区 |
| `na-dialog__footer` | 对话框底部 |
| `na-dialog__btn` | 对话框按钮 |
| `na-dialog__btn--cancel` | 取消按钮 |
| `na-dialog__btn--confirm` | 确认按钮 |
