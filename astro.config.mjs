import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://agboroddy-eng.github.io/roddyagbo.github.io',
  base: '/roddyagbo.github.io',
  compressHTML: true,
  build: {
    format: 'directory'
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
        ignored: ['**/public/images/**', '**/node_modules/**']
      }
    }
  }
});
