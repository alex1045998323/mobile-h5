import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import { resolve } from 'path'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://www.baidu.com',
        logLevel: 'debug',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  plugins: [vue(), AutoImport({
    resolvers: [VantResolver()]
  }), Components({
    resolvers: [VantResolver()]
  }), sentryVitePlugin({
    org: "cebbc7bcc07c",
    project: "javascript-vue"
  })],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },

  build: {
    sourcemap: true
  }
})