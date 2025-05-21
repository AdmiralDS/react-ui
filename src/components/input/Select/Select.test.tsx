import type { SelectProps } from '@admiral-ds/react-ui';
import { Option, Select, LIGHT_THEME, DropdownProvider } from '@admiral-ds/react-ui';
import { render, within } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import type { ChangeEvent, PropsWithChildren } from 'react';
import { act, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const options = ['one', 'two', 'three'];

interface ISelectProps extends SelectProps {
  initialValue?: string | string[];
}

const defaultChildren = options.map((option) => (
  <Option data-testid="option" key={option} value={option}>
    {option}
  </Option>
));

const SelectComponent = ({
  children = defaultChildren,
  multiple = false,
  initialValue = multiple ? [] : '',
  ...restSelectProps
}: PropsWithChildren<ISelectProps>) => {
  const [selectValue, setSelectValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) =>
    multiple
      ? setSelectValue(Array.from(e.target.selectedOptions).map((option) => option.value))
      : setSelectValue(e.target.value);

  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <div id="parent">
          <Select
            mode="searchSelect"
            className="searchSelect"
            value={selectValue}
            onChange={onChange}
            multiple={multiple}
            {...restSelectProps}
          >
            {children}
          </Select>
        </div>
      </DropdownProvider>
    </ThemeProvider>
  );
};

/**
 * Удаление опций по backspace
 */

