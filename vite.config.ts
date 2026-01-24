import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron/simple'

export default defineConfig({
  plugins: [
    react(),
    electron({
      main: {
        entry: 'electron/main.ts',
      },
      preload: {
        input: path.join(__dirname, 'electron/preload.ts'),
      },
      renderer: {},
    }),
  ],
  build: {
    rollupOptions: {
      external: ['bufferutil', 'utf-8-validate'],
      input: {
        preload: path.join(__dirname, 'src/preload.mjs'),
        main: path.join(__dirname, 'src/main.ts'),
      }
    },

  }
})
