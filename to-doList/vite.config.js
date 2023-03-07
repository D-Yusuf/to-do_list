import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    main:resolve(__dirname, './public/index.html'),
    entry: resolve(__dirname, './public/main.js'),
  }
})