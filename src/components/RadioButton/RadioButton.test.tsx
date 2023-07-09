import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioButton, LIGHT_THEME } from '@admiral-ds/react-ui';

describe('RadioButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const radiobuttonRequiredProps = {
    onChange: jest.fn(),
    value: 'radio1',
    checked: false,
    'data-testid': 'element',
  };

  it('should render component with required properties', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <RadioButton {...radiobuttonRequiredProps}>text</RadioButton>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with disabled state', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <RadioButton {...radiobuttonRequiredProps} disabled>
          text
        </RadioButton>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with small dimension', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <RadioButton {...radiobuttonRequiredProps} dimension="s">
          text
        </RadioButton>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange when user clicks on component', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <RadioButton {...radiobuttonRequiredProps}>text</RadioButton>
      </ThemeProvider>,
    );
    fireEvent.click(wrapper.getByLabelText('text'));
    const { onChange } = radiobuttonRequiredProps;
    expect(onChange).toBeCalledTimes(1);
  });

  it('should focus input if user press Tab key', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <RadioButton {...radiobuttonRequiredProps}>text</RadioButton>
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
        <RadioButton {...radiobuttonRequiredProps}>text</RadioButton>
      </ThemeProvider>,
    );
    const [radio] = screen.getAllByTestId('element');
    await user.tab();
    await user.type(radio, '{space}');
    const { onChange } = radiobuttonRequiredProps;
    expect(onChange).toBeCalledTimes(1);
  });
});
