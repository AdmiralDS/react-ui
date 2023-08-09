import { LIGHT_THEME } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('should focus input if user press Tab key', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Checkbox {...checkboxRequiredProps} />
      </ThemeProvider>,
    );
    const [radio] = screen.getAllByTestId('element');
    await user.tab();
    expect(radio).toHaveFocus();
  });

  it('should call onChange if input is focused and user press Space key', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Checkbox {...checkboxRequiredProps} />
      </ThemeProvider>,
    );
    const [checkbox] = screen.getAllByTestId('element');
    await user.tab();
    await user.type(checkbox, '{Space}');
    const { onChange } = checkboxRequiredProps;
    expect(onChange).toBeCalledTimes(1);
  });

  it('base react checkbox', async () => {
    const user = userEvent.setup();
    render(<input type="checkbox" {...checkboxRequiredProps} />);
    const [checkbox] = screen.getAllByTestId('element');
    await user.tab();
    expect(checkbox).toHaveFocus();
    await user.type(checkbox, '{Space}');
    const { onChange } = checkboxRequiredProps;
    expect(onChange).toBeCalledTimes(1);
  });
});
