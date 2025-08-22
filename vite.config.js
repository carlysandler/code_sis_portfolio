import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vueJsx(),
    vuetify({ autoImport: true }),
    Components({
      resolvers: [VuetifyResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '\n@import \'@/styles/index.scss\';\n@import \'~typeface-inter/inter.css\';'
      },
      sass: {
        additionalData: '\n@import \'vuetify/lib/styles/settings/_variables.scss\''
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})