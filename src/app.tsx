import { render } from "preact";
import {
  Button,
  Radio,
  RadioGroup,
  // NaSchedule,
  // NaBadge,
  // Card,
  // message,
  // Input,
  // Select,
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
    </div>
  );
};
render(App(), document.getElementById("app"));

