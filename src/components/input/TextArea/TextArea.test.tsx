import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import type { TextAreaProps } from '@admiral-ds/react-ui';
import { LIGHT_THEME, TextArea } from '@admiral-ds/react-ui';

const TextAreaCoponent = (props: TextAreaProps) => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <TextArea {...props} />
    </ThemeProvider>
  );
};

describe('TextArea Component', () => {
  // Тест на наличие основных элементов
  test('renders TextArea with basic elements', () => {
    render(<TextAreaCoponent />);
    const textarea = screen.getByRole('textbox');
    const copyIcon = screen.queryByTitle('copy-icon');
    const clearIcon = screen.queryByTitle('clear-icon');
    expect(textarea).toBeInTheDocument();
    expect(copyIcon).not.toBeInTheDocument();
    expect(clearIcon).not.toBeInTheDocument();
  });

  // Тест на изменение значения
  test('changes value on input', () => {
    render(<TextAreaCoponent />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'test' } });
    expect(textarea).toHaveValue('test');
  });

  // Тест на отображение иконки очистки
  test('shows clear icon when text is present', () => {
    const clearIconProps = { 'data-testid': 'clearIconTest' };
    render(<TextAreaCoponent defaultValue="test" displayClearIcon clearIconPropsConfig={() => clearIconProps} />);
    const clearIcon = screen.getByTestId('clearIconTest');
    expect(clearIcon).toBeInTheDocument();
  });

  // Тест на отображение иконки копирования
  test('shows copy icon when text is present', () => {
    const copyIconProps = { 'data-testid': 'copyIconTest' };
    render(<TextAreaCoponent defaultValue="test" displayCopyIcon copyIconPropsConfig={() => copyIconProps} />);
    const copyIcon = screen.getByTestId('copyIconTest');
    expect(copyIcon).toBeInTheDocument();
  });

  // Тест на отключение копирования
  test('disables copying when disableCopying is true', () => {
    const writeTextMock = jest.fn();
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: writeTextMock,
      },
      writable: true,
    });

    render(<TextAreaCoponent defaultValue="test" disableCopying />);
    const textarea = screen.getByRole('textbox');
    fireEvent.focus(textarea);
    fireEvent.keyDown(textarea, { key: 'c', code: 'KeyC' });
    expect(writeTextMock).not.toHaveBeenCalled();
  });
});
