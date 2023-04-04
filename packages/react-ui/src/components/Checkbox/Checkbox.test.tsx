import { LIGHT_THEME } from '#src/components/themes';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent, { specialChars } from '@testing-library/user-event';

import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const checkboxRequiredProps = {
    onChange: jest.fn(),
    checked: false,

    'data-testid': 'element',
  };

  it('should render component with required properties', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Checkbox {...checkboxRequiredProps} />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with disabled state', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Checkbox {...checkboxRequiredProps} disabled />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with small dimension', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Checkbox {...checkboxRequiredProps} dimension="s" />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange when user clicks on component', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Checkbox {...checkboxRequiredProps} />
      </ThemeProvider>,
    );
    fireEvent.click(wrapper.getByTestId('element'));
    const { onChange } = checkboxRequiredProps;
    expect(onChange).toBeCalledTimes(1);
  });

  it('should focus input if user press Tab key', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Checkbox {...checkboxRequiredProps} />
      </ThemeProvider>,
    );
    const [radio] = screen.getAllByTestId('element');
    userEvent.tab();
    expect(radio).toHaveFocus();
  });

  it('should call onChange if input is focused and user press Space key', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Checkbox {...checkboxRequiredProps} />
      </ThemeProvider>,
    );
    const [checkbox] = screen.getAllByTestId('element');
    userEvent.tab();
    userEvent.type(checkbox, specialChars.space);
    const { onChange } = checkboxRequiredProps;
    expect(onChange).toBeCalledTimes(2);
  });

  it('base react checkbox', () => {
    render(<input type="checkbox" {...checkboxRequiredProps} />);
    const [checkbox] = screen.getAllByTestId('element');
    userEvent.tab();
    expect(checkbox).toHaveFocus();
    userEvent.type(checkbox, specialChars.space);
    const { onChange } = checkboxRequiredProps;
    expect(onChange).toBeCalledTimes(2);
  });
});
