import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Menu } from '#src/components/Menu';
import type { MenuModelItemProps, RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItemWithCheckbox } from '#src/components/Menu/MenuItemWithCheckbox';
import { DropdownProvider } from '#src/components/DropdownProvider';
import { LIGHT_THEME } from '#src/components/themes';

const CHECKBOX_ITEMS = Array.from({ length: 7 }, (_, index) => ({
  id: String(index + 1),
  label: `Option ${index + 1}`,
  checked: false,
}));

type ControlledCheckboxMenuProps = {
  recreateModelOnActiveChange?: boolean;
  defaultIsActive?: boolean;
  onActivateItem?: (id?: string) => void;
  visible?: boolean;
};

const ControlledCheckboxMenu = ({
  recreateModelOnActiveChange = true,
  defaultIsActive = false,
  onActivateItem: onActivateItemProp,
  visible = true,
}: ControlledCheckboxMenuProps) => {
  const [active, setActive] = React.useState<string | undefined>();
  const [items] = React.useState(CHECKBOX_ITEMS);

  const handleActivateItem = React.useCallback(
    (id?: string) => {
      setActive(id);
      onActivateItemProp?.(id);
    },
    [onActivateItemProp],
  );

  const model = React.useMemo<Array<MenuModelItemProps>>(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox key={item.id} id={item.id} checked={item.checked} dimension="m" {...options}>
          {item.label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [items, ...(recreateModelOnActiveChange ? [active] : [])]);

  if (!visible) {
    return null;
  }

  return (
    <Menu
      data-testid="menu"
      model={model}
      active={active}
      onActivateItem={handleActivateItem}
      disableSelectedOptionHighlight
      defaultIsActive={defaultIsActive}
      rowCount={6}
      dimension="m"
      onSelectItem={() => undefined}
    />
  );
};

const RemountableControlledCheckboxMenu = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <button type="button" onClick={() => setVisible((value) => !value)}>
        toggle menu
      </button>
      <ControlledCheckboxMenu visible={visible} defaultIsActive />
    </>
  );
};