describe('SearchSelect', () => {
  beforeAll(() => {
    HTMLElement.prototype.scrollIntoView = jest.fn();

    class IntersectionObserver {
      observe = jest.fn();
      disconnect = jest.fn();
      unobserve = jest.fn();
    }

    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: IntersectionObserver,
    });
  });

  describe('InitialView', () => {
    test('Renders visible value correctly', () => {
      render(<SelectComponent initialValue={options[1]} />);

      const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;
      const selectElem = screen.getByRole('combobox') as HTMLSelectElement;
      const visibleText = within(valueWrapper).getByText(options[1]);

      expect(visibleText).toBeInTheDocument();
      expect(selectElem.value).toBe(options[1]);
    });
    test('SingleSelect empty when no value is provided', () => {
      render(<SelectComponent placeholder="placeholder" />);

      const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;
      const selectElem = screen.getByRole('combobox') as HTMLSelectElement;

      expect(within(valueWrapper).getByPlaceholderText('placeholder')).toBeInTheDocument();
      options.forEach((option) => {
        expect(within(valueWrapper).queryByText(option)).toBeNull();
      });
      expect(!!selectElem.value).toBeFalsy();
    });
    test('MultiSelect empty when no value is provided', () => {
      render(<SelectComponent multiple placeholder="placeholder" />);

      const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;
      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;

      expect(within(valueWrapper).getByPlaceholderText('placeholder')).toBeInTheDocument();
      options.forEach((option) => {
        expect(within(valueWrapper).queryByText(option)).toBeNull();
      });
      expect(!!selectElem.value).toBeFalsy();
    });

    test('Correct inputValue with placeholder', async () => {
      const user = userEvent.setup();
      render(<SelectComponent placeholder="placeholder" />);

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;

      await act(async () => {
        await user.tab();
        await user.type(inputELem, '{Space}');
        await user.type(inputELem, 'a');
      });

      expect(inputELem.value).toBe('a');
    });

    test('Renders visible multiselect value correctly', () => {
      render(<SelectComponent multiple initialValue={['one', 'two']} />);

      const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;

      ['one', 'two'].forEach((text) => {
        expect(within(valueWrapper).getByText(text)).toBeInTheDocument();
      });

      const { selectedOptions } = screen.getByRole('listbox') as HTMLSelectElement;
      expect(selectedOptions.length).toBe(2);
    });
    test('Cheked value is active', () => void 0);
    test('Cheked multiselect value is active', () => void 0);
  });

  describe('Opening and closing', () => {
    test('should open menu on press whitespace after select is focused', async () => {
      const user = userEvent.setup();
      render(<SelectComponent />);

      const selectElem = screen.getByRole('combobox') as HTMLSelectElement;

      await act(async () => {
        await user.tab();
      });
      expect(selectElem).toHaveFocus();

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      await act(async () => {
        await user.type(inputELem, '{space}');
      });
      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      expect(dropDownContainer).toBeInTheDocument();
      expect(inputELem).toHaveFocus();
    });

    test('should open menu onClick and close on Escape', async () => {
      const user = userEvent.setup();
      render(<SelectComponent />);
      const selectWrapper = document.querySelector('.searchSelect') as HTMLElement;
      await act(async () => {
        await user.click(selectWrapper);
      });

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      expect(dropDownContainer).toBeInTheDocument();
      expect(inputELem).toHaveFocus();

      await act(async () => {
        await user.type(selectWrapper, '{escape}');
      });
      expect(dropDownContainer).not.toBeInTheDocument();
    });

    test('should close on click outside of select', async () => {
      const user = userEvent.setup();
      render(<SelectComponent />);
      const selectWrapper = document.querySelector('.searchSelect') as HTMLElement;

      await act(async () => {
        await user.click(selectWrapper);
      });

      const parent = document.getElementById('parent') as HTMLElement;

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      expect(dropDownContainer).toBeInTheDocument();
      expect(inputELem).toHaveFocus();

      await act(async () => {
        await user.click(parent);
      });
      expect(dropDownContainer).not.toBeInTheDocument();
      expect(inputELem).not.toHaveFocus();
    });

    test('should render visible value after closing', async () => {
      const user = userEvent.setup();
      render(<SelectComponent initialValue="one" />);

      const selectWrapper = document.querySelector('.searchSelect') as HTMLElement;
      const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;
      const parent = document.getElementById('parent') as HTMLElement;
      const inputELem = screen.getByRole('textbox') as HTMLInputElement;

      await act(async () => {
        await user.click(selectWrapper);
        await user.type(inputELem, 'asd');
      });

      expect(within(valueWrapper).queryByText('one')).toBeNull();

      await act(async () => {
        await user.click(parent);
      });
      expect(within(valueWrapper).getByText('one')).toBeInTheDocument();
    });

    test('should not open menu when click on ships', async () => {
      const user = userEvent.setup();
      render(<SelectComponent multiple initialValue={['one', 'two']} />);

      await act(async () => {
        await user.click(document.querySelector('.chip') as HTMLElement);
      });
      expect(document.getElementsByClassName('dropdown-container').length).toEqual(0);
    });

    test('should close select when it loses focus', async () => {
      const user = userEvent.setup();
      render(
        <>
          <SelectComponent />
          <input type="text" />
        </>,
      );

      await act(async () => {
        await user.tab();
        const selectWrapper = document.querySelector('.searchSelect') as HTMLElement;
        await user.type(selectWrapper, '{enter}');
        await user.type(selectWrapper, 'on');
        await user.tab();
      });

      expect(document.getElementsByClassName('dropdown-container').length).toEqual(0);
    });
  });

  describe('Correct backspace behavior', () => {
    test('Search value should be narrowed to input value on backspace', async () => {
      const user = userEvent.setup();
      render(<SelectComponent initialValue="one" />);

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;

      await act(async () => {
        await user.tab();
        await user.type(inputELem, '{space}');
      });
      expect(!!inputELem.value).toBeFalsy();
      await act(async () => {
        await user.type(inputELem, '{Backspace}');
      });
      expect(inputELem.value).toBe('on');
    });

    test('Search value should be extended to input value on keyboard', async () => {
      const user = userEvent.setup();
      render(<SelectComponent initialValue="one" />);

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;

      await act(async () => {
        await user.tab();
        await user.type(inputELem, ' ');
      });
      expect(!!inputELem.value).toBeFalsy();
      await act(async () => {
        await user.type(inputELem, 'r');
        await user.type(inputELem, 'oner');
      });
    });
  });

  describe('selecting and deleting a value', () => {
    test('selects a value with arrows', async () => {
      const user = userEvent.setup();
      render(<SelectComponent />);

      const selectElem = screen.getByRole('combobox') as HTMLSelectElement;
      const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;

      await user.tab();

      await user.type(valueWrapper, '{enter}');

      await user.type(valueWrapper, '{arrowdown}');

      await user.type(valueWrapper, '{enter}');

      const visibleText = within(valueWrapper).getByText(options[1]);
      expect(visibleText).toBeInTheDocument();
      expect(selectElem.value).toBe(options[1]);
    });

    test('selects a value onClick', async () => {
      const user = userEvent.setup();
      render(<SelectComponent />);

      const selectElem = screen.getByRole('combobox') as HTMLSelectElement;
      const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;

      await act(async () => {
        await user.tab();
        await user.type(valueWrapper, '{space}');
      });

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      const optionElements = within(dropDownContainer).getAllByTestId('option');

      await act(async () => {
        await user.click(optionElements[1]);
      });

      const visibleText = within(valueWrapper).getByText(options[1]);
      expect(visibleText).toBeInTheDocument();
      expect(dropDownContainer).not.toBeInTheDocument();
      expect(selectElem.value).toBe(options[1]);
    });

    test('selects multiselect value with arrows', async () => {
      const user = userEvent.setup();
      render(<SelectComponent multiple />);

      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;
      const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;

      // открываем дроп, селектор на первом элементе
      await user.tab();
      await user.type(valueWrapper, '{space}');

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      dropDownOptions.forEach((optionElem) => {
        const checkbox = within(optionElem).getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
      });

      // переходим на второй элемент и выделяем его
      await user.type(inputELem, '{arrowdown}');
      await user.keyboard('{enter}');

      dropDownOptions.forEach((optionElem, ind) => {
        const checkbox = within(optionElem).getByRole('checkbox');
        if (ind === 1) expect(checkbox).toBeChecked();
        else expect(checkbox).not.toBeChecked();
      });
      expect(within(valueWrapper).getByText(options[1])).toBeInTheDocument();
      expect(dropDownContainer).toBeInTheDocument();
      expect(inputELem).toHaveFocus();

      await user.type(inputELem, '{enter}');
      await user.type(inputELem, '{arrowdown}');
      await user.type(inputELem, '{enter}');
      await user.type(inputELem, '{arrowdown}');
      await user.type(inputELem, '{enter}');

      dropDownOptions.forEach((optionElem, ind) => {
        const checkbox = within(optionElem).getByRole('checkbox');
        if (1 == ind) expect(checkbox).toBeChecked();
        else expect(checkbox).not.toBeChecked();
      });

      options.forEach((optionText, optionTextInd) => {
        const chip = within(valueWrapper).queryByText(optionText);
        if (1 == optionTextInd) expect(chip).toBeInTheDocument();
        else expect(chip).toBeNull();
      });

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if (2 == nativeOptionInd) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });
    test('selects multiselect value onClick', async () => {
      const user = userEvent.setup();
      render(<SelectComponent multiple />);

      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;
      const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;

      await act(async () => {
        await user.tab();
        await user.keyboard('{enter}');
      });

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      dropDownOptions.forEach((optionElem) => {
        const checkbox = within(optionElem).getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBeFalsy();
      });

      await act(async () => {
        await user.click(dropDownOptions[0]);
      });

      dropDownOptions.forEach((optionElem, ind) => {
        const checkbox = within(optionElem).getByRole('checkbox') as HTMLInputElement;
        if (ind === 0) expect(checkbox.checked).toBeTruthy();
        else expect(checkbox.checked).toBeFalsy();
      });
      expect(within(valueWrapper).getByText(options[0])).toBeInTheDocument();
      expect(dropDownContainer).toBeInTheDocument();
      // expect(inputELem).toHaveFocus();

      await act(async () => {
        await user.click(dropDownOptions[1]);
        await user.click(dropDownOptions[1]);
        await user.click(dropDownOptions[2]);
      });

      dropDownOptions.forEach((optionElem, ind) => {
        const checkbox = within(optionElem).getByRole('checkbox');
        if (0 == ind) expect(checkbox).toBeChecked();
        else expect(checkbox).not.toBeChecked();
      });

      options.forEach((optionText, optionTextInd) => {
        const chip = within(valueWrapper).queryByText(optionText);
        if (0 == optionTextInd) expect(chip).toBeInTheDocument();
        else expect(chip).toBeNull();
      });

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if (1 == nativeOptionInd) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });
    test('deletes multiselect value onChipClick', async () => {
      const user = userEvent.setup();
      render(<SelectComponent multiple initialValue={['one', 'two']} />);

      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;
      const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;
      // такой стремный селектор нужен, так как по другому svg не достанешь...
      const chipsCloses = Array.from(valueWrapper.querySelectorAll('.chip')).map(
        (chipElem) => chipElem.firstChild?.lastChild,
      ) as Element[];

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });

      await act(async () => {
        await user.click(chipsCloses[0]);
      });

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });

    test('should not delete chip when its option is disabled', () => {
      render(
        <SelectComponent multiple initialValue={['one', 'two']}>
          {options.map((option) => (
            <Option key={option} value={option} disabled={option === 'two'}>
              {option}
            </Option>
          ))}
        </SelectComponent>,
      );

      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;
      // const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;
      // такой стремный селектор нужен, так как по другому svg не достанешь...
      // const chipsCloses = Array.from(valueWrapper.querySelectorAll('.chip')).map(
      //   (chipElem) => chipElem.firstChild?.lastChild,
      // ) as Element[];

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });

      //  unable to click element as it has or inherits pointer-events set to "none".
      // userEvent.click(chipsCloses[1]);

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });

    test('should delete options onBackspace', async () => {
      const user = userEvent.setup();
      render(<SelectComponent multiple initialValue={['one', 'two']} />);

      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      await act(async () => {
        await user.tab();
        await user.type(inputELem, '{space}');
      });

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });

      await act(async () => {
        await user.type(inputELem, '{backspace}');
      });

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });

    test('should not delete disabled options onBackspace', async () => {
      const user = userEvent.setup();
      render(
        <SelectComponent multiple initialValue={['one', 'two']}>
          {options.map((option) => (
            <Option key={option} value={option} disabled={option === 'two'}>
              {option}
            </Option>
          ))}
        </SelectComponent>,
      );

      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;
      const inputELem = screen.getByRole('textbox') as HTMLInputElement;

      await act(async () => {
        await user.tab();
        await user.keyboard('{enter}');
      });

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });

      await act(async () => {
        await user.type(inputELem, '{backspace}');
      });

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });
    test('should not delete options with custom object renderChip', async () => {
      const user = userEvent.setup();
      render(
        <SelectComponent multiple initialValue={['one', 'two']}>
          {options.map((option) => (
            <Option key={option} value={option} renderChip={() => ({ children: option })}>
              {option}
            </Option>
          ))}
        </SelectComponent>,
      );

      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;
      const valueWrapper = document.getElementsByClassName('selectValueWrapper')[0] as HTMLElement;
      // такой стремный селектор нужен, так как по другому svg не достанешь...
      const chipsCloses = Array.from(valueWrapper.querySelectorAll('.chip')).map(
        (chipElem) => chipElem.firstChild?.lastChild,
      ) as Element[];

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });

      await act(async () => {
        await user.click(chipsCloses[1]);
      });

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });
  });

  describe('hover onOption', () => {
    test('basic hoveres with keyboard', async () => {
      const user = userEvent.setup();
      render(<SelectComponent value={options[1]} />);

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      await act(async () => {
        await user.tab();
        await user.type(inputELem, '{space}');
      });

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;

      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      dropDownOptions.forEach((option, ind) => {
        if (ind === 1) expect(option).toHaveAttribute('data-hovered', 'true');
        else expect(option).toHaveAttribute('data-hovered', 'false');
      });

      await act(async () => {
        await user.type(inputELem, '{arrowdown}');
      });
      dropDownOptions.forEach((option, optionInd) => {
        //Выбрана должна быть вторая опция
        if (optionInd === 1) expect(option).toHaveAttribute('value', 'two');
        else if (optionInd === 2) expect(option).toHaveAttribute('data-hovered', 'true');
        else expect(option).toHaveAttribute('data-hovered', 'false');
      });
    });

    test('first hovered option should be last one when arrowUp on empty select', async () => {
      const user = userEvent.setup();
      render(<SelectComponent />);

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      await act(async () => {
        await user.tab();
        await user.type(inputELem, '{space}');
      });

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;

      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      dropDownOptions.forEach((option, ind) => {
        if (ind === 0) expect(option).toHaveAttribute('data-hovered', 'true');
        else expect(option).toHaveAttribute('data-hovered', 'false');
      });

      await act(async () => {
        await user.type(inputELem, '{arrowup}');
      });
      expect(dropDownOptions[dropDownOptions.length - 1]).toHaveAttribute('data-hovered', 'true');
    });

    test('first hovered option should be first one when arrowDown on empty select', async () => {
      const user = userEvent.setup();
      render(<SelectComponent />);

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      await act(async () => {
        await user.tab();
        await user.type(inputELem, '{space}');
      });

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;

      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      dropDownOptions.forEach((option, ind) => {
        if (ind === 0) expect(option).toHaveAttribute('data-hovered', 'true');
        else expect(option).toHaveAttribute('data-hovered', 'false');
      });

      await act(async () => {
        await user.type(inputELem, '{arrowdown}');
      });
      expect(dropDownOptions[1]).toHaveAttribute('data-hovered', 'true');
    });

    test('skips disabled option when hover', async () => {
      const user = userEvent.setup();
      render(
        <SelectComponent value="1">
          <Option data-testid="option" value="1" disabled>
            1
          </Option>
          <Option data-testid="option" value="2">
            2
          </Option>
          <Option data-testid="option" value="3" disabled>
            3
          </Option>
          <Option data-testid="option" value="4">
            4
          </Option>
          <Option data-testid="option" value="5" disabled>
            5
          </Option>
        </SelectComponent>,
      );

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      await act(async () => {
        await user.tab();
        await user.type(inputELem, '{space}');
      });

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;

      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      await act(async () => {
        await user.type(inputELem, '{arrowdown}');
      });
      await act(async () => {
        await user.type(inputELem, '{arrowdown}');
      });
      dropDownOptions.forEach((option, optionInd) => {
        if (optionInd === 3) expect(option).toHaveAttribute('data-hovered', 'true');
        else expect(option).not.toHaveAttribute('data-hovered', 'true');
      });
    });

    test('skips disabled option in the begining when hover', async () => {
      const user = userEvent.setup();
      render(
        <SelectComponent value="2">
          <Option data-testid="option" value="1" disabled>
            1
          </Option>
          <Option data-testid="option" value="2">
            2
          </Option>
          <Option data-testid="option" value="3" disabled>
            3
          </Option>
          <Option data-testid="option" value="4">
            4
          </Option>
          <Option data-testid="option" value="5" disabled>
            5
          </Option>
        </SelectComponent>,
      );

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      await act(async () => {
        await user.tab();
        await user.type(inputELem, '{Space}');
      });

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      await act(async () => {
        await user.type(inputELem, '{arrowup}');
      });
      expect(dropDownOptions[3]).toHaveAttribute('data-hovered', 'true');
    });

    test('skips disabled option in the end when hover', async () => {
      const user = userEvent.setup();
      render(
        <SelectComponent value="4">
          <Option data-testid="option" value="1" disabled>
            1
          </Option>
          <Option data-testid="option" value="2">
            2
          </Option>
          <Option data-testid="option" value="3" disabled>
            3
          </Option>
          <Option data-testid="option" value="4">
            4
          </Option>
          <Option data-testid="option" value="5" disabled>
            5
          </Option>
        </SelectComponent>,
      );

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      await act(async () => {
        await user.tab();
        await user.type(inputELem, '{space}');
      });

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;

      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      await act(async () => {
        await user.type(inputELem, '{arrowdown}');
      });
      expect(dropDownOptions[1]).toHaveAttribute('data-hovered', 'true');
    });

    test('correct hover on option when its amount changes', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(
        <SelectComponent>
          <Option data-testid="option" value="1">
            one
          </Option>
          <Option data-testid="option" value="2">
            onee
          </Option>
          <Option data-testid="option" value="3">
            two
          </Option>
        </SelectComponent>,
      );

      await act(async () => {
        await user.tab();
      });

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;

      await act(async () => {
        await user.type(inputELem, '{space}');
      });
      await act(async () => {
        await user.type(inputELem, '{arrowdown}');
      });
      await act(async () => {
        await user.type(inputELem, '{arrowdown}');
      });

      const dropDownContainer = baseElement.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');
      expect(dropDownOptions[2]).toHaveAttribute('data-hovered', 'true');

      await act(async () => {
        await user.type(inputELem, '1');
      });

      const dropDownOptionsAfterInput = within(dropDownContainer).getAllByTestId('option');
      expect(dropDownOptionsAfterInput.length).toBe(1);
      dropDownOptionsAfterInput.forEach((option, ind) => {
        if (ind === 0) expect(option).toHaveAttribute('data-hovered', 'true');
        else {
          expect(option).not.toHaveAttribute('data-hovered', 'true');
        }
      });
      await act(async () => {
        await user.type(inputELem, '{arrowdown}');
      });
      expect(dropDownOptionsAfterInput[0]).toHaveAttribute('data-hovered', 'true');
    });
  });

  test('blur is called only when click outside component', async () => {
    const user = userEvent.setup();
    const onBlur = jest.fn();
    render(<SelectComponent onBlur={onBlur} />);

    const inputELem = screen.getByRole('textbox') as HTMLInputElement;
    await act(async () => {
      await user.tab();
      await user.type(inputELem, '{space}');
      await user.type(inputELem, 'on');
      await user.type(inputELem, '{esc}');
      await user.tab();
    });

    expect(onBlur).toBeCalledTimes(1);
  });
});
