import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { LIGHT_THEME, DARK_THEME, DropdownProvider } from '@admiral-ds/react-ui';
import * as React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        includeName: true,
        locales: 'en-US',
        order: ['Admiral-2.1', ['Atoms', 'Input', 'Form Field', 'Data Table']],
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
    (renderStory) => (
      <DropdownProvider>
        {renderStory()}
      </DropdownProvider>
    )
  ],
};

export default preview;
