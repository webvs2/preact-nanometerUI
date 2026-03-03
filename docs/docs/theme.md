# 主题定制

preact-nanometerUI 支持灵活的主题定制，你可以通过 CSS 变量轻松修改颜色、字体等样式。

## CSS 变量

### 颜色变量

```css
:root {
  /* 主色调 */
  --nm-primary: #9333EA;
  --nm-primary-light: #A855F7;
  --nm-primary-dark: #7E22CE;
  
  /* 辅助色 */
  --nm-success: #10B981;
  --nm-warning: #F59E0B;
  --nm-error: #EF4444;
  --nm-info: #3B82F6;
  
  /* 中性色 */
  --nm-gray-50: #F9FAFB;
  --nm-gray-100: #F3F4F6;
  --nm-gray-200: #E5E7EB;
  --nm-gray-300: #D1D5DB;
  --nm-gray-400: #9CA3AF;
  --nm-gray-500: #6B7280;
  --nm-gray-600: #4B5563;
  --nm-gray-700: #374151;
  --nm-gray-800: #1F2937;
  --nm-gray-900: #111827;
}
```

### 字体变量

```css
:root {
  /* 字体家族 */
  --nm-font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --nm-font-mono: 'Fira Code', 'Monaco', monospace;
  
  /* 字体大小 */
  --nm-font-size-xs: 0.75rem;
  --nm-font-size-sm: 0.875rem;
  --nm-font-size-base: 1rem;
  --nm-font-size-lg: 1.125rem;
  --nm-font-size-xl: 1.25rem;
  --nm-font-size-2xl: 1.5rem;
  --nm-font-size-3xl: 1.875rem;
  --nm-font-size-4xl: 2.25rem;
}
```

### 间距变量

```css
:root {
  --nm-spacing-1: 0.25rem;
  --nm-spacing-2: 0.5rem;
  --nm-spacing-3: 0.75rem;
  --nm-spacing-4: 1rem;
  --nm-spacing-5: 1.25rem;
  --nm-spacing-6: 1.5rem;
  --nm-spacing-8: 2rem;
  --nm-spacing-10: 2.5rem;
  --nm-spacing-12: 3rem;
  --nm-spacing-16: 4rem;
}
```

### 圆角变量

```css
:root {
  --nm-radius-none: 0;
  --nm-radius-sm: 0.125rem;
  --nm-radius-md: 0.375rem;
  --nm-radius-lg: 0.5rem;
  --nm-radius-xl: 0.75rem;
  --nm-radius-2xl: 1rem;
  --nm-radius-full: 9999px;
}
```

## 如何自定义主题

### 方法一：全局覆盖 CSS 变量

在你的项目入口文件或全局样式文件中：

```css
/* 自定义主题 */
:root {
  --nm-primary: #2563EB; /* 蓝色主题 */
  --nm-primary-light: #3B82F6;
  --nm-primary-dark: #1D4ED8;
}
```

### 方法二：动态切换主题

```javascript
// 切换到深色主题
function setDarkTheme() {
  document.documentElement.style.setProperty('--nm-primary', '#A855F7')
  document.documentElement.style.setProperty('--nm-gray-900', '#F9FAFB')
  document.documentElement.style.setProperty('--nm-gray-50', '#111827')
}

// 切换到浅色主题
function setLightTheme() {
  document.documentElement.style.setProperty('--nm-primary', '#9333EA')
  document.documentElement.style.setProperty('--nm-gray-900', '#111827')
  document.documentElement.style.setProperty('--nm-gray-50', '#F9FAFB')
}
```

## 预设主题

### 紫色主题（默认）

```css
:root {
  --nm-primary: #9333EA;
  --nm-primary-light: #A855F7;
  --nm-primary-dark: #7E22CE;
}
```

### 蓝色主题

```css
:root {
  --nm-primary: #2563EB;
  --nm-primary-light: #3B82F6;
  --nm-primary-dark: #1D4ED8;
}
```

### 绿色主题

```css
:root {
  --nm-primary: #059669;
  --nm-primary-light: #10B981;
  --nm-primary-dark: #047857;
}
```

### 橙色主题

```css
:root {
  --nm-primary: #EA580C;
  --nm-primary-light: #F97316;
  --nm-primary-dark: #C2410C;
}
```

## 主题定制最佳实践

1. **保持一致性**：确保你的主题颜色在整个应用中保持一致
2. **考虑可访问性**：确保颜色对比度符合 WCAG 标准
3. **提供默认值**：始终为自定义变量提供合理的默认值
4. **测试主题**：在不同设备和浏览器中测试你的主题
