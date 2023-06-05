import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import type { Appearance, Dimension } from '#src/components/TextButton/types';
import type { ItemProps } from '#src/components/Menu/MenuItem';
import { TextButton } from '#src/components/TextButton';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';
import { IconContainer } from '#src/components/TextButton/commonMixin';
import type { DropMenuComponentProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import { refSetter } from '../common/utils/refSetter';

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

export interface TextButtonMenuProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    DropMenuComponentProps {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Текст кнопки */
  text?: string;
  /** Иконка перед текстом кнопки */
  iconStart?: ReactNode;
  /** Состояние загрузки */
  loading?: boolean;
  /** Опции выпадающего списка */
  items: Array<ItemProps>;
  /** Выбранная опция */
  selected?: string;
  /** @deprecated use onSelectItem instead
   * Колбек на изменение выбранной опции */
  onChange?: (id: string) => void;
  /** @deprecated use isVisible and onVisibilityChange instead
   * Колбек на открытие меню */
  onOpen?: () => void;
  /** @deprecated use isVisible and onVisibilityChange instead
   * Колбек на закрытие меню */
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
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;
  /** Состояние skeleton */
  skeleton?: boolean;
}

export const TextButtonMenu = React.forwardRef<HTMLButtonElement, TextButtonMenuProps>(
  (
    {
      text,
      iconStart,
      dimension = 'm',
      appearance = 'primary',
      disabled = false,
      loading = false,
      items,
      disableSelectedOptionHighlight,
      selected,
      onSelectItem,
      active,
      onActivateItem,
      isVisible,
      onVisibilityChange,
      onClickOutside,
      onChange,
      onOpen,
      onClose,
      skeleton = false,
      className = '',
      menuWidth,
      menuMaxHeight,
      alignSelf,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      ...props
    },
    ref,
  ) => {
    const dropMenuProps = passDropdownDataAttributes(props);

    return (
      <DropMenu
        dimension={dimension}
        menuWidth={menuWidth}
        menuMaxHeight={menuMaxHeight}
        loading={loading}
        items={items}
        disableSelectedOptionHighlight={disableSelectedOptionHighlight}
        selected={selected}
        onSelectItem={onSelectItem}
        active={active}
        onActivateItem={onActivateItem}
        onChange={onChange}
        onOpen={onOpen}
        onClose={onClose}
        isVisible={isVisible}
        onVisibilityChange={onVisibilityChange}
        onClickOutside={onClickOutside}
        disabled={disabled}
        alignSelf={alignSelf}
        dropContainerCssMixin={dropContainerCssMixin}
        dropContainerClassName={dropContainerClassName}
        dropContainerStyle={dropContainerStyle}
        {...dropMenuProps}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <StyledTextButton
              {...props}
              text={text}
              iconStart={iconStart}
              iconEnd={statusIcon}
              skeleton={skeleton}
              ref={refSetter(ref, buttonRef as React.Ref<HTMLButtonElement>)}
              dimension={dimension}
              appearance={appearance === 'primary' ? 'primary' : 'secondary'}
              displayRight
              disabled={disabled}
              loading={loading}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
              aria-expanded={menuState}
              menuOpened={menuState}
              className={className + ' text-button-with-dropdown'}
            />
          );
        }}
      />
    );
  },
);

TextButtonMenu.displayName = 'TextButtonMenu';
