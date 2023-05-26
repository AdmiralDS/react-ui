import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { Input } from '@admiral-ds/date-picker';

describe('Running Test for Marbella Input', () => {
  test('Check placeholder in Input', () => {
    render(<Input placeholder="Hello marbella" />);
    expect(screen.getByPlaceholderText('Hello marbella')).toHaveAttribute('placeholder', 'Hello marbella');
  });

  test('renders the Input component', async () => {
    render(<Input placeholder="marbella" />);
    const input = screen.getByPlaceholderText('marbella') as HTMLInputElement;
    userEvent.type(input, 'Hello world!');
    await waitFor(() => expect(input.value).toBe('Hello world!'));
  });
});
