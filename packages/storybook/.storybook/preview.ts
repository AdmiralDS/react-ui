import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { LIGHT_THEME, DARK_THEME } from '@admiral-ds/react-ui';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: LIGHT_THEME,
        dark: DARK_THEME,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
