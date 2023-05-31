import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json' assert { type: 'json' };

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
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        exclude: ['*/**/*.stories.*', '*/**/*.test.*'],
      }),
    ],
  },
];
