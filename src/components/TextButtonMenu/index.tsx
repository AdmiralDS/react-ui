import type { HTMLAttributes } from 'react';
import * as React from 'react';
import type { Appearance, Dimension } from '#src/components/TextButton/types';
import type { ItemProps } from '#src/components/MenuItem';
import { TextButton } from '#src/components/TextButton';
import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { IconContainer } from '#src/components/TextButton/commonMixin';
import { DropMenu } from '#src/components/DropMenu';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';

const StyledTextButton = styled(TextButton)<{ menuOpened?: boolean; appearance?: Appearance }>`
  &:focus {
    color: ${({ theme, appearance, menuOpened }) =>
      menuOpened
        ? appearance === 'primary'
          ? theme.color['Primary/Primary 60 Main']
          : theme.color['Neutral/Neutral 90']
        : 'inherited'};
    ${IconContainer} {
      & *[fill^='#'] {
        fill: ${({ theme, appearance, menuOpened }) =>
          menuOpened
            ? appearance === 'primary'
              ? theme.color['Primary/Primary 60 Main']
              : theme.color['Neutral/Neutral 50']
            : 'inherited'};
      }
    }
  }
`;

export interface TextButtonMenuProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Текст кнопки */
  text?: string;
  /** Состояние загрузки */
  loading?: boolean;
  /** Опции выпадающего списка */
  items: Array<ItemProps>;
  /** Выбранная опция */
  selected?: string;
  /** Колбек на изменение выбранной опции */
  onChange: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Отключение компонента */
  disabled?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /**  Ширина меню */
  menuWidth?: string;
  /** Задает максимальную высоту меню */
  menuMaxHeight?: string | number;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Состояние skeleton */
  skeleton?: boolean;
}

export const TextButtonMenu = React.forwardRef<HTMLButtonElement, TextButtonMenuProps>(
  (
    {
      text,
      dimension = 'm',
      appearance = 'primary',
      disabled = false,
      loading = false,
      items,
      selected,
      onChange,
      onOpen,
      onClose,
      skeleton = false,
      className = '',
      menuWidth,
      menuMaxHeight,
      alignSelf,
      dropContainerCssMixin,
      ...props
    },
    ref,
  ) => {
    const dropMenuProps = passDropdownDataAttributes(props);

    return (
      <DropMenu
        ref={ref}
        dimension={dimension}
        menuWidth={menuWidth}
        menuMaxHeight={menuMaxHeight}
        loading={loading}
        items={items}
        selected={selected}
        onChange={onChange}
        onOpen={onOpen}
        onClose={onClose}
        disabled={disabled}
        alignSelf={alignSelf}
        dropContainerCssMixin={dropContainerCssMixin}
        {...dropMenuProps}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <StyledTextButton
              {...props}
              text={text}
              skeleton={skeleton}
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              dimension={dimension}
              appearance={appearance === 'primary' ? 'primary' : 'secondary'}
              displayRight
              disabled={disabled}
              loading={loading}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
              aria-expanded={menuState}
              menuOpened={menuState}
              icon={statusIcon}
              className={className + ' text-button-with-dropdown'}
            />
          );
        }}
      />
    );
  },
);

TextButtonMenu.displayName = 'TextButtonMenu';
