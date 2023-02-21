import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { TextButton } from '#src/components/TextButton';
import {
  NotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
} from '#src/components/NotificationItem/index';

describe('NotificationItem', () => {
  it('should render error components with all properties', () => {
    const handleClick = jest.fn();
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <NotificationItem status="info" isClosable displayStatusIcon onClose={handleClick}>
          <NotificationItemTitle>Title</NotificationItemTitle>
          <NotificationItemContent>text</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text="Link" />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
