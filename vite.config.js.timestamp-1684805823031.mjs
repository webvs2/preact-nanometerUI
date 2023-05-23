// vite.config.js
import { defineConfig } from "file:///C:/Users/Administrator/Desktop/nanometerUI/node_modules/.pnpm/vite@4.2.0_@types+node@18.16.1_sass@1.62.0/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import preact from "file:///C:/Users/Administrator/Desktop/nanometerUI/node_modules/.pnpm/@preact+preset-vite@2.5.0_@babel+core@7.21.4_preact@10.15.0_vite@4.2.0/node_modules/@preact/preset-vite/dist/esm/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Administrator\\Desktop\\nanometerUI";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src"),
      "@public": resolve(__vite_injected_original_dirname, "public"),
      "@toolkit": resolve(__vite_injected_original_dirname, "src/toolkit")
    },
    extensions: [".js", ".ts", ".jsx", ".tsx"]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import'@/css/mixin.scss'; @import'@/css/function.scss'; @import'@/css/variables.scss';`
      }
    }
  },
  plugins: [preact()],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./src/plugin/index"),
      name: "nanometer",
      fileName: "lib"
    },
    rollupOptions: {
      external: ["lodash-es"],
      output: {
        globals: {
          vue: "lodash-es"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcbmFub21ldGVyVUlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcRGVza3RvcFxcXFxuYW5vbWV0ZXJVSVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL25hbm9tZXRlclVJL3ZpdGUuY29uZmlnLmpzXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgcHJlYWN0IGZyb20gJ0BwcmVhY3QvcHJlc2V0LXZpdGUnXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG4gICAgICAnQHB1YmxpYyc6IHJlc29sdmUoX19kaXJuYW1lLCAncHVibGljJyksXHJcbiAgICAgICdAdG9vbGtpdCc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3Rvb2xraXQnKSxcclxuICAgIH0sXHJcbiAgICBleHRlbnNpb25zOiBbJy5qcycsICcudHMnLCAnLmpzeCcsICcudHN4JyxdXHJcbiAgfSxcclxuICBjc3M6e1xyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczp7XHJcbiAgICAgIHNjc3M6e1xyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOmBAaW1wb3J0J0AvY3NzL21peGluLnNjc3MnOyBAaW1wb3J0J0AvY3NzL2Z1bmN0aW9uLnNjc3MnOyBAaW1wb3J0J0AvY3NzL3ZhcmlhYmxlcy5zY3NzJztgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHBsdWdpbnM6IFtwcmVhY3QoKV0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9wbHVnaW4vaW5kZXgnKSxcclxuICAgICAgbmFtZTogJ25hbm9tZXRlcicsXHJcbiAgICAgIGZpbGVOYW1lOiAnbGliJyxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbJ2xvZGFzaC1lcyddLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICB2dWU6ICdsb2Rhc2gtZXMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sWUFBWTtBQUhuQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQzdCLFdBQVcsUUFBUSxrQ0FBVyxRQUFRO0FBQUEsTUFDdEMsWUFBWSxRQUFRLGtDQUFXLGFBQWE7QUFBQSxJQUM5QztBQUFBLElBQ0EsWUFBWSxDQUFDLE9BQU8sT0FBTyxRQUFRLE1BQU87QUFBQSxFQUM1QztBQUFBLEVBQ0EsS0FBSTtBQUFBLElBQ0YscUJBQW9CO0FBQUEsTUFDbEIsTUFBSztBQUFBLFFBQ0gsZ0JBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsT0FBTyxDQUFDO0FBQUEsRUFDbEIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLE1BQzlDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsV0FBVztBQUFBLE1BQ3RCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
