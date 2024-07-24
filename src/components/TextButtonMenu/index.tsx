import type { HTMLAttributes, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

import type { Appearance, Dimension } from '#src/components/TextButton/types';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';
import { TextButton } from '#src/components/TextButton';
import { IconContainer } from '#src/components/TextButton/commonMixin';
import type { DropMenuComponentProps, DropMenuStyleProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import { refSetter } from '../common/utils/refSetter';

const StyledTextButton = styled(TextButton)<{ $menuOpened?: boolean; appearance?: Appearance }>`
  &:focus {
    color: ${({ theme, appearance, $menuOpened }) =>
      $menuOpened
        ? appearance === 'primary'
          ? `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`
          : `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`
        : 'inherited'};
    ${IconContainer} {
      & *[fill^='#'] {
        fill: ${({ theme, appearance, $menuOpened }) =>
          $menuOpened
            ? appearance === 'primary'
              ? `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`
              : `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`
            : 'inherited'};
      }
    }
  }
`;

export interface TextButtonMenuProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    Omit<DropMenuComponentProps, 'targetElement'>,
    DropMenuStyleProps {
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
  items: Array<MenuModelItemProps>;
  /** Выбранная опция */
  selected?: string;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
   * Взамен используйте параметр onSelectItem
   *
   * Колбек на изменение выбранной опции */
  onChange?: (id: string) => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
   * Взамен используйте параметры isVisible и onVisibilityChange
   *
   * Колбек на открытие меню */
  onOpen?: () => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
   * Взамен используйте параметры isVisible и onVisibilityChange
   *
   * Колбек на закрытие меню */
  onClose?: () => void;
  /** Отключение компонента */
  disabled?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
}

export const TextButtonMenu = forwardRef<HTMLButtonElement, TextButtonMenuProps>(
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
      renderTopPanel,
      renderBottomPanel,
      onForwardCycleApprove,
      onBackwardCycleApprove,
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
    const dropMenuProps = {
      ...passDropdownDataAttributes(props),
      isVisible,
      onVisibilityChange,
      onSelectItem,
      active,
      onActivateItem,
      onChange,
      onOpen,
      onClose,
      disableSelectedOptionHighlight,
      renderTopPanel,
      renderBottomPanel,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      onClickOutside,
      menuWidth,
      menuMaxHeight,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      alignSelf,
    };

    return (
      <DropMenu
        {...dropMenuProps}
        dimension={dimension}
        loading={loading}
        items={items}
        selected={selected}
        disabled={disabled}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <StyledTextButton
              {...props}
              text={text}
              iconStart={iconStart}
              iconEnd={statusIcon}
              skeleton={skeleton}
              ref={refSetter(ref, buttonRef as Ref<HTMLButtonElement>)}
              dimension={dimension}
              appearance={appearance === 'primary' ? 'primary' : 'secondary'}
              displayRight
              disabled={disabled}
              loading={loading}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
              aria-expanded={menuState}
              $menuOpened={menuState}
              className={className + ' text-button-with-dropdown'}
            />
          );
        }}
      />
    );
  },
);

TextButtonMenu.displayName = 'TextButtonMenu';
