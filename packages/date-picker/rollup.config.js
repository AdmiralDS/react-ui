const resolve = require("@rollup/plugin-node-resolve").default;
const typescript = require("@rollup/plugin-typescript").default;
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      typescript({
        exclude: ['*/**/*.stories.*', '*/**/*.test.*']
      }),
    ],
  },
];
