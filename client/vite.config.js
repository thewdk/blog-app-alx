import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    hmr: {
      overlay: false,  // Optional: disable the error overlay
    },
  },
})
