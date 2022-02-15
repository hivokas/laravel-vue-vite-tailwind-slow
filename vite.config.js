import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';

import postcssImport from 'postcss-import';
import tailwindCss from 'tailwindcss';
import tailwindCssConfig from './tailwind.config.js';
import postcssColorFunction from 'postcss-color-function';
import tailwindNesting from 'tailwindcss/nesting';
import autoprefixer from 'autoprefixer';

export default defineConfig(async ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: command === 'serve' ? '' : '/build/',
    publicDir: false,
    server: {
      port: env.VITE_PORT || 3000,
      strictPort: true,
      open: false,
      https: false,
      hmr: {
        host: 'localhost',
      },
    },
    css: {
      postcss: {
        plugins: [
          postcssImport,
          tailwindNesting,
          tailwindCss(tailwindCssConfig),
          postcssColorFunction,
          autoprefixer,
        ],
      },
    },
    build: {
      sourcemap: true,
      target: [
        // https://caniuse.com/es6-module
        // https://caniuse.com/es6-module-dynamic-import
        'es2019',
        'firefox67',
        'edge79',
        'chrome63',
        'safari11.1',
      ],
      manifest: true,
      brotliSize: false,
      outDir: 'public/build',
      rollupOptions: {
        input: [
          'resources/js/app.js',
        ],
        output: {
          // https://rollupjs.org/guide/en/#outputentryfilenames
          entryFileNames: '~[name].[hash].js',
          // https://rollupjs.org/guide/en/#outputchunkfilenames
          chunkFileNames: '~[name].[hash].js',
          // https://rollupjs.org/guide/en/#outputassetfilenames
          assetFileNames: '~[name].[hash].[ext]',
        },
      },
    },
    plugins: [vue()],
  };
});
