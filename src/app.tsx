import { render } from "preact";
import { useState } from "preact/hooks";
import {
  Button,
  Radio,
  RadioGroup,
  Select,
  Switch,
  NaSchedule,
  NaBadge,
  Card,
  message,
  Input,
  Tooltip,
  Menu,
  MenuItem,
  Dialog,
} from "./plugins/index";


// import { createRequire } from "module";
// import Logo from "./logo";
// perspective
// import Perspective from "./components/perspective/index";

function clickFn(type = "error") {
  if (typeof type == "object") type = "error";
  // message(type, "这是一个消息");
}

let App = () => {
  const [inputValue, setInputValue] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogVisible2, setDialogVisible2] = useState(false);
  const [dialogVisible3, setDialogVisible3] = useState(false);

  return (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '28px', color: '#1f2937' }}>preact-nanometerUI 组件库</h1>
      
      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>基础按钮</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>禁用按钮</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button disabled>Default</Button>
        <Button type="primary" disabled>Primary</Button>
        <Button type="success" disabled>Success</Button>
        <Button type="warning" disabled>Warning</Button>
        <Button type="danger" disabled>Danger</Button>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>不同尺寸按钮</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button type="primary" size="small">Small</Button>
        <Button type="primary" size="normal">Normal</Button>
        <Button type="primary" size="medium">Medium</Button>
        <Button type="primary" size="large">Large</Button>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>基础单选框</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Radio>Option A</Radio>
        <Radio>Option B</Radio>
        <Radio>Option C</Radio>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>选中状态单选框</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Radio checked>Checked</Radio>
        <Radio>Unchecked</Radio>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>禁用状态单选框</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Radio disabled>Disabled</Radio>
        <Radio checked disabled>Disabled & Checked</Radio>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>单选框组（水平）</h2>
      <div style={{ marginBottom: '24px' }}>
        <RadioGroup name="radio-group-1">
          <Radio value="1">Apple</Radio>
          <Radio value="2">Banana</Radio>
          <Radio value="3">Cherry</Radio>
        </RadioGroup>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>单选框组（垂直）</h2>
      <div style={{ marginBottom: '24px' }}>
        <RadioGroup name="radio-group-2" direction="vertical">
          <Radio value="1">Red</Radio>
          <Radio value="2">Green</Radio>
          <Radio value="3">Blue</Radio>
        </RadioGroup>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>基础选择器</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ width: '200px' }}>
          <Select
            options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
            placeholder="请选择"
          />
        </div>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>带初始值的选择器</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ width: '200px' }}>
          <Select
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
              { value: 'cherry', label: 'Cherry' },
              { value: 'date', label: 'Date' },
            ]}
            value="banana"
            placeholder="请选择水果"
          />
        </div>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>禁用状态选择器</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ width: '200px' }}>
          <Select
            options={['Option 1', 'Option 2', 'Option 3']}
            placeholder="请选择"
            disabled
          />
        </div>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>不同尺寸选择器</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ width: '150px' }}>
          <Select
            options={['Small']}
            size="small"
            placeholder="Small"
          />
        </div>
        <div style={{ width: '200px' }}>
          <Select
            options={['Middle']}
            size="middle"
            placeholder="Middle"
          />
        </div>
        <div style={{ width: '250px' }}>
          <Select
            options={['Large']}
            size="large"
            placeholder="Large"
          />
        </div>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>基础开关</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Switch />
        <Switch checked />
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>带文字的开关</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Switch>Open</Switch>
        <Switch checked>Close</Switch>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>禁用状态开关</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Switch disabled>Disabled</Switch>
        <Switch checked disabled>Disabled & On</Switch>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>不同尺寸开关</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Switch size="small" />
        <Switch size="small" checked />
        <div style={{ width: '16px' }}></div>
        <Switch />
        <Switch checked />
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>输入框</h2>
      <div style={{ marginBottom: '24px', width: '300px' }}>
        <Input
          value={inputValue}
          placeholder="请输入内容"
          onChange={(val) => setInputValue(val)}
        />
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>禁用输入框</h2>
      <div style={{ marginBottom: '24px', width: '300px' }}>
        <Input
          value="禁用状态"
          placeholder="禁用状态"
          disabled
        />
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>徽章 Badge</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
        <NaBadge value={5}>
          <Button>消息</Button>
        </NaBadge>
        <NaBadge value="99+">
          <Button type="primary">通知</Button>
        </NaBadge>
        <NaBadge value="Hot" size="normal">
          <Button type="success">热门</Button>
        </NaBadge>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>提示 Tooltip</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Tooltip value="这是提示信息">
          <Button type="primary">鼠标悬停</Button>
        </Tooltip>
        <Tooltip value="Hello World!">
          <Button>查看提示</Button>
        </Tooltip>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>卡片 Card</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <Card isShowTopBar title="基础卡片" width="400px">
          <p style={{ padding: '16px', margin: 0 }}>这是卡片内容区域</p>
        </Card>
        <Card isShowTopBar title="完整卡片" isShowBottomBar width="400px">
          <p style={{ padding: '16px', margin: 0 }}>这是带底部栏的卡片</p>
          <div style={{ padding: '0 16px 16px', display: 'flex', gap: '8px' }}>
            <Button type="primary">确定</Button>
            <Button>取消</Button>
          </div>
        </Card>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>日程表 Schedule</h2>
      <div style={{ marginBottom: '24px', width: '600px' }}>
        <NaSchedule />
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>菜单 Menu</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <Menu label="主菜单">
          <MenuItem label="选项一" />
          <MenuItem label="选项二" />
          <MenuItem label="选项三" disabled />
        </Menu>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>对话框 Dialog</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button type="primary" onClick={() => setDialogVisible(true)}>
          打开基础对话框
        </Button>
        <Button onClick={() => setDialogVisible2(true)}>
          打开自定义宽度对话框
        </Button>
        <Button onClick={() => setDialogVisible3(true)}>
          打开无底部栏对话框
        </Button>
      </div>

      <Dialog
        visible={dialogVisible}
        title="基础对话框"
        onClose={() => setDialogVisible(false)}
        onConfirm={() => {
          alert("点击了确定");
          setDialogVisible(false);
        }}
      >
        <p>这是对话框的内容区域，您可以放置任何内容。</p>
        <p>支持多行文本和其他组件。</p>
      </Dialog>

      <Dialog
        visible={dialogVisible2}
        title="自定义宽度对话框"
        width={800}
        onClose={() => setDialogVisible2(false)}
        onConfirm={() => setDialogVisible2(false)}
        confirmText="保存"
        cancelText="放弃"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p>这个对话框设置了自定义宽度为 800px。</p>
          <p>您可以通过 width 属性设置任意宽度。</p>
          <Input value="" placeholder="示例输入框" onChange={() => {}} />
        </div>
      </Dialog>

      <Dialog
        visible={dialogVisible3}
        title="无底部栏对话框"
        showFooter={false}
        onClose={() => setDialogVisible3(false)}
      >
        <p>这个对话框隐藏了底部操作栏。</p>
        <p>您可以通过 showFooter={false} 来隐藏底部栏。</p>
        <p>点击右上角的关闭按钮或点击遮罩层可以关闭对话框。</p>
      </Dialog>
    </div>
  );
};
render(App(), document.getElementById("app"));

