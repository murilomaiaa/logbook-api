import { defineConfig } from 'vitest/config'
import tsConfigTest from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsConfigTest()],
  test: {
    globals: true,
  },
})
