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
      fileName: format => `airpower-enum.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          'airpower-enum': 'AirPowerEnum',
        },
      },
    },
  },
  plugins: [dts()],
})
