import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '#src/components/themes';

import { Pulse } from '.';

describe('Pulse', () => {
  it('should render default component', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Pulse />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with different dimensions', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Pulse dimension="l" />
        <Pulse dimension="m" />
        <Pulse dimension="s" />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with different statuses', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Pulse status="info" />
        <Pulse status="danger" />
        <Pulse status="success" />
        <Pulse status="warning" />
        <Pulse status={{ background: '#8A3FFC' }} />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
