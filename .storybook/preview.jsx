import * as React from 'react';
import { version } from '../package.json';
import { ThemeProvider } from 'styled-components';
import { themes } from '@storybook/theming';

import { DARK_THEME, LIGHT_THEME } from '#src/components/themes';
import { FontsVTBGroup } from '#src/components/FontsVTBGroup';
import { useDarkMode } from 'storybook-dark-mode';
import styled from 'styled-components';

import LogoSvg from './Logo.svg';

const customTheme = {
  brandImage: LogoSvg,
  brandTitle: `version ${version}`,
};

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, ...customTheme },
    // Override the default light theme
    light: { ...themes.light, ...customTheme },
  },
  options: {
    storySort: {
      includeName: true,
      locales: 'en-US',
      order: ['Admiral-2.1', ['Atoms', 'Input', 'Form Field']],
    },
  },
};

// create a component that uses the dark mode hook
function ThemeWrapper(props) {
  // render your custom theme provider
  return <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>{props.children}</ThemeProvider>;
}

const StoryContainer = styled.div`
  padding: 3em;
  background-color: ${(props) => props.theme.color.background.primary};
`;

export const decorators = [
  (renderStory) => (
    <ThemeWrapper>
      <StoryContainer>{renderStory()}</StoryContainer>
    </ThemeWrapper>
  ),
  (Story) => (
    <>
      <FontsVTBGroup />
      <Story />
    </>
  ),
];
