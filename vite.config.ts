import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'AirPowerEnum',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => `main.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          main: 'AirPowerEnum',
        },
      },
    },
  },
  plugins: [dts()],
})
