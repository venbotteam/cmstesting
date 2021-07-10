import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: process.env.PORT,
    open: false,
    cors: true
  },
  base:'./',
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ]
  },
})
