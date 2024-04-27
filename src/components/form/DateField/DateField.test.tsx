import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LIGHT_THEME } from '#src/components/themes';
import { DateField } from '#src/components/form/DateField';
import { act } from 'react';

const testId = 'my test input';

describe('DateField', () => {
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DateField id="some static snapshot id" data-testid={testId} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should focus on component when user on press key tab', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DateField data-testid={testId} />
      </ThemeProvider>,
    );
    await act(async () => {
      await user.tab();
    });
    const input = screen.getByTestId(testId) as HTMLInputElement;
    await act(async () => {
      await user.keyboard('21.0');
    });
    expect(input.value).toBe('21.0_.____');
    await act(async () => {
      await user.keyboard('2.2023');
    });
    expect(input.value).toBe('21.02.2023');
  });
});
