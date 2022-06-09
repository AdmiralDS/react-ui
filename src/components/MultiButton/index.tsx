import type { FC, FocusEvent, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import React, { HTMLAttributes, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
import { Button } from '#src/components/Button';
import { Dropdown } from '#src/components/Dropdown';
import { DropDownItem } from '#src/components/DropDownItem';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { Shape } from '#src/components/themes/common';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

function mainButtonBorderRadius(shape: Shape): string {
  const radius = mediumGroupBorderRadius(shape);
  return `${radius} 0 0 ${radius}`;
}

function menuButtonBorderRadius(shape: Shape): string {
  const radius = mediumGroupBorderRadius(shape);
  return `0 ${radius} ${radius} 0`;
}

const MainButton = styled(Button)`
  &[data-appearance~='primary'] {
    border-radius: ${(p) => mainButtonBorderRadius(p.theme.shape)};
  }
  &[data-appearance~='secondary'] {
    border-right: none;
    border-radius: ${(p) => mainButtonBorderRadius(p.theme.shape)};
  }
  &:focus {
    outline: none;
  }
`;

const StyledDropdown = styled(Dropdown)`
  padding: 8px 0;
`;

const MenuButton = styled(Button)`
  &[data-appearance~='primary'] {
    border-radius: ${(p) => menuButtonBorderRadius(p.theme.shape)};
  }
  &[data-appearance~='secondary'] {
    border-left: none;
    border-radius: ${(p) => menuButtonBorderRadius(p.theme.shape)};
  }
  &:focus {
    outline: none;
  }
`;

const Separator = styled.div<SeparatorProps>`
  width: 1px;
  &[data-appearance~='primary'] {
    background-color: transparent;
  }

  &[data-appearance~='secondary'] {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Primary/Primary 60 Main']};
  }
`;

const Wrapper = styled.div`
  display: inline-flex;
`;

const Icon = styled(ChevronDownOutline)<{ $menuOpened: boolean }>`
  transition: all 0.3s;
  ${({ $menuOpened }) => $menuOpened && 'transform: rotate(180deg);'}
`;

type Dimension = 'xl' | 'l' | 'm' | 's';
type Appearance = 'primary' | 'secondary';

interface SeparatorProps {
  disabled?: boolean;
}

export interface MultiButtonItem extends HTMLAttributes<HTMLElement> {
  /** Содержимое опции, предназначенное для отображения */
  display: ReactNode;
  /** Уникальный идентификатор опции */
  id: string;
  /** Отключение опции */
  disabled?: boolean;
}

export interface MultiButtonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Массив опций */
  options: Array<MultiButtonItem>;
  /** Выбранная опция */
  selected: string | null;
  /** Колбек на изменение выбранной опции */
  onChange: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Размер компонента */
  dimension?: Dimension;
  /** Внешний вид компонента */
  appearance?: Appearance;
  /** Отключение компонента */
  disabled?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const MultiButton: FC<MultiButtonProps> = ({
  dimension = 'l',
  appearance = 'primary',
  disabled,
  options,
  selected,
  alignSelf = 'flex-end',
  onChange,
  onClose,
  onOpen,
  ...props
}) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuDimension = dimension === 'xl' ? 'l' : dimension;
  const menuWidth = dimension === 's' ? '240px' : '280px';
  const { display: firstOption, disabled: firstOptionDisabled, ...firstOptionProps } = options[0];

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

  const clickOutside = (e: Event) => {
    if (e.target && btnRef.current?.contains(e.target as Node)) {
      return;
    }
    setMenuOpened(false);
  };

  const handleWrapperFocus = (e: FocusEvent<HTMLDivElement>) => {
    wrapperRef.current?.setAttribute('data-focused', 'true');
  };
  const handleWrapperBlur = (e: FocusEvent<HTMLDivElement>) => {
    wrapperRef.current?.setAttribute('data-focused', 'false');
  };

  const handleMainBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    onChange(e.currentTarget.id);
  };
  const handleMenuBtnKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const code = keyboardKey.getCode(e);
    if (code === keyboardKey.ArrowDown || code === keyboardKey.Enter || code === keyboardKey[' ']) {
      setMenuOpened(true);
      onOpen?.();
      e.preventDefault();
    }
  };

  const handleMenuKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const code = keyboardKey.getCode(e);
    if (code === keyboardKey.Escape || code === keyboardKey.Tab) {
      closeMenu();
    }
  };

  return (
    <Wrapper ref={wrapperRef} data-focused="false" onFocus={handleWrapperFocus} onBlur={handleWrapperBlur} {...props}>
      <MainButton
        {...firstOptionProps}
        dimension={dimension}
        appearance={appearance}
        disabled={disabled || firstOptionDisabled}
        onClick={handleMainBtnClick}
      >
        {firstOption}
      </MainButton>
      <Separator disabled={disabled} data-appearance={appearance} aria-hidden />
      <MenuButton
        ref={btnRef}
        dimension={dimension}
        appearance={appearance}
        disabled={disabled}
        displayAsSquare
        onKeyDown={handleMenuBtnKeyDown}
        onClick={reverseMenu}
        aria-expanded={menuOpened}
      >
        <Icon $menuOpened={menuOpened} />
      </MenuButton>
      {menuOpened && !disabled && (
        <StyledDropdown
          role="listbox"
          data-dimension={menuDimension}
          targetRef={btnRef}
          style={{ width: menuWidth }}
          onClickOutside={clickOutside}
          onKeyDown={handleMenuKeyDown}
          alignSelf={alignSelf}
        >
          {options.slice(1, options.length).map(({ display, disabled: optionDisabled, id, ...props }) => {
            const handleClick = (e: MouseEvent<HTMLLIElement>) => {
              if (!optionDisabled) {
                onChange(e.currentTarget.id);
                closeMenu();
              }
            };
            const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
              const code = keyboardKey.getCode(e);
              if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
                if (!optionDisabled) {
                  onChange(e.currentTarget.id);
                  closeMenu();
                  e.preventDefault();
                }
              }
            };
            return (
              <DropDownItem
                {...props}
                key={id}
                id={id}
                dimension={menuDimension}
                disabled={disabled || optionDisabled}
                selected={selected === id}
                aria-selected={selected === id}
                role="option"
                onClick={handleClick}
                onKeyDown={handleKeyDown}
              >
                {display}
              </DropDownItem>
            );
          })}
        </StyledDropdown>
      )}
    </Wrapper>
  );
};

MultiButton.displayName = 'MultiButton';
