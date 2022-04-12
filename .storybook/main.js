const path = require('path');

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

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
    'storybook-addon-designs',
    'storybook-dark-mode',
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
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // For runtime config debugging
    // console.log(`>>>> ${JSON.stringify(config.module.rules, getCircularReplacer(), 2)}`);

    config.module.rules = [
      {
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack', options: { dimensions: false, svgProps: { focusable: '{false}' } } }],
      },
      {
        test: /\.js$/,
        include: /node_modules\/ansi-regex|strip-ansi/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/preset-env'],
        },
      },
      ...config.module.rules,
    ];

    config.resolve.alias['#'] = path.resolve(__dirname, '../src');
    // Return the altered config
    return config;
  },
};
