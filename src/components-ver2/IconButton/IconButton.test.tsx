import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LIGHT_THEME } from '#src/components-ver2/themes';
import { IconButton } from '#src/components-ver2/IconButton';

describe('IconButton', () => {
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <IconButton />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should focus on component when user on press key tab', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <IconButton />
      </ThemeProvider>,
    );
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByRole('button')).toHaveFocus();
  });

  test('should not focus component when user on press key tab', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <IconButton disabled />
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
        <IconButton onClick={handleClick} />
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
