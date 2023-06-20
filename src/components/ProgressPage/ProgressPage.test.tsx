import { ProgressPage } from '#src/components/ProgressPage';
import { LIGHT_THEME } from '#src/components/themes';
import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const label = 'Загрузка данных...';

describe('ProgressBar', () => {
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ProgressPage label={label} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  test('should render component with prop appearance=error', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ProgressPage label={label} appearance="error" />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should render component with prop percent', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ProgressPage label={label} percent={50} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
