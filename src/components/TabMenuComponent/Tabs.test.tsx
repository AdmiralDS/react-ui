import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { TestTabs } from './testTabs';

class ResizeObserver {
  observe() {}
  unobserve() {}
}
const user = userEvent.setup();

describe('Table', () => {
  //window.ResizeObserver = ResizeObserver;
  // const tabsList = [
  //   { text: 'Вкладка 1', tabId: '1' },
  //   { text: 'Вкладка 2', tabId: '2' },
  // ];

  beforeEach(() => {
    Object.defineProperty(global, 'ResizeObserver', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        observe: jest.fn(() => 'Mocking works'),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      })),
    });
  });

  test('должен рендериться дефолтный компонент', async () => {
    const mockOnChange = jest.fn();

    const tabsList2 = [
      { text: 'Вкладка 1', tabId: '1' },
      { text: 'Вкладка 3', tabId: '3' },
    ];

    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <div style={{ width: '800px', height: '200px' }}>
          <TestTabs onChange={mockOnChange} tabsList={tabsList2} />
        </div>
      </ThemeProvider>,
    );

    //const promise = new Promise((resolve) => setTimeout(resolve, 3000));
    //await waitFor(() => promise);

    const tab = screen.getAllByRole('tab')[0];
    const tab2 = screen.getByTestId('3');

    expect(tab).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();

    expect(screen.queryByText('Вкладка 1')).toBeInTheDocument();
    expect(screen.queryByText('Вкладка 3')).toBeInTheDocument();

    await user.hover(tab);
    await user.click(tab);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('click', async () => {
    const onChange = jest.fn();

    render(<input type="checkbox" onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  test('click', async () => {
    const onChange = jest.fn();

    render(<button role="tab" onClick={onChange} />);

    const checkbox = screen.getByRole('tab');

    await user.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
