import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://masternazz.com',
  output: 'static',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
});
