import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import svgr from '@svgr/rollup';
import { resolve } from 'path';
import commonjs from '@rollup/plugin-commonjs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export const config = {
  resolve: {
    alias: {
      '#src': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      plugins: [commonjs(), peerDepsExternal()],
    },
    sourcemap: true,
    target: ['es2019'],
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@emotion',
            {
              // sourceMap is on by default but source maps are dead code eliminated in production
              sourceMap: true,
              autoLabel: 'always',
              labelFormat: '[local]',
              cssPropOptimization: true,
            },
          ],
        ],
      },
    }),
    svgr({ dimensions: false, svgProps: { focusable: '{false}' } }),
  ],
} as UserConfig;

// https://vitejs.dev/config/
export default defineConfig(config);
