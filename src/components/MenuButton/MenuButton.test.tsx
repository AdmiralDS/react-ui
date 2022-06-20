import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import { MenuButton } from '../MenuButton';
import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';
import { LIGHT_THEME } from '../themes';

describe('MenuButton', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    jest.clearAllTimers();
  });

  const options = [
    { id: '1', display: 'one' },
    { id: '2', display: 'two' },
    { id: '3', display: 'three' },
  ];

  const requiredProps = {
    selected: '1',
    onChange: (id: string) => {
      /**/
    },
    items: options.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
    })),
  };
  const Component = (props: any) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <MenuButton {...props} {...requiredProps} data-testid="btn">
        test
      </MenuButton>
    </ThemeProvider>
  );

  it('should render component', () => {
    const wrapper = render(<Component />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with loading state', () => {
    const wrapper = render(<Component loading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with skeleton state', () => {
    const wrapper = render(<Component skeleton />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show menu when user clicks on button', async () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<Component />);
    fireEvent.click(screen.getByTestId('btn'));
    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
  });

  it('should show menu when user presses Enter', async () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<Component />);
    const btn = await screen.findByTestId('btn');
    fireEvent.keyDown(btn, { key: 'Enter', code: 'Enter', charCode: 13 });
    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
  });

  it('should show menu when user presses Space', async () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<Component />);
    const btn = await screen.findByTestId('btn');
    fireEvent.keyDown(btn, { key: ' ', code: 'Space' });
    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
  });

  it('should hide menu when user presses Escape', async () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<Component />);
    const btn = await screen.findByTestId('btn');
    fireEvent.keyDown(btn, { key: 'Enter', code: 'Enter' });
    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
    fireEvent.keyDown(btn, { key: 'Escape', code: 'Escape' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
});
