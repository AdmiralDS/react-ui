import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import tscAlias from 'rollup-plugin-tsc-alias';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import terser from '@rollup/plugin-terser';
import { createTransformer } from 'typescript-plugin-styled-components';

const styledComponentsTransformer = createTransformer({ ssr: true, displayName: true });

export default [
  {
    input: ['./src/index.ts'],
    output: [
      {
        dir: 'dist',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
        interop: 'auto',
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
        exclude: [
          '*/**/*.stories.*',
          'src/**/stories/**',
          'src/**/Stories/**',
          '*/**/*.test.*',
          'src/colors/**',
          'src/icons/**',
        ],
        transformers: [
          () => ({
            before: [styledComponentsTransformer],
          }),
        ],
      }),
      tscAlias(),
      terser({ ecma: '2021', mangle: false }),
    ],
  },
];
