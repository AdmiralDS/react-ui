import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import svgr from '@svgr/rollup';
import { resolve } from 'path';
import commonjs from '@rollup/plugin-commonjs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '#src': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `react-ui.${format}.js`,
    },
    rollupOptions: {
      plugins: [commonjs(), peerDepsExternal()],
    },
    sourcemap: true,
    target: ['es2019'],
  },
  plugins: [reactRefresh(), svgr({ dimensions: false, svgProps: { focusable: '{false}' } }) as Plugin],
});
