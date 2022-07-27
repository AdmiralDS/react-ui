import type { HTMLAttributes } from 'react';
import * as React from 'react';
import type { Appearance, Dimension } from '#src/components/TextButton/types';
import type { ItemProps } from '#src/components/MenuItem';
import { TextButton } from '#src/components/TextButton';
import styled from 'styled-components';
import { IconContainer } from '#src/components/TextButton/commonMixin';
import { DropMenu } from '#src/components/DropMenu';

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
      skeleton = false,
      ...props
    },
    ref,
  ) => {
    return (
      <DropMenu
        {...props}
        ref={ref}
        dimension={dimension}
        disabled={disabled}
        loading={loading}
        items={items}
        selected={selected}
        onChange={onChange}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <StyledTextButton
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
            />
          );
        }}
      />
    );
  },
);

TextButtonMenu.displayName = 'TextButtonMenu';
