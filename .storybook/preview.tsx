import * as React from 'react';
import { useEffect, useState } from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

import {
  DARK_THEME,
  LIGHT_THEME,
  FontsVTBGroup,
  DropdownProvider,
  LightThemeCssVars,
  DarkThemeCssVars,
} from '@admiral-ds/react-ui';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    html {
      background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
    }
`;

export const parameters = {
  options: {
    storySort: {
      includeName: true,
      locales: 'en-US',
      order: ['Admiral-2.1', ['Atoms', 'Input', 'Form Field', 'Data Table']],
    },
  },
};
// get channel to listen to event emitter
const channel = addons.getChannel();

// create a component that uses the dark mode hook
function ThemeWrapper(props) {
  // this example uses hook but you can also use class component as well
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);
  // render your custom theme provider
  return (
    <ThemeProvider theme={isDark ? DARK_THEME : LIGHT_THEME}>
      {isDark ? <DarkThemeCssVars /> : <LightThemeCssVars />}
      {props.children}
    </ThemeProvider>
  );
}

const StoryContainer = styled.div.attrs((p) => ({
  className: p.theme.name == 'light' ? 'admiral-light-theme' : 'admiral-dark-theme',
}))`
  padding: 3em;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

export const decorators = [
  (renderStory) => (
    <ThemeWrapper>
      <GlobalStyles />
      <DropdownProvider>
        <StoryContainer>{renderStory()}</StoryContainer>
      </DropdownProvider>
    </ThemeWrapper>
  ),
  (Story) => (
    <>
      <FontsVTBGroup />
      <Story />
    </>
  ),
];
