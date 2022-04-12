import { SuggestInput } from '#/components/input';
import { LIGHT_THEME } from '#/components/themes';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const options = ['one', 'two', 'three'];

describe('SuggestInput', () => {
  test('should check hotkey is work', async () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <SuggestInput options={options} placeholder="numbers" />
      </ThemeProvider>,
    );

    const input = screen.getByPlaceholderText('numbers') as HTMLInputElement;
    input.focus();
    await userEvent.keyboard('on');
    await userEvent.keyboard('{arrowdown}');
    await userEvent.keyboard('{enter}');
    expect(input.value).toBe('two');
  });

  test('should check SuggestionInput hotkey not fire submit form', async () => {
    const submit = jest.fn();

    render(
      <form onSubmit={submit}>
        <ThemeProvider theme={LIGHT_THEME}>
          <SuggestInput options={options} placeholder="numbers" />
        </ThemeProvider>
      </form>,
    );

    const input = screen.getByPlaceholderText('numbers') as HTMLInputElement;

    // До фокуса элементов списка не должно быть на экране
    options.forEach((suggestText) => {
      const textElement = screen.queryAllByText(suggestText);
      expect(textElement.length).toBe(0);
    });

    input.focus();

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

    userEvent.type(input, 'on');

    // На открывшейся панели должен появиться текст выделенный синим цветом
    const spanInDropdown = screen.getByText('on', { selector: 'span' });
    expect(spanInDropdown).toBeVisible();
    expect(spanInDropdown).toHaveStyle(`color: ${LIGHT_THEME.color.basic.primary};`);

    userEvent.type(input, '{enter}');
    expect(input.value).toBe('one');
    expect(submit.mock.calls).toHaveLength(0);
  });
});
