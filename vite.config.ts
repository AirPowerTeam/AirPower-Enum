import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'main',
      formats: ['es', 'cjs'],
      fileName: format => `main.${format}.js`,
    },
    rollupOptions: {
      external: [],
    },
  },
  plugins: [dts()],
})
