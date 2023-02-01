import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { Notification } from '#src/components/Notification';

describe('Notification', () => {
  it('should render error components with all properties', () => {
    const handleClick = jest.fn();
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Notification
          status="info"
          isClosable
          title="Title"
          displayStatusIcon
          linkText="Link"
          href="http://localhost"
          onClose={handleClick}
        >
          text
        </Notification>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
