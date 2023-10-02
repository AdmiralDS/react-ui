import * as React from 'react';
import { useEffect, useState } from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

import { DARK_THEME, LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    html {
      background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};
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
  return <ThemeProvider theme={isDark ? DARK_THEME : LIGHT_THEME}>{props.children}</ThemeProvider>;
}

const StoryContainer = styled.div`
  padding: 3em;
  background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};
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
