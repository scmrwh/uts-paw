import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'
export default {
  configFile: false,
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['src/__rubrik__38f4dc7f6b59/rubrik.test.jsx'],
    setupFiles: existsSync('src/setupTests.js') ? ['./src/setupTests.js'] : [],
  },
}
