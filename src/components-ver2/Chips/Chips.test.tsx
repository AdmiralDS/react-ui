import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import { LIGHT_THEME } from '#src/components-ver2/themes';

import { Chips } from '#src/components-ver2/Chips';

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

  it('should focus on component when user on press key tab', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Chips data-testid="test-element">test</Chips>
      </ThemeProvider>,
    );
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(wrapper.getByTestId('test-element')).toHaveFocus();
  });
});
