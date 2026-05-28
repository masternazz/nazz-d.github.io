import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://masternazz.com',
  build: {
    format: 'file',
  },
  output: 'static',
});
