import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link } from '#src/components/Link';

const linkText = 'Link TextInput';

describe('Link', () => {
  test('should render component', () => {
    const { container } = render(<Link href="#">{linkText} </Link>);
    expect(container).toMatchSnapshot();
  });
  test('renders Link component', () => {
    render(<Link href="#">{linkText} </Link>);
    expect(screen.getByRole('link')).toHaveTextContent(linkText);
  });

  test('should focus on component when user on press key tab', () => {
    render(
      <Link href="#" data-testid="test-element">
        {linkText}
      </Link>,
    );
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId('test-element')).toHaveFocus();
  });

  test('should dont focus component when user on press key tab', () => {
    render(
      <Link href="#" disabled>
        {linkText}
      </Link>,
    );
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  test('should call onClick when user clicks on component', () => {
    const handleClick = jest.fn();
    render(
      <Link href="#" onClick={handleClick}>
        {linkText}
      </Link>,
    );
    fireEvent.click(screen.getByText(linkText));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