describe('Menu', () => {
  const scrollIntoViewMock = jest.fn();

  jest.useFakeTimers();

  beforeEach(() => {
    jest.clearAllTimers();
    scrollIntoViewMock.mockClear();
    HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
  });

  const renderMenu = (props: ControlledCheckboxMenuProps = {}) =>
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <ControlledCheckboxMenu {...props} />
        </DropdownProvider>
      </ThemeProvider>,
    );

  const flushTimers = () => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
  };

  const navigateToLastItem = () => {
    for (let index = 0; index < CHECKBOX_ITEMS.length - 1; index += 1) {
      fireEvent.keyDown(document, { key: 'ArrowDown', code: 'ArrowDown' });
      flushTimers();
    }
  };

  it('should activate the first item on mount in controlled checkbox menu', () => {
    const handleActivateItem = jest.fn();
    renderMenu({ onActivateItem: handleActivateItem, defaultIsActive: true });

    flushTimers();

    expect(handleActivateItem).toHaveBeenCalledWith(CHECKBOX_ITEMS[0].id);
    expect(screen.getByText('Option 1').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'true');
  });

  it('should activate the first item when remounting controlled checkbox menu', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <RemountableControlledCheckboxMenu />
        </DropdownProvider>
      </ThemeProvider>,
    );

    flushTimers();
    navigateToLastItem();

    expect(screen.getByText('Option 7').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'true');

    fireEvent.click(screen.getByRole('button', { name: /toggle menu/i }));
    flushTimers();

    expect(screen.queryByTestId('menu')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /toggle menu/i }));
    flushTimers();

    expect(screen.getByText('Option 1').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'true');
    expect(screen.getByText('Option 7').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'false');
  });

  it('should not reset active on mount when disableSelectedOptionHighlight is false', () => {
    const handleActivateItem = jest.fn();

    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <Menu
            data-testid="menu"
            model={CHECKBOX_ITEMS.map((item) => ({
              id: item.id,
              render: (options: RenderOptionProps) => (
                <MenuItemWithCheckbox key={item.id} id={item.id} checked={item.checked} dimension="m" {...options}>
                  {item.label}
                </MenuItemWithCheckbox>
              ),
            }))}
            active={CHECKBOX_ITEMS[6].id}
            onActivateItem={handleActivateItem}
            defaultIsActive={false}
            rowCount={6}
            dimension="m"
            onSelectItem={() => undefined}
          />
        </DropdownProvider>
      </ThemeProvider>,
    );

    flushTimers();

    expect(handleActivateItem).not.toHaveBeenCalled();
    expect(screen.getByText('Option 7').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'true');
  });

  it('should highlight the first item on mount when active is undefined and disableSelectedOptionHighlight is false', () => {
    const handleActivateItem = jest.fn();

    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <Menu
            data-testid="menu"
            model={CHECKBOX_ITEMS.map((item) => ({
              id: item.id,
              render: (options: RenderOptionProps) => (
                <MenuItemWithCheckbox key={item.id} id={item.id} checked={item.checked} dimension="m" {...options}>
                  {item.label}
                </MenuItemWithCheckbox>
              ),
            }))}
            onActivateItem={handleActivateItem}
            defaultIsActive={true}
            rowCount={6}
            dimension="m"
            onSelectItem={() => undefined}
            multiSelection
          />
        </DropdownProvider>
      </ThemeProvider>,
    );

    flushTimers();

    expect(handleActivateItem).not.toHaveBeenCalled();
    expect(screen.getByText('Option 1').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'true');
  });

  it('should highlight the first item when model changes and disableSelectedOptionHighlight is false', () => {
    const handleActivateItem = jest.fn();

    const SelectLikeMenu = ({ model }: { model: Array<MenuModelItemProps> }) => (
      <Menu
        data-testid="menu"
        model={model}
        onActivateItem={handleActivateItem}
        defaultIsActive={true}
        rowCount={6}
        dimension="m"
        onSelectItem={() => undefined}
        multiSelection
      />
    );

    const fullModel = CHECKBOX_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox key={item.id} id={item.id} checked={item.checked} dimension="m" {...options}>
          {item.label}
        </MenuItemWithCheckbox>
      ),
    }));

    const filteredModel = fullModel.slice(0, 1);

    const { rerender } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <SelectLikeMenu model={fullModel} />
        </DropdownProvider>
      </ThemeProvider>,
    );

    flushTimers();
    navigateToLastItem();

    expect(screen.getByText('Option 7').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'true');

    rerender(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <SelectLikeMenu model={filteredModel} />
        </DropdownProvider>
      </ThemeProvider>,
    );

    flushTimers();

    expect(screen.getByText('Option 1').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'true');
  });

  it('should not autoscroll to the first item on mouseLeave in controlled checkbox menu', () => {
    renderMenu();

    fireEvent.mouseEnter(screen.getByText('Option 7'));
    flushTimers();

    scrollIntoViewMock.mockClear();

    fireEvent.mouseLeave(screen.getByTestId('menu'));
    flushTimers();

    expect(scrollIntoViewMock).not.toHaveBeenCalled();
    expect(screen.queryByText('Option 1')?.closest('[data-hovered="true"]')).not.toBeInTheDocument();
  });

  it('should clear active item highlight on mouseLeave in controlled checkbox menu', () => {
    renderMenu();

    fireEvent.mouseEnter(screen.getByText('Option 7'));
    flushTimers();

    expect(screen.getByText('Option 7').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'true');

    fireEvent.mouseLeave(screen.getByTestId('menu'));
    flushTimers();

    expect(screen.getByText('Option 1').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'false');
    expect(screen.getByText('Option 7').closest('[data-hovered]')).toHaveAttribute('data-hovered', 'false');
  });

  it('should call onActivateItem with undefined on mouseLeave', () => {
    const handleActivateItem = jest.fn();
    renderMenu({ onActivateItem: handleActivateItem });

    fireEvent.mouseEnter(screen.getByText('Option 7'));
    flushTimers();
    handleActivateItem.mockClear();

    fireEvent.mouseLeave(screen.getByTestId('menu'));
    flushTimers();

    expect(handleActivateItem).toHaveBeenCalledWith(undefined);
  });

  it('should autoscroll when navigating with keyboard in controlled menu', () => {
    renderMenu({ defaultIsActive: true });

    flushTimers();
    scrollIntoViewMock.mockClear();

    fireEvent.keyDown(document, { key: 'ArrowDown', code: 'ArrowDown' });
    flushTimers();
    flushTimers();

    expect(scrollIntoViewMock).toHaveBeenCalled();
  });

  it('should not autoscroll to the first item on mouseLeave after remounting', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <RemountableControlledCheckboxMenu />
        </DropdownProvider>
      </ThemeProvider>,
    );

    flushTimers();
    navigateToLastItem();

    fireEvent.click(screen.getByRole('button', { name: /toggle menu/i }));
    flushTimers();
    fireEvent.click(screen.getByRole('button', { name: /toggle menu/i }));
    flushTimers();

    fireEvent.mouseEnter(screen.getByText('Option 7'));
    flushTimers();

    scrollIntoViewMock.mockClear();

    fireEvent.mouseLeave(screen.getByTestId('menu'));
    flushTimers();

    expect(scrollIntoViewMock).not.toHaveBeenCalled();
    expect(screen.queryByText('Option 1')?.closest('[data-hovered="true"]')).not.toBeInTheDocument();
  });
});
