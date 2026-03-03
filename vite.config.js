import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'classnames': path.resolve(__dirname, './node_modules/classnames'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'legacy',
      },
    },
  },
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/plugins/index.ts'),
      name: 'preact-nanometerUI',
      fileName: (format) => {
        if (format === 'es') {
          return 'lib.js'
        }
        return `lib.${format}.cjs`
      },
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['preact', 'preact/compat', 'preact/hooks', '@floating-ui/react'],
      output: {
        globals: {
          preact: 'Preact',
          'preact/compat': 'PreactCompat',
          'preact/hooks': 'PreactHooks',
          '@floating-ui/react': 'FloatingUIReact'
        },
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'style.css'
          }
          return assetInfo.name
        },
        preserveModules: false,
        compact: true
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'],
      pure: ['console.log']
    },
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    cssMinify: true,
    cssCodeSplit: false,
    target: 'es2015',
    reportCompressedSize: true
  }
})
