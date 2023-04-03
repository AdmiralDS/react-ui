import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '#src/components/themes';

import { Tag } from '#src/components/Tag';

describe('Tag', () => {
  const clickProps = {
    onClick: jest.fn(),
  };
  it('should render default component', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Tag>test</Tag>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with kind "green" and determined width', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Tag kind="green" width="60px">
          test
        </Tag>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick when user clicks on component', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Tag {...clickProps}>text</Tag>
      </ThemeProvider>,
    );
    fireEvent.click(wrapper.getByText('text'));
    const { onClick } = clickProps;
    expect(onClick).toBeCalledTimes(1);
  });
});
