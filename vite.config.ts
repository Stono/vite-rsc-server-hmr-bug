import { unstable_reactRouterRSC as reactRouterRSC } from '@react-router/dev/vite'
import rsc from '@vitejs/plugin-rsc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactRouterRSC(), rsc()],
  server: {
    port: 3003,
    strictPort: true
  }
})