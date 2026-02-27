import { configs } from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';

// Временный блок для мягкого перехода.
// Для новых проектов: все правила из этого блока должны быть выставлены в `error`.
const SOFT_MIGRATION_RULES = {
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-empty-object-type': 'warn',
  // Note: you must disable the base rule as it can report incorrect errors
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'warn',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-dynamic-delete': 'warn',
};

export default defineConfig([
  ...configs.strict,
  importPlugin.flatConfigs.recommended,
  {
    rules: {
      'import/no-named-as-default': 'off', // для совместимости с styled-components v5
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'warn',
      'prettier/prettier': 'error',
      'import/no-cycle': ['error', { ignoreExternal: true }],
      'import/no-duplicates': ['error', { considerQueryString: true }],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      ...SOFT_MIGRATION_RULES
    },
    plugins: {},
    settings: {
      'import/ignore': [
        '.(scss|less|css)$', // can't parse unprocessed CSS modules, either
      ],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
      },
      'import/resolver': {
        typescript: {},
      },
    },
    ignores: ['.eslintrc.cjs', 'scripts/**', '*.svg', 'dist/**', 'docs/**', 'node_modules/**'],
  },
  eslintPluginPrettierRecommended,
]);
