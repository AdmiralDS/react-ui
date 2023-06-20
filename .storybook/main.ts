import type { StorybookConfig } from '@storybook/react-webpack5';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/components/Accordion/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve)
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];

    if (config.module?.rules) {
      // disable whatever is already set to load SVGs
      // config.module.rules
      //   .filter((rule: any) => rule.test.test('.svg'))
      //   .forEach((rule: any) => (rule.exclude = /\.svg$/i));

      // add SVGR instead
      config.module.rules.push({
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
      });
    }
    return config;
  },
};
export default config;
