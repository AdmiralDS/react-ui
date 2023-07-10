import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';

// import packageJson from "./package.json" assert { type: "json" };
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

const { main, module: _module } = packageJson;
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: _module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      url(),
      svgr({
        dimensions: false,
        svgProps: {
          focusable: '{false}',
        },
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        exclude: ['*/**/*.stories.*', '*/**/*.test.*'],
      }),
    ],
  },
];
