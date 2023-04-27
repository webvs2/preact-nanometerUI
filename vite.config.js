
import { defineConfig } from 'vite'
import { resolve } from 'path'
import preact from '@preact/preset-vite'
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') 
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx',]
  },
  // esbuild: {
  //   jsxFactory: 'h',
  //   jsxFragment: 'Fragment',
  // },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@import'@/css/mixin.scss'; @import'@/css/function.scss';`
      }
    }
  },
  plugins: [preact()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/main.ts'),
      name: 'nanometer',
      fileName: 'lib',
    },
    rollupOptions: {
    }
  }
})
