import { LIGHT_THEME } from '#src/components/themes';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link } from '../Link';

const linkText = 'Link TextInput';

describe('Link', () => {
  test('should render component', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Link href="#">{linkText} </Link>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  test('renders Link component', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Link href="#">{linkText} </Link>
      </ThemeProvider>,
    );
    expect(screen.getByRole('link')).toHaveTextContent(linkText);
  });

  test('should focus on component when user on press key tab', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Link href="#" data-testid="test-element">
          {linkText}
        </Link>
      </ThemeProvider>,
    );
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId('test-element')).toHaveFocus();
  });

  test('should dont focus component when user on press key tab', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Link href="#" disabled>
          {linkText}
        </Link>
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
        <Link href="#" onClick={handleClick}>
          {linkText}
        </Link>
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByText(linkText));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
