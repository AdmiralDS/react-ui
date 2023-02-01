import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import {
  Notification,
  NotificationButtonPanel,
  NotificationContent,
  NotificationTitle,
} from '#src/components/Notification';
import { TextButton } from '#src/components/TextButton';

describe('Notification', () => {
  it('should render error components with all properties', () => {
    const handleClick = jest.fn();
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Notification status="info" isClosable displayStatusIcon onClose={handleClick}>
          text
          <NotificationTitle>Title</NotificationTitle>
          <NotificationContent>text</NotificationContent>
          <NotificationButtonPanel>
            <TextButton dimension="s" text="Link" />
          </NotificationButtonPanel>
        </Notification>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
