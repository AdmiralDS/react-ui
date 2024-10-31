import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import type { MultiButtonProps } from '../MultiButton';
import { MultiButton } from '../MultiButton';
import { LIGHT_THEME } from '../themes';

describe('MultiButton', () => {
  HTMLElement.prototype.scrollIntoView = jest.fn();

  jest.useFakeTimers();
  beforeEach(() => {
    jest.clearAllTimers();
  });

  const requiredProps = {
    selected: '1',
    onChange: () => {
      /**/
    },
    items: [
      { id: '1', render: 'one' },
      { id: '2', render: 'two' },
      { id: '3', render: 'three' },
    ],
  };
  const Component = (props: MultiButtonProps) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <MultiButton {...props} {...requiredProps} data-testid="multi" />
    </ThemeProvider>
  );

  it('should render component with primary appearance', () => {
    const wrapper = render(<Component />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with secondary appearance', () => {
    const wrapper = render(<Component appearance="secondary" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with disabled state', () => {
    const wrapper = render(<Component disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with disabled only MainButton', () => {
    const wrapper = render(<Component disabledMainButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show menu when user clicks on second button', async () => {
    render(<Component />);
    fireEvent.click(screen.getByTestId('multi').childNodes[2]);
    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
  });

  it('should show menu when user presses Enter', async () => {
    render(<Component />);
    const btn = await screen.getByTestId('multi').childNodes[2];
    fireEvent.keyDown(btn, { key: 'Enter', code: 'Enter' });
    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
  });

  it('should show menu when user presses Space', async () => {
    render(<Component />);
    const btn = await screen.getByTestId('multi').childNodes[2];
    fireEvent.keyDown(btn, { key: ' ', code: 'Space' });
    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
  });

  it('should hide menu when user presses Escape', async () => {
    render(<Component />);
    const btn = await screen.getByTestId('multi').childNodes[2];
    fireEvent.keyDown(btn, { key: 'Enter', code: 'Enter' });
    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
    fireEvent.keyDown(btn, { key: 'Escape', code: 'Escape' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
});
