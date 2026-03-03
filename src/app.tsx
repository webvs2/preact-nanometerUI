import { render } from "preact";
import {
  Button,
  Radio,
  RadioGroup,
  Select,
  Switch,
  // NaSchedule,
  // NaBadge,
  // Card,
  // message,
  // Input,
  // Tooltip,
  // Menu,
  // MenuItem,
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
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '28px', color: '#1f2937' }}>preact-nanometerUI 组件</h1>
      
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
    </div>
  );
};
render(App(), document.getElementById("app"));

