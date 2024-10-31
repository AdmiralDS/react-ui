import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import type { OverflowMenuProps } from '#src/components/OverflowMenu';
import { OverflowMenu } from '#src/components/OverflowMenu';
import { LIGHT_THEME } from '#src/components/themes';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';

describe('OverflowMenu', () => {
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
    onChange: () => {
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
  const Component = (props: Omit<OverflowMenuProps, 'items'>) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <OverflowMenu {...props} {...requiredProps} data-testid="btn" />
    </ThemeProvider>
  );

  it('should render component', () => {
    const wrapper = render(<Component />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show menu when user clicks on button', async () => {
    HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<Component />);
    fireEvent.click(screen.getByTestId('btn'));
    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
  });

  it('should show menu when user presses Enter', async () => {
    HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<Component />);
    const btn = await screen.findByTestId('btn');
    fireEvent.keyDown(btn, { key: 'Enter', code: 'Enter', charCode: 13 });

    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
  });

  it('should show menu when user presses Space', async () => {
    HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<Component />);
    const btn = await screen.findByTestId('btn');
    fireEvent.keyDown(btn, { key: ' ', code: 'Space' });
    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
  });

  it('should hide menu when user presses Escape', async () => {
    HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<Component />);
    const btn = await screen.findByTestId('btn');
    fireEvent.keyDown(btn, { key: 'Enter', code: 'Enter' });
    const menu = await screen.findAllByRole('listbox');
    expect(menu).toHaveLength(1);
    fireEvent.keyDown(btn, { key: 'Escape', code: 'Escape' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
});
