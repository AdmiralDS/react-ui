import * as React from 'react';
import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
import styled, { FlattenInterpolation, DefaultTheme, ThemeProps } from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';
import { typography } from '#src/components/Typography';
import { DropDownItem } from '#src/components/DropDownItem';
import { useClickOutside } from '#src/components/common/hooks/useClickOutside';
import { Dropdown } from '#src/components/Dropdown';

const Button = styled.button<{ $menuOpened?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 10px 12px;
  border: 2px solid transparent;
  border-radius: 4px;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  ${typography['Body/Body 2 Long']}
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.secondary};
  }
  & > span {
    min-width: 20px;
  }

  &:hover {
    cursor: pointer;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
  }

  &:active {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.press};
    }
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.basic.hover};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
  }

  ${({ $menuOpened, theme }) =>
    $menuOpened &&
    `
      border-color: ${theme.color.basic.hover};
      & *[fill^='#'] {
        fill: ${theme.color.basic.hover};
      }
    `}

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.basic.disable};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.disable};
    }
  }
`;

const Icon = styled(ChevronDownOutline)<{ $menuOpened: boolean }>`
  transition: all 0.3s;
  ${({ $menuOpened }) => $menuOpened && 'transform: rotate(180deg);'}
`;

const StyledDropDown = styled(Dropdown)<{
  dropMaxHeight: string | number;
  cssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  padding: 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: ${(p) => p.dropMaxHeight};
  min-width: 100%;
`;

export interface MenuButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Массив опций */
  options: Array<number>;
  /** Выбранная опция */
  selected: number | null;
  /** Колбек на изменение выбранной опции */
  onChange: (value: number) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Отключение компонента */
  disabled?: boolean;
  /** Задает максимальную высоту контейнера с опциями */
  dropMaxHeight: string | number;
  /** Позволяет добавлять миксин на дроп контейнер созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      children,
      disabled = false,
      onClose,
      onOpen,
      options,
      selected,
      onChange,
      dropMaxHeight,
      dropContainerCssMixin,
      ...props
    },
    ref,
  ) => {
    const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
    const btnRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLUListElement>(null);

    const reverseMenu = () => {
      setMenuOpened((prevOpened) => {
        prevOpened ? onClose?.() : onOpen?.();
        return !prevOpened;
      });
    };
    const closeMenu = () => {
      setMenuOpened(false);
      onClose?.();
      btnRef.current?.focus();
    };

    useClickOutside([menuRef, btnRef], closeMenu);

    const handleBtnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        setMenuOpened(true);
        onOpen?.();
        e.preventDefault();
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
      onChange(e.currentTarget.value);
      closeMenu();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onChange(e.currentTarget.value);
        closeMenu();
        e.preventDefault();
      }
    };

    const clickOutside = (e: Event) => {
      if (e.target && btnRef.current?.contains(e.target as Node)) {
        return;
      }
      setMenuOpened(false);
    };

    return (
      <>
        <Button
          {...props}
          ref={refSetter(ref, btnRef)}
          disabled={disabled}
          $menuOpened={menuOpened}
          onKeyDown={handleBtnKeyDown}
          onClick={reverseMenu}
          aria-expanded={menuOpened}
          type="button"
        >
          <span>{children}</span>
          <Icon $menuOpened={menuOpened} width={20} height={20} aria-hidden />
        </Button>
        {menuOpened && (
          <StyledDropDown
            targetRef={btnRef}
            onClickOutside={clickOutside}
            dropMaxHeight={dropMaxHeight}
            cssMixin={dropContainerCssMixin}
          >
            {options.map((option) => (
              <DropDownItem
                key={option}
                value={option}
                dimension="s"
                selected={selected === option}
                aria-selected={selected === option}
                role="option"
                onClick={handleClick}
                onKeyDown={handleKeyDown}
              >
                {option}
              </DropDownItem>
            ))}
          </StyledDropDown>
        )}
      </>
    );
  },
);
