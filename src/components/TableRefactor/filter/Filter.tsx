import * as React from 'react';
import styled from 'styled-components';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import type { TableProps, Column } from '#src/components/Table';

import { Button } from './Button';

const FilterDropdownContainer = styled(StyledDropdownContainer)`
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
`;

export interface FilterCompProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  column: Column;
  /** Размер компонента */
  dimension?: TableProps['dimension'];
  /** Ref на элемент, относительно которого будет позиционироваться меню фильтра */
  targetRef: React.RefObject<HTMLElement>;
}

export const Filter = React.forwardRef<HTMLButtonElement, FilterCompProps>(({ column, targetRef, ...props }, ref) => {
  const {
    renderFilter,
    renderFilterIcon,
    onFilterMenuClickOutside,
    onFilterMenuOpen,
    onFilterMenuClose,
    isFilterActive: filterActive,
  } = column;
  const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
  /** TODO: удалить данный useState в дальнейшем и использовать взамен параметр column.isFilterActive */
  const [isFilterActive, setFilterActive] = React.useState<boolean>(false);
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const reverseMenu = () => {
    setMenuOpened((prevOpened) => {
      prevOpened ? onFilterMenuClose?.() : onFilterMenuOpen?.();
      return !prevOpened;
    });
  };
  const closeMenu = () => {
    setMenuOpened(false);
    onFilterMenuClose?.();
    btnRef.current?.focus();
  };
  const clickOutside = (e: Event) => {
    if (e.target && btnRef.current?.contains(e.target as Node)) {
      return;
    }
    onFilterMenuClickOutside?.({ closeMenu, setFilterActive }, e);
  };

  const handleBtnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const code = keyboardKey.getCode(e);
    if (code === keyboardKey.ArrowDown || code === keyboardKey.Enter || code === keyboardKey[' ']) {
      setMenuOpened(true);
      onFilterMenuOpen?.();
      e.preventDefault();
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const code = keyboardKey.getCode(e);
    if (code === keyboardKey.Escape || code === keyboardKey.Tab) {
      closeMenu();
    }
  };
  return (
    <>
      <Button
        ref={refSetter(ref, btnRef)}
        onKeyDown={handleBtnKeyDown}
        onClick={reverseMenu}
        aria-expanded={menuOpened}
        aria-haspopup={menuOpened}
        isFilterActive={filterActive ?? isFilterActive}
        renderFilterIcon={renderFilterIcon}
        {...props}
      />
      {menuOpened && (
        <FilterDropdownContainer
          role="listbox"
          targetRef={targetRef}
          alignSelf="flex-end"
          onClickOutside={clickOutside}
          onKeyDown={handleMenuKeyDown}
        >
          {renderFilter?.({ closeMenu, setFilterActive }, column)}
        </FilterDropdownContainer>
      )}
    </>
  );
});
