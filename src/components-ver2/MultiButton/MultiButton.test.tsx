import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import { MultiButton } from '../MultiButton';
import { LIGHT_THEME } from '../themes';

describe('MultiButton', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    jest.clearAllTimers();
  });

  const requiredProps = {
    selected: '1',
    onChange: (id: string) => {
      /**/
    },
    options: [
      { id: '1', display: 'one' },
      { id: '2', display: 'two' },
      { id: '3', display: 'three' },
    ],
  };
  const Component = (props: any) => (
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

  it('should show menu when user clicks on second button', () => {
    render(<Component />);
    act(() => {
      fireEvent.click(screen.getByTestId('multi').childNodes[2]);
    });
    expect(screen.getAllByRole('listbox')).toHaveLength(1);
  });

  it('should show menu when user presses Enter', () => {
    render(<Component />);
    userEvent.tab();
    const btn = screen.getByTestId('multi').childNodes[2];
    act(() => {
      fireEvent.keyDown(btn, { key: 'Enter', code: 'Enter' });
    });
    expect(screen.getAllByRole('listbox')).toHaveLength(1);
  });

  it('should show menu when user presses Space', () => {
    render(<Component />);
    userEvent.tab();
    const btn = screen.getByTestId('multi').childNodes[2];
    act(() => {
      fireEvent.keyDown(btn, { key: ' ', code: 'Space' });
    });
    expect(screen.getAllByRole('listbox')).toHaveLength(1);
  });

  it('should show menu when user presses ArrowDown', () => {
    render(<Component />);
    userEvent.tab();
    const btn = screen.getByTestId('multi').childNodes[2];
    act(() => {
      fireEvent.keyDown(btn, { key: 'ArrowDown', code: 'ArrowDown' });
    });
    expect(screen.getAllByRole('listbox')).toHaveLength(1);
  });

  it('should hide menu when user presses Escape', () => {
    render(<Component />);
    userEvent.tab();
    const btn = screen.getByTestId('multi').childNodes[2];
    act(() => {
      fireEvent.keyDown(btn, { key: 'ArrowDown', code: 'ArrowDown' });
    });
    const menu = screen.getAllByRole('listbox')[0];
    act(() => {
      fireEvent.keyDown(menu, { key: 'Escape', code: 'Escape' });
    });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
});
