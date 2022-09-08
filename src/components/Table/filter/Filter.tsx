import * as React from 'react';
import styled from 'styled-components';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { Button } from './Button';

const StyledDropdownContainer = styled(DropdownContainer)`
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
`;

type Dimension = 'xl' | 'l' | 'm' | 's';
type FilterProps = {
  /** Функция закрытия фильтра */
  closeMenu: () => void;
  /** Функция установки состояния фильтра (активный/неактивный).
   * Необходимо для окрашивания иконки фильтра в синий цвет при активном фильтре и в серый при неактивном фильтре.
   */
  setFilterActive: (isActive: boolean) => void;
};

export interface FilterCompProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Функция отрисовки содержимого фильтра (выпадающего меню фильтра). Если её не передать, значок фильтра отображаться не будет */
  renderFilter: (obj: FilterProps) => React.ReactNode;
  /** Функция отрисовки иконки фильтра. По умолчанию в качестве иконки фильтра применяется OverflowIcon (троеточие) */
  renderFilterIcon?: () => React.ReactNode;
  /** Колбек на клик вне меню фильтра */
  onFilterMenuClickOutside?: (obj: FilterProps, event: Event) => void;
  /** Колбек на открытие меню фильтра */
  onFilterMenuOpen?: () => void;
  /** Колбек на закрытие меню фильтра */
  onFilterMenuClose?: () => void;
  /** Выравнивание контента ячеек столбца по левому или правому краю. По умолчанию left */
  cellAlign?: 'left' | 'right';
  /** Ref на элемент, относительно которого будет позиционироваться меню фильтра */
  targetRef: React.RefObject<HTMLElement>;
}

export const Filter = React.forwardRef<HTMLButtonElement, FilterCompProps>(
  (
    {
      renderFilter,
      renderFilterIcon,
      onFilterMenuClickOutside,
      onFilterMenuOpen,
      onFilterMenuClose,
      cellAlign,
      targetRef,
      ...props
    },
    ref,
  ) => {
    const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
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
          isFilterActive={isFilterActive}
          renderFilterIcon={renderFilterIcon}
          {...props}
        />
        {menuOpened && (
          <StyledDropdownContainer
            role="listbox"
            targetRef={targetRef}
            alignSelf={cellAlign === 'left' ? 'flex-end' : 'flex-start'}
            onClickOutside={clickOutside}
            onKeyDown={handleMenuKeyDown}
          >
            {renderFilter({ closeMenu, setFilterActive })}
          </StyledDropdownContainer>
        )}
      </>
    );
  },
);
