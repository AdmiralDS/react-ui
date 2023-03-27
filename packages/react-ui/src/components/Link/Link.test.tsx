import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link } from '#src/components/Link';
import { LIGHT_THEME } from '../themes';
import { ThemeProvider } from 'styled-components';

const linkText = 'Link TextInput';

describe('Link', () => {
  const Component = (props: any) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <Link href="#" {...props}>
        {linkText}
      </Link>
    </ThemeProvider>
  );
  test('should render component', () => {
    const { container } = render(<Component />);
    expect(container).toMatchSnapshot();
  });
  test('renders Link component', () => {
    render(<Component />);
    expect(screen.getByRole('link')).toHaveTextContent(linkText);
  });

  test('should focus on component when user on press key tab', () => {
    render(<Component data-testid="test-element" />);
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId('test-element')).toHaveFocus();
  });

  test('should dont focus component when user on press key tab', () => {
    render(<Component disabled />);
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  test('should call onClick when user clicks on component', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    fireEvent.click(screen.getByText(linkText));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
