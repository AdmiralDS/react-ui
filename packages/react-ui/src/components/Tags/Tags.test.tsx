import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '../themes';
import { Tags } from '../Tags';
import { Tag } from '../Tag';

describe('Tags', () => {
  const clickProps = {
    onClickMain: jest.fn(),
    onClickRed: jest.fn(),
  };
  const Component = () => (
    <ThemeProvider theme={LIGHT_THEME}>
      <Tags width={50} kind="green" onClick={clickProps.onClickMain}>
        <Tag data-testid="1">Neutral</Tag>
        <Tag data-testid="2" kind="red" width="auto" onClick={clickProps.onClickRed}>
          Red
        </Tag>
        <Tag data-testid="3">Orange</Tag>
      </Tags>
    </ThemeProvider>
  );
  it('should render default component', () => {
    const wrapper = render(<Component />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClickMain when user clicks on first tag', () => {
    const wrapper = render(<Component />);
    fireEvent.click(wrapper.getByTestId('1'));
    const { onClickMain } = clickProps;
    expect(onClickMain).toBeCalledTimes(1);
  });

  it('should call onClickred when user clicks on second tag', () => {
    const wrapper = render(<Component />);
    fireEvent.click(wrapper.getByTestId('2'));
    const { onClickRed } = clickProps;
    expect(onClickRed).toBeCalledTimes(1);
  });
});
