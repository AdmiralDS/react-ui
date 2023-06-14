import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '#src': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: { dimensions: false, svgProps: { focusable: '{false}' } },
    }),
  ],
  build: {
    rollupOptions: {
      plugins: [commonjs()],
    },
  },
});
