import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"preact-nanometerUI","text":"轻量级 UI 框架","tagline":"易于使用，性能出色，适合嵌入式界面和小型网站的 UI 框架","actions":[{"theme":"brand","text":"快速上手","link":"/docs/quick-start"},{"theme":"alt","text":"安装","link":"/docs/installation"}]},"features":[{"icon":"⚡️","title":"轻量化","details":"基于 Preact.js，体积小，性能高，适合嵌入式设备"},{"icon":"📱","title":"响应式","details":"适配不同屏幕尺寸，从手机到桌面设备"},{"icon":"🎯","title":"易于使用","details":"简洁的 API 设计，易于集成和使用"},{"icon":"🎨","title":"主题定制","details":"支持自定义主题，满足不同项目需求"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
