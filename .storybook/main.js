const { mergeConfig } = require('vite');
const { resolve } = require('path');
const svgr = require('@svgr/rollup');

// used by JSON stringify to fix circular references
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

const sourceDir = resolve(__dirname, '../src');

module.exports = {
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  features: {
    emotionAlias: false,
  },
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
    'storybook-addon-designs',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.tsx?$/],
          include: [sourceDir],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
          injectStoryParameters: false,
        },
      },
    },
  ],
  typescript: {
    check: true, // type-check stories during Storybook build
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: './tsconfig.json',
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  async viteFinal(storybookConfig) {
    console.log(`vite config =>>> ${JSON.stringify(storybookConfig, getCircularReplacer(), 2)}`);
    return mergeConfig(storybookConfig, {
      resolve: {
        alias: {
          '#src': sourceDir,
        },
      },
      plugins: [
        // react({
        //   babel: {
        //     plugins: [
        //       [
        //         '@emotion',
        //         {
        //           // sourceMap is on by default but source maps are dead code eliminated in production
        //           sourceMap: true,
        //           autoLabel: 'always',
        //           labelFormat: '[local]',
        //           cssPropOptimization: true,
        //         },
        //       ],
        //     ],
        //   },
        // }),
        svgr({ dimensions: false, svgProps: { focusable: '{false}' } }),
      ],
    });
  },
};
