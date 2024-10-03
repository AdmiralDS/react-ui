import '@testing-library/jest-dom';
import { SuggestInput, LIGHT_THEME, DropdownProvider } from '@admiral-ds/react-ui';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { act } from 'react';

const options = ['one', 'two', 'three'];

describe('SuggestInput', () => {
  test('should check hotkey is work', async () => {
    const user = userEvent.setup();
    HTMLElement.prototype.scrollIntoView = jest.fn();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <SuggestInput options={options} placeholder="numbers" />
        </DropdownProvider>
      </ThemeProvider>,
    );

    await act(async () => {
      await user.tab();
    });
    const input = screen.getByPlaceholderText('numbers') as HTMLInputElement;
    await act(async () => {
      await user.type(input, 'on');
    });
    await act(async () => {
      await user.type(input, '{arrowdown}');
    });
    await act(async () => {
      await user.type(input, '{enter}');
    });

    expect(input.value).toBe('two');
  });

  test('should check SuggestionInput hotkey not fire submit form', async () => {
    HTMLElement.prototype.scrollIntoView = jest.fn();
    const submit = jest.fn();
    const user = userEvent.setup();
    const { getByPlaceholderText } = render(
      <div>
        <ThemeProvider theme={LIGHT_THEME}>
          <DropdownProvider>
            <form onSubmit={submit}>
              <SuggestInput options={options} placeholder="numbers" />
            </form>
          </DropdownProvider>
        </ThemeProvider>
      </div>,
    );

    // До фокуса элементов списка не должно быть на экране
    options.forEach((suggestText) => {
      const textElement = screen.queryAllByText(suggestText);
      expect(textElement.length).toBe(0);
    });

    await act(async () => {
      await user.tab();
    });
    // input.focus();

    // Сразу после фокуса элементы должны появиться
    const expectElementByTextVisible = async (text: string) => {
      const textElement = await screen.findByText(text);
      expect(textElement).toBeVisible();
    };

    // запускаем последовательно
    await options.reduce(async (prevPromise, suggestText) => {
      await prevPromise;
      return expectElementByTextVisible(suggestText);
    }, Promise.resolve());

    const input = getByPlaceholderText('numbers') as HTMLInputElement;

    await act(async () => {
      await user.type(input, 'on');
    });

    // На открывшейся панели должен появиться текст в теге span
    const spanInDropdown = screen.getByText('on', { selector: 'span' });
    expect(spanInDropdown).toBeVisible();

    await act(async () => {
      await user.type(input, '{enter}');
    });
    expect(input.value).toBe('one');
    expect(submit.mock.calls).toHaveLength(0);
  });
});
