import { Option, Select, SelectProps } from './index';
import { LIGHT_THEME } from '#src/components/themes';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ChangeEvent, PropsWithChildren, useState } from 'react';
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
    </ThemeProvider>
  );
};

/**
 * Удаление опций по backspace
 */

describe('SearchSelect', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  describe('InitialView', () => {
    test('Renders visible value correctly', () => {
      render(<SelectComponent initialValue={options[1]} />);

      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;
      const selectElem = screen.getByRole('combobox') as HTMLSelectElement;
      const visibleText = within(valueWrapper).getByText(options[1]);

      expect(visibleText).toBeInTheDocument();
      expect(selectElem.value).toBe(options[1]);
    });
    test('SingleSelect empty when no value is provided', () => {
      render(<SelectComponent placeholder="placeholder" />);

      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;
      const selectElem = screen.getByRole('combobox') as HTMLSelectElement;

      expect(within(valueWrapper).getByPlaceholderText('placeholder')).toBeInTheDocument();
      options.forEach((option) => {
        expect(within(valueWrapper).queryByText(option)).toBeNull();
      });
      expect(!!selectElem.value).toBeFalsy();
    });
    test('MultiSelect empty when no value is provided', () => {
      render(<SelectComponent multiple placeholder="placeholder" />);

      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;
      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;

      expect(within(valueWrapper).getByPlaceholderText('placeholder')).toBeInTheDocument();
      options.forEach((option) => {
        expect(within(valueWrapper).queryByText(option)).toBeNull();
      });
      expect(!!selectElem.value).toBeFalsy();
    });
    test('Correct inputValue with placeholder', () => {
      render(<SelectComponent placeholder="placeholder" />);

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;

      userEvent.tab();
      userEvent.keyboard(' ');
      userEvent.keyboard('a');

      expect(inputELem.value).toBe('a');
    });
    test('Renders visible multiselect value correctly', () => {
      render(<SelectComponent multiple initialValue={['one', 'two']} />);

      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;

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
    test('should open menu on press whitespace after select is focused', () => {
      render(<SelectComponent />);

      const selectElem = screen.getByRole('combobox') as HTMLSelectElement;

      userEvent.tab();
      expect(selectElem).toHaveFocus();

      userEvent.keyboard(' ');
      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      expect(dropDownContainer).toBeInTheDocument();
      expect(inputELem).toHaveFocus();
    });

    test('should open menu onClick and close on Escape', () => {
      render(<SelectComponent />);
      const selectWrapper = document.querySelector('.searchSelect') as HTMLElement;
      userEvent.click(selectWrapper);

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      expect(dropDownContainer).toBeInTheDocument();
      expect(inputELem).toHaveFocus();

      userEvent.keyboard('{esc}');
      expect(dropDownContainer).not.toBeInTheDocument();
    });

    test('should close on click outside of select', () => {
      render(<SelectComponent />);
      const selectWrapper = document.querySelector('.searchSelect') as HTMLElement;
      userEvent.click(selectWrapper);

      const parent = document.getElementById('parent') as HTMLElement;

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      expect(dropDownContainer).toBeInTheDocument();
      expect(inputELem).toHaveFocus();

      userEvent.click(parent);
      expect(dropDownContainer).not.toBeInTheDocument();
      expect(inputELem).not.toHaveFocus();
    });

    test('should render visible value after closing', () => {
      render(<SelectComponent initialValue="one" />);

      const selectWrapper = document.querySelector('.searchSelect') as HTMLElement;
      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;
      const parent = document.getElementById('parent') as HTMLElement;

      userEvent.click(selectWrapper);
      userEvent.keyboard('asd');

      expect(within(valueWrapper).queryByText('one')).toBeNull();

      userEvent.click(parent);
      expect(within(valueWrapper).getByText('one')).toBeInTheDocument();
    });

    test('should not open menu when click on ships', () => {
      render(<SelectComponent multiple initialValue={['one', 'two']} />);

      userEvent.click(document.querySelector('.chip') as HTMLElement);
      expect(document.getElementsByClassName('dropdown-container').length).toEqual(0);
    });
    test('should close select when it loses focus', () => {
      render(
        <>
          <SelectComponent />
          <input type="text" />
        </>,
      );

      userEvent.tab();
      userEvent.keyboard('{enter}');
      userEvent.keyboard('on');
      userEvent.tab();

      expect(document.getElementsByClassName('dropdown-container').length).toEqual(0);
    });
  });

  describe('Correct backspace behavior', () => {
    test('Search value should be narrowed to input value on backspace', () => {
      render(<SelectComponent initialValue="one" />);

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;

      userEvent.tab();
      userEvent.keyboard('{enter}');
      expect(!!inputELem.value).toBeFalsy();
      userEvent.keyboard('{Backspace}');
      expect(inputELem.value).toBe('on');
    });
    test('Search value should be extended to input value on keyboard', () => {
      render(<SelectComponent initialValue="one" />);

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;

      userEvent.tab();
      userEvent.keyboard(' ');
      expect(!!inputELem.value).toBeFalsy();
      userEvent.keyboard('r');
      expect(inputELem.value).toBe('oner');
    });
  });

  describe('selecting and deleting a value', () => {
    test('selects a value with arrows', () => {
      render(<SelectComponent />);

      const selectElem = screen.getByRole('combobox') as HTMLSelectElement;
      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;

      userEvent.tab();
      userEvent.keyboard('{enter}');
      userEvent.keyboard('{arrowdown}');
      userEvent.keyboard('{enter}');

      const visibleText = within(valueWrapper).getByText(options[0]);
      expect(visibleText).toBeInTheDocument();
      expect(selectElem.value).toBe(options[0]);
    });

    test('selects a value onClick', () => {
      render(<SelectComponent />);

      const selectElem = screen.getByRole('combobox') as HTMLSelectElement;
      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;

      userEvent.tab();
      userEvent.keyboard(' ');

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      const optionElements = within(dropDownContainer).getAllByTestId('option');

      userEvent.click(optionElements[1]);

      const visibleText = within(valueWrapper).getByText(options[1]);
      expect(visibleText).toBeInTheDocument();
      expect(dropDownContainer).not.toBeInTheDocument();
      expect(selectElem.value).toBe(options[1]);
    });

    test('selects multiselect value with arrows', () => {
      render(<SelectComponent multiple />);

      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;
      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;

      userEvent.tab();
      userEvent.keyboard(' ');

      const inputELem = screen.getByRole('textbox') as HTMLInputElement;
      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      dropDownOptions.forEach((optionElem) => {
        const checkbox = within(optionElem).getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBeFalsy();
      });

      userEvent.keyboard('{arrowdown}');
      userEvent.keyboard('{enter}');

      dropDownOptions.forEach((optionElem, ind) => {
        const checkbox = within(optionElem).getByRole('checkbox') as HTMLInputElement;
        if (ind === 1) expect(checkbox.checked).toBeTruthy();
        else expect(checkbox.checked).toBeFalsy();
      });
      expect(within(valueWrapper).getByText(options[1])).toBeInTheDocument();
      expect(dropDownContainer).toBeInTheDocument();
      expect(inputELem).toHaveFocus();

      userEvent.keyboard('{arrowdown}');
      userEvent.keyboard('{enter}');
      userEvent.keyboard('{enter}');
      userEvent.keyboard('{arrowdown}');
      userEvent.keyboard('{enter}');
      dropDownOptions.forEach((optionElem, ind) => {
        const checkbox = within(optionElem).getByRole('checkbox') as HTMLInputElement;
        if ([0, 1].includes(ind)) expect(checkbox.checked).toBeTruthy();
        else expect(checkbox.checked).toBeFalsy();
      });
      options.forEach((optionText, optionTextInd) => {
        const chip = within(valueWrapper).queryByText(optionText);
        if ([0, 1].includes(optionTextInd)) expect(chip).toBeInTheDocument();
        else expect(chip).toBeNull();
      });

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });
    test('selects multiselect value onClick', () => {
      render(<SelectComponent multiple />);

      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;
      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;

      userEvent.tab();
      userEvent.keyboard(' ');

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      dropDownOptions.forEach((optionElem) => {
        const checkbox = within(optionElem).getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBeFalsy();
      });

      userEvent.click(dropDownOptions[0]);

      dropDownOptions.forEach((optionElem, ind) => {
        const checkbox = within(optionElem).getByRole('checkbox') as HTMLInputElement;
        if (ind === 0) expect(checkbox.checked).toBeTruthy();
        else expect(checkbox.checked).toBeFalsy();
      });
      expect(within(valueWrapper).getByText(options[0])).toBeInTheDocument();
      expect(dropDownContainer).toBeInTheDocument();
      // expect(inputELem).toHaveFocus();

      userEvent.click(dropDownOptions[1]);
      userEvent.click(dropDownOptions[1]);
      userEvent.click(dropDownOptions[2]);

      dropDownOptions.forEach((optionElem, ind) => {
        const checkbox = within(optionElem).getByRole('checkbox') as HTMLInputElement;
        if ([0, 2].includes(ind)) expect(checkbox.checked).toBeTruthy();
        else expect(checkbox.checked).toBeFalsy();
      });
      options.forEach((optionText, optionTextInd) => {
        const chip = within(valueWrapper).queryByText(optionText);
        if ([0, 2].includes(optionTextInd)) expect(chip).toBeInTheDocument();
        else expect(chip).toBeNull();
      });

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 3].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });
    test('deletes multiselect value onChipClick', () => {
      render(<SelectComponent multiple initialValue={['one', 'two']} />);

      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;
      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;
      // такой стремный селектор нужен, так как по другому svg не достанешь...
      const chipsCloses = Array.from(valueWrapper.querySelectorAll('.chip')).map(
        (chipElem) => chipElem.firstChild?.lastChild?.firstChild?.firstChild,
      ) as Element[];

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });

      userEvent.click(chipsCloses[0]);

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
      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;
      // такой стремный селектор нужен, так как по другому svg не достанешь...
      const chipsCloses = Array.from(valueWrapper.querySelectorAll('.chip')).map(
        (chipElem) => chipElem.firstChild?.lastChild?.firstChild?.firstChild,
      ) as Element[];

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
    test('should delete options onBackspace', () => {
      render(<SelectComponent multiple initialValue={['one', 'two']} />);

      const selectElem = screen.getByRole('listbox') as HTMLSelectElement;

      userEvent.tab();
      userEvent.keyboard('{enter}');

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });

      userEvent.keyboard('{backspace}');

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });

    test('should not delete disabled options onBackspace', () => {
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

      userEvent.tab();
      userEvent.keyboard('{enter}');

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });

      userEvent.keyboard('{backspace}');

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });
    test('should not delete options with custom object renderChip', () => {
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
      const valueWrapper = document.getElementById('selectValueWrapper') as HTMLElement;
      // такой стремный селектор нужен, так как по другому svg не достанешь...
      const chipsCloses = Array.from(valueWrapper.querySelectorAll('.chip')).map(
        (chipElem) => chipElem.firstChild?.lastChild?.firstChild?.firstChild,
      ) as Element[];

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });

      userEvent.click(chipsCloses[1]);

      Array.from(selectElem.options).forEach((nativeOption, nativeOptionInd) => {
        if ([1, 2].includes(nativeOptionInd)) expect(nativeOption.selected).toBeTruthy();
        else expect(nativeOption.selected).toBeFalsy();
      });
    });
  });

  describe('hover onOption', () => {
    const hoverStyle = `background-color: ${LIGHT_THEME.color['Opacity/Hover']};`;
    const selectedStyle = `background-color: ${LIGHT_THEME.color['Opacity/Focus']};`;
    const basicStyle = `background-color: ${LIGHT_THEME.color['Special/Elevated BG']};`;
    // const basicStyle = `background-color: transparent;`;

    test('basic hoveres with keyboard', () => {
      render(<SelectComponent value={options[1]} />);

      userEvent.tab();
      userEvent.keyboard(' ');

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;

      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      dropDownOptions.forEach((option, ind) => {
        if (ind === 1) expect(option).toHaveStyle(hoverStyle);
        else expect(option).toHaveStyle(basicStyle);
      });

      userEvent.keyboard('{arrowdown}');
      dropDownOptions.forEach((option, optionInd) => {
        if (optionInd === 1) expect(option).toHaveStyle(selectedStyle);
        else if (optionInd === 2) expect(option).toHaveStyle(hoverStyle);
        else expect(option).toHaveStyle(basicStyle);
      });
    });

    test('first hovered option should be last one when arrowUp on empty select', () => {
      render(<SelectComponent />);

      userEvent.tab();
      userEvent.keyboard(' ');

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;

      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      dropDownOptions.forEach((option, ind) => {
        if (ind === 0) expect(option).toHaveStyle(hoverStyle);
        else expect(option).toHaveStyle(basicStyle);
      });

      userEvent.keyboard('{arrowup}');
      expect(dropDownOptions[dropDownOptions.length - 1]).toHaveStyle(hoverStyle);
    });

    test('first hovered option should be first one when arrowDown on empty select', () => {
      render(<SelectComponent />);

      userEvent.tab();
      userEvent.keyboard(' ');

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;

      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      dropDownOptions.forEach((option, ind) => {
        if (ind === 0) expect(option).toHaveStyle(hoverStyle);
        else expect(option).toHaveStyle(basicStyle);
      });

      userEvent.keyboard('{arrowdown}');
      expect(dropDownOptions[1]).toHaveStyle(hoverStyle);
    });

    test('skips disabled option when hover', () => {
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

      userEvent.tab();
      userEvent.keyboard(' ');

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;

      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      userEvent.keyboard('{arrowdown}');
      userEvent.keyboard('{arrowdown}');
      dropDownOptions.forEach((option, optionInd) => {
        if (optionInd === 3) expect(option).toHaveStyle(hoverStyle);
        else expect(option).not.toHaveStyle(hoverStyle);
      });
    });
    test('skips disabled option in the begining when hover', () => {
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

      userEvent.tab();
      userEvent.keyboard(' ');

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;
      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      userEvent.keyboard('{arrowup}');
      expect(dropDownOptions[3]).toHaveStyle(hoverStyle);
    });
    test('skips disabled option in the end when hover', () => {
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

      userEvent.tab();
      userEvent.keyboard(' ');

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;

      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      userEvent.keyboard('{arrowdown}');
      expect(dropDownOptions[1]).toHaveStyle(hoverStyle);
    });
    test('correct hover on option when its amount changes', () => {
      render(
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

      userEvent.tab();
      userEvent.keyboard(' ');

      const dropDownContainer = document.getElementsByClassName('dropdown-container')[0] as HTMLElement;

      const dropDownOptions = within(dropDownContainer).getAllByTestId('option');

      userEvent.keyboard('{arrowdown}');
      userEvent.keyboard('{arrowdown}');
      expect(dropDownOptions[2]).toHaveStyle(hoverStyle);

      userEvent.keyboard('one');

      const dropDownOptionsAfterInput = within(dropDownContainer).getAllByTestId('option');
      expect(dropDownOptionsAfterInput.length).toBe(3);
      dropDownOptionsAfterInput.forEach((option, ind) => {
        if (ind === 2) expect(option).toHaveStyle(hoverStyle);
        else expect(option).not.toHaveStyle(hoverStyle);
      });
      userEvent.keyboard('{arrowdown}');
      expect(dropDownOptionsAfterInput[0]).toHaveStyle(hoverStyle);
    });
  });

  test('blur is called only when click outside component', () => {
    const onBlur = jest.fn();
    render(<SelectComponent onBlur={onBlur} />);

    userEvent.tab();
    userEvent.keyboard(' ');
    userEvent.keyboard('on');
    userEvent.keyboard('{esc}');
    userEvent.tab();

    expect(onBlur).toBeCalledTimes(1);
  });
});
