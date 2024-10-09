import { render } from '@testing-library/react';

import { Spinner } from './';
// import { useDarkMode } from 'storybook-dark-mode';
import { LIGHT_THEME } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';

describe('Spinner', () => {
  it('should render default component', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Spinner />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with small dimension', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Spinner dimension="s" />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with inverse color', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Spinner inverse />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
