import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import type { ToggleProps } from '@admiral-ds/react-ui';
import { Toggle, LIGHT_THEME } from '@admiral-ds/react-ui';

describe('Toggle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const requiredProps = {
    onChange: jest.fn(),
    checked: false,
    'data-testid': 'element',
  };

  const Component = (props: ToggleProps) => (
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

  it('should focus input if user press Tab key', async () => {
    const user = userEvent.setup();
    render(<Component />);
    const [input] = screen.getAllByTestId('element');
    await user.tab();
    expect(input).toHaveFocus();
  });

  it('should call onChange if input is focused and user press Space key', async () => {
    const user = userEvent.setup();
    render(<Component />);
    const [input] = screen.getAllByTestId('element');
    await user.tab();
    await user.type(input, '{Space}');
    const { onChange } = requiredProps;
    expect(onChange).toBeCalledTimes(1);
  });
});
