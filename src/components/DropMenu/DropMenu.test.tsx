import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Button } from '#src/components/Button';
import { DropMenu } from '#src/components/DropMenu';
import type { MenuModelItemProps, RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItemWithCheckbox } from '#src/components/Menu/MenuItemWithCheckbox';
import { DropdownProvider } from '#src/components/DropdownProvider';
import { LIGHT_THEME } from '#src/components/themes';

const CHECKBOX_ITEMS = Array.from({ length: 7 }, (_, index) => ({
  id: String(index + 1),
  label: `Option ${index + 1}`,
  checked: false,
}));

const ControlledCheckboxDropMenu = () => {
  const [active, setActive] = React.useState<string | undefined>(CHECKBOX_ITEMS[0].id);
  const [isVisible, setIsVisible] = React.useState(false);

  const model = React.useMemo<Array<MenuModelItemProps>>(() => {
    return CHECKBOX_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox key={item.id} id={item.id} checked={item.checked} dimension="m" {...options}>
          {item.label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [active]);

  return (
    <DropMenu
      items={model}
      active={active}
      onActivateItem={setActive}
      isVisible={isVisible}
      onVisibilityChange={setIsVisible}
      disableSelectedOptionHighlight
      dimension="m"
      onSelectItem={() => undefined}
      renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon }) => (
        <Button ref={buttonRef as React.Ref<HTMLButtonElement>} onKeyDown={handleKeyDown} onClick={handleClick}>
          Open
          {statusIcon}
        </Button>
      )}
    />
  );
};

describe('DropMenu', () => {
  const scrollIntoViewMock = jest.fn();

  jest.useFakeTimers();

  beforeEach(() => {
    jest.clearAllTimers();
    scrollIntoViewMock.mockClear();
    HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
  });

  const renderDropMenu = () =>
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <ControlledCheckboxDropMenu />
        </DropdownProvider>
      </ThemeProvider>,
    );

  const flushTimers = () => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
  };

  const openMenu = () => {
    fireEvent.click(screen.getByRole('button', { name: /open/i }));
    flushTimers();
  };

  const closeMenu = () => {
    fireEvent.click(screen.getByRole('button', { name: /open/i }));
    flushTimers();
  };

  const navigateToLastItem = () => {
    for (let index = 0; index < CHECKBOX_ITEMS.length - 1; index += 1) {
      fireEvent.keyDown(document, { key: 'ArrowDown', code: 'ArrowDown' });
      flushTimers();
    }
  };

  it('should activate the first item when reopening controlled checkbox menu', () => {
    renderDropMenu();

    openMenu();
    navigateToLastItem();

    expect(screen.getByText('Option 7').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'true');

    closeMenu();
    openMenu();

    expect(screen.getByText('Option 1').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'true');
    expect(screen.getByText('Option 7').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'false');
  });

  it('should not autoscroll to the first item on mouseLeave after reopening', () => {
    renderDropMenu();

    openMenu();
    navigateToLastItem();
    closeMenu();
    openMenu();

    fireEvent.mouseEnter(screen.getByText('Option 7'));
    flushTimers();

    scrollIntoViewMock.mockClear();

    const menuWrapper = screen.getByRole('listbox').firstElementChild as HTMLElement;
    fireEvent.mouseLeave(menuWrapper);
    flushTimers();

    expect(scrollIntoViewMock).not.toHaveBeenCalled();
    expect(screen.queryByText('Option 1')?.closest('[data-hovered="true"]')).not.toBeInTheDocument();
  });
});
