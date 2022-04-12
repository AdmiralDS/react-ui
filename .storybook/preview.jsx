import * as React from 'react';
import { version } from '../package.json';
import { ThemeProvider } from 'styled-components';
import { themes } from '@storybook/theming';
import LogoVTB from './Logo.svg';

import { DARK_THEME, LIGHT_THEME } from '#/components/themes';
import { FontsVTBGroup } from '#/components/FontsVTBGroup';
import { useDarkMode } from 'storybook-dark-mode';
import styled from 'styled-components';

const customTheme = {
  brandImage: LogoVTB,
  brandTitle: `version ${version}`,
};

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, ...customTheme },
    // Override the default light theme
    light: { ...themes.light, ...customTheme },
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
