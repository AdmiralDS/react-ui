import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { TestTabs } from './testTabs';

const user = userEvent.setup();

describe('Table', () => {
  test('должен рендериться дефолтный компонент', async () => {
    const scrollIntoViewMock = jest.fn();
    HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    const mockOnChange = jest.fn();

    const tabsList2 = [
      { text: 'Вкладка 1', tabId: '1' },
      { text: 'Вкладка 3', tabId: '3' },
    ];

    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <div style={{ width: '1000px', height: '600px' }} data-testid="box">
          <TestTabs onChange={mockOnChange} tabsList={tabsList2} />
        </div>
      </ThemeProvider>,
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const tab = await screen.findByTestId('1');
    const tab2 = await screen.findByTestId('3');

    const box = await screen.findByTestId('box');
    console.log(box.getBoundingClientRect());

    expect(tab).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();

    expect(screen.queryByText('Вкладка 1')).toBeInTheDocument();
    expect(screen.queryByText('Вкладка 3')).toBeInTheDocument();

    await user.hover(tab2);
    await user.click(tab2);
    fireEvent.click(tab2);

    await new Promise((resolve) => setTimeout(resolve, 1000));
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
