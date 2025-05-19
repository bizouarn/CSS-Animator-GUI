import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: '/CSS-Animator-GUI/',
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
});