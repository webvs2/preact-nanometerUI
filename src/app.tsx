import { render } from "preact";
import {
  Button,
  // NaSchedule,
  // NaBadge,
  // Card,
  // message,
  // Input,
  // Select,
  // Radio,
  // Tooltip,
  // RadioGroup,
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
      <h1 style={{ marginBottom: '32px', fontSize: '28px', color: '#1f2937' }}>preact-nanometerUI Button 组件</h1>
      
      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>基础按钮</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>禁用状态</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button disabled>Default</Button>
        <Button type="primary" disabled>Primary</Button>
        <Button type="success" disabled>Success</Button>
        <Button type="warning" disabled>Warning</Button>
        <Button type="danger" disabled>Danger</Button>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>文本按钮</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button>Text</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>不同尺寸</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button type="primary" size="small">Small</Button>
        <Button type="primary" size="normal">Normal</Button>
        <Button type="primary" size="medium">Medium</Button>
        <Button type="primary" size="large">Large</Button>
      </div>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px', color: '#374151' }}>圆角按钮</h2>
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button round>Default</Button>
        <Button type="primary" round>Primary</Button>
        <Button type="success" round>Success</Button>
        <Button type="warning" round>Warning</Button>
        <Button type="danger" round>Danger</Button>
      </div>
    </div>
  );
};
render(App(), document.getElementById("app"));

