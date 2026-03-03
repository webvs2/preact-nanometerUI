import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"组件库","description":"","frontmatter":{},"headers":[],"relativePath":"components/index.md","filePath":"components/index.md"}');
const _sfc_main = { name: "components/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="组件库" tabindex="-1">组件库 <a class="header-anchor" href="#组件库" aria-label="Permalink to &quot;组件库&quot;">​</a></h1><p>preact-nanometerUI 提供了一系列轻量级的 UI 组件，用于构建嵌入式界面和小型网站。</p><h2 id="基础组件" tabindex="-1">基础组件 <a class="header-anchor" href="#基础组件" aria-label="Permalink to &quot;基础组件&quot;">​</a></h2><ul><li><a href="./button.html">Button 按钮</a></li><li><a href="./input.html">Input 输入框</a></li><li><a href="./select.html">Select 选择器</a></li><li><a href="./radio.html">Radio 单选框</a></li><li><a href="./card.html">Card 卡片</a></li><li><a href="./badge.html">Badge 徽章</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
