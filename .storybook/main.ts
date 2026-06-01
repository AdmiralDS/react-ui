import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'node:path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    disableTelemetry: true,
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-designs',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    'storybook-addon-dir',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: true,
  },

  webpackFinal: async (config) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...(Array.isArray(config.resolve.alias) ? {} : config.resolve.alias),
      '@admiral-ds/flags$': path.resolve(__dirname, '../node_modules/@admiral-ds/flags/dist/index.es.js'),
    };
    config.resolve.plugins ??= [];

    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.paths.json'),
        extensions: config.resolve.extensions,
      }),
    );

    config.module ??= {};
    config.module.rules ??= [];

    // disable whatever is already set to load SVGs
    // config.module.rules
    //   .filter((rule: any) => rule.test.test('.svg'))
    //   .forEach((rule: any) => (rule.exclude = /\.svg$/i));

    config.module.rules
      .filter((rule: any) => rule.test?.test('.tsx'))
      .forEach((rule: any) => (rule.resourceQuery = { not: [/raw/] }));

    // add SVGR instead
    config.module.rules.push(
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[path][name].[ext]',
            },
          },
        ],
        type: 'javascript/auto',
        issuer: {
          and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        },
      },
    );

    return config;
  },
};
export default config;
