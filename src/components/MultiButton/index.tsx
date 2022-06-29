import type { FocusEvent, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import React, { HTMLAttributes, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
import { Button } from '#src/components/Button';
import { Dropdown } from '#src/components/Dropdown';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { Shape } from '#src/components/themes/common';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';
import { DropMenu } from '#src/components/DropMenu';

function mainButtonBorderRadius(shape: Shape): string {
  const radius = mediumGroupBorderRadius(shape);
  return `${radius} 0 0 ${radius}`;
}

function menuButtonBorderRadius(shape: Shape): string {
  const radius = mediumGroupBorderRadius(shape);
  return `0 ${radius} ${radius} 0`;
}

const focusStyle = css`
  &:focus-visible {
    outline-offset: -4px;
    &[data-appearance~='primary'] {
      outline: ${(p) => p.theme.color['Neutral/Neutral 00']} solid 2px;
    }
    &[data-appearance~='secondary'] {
      outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
    }
  }
`;

const MainButton = styled(Button)`
  &[data-appearance~='primary'] {
    border-radius: ${(p) => mainButtonBorderRadius(p.theme.shape)};
  }
  &[data-appearance~='secondary'] {
    border-right: none;
    border-radius: ${(p) => mainButtonBorderRadius(p.theme.shape)};
  }
  ${focusStyle}
`;

const MenuButton = styled(Button)`
  &[data-appearance~='primary'] {
    border-radius: ${(p) => menuButtonBorderRadius(p.theme.shape)};
  }
  &[data-appearance~='secondary'] {
    border-left: none;
    border-radius: ${(p) => menuButtonBorderRadius(p.theme.shape)};
  }
  ${focusStyle}
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
  /** Массив опций */
  selected?: string;
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

export const MultiButton = React.forwardRef<HTMLButtonElement, MultiButtonProps>(
  (
    {
      dimension = 'l',
      appearance = 'primary',
      disabled,
      options,
      selected,
      alignSelf = 'flex-end',
      onChange,
      onClose,
      onOpen,
      children,
      ...props
    },
    ref,
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const menuDimension = dimension === 'xl' ? 'l' : dimension;
    const menuWidth = dimension === 's' ? '240px' : '280px';
    const { display: firstOption, disabled: firstOptionDisabled, ...firstOptionProps } = options[0];
    const model = React.useMemo(() => {
      return options.slice(1, options.length).map((item) => ({
        id: item.id,
        render: (items: RenderOptionProps) => (
          <MenuItem dimension={menuDimension} {...items} key={item.id}>
            {item.display}
          </MenuItem>
        ),
        disabled: item.disabled,
      }));
    }, [dimension, options]);

    const handleWrapperFocus = () => {
      wrapperRef.current?.setAttribute('data-focused', 'true');
    };
    const handleWrapperBlur = () => {
      wrapperRef.current?.setAttribute('data-focused', 'false');
    };

    const handleMainBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
      onChange(e.currentTarget.id);
    };

    return (
      <DropMenu
        {...props}
        items={model}
        onChange={onChange}
        onOpen={onOpen}
        onClose={onClose}
        ref={ref}
        dimension={menuDimension}
        menuWidth={menuWidth}
        disabled={disabled}
        selected={selected}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <Wrapper
              ref={wrapperRef}
              data-focused="false"
              onFocus={handleWrapperFocus}
              onBlur={handleWrapperBlur}
              {...props}
            >
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
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                dimension={dimension}
                appearance={appearance}
                disabled={disabled}
                displayAsSquare
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                aria-expanded={menuState}
              >
                {statusIcon}
              </MenuButton>
            </Wrapper>
          );
        }}
      />

      /*<Wrapper ref={wrapperRef} data-focused="false" onFocus={handleWrapperFocus} onBlur={handleWrapperBlur} {...props}>
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
    </Wrapper>*/
    );
  },
);

MultiButton.displayName = 'MultiButton';
