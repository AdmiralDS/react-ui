import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent, { specialChars } from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import { Toggle } from '../Toggle';
import { LIGHT_THEME } from '../themes';

describe('Toggle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const requiredProps = {
    onChange: jest.fn(),
    checked: false,
    'data-testid': 'element',
  };

  const Component = (props: any) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <Toggle {...requiredProps} {...props}>
        text
      </Toggle>
    </ThemeProvider>
  );

  it('should render component with required properties', () => {
    const wrapper = render(<Component />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with disabled state', () => {
    const wrapper = render(<Component disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with small dimension', () => {
    const wrapper = render(<Component dimension="s" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with left labelPosition', () => {
    const wrapper = render(<Component labelPosition="left" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange when user clicks on component', () => {
    const wrapper = render(<Component />);
    fireEvent.click(wrapper.getByLabelText('text'));
    const { onChange } = requiredProps;
    expect(onChange).toBeCalledTimes(1);
  });

  it('should focus input if user press Tab key', () => {
    render(<Component />);
    const [input] = screen.getAllByTestId('element');
    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should call onChange if input is focused and user press Space key', () => {
    render(<Component />);
    const [input] = screen.getAllByTestId('element');
    userEvent.tab();
    userEvent.type(input, specialChars.space);
    const { onChange } = requiredProps;
    expect(onChange).toBeCalledTimes(2);
  });
});
