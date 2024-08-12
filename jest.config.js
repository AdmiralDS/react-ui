/* eslint-env node */

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  testEnvironment: '@happy-dom/jest-environment',

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },

  extensionsToTreatAsEsm: ['.ts'],

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'mdx'],
  transformIgnorePatterns: ['/node_modules/(?!(@admiral-ds/flags)/)'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/.jest/svgrMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/.jest/fileMock.js',
    '^#src/(.+)$': '<rootDir>/src/$1',
    '^@admiral-ds/react-ui$': '<rootDir>/src/index',
  },
};
