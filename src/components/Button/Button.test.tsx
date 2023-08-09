import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LIGHT_THEME } from '#src/components/themes';
import { Button } from '#src/components/Button';

const BUTTON_TEXT = 'Button';

describe('Button', () => {
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Button />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render component with text', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Button>{BUTTON_TEXT}</Button>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders the button', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Button>{BUTTON_TEXT}</Button>
      </ThemeProvider>,
    );
    expect(screen.getByRole('button')).toHaveTextContent(`${BUTTON_TEXT}`);
  });

  test('should focus on component when user on press key tab', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Button>{BUTTON_TEXT}</Button>
      </ThemeProvider>,
    );
    expect(document.body).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('button')).toHaveFocus();
  });

  test('should dont focus component when user on press key tab', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Button disabled>{BUTTON_TEXT}</Button>
      </ThemeProvider>,
    );
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  test('should call onClick when user clicks on component', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Button onClick={handleClick}>{BUTTON_TEXT}</Button>
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByText(`${BUTTON_TEXT}`));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
