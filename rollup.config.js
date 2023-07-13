import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import terser from '@rollup/plugin-terser';
import { getFiles } from './scripts/buildUtils.js';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
const excludeExtensions = [
  'test.js',
  'test.ts',
  'test.jsx',
  'test.tsx',
  'stories.js',
  'stories.ts',
  'stories.jsx',
  'stories.tsx',
  'd.ts',
  'Stories',
];

export default [
  {
    input: ['./src/index.ts', ...getFiles('./src/components', extensions, excludeExtensions)],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
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
        exclude: ['*/**/*.stories.*', 'src/**/Stories/**', '*/**/*.test.*', 'src/colors/**', 'src/icons/**'],
      }),
      terser(),
    ],
  },
];
