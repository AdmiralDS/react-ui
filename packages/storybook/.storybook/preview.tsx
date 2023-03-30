import type { Preview, ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';
import {
  DARK_THEME,
  DropdownProvider,
  FontsVTBGroup,
  LIGHT_THEME,
} from '@admiral-ds/react-ui';
import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

const GlobalStyles = createGlobalStyle`
`;

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
    (Story) => (
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <FontsVTBGroup />
          <Story />
        </DropdownProvider>
      </ThemeProvider>
    ),

    // withThemeFromJSXProvider({
    //   themes: {
    //     light: LIGHT_THEME,
    //     dark: DARK_THEME,
    //   },
    //   defaultTheme: 'light',
    //   Provider: ThemeProvider,
    //   GlobalStyles,
    // }) as DecoratorFunction<ReactRenderer>,
  ],
};

export default preview;
