# Carousel 走马灯

图片或内容轮播组件，用于展示多张图片或内容。

## 基本用法

```jsx
import { Carousel } from 'preact-nanometerui';

function App() {
  return (
    <Carousel>
      <div style={{ width: '100%', height: '300px', background: '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Slide 1
      </div>
      <div style={{ width: '100%', height: '300px', background: '#f093fb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Slide 2
      </div>
      <div style={{ width: '100%', height: '300px', background: '#4facfe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Slide 3
      </div>
    </Carousel>
  );
}
```

## 禁用自动播放

```jsx
import { Carousel } from 'preact-nanometerui';

function App() {
  return (
    <Carousel autoplay={false}>
      <div style={{ width: '100%', height: '300px', background: '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Slide 1
      </div>
      <div style={{ width: '100%', height: '300px', background: '#f093fb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Slide 2
      </div>
    </Carousel>
  );
}
```

## 自定义播放速度

```jsx
import { Carousel } from 'preact-nanometerui';

function App() {
  return (
    <Carousel autoplaySpeed={2000}>
      <div style={{ width: '100%', height: '300px', background: '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        2秒切换
      </div>
      <div style={{ width: '100%', height: '300px', background: '#f093fb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        2秒切换
      </div>
    </Carousel>
  );
}
```

## 隐藏圆点指示器

```jsx
import { Carousel } from 'preact-nanometerui';

function App() {
  return (
    <Carousel dots={false}>
      <div style={{ width: '100%', height: '300px', background: '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Slide 1
      </div>
      <div style={{ width: '100%', height: '300px', background: '#f093fb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Slide 2
      </div>
    </Carousel>
  );
}
```

## 隐藏箭头

```jsx
import { Carousel } from 'preact-nanometerui';

function App() {
  return (
    <Carousel arrows={false}>
      <div style={{ width: '100%', height: '300px', background: '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Slide 1
      </div>
      <div style={{ width: '100%', height: '300px', background: '#f093fb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Slide 2
      </div>
    </Carousel>
  );
}
```

## API

### Carousel Props

| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `autoplay` | `boolean` | 是否自动播放 | `true` |
| `autoplaySpeed` | `number` | 自动播放间隔（毫秒） | `3000` |
| `dots` | `boolean` | 是否显示圆点指示器 | `true` |
| `arrows` | `boolean` | 是否显示左右箭头 | `true` |
| `children` | `any` | 轮播内容 | `undefined` |

## 样式

### 类名说明

| 类名 | 说明 |
| --- | --- |
| `na-carousel` | 走马灯容器 |
| `na-carousel__track` | 轮播轨道 |
| `na-carousel__item` | 轮播项 |
| `na-carousel__arrow` | 箭头按钮 |
| `na-carousel__arrow--prev` | 左箭头 |
| `na-carousel__arrow--next` | 右箭头 |
| `na-carousel__dots` | 圆点指示器容器 |
| `na-carousel__dot` | 圆点指示器 |
| `na-carousel__dot--active` | 激活状态的圆点指示器 |
