import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

import { Chips, LIGHT_THEME } from '@admiral-ds/react-ui';
import { act } from 'react';

describe('Chips', () => {
  it('should render default component', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Chips>test</Chips>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with appearanceTypeFilled prop ', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Chips appearance="filled">test</Chips>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with selected prop ', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Chips selected>test</Chips>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick when user clicks on component', () => {
    const onClick = jest.fn();
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Chips onClick={onClick}>test</Chips>
      </ThemeProvider>,
    );
    fireEvent.click(wrapper.getByText('test'));
    expect(onClick).toBeCalledTimes(1);
  });

  it('should focus on component when user on press key tab', async () => {
    const user = userEvent.setup();
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Chips data-testid="test-element">test</Chips>
      </ThemeProvider>,
    );
    expect(document.body).toHaveFocus();
    await act(async () => {
      await user.tab();
    });
    expect(wrapper.getByTestId('test-element')).toHaveFocus();
  });
});
