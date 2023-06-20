module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  rules: {
    'no-console': 1,
    // Means warning
    'prettier/prettier': 2,
    // Means error,
    'import/no-cycle': [2, {
      ignoreExternal: true
    }],
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports'
    }]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx']
    },
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.stories.tsx', '.ts', '.tsx', '.js', '.jsx']
          }
        }
      },
      typescript: {
        // "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        //
        // // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
        //
        // // use <root>/path/to/folder/tsconfig.json
        // "project": "path/to/folder",
        //
        // // Multiple tsconfigs (Useful for monorepos)
        //
        // // use a glob pattern
        // "project": "packages/*/tsconfig.json",
        //
        // // use an array
        // "project": [
        //   "packages/module-a/tsconfig.json",
        //   "packages/module-b/tsconfig.json"
        // ],
        //
        project: ['packages/*/tsconfig.json']
      }
    }
  }
};