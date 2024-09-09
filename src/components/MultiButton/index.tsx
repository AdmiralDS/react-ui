import type { MouseEvent, HTMLAttributes } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';

import { Button } from '#src/components/Button';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';
import type { DropMenuComponentProps, DropMenuStyleProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';

const mainButtonBorderRadius = css`
  ${({ theme }) => {
    const radius = mediumGroupBorderRadius(theme.shape);
    return `var(--admiral-border-radius-Medium, ${radius}) 0 0 var(--admiral-border-radius-Medium, ${radius})`;
  }}
`;

const menuButtonBorderRadius = css`
  ${({ theme }) => {
    const radius = mediumGroupBorderRadius(theme.shape);
    return `0 var(--admiral-border-radius-Medium, ${radius}) var(--admiral-border-radius-Medium, ${radius}) 0`;
  }}
`;

const focusStyle = css`
  &:focus-visible {
    outline-offset: -4px;
    &[data-appearance~='primary'] {
      outline: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']}) solid 2px;
    }
    &[data-appearance~='secondary'] {
      outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
    }
  }
`;

const MainButton = styled(Button)`
  &[data-appearance~='primary'] {
    border-radius: ${(p) => (p.skeleton ? 0 : mainButtonBorderRadius)};
  }
  &[data-appearance~='tertiary'] {
    border-radius: ${(p) => (p.skeleton ? 0 : mainButtonBorderRadius)};
  }
  // повышаем специфичность, чтобы перебить изначальные стили border у Button
  &&&[data-appearance~='secondary'] {
    border-right: none;
    border-radius: ${(p) => (p.skeleton ? 0 : mainButtonBorderRadius)};
  }
  ${focusStyle}
`;

const MenuButton = styled(Button)`
  &[data-appearance~='primary'] {
    border-radius: ${(p) => (p.skeleton ? 0 : menuButtonBorderRadius)};
  }
  &[data-appearance~='tertiary'] {
    border-radius: ${(p) => (p.skeleton ? 0 : menuButtonBorderRadius)};
  }
  // повышаем специфичность, чтобы перебить изначальные стили border у Button
  &&&[data-appearance~='secondary'] {
    border-left: none;
    border-radius: ${(p) => (p.skeleton ? 0 : menuButtonBorderRadius)};
  }
  ${focusStyle}
`;

const Separator = styled.div<SeparatorProps>`
  width: 1px;
  &[data-appearance~='primary'] {
    background-color: transparent;
  }
  &[data-appearance~='tertiary'] {
    background-color: transparent;
  }

  &[data-appearance~='secondary'] {
    background-color: ${({ theme, disabled }) =>
      disabled
        ? `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`
        : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`};
  }

  ${({ $skeleton }) => $skeleton && skeletonAnimationMixin};
`;

const Wrapper = styled.div`
  display: inline-flex;
`;

type Dimension = 'xl' | 'l' | 'm' | 's';
type Appearance = 'primary' | 'secondary' | 'tertiary';

interface SeparatorProps {
  disabled?: boolean;
  $skeleton?: boolean;
}

export interface MultiButtonProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    Omit<DropMenuComponentProps, 'targetElement'>,
    Omit<DropMenuStyleProps, 'menuWidth'> {
  /** Опции выпадающего списка */
  items?: Array<MenuModelItemProps>;
  /** Id выбранной опции списка */
  selected?: string;
  /** Колбек на нажатие основной кнопки */
  onMainButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
   * Взамен используйте onSelectItem
   *
   * Колбек на изменение выбранной опции
   **/
  onChange?: (id: string) => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
   * Взамен используйте onVisibilityChange
   *
   * Колбек на открытие меню
   **/
  onOpen?: () => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
   * Взамен используйте nVisibilityChange
   *
   * Колбек на закрытие меню
   **/
  onClose?: () => void;
  /** Размер компонента */
  dimension?: Dimension;
  /** Внешний вид компонента */
  appearance?: Appearance;
  /** Отключение компонента */
  disabled?: boolean;
  /** Отключение только главной кнопки, без отключения выпадающего меню. */
  disabledMainButton?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
}

export const MultiButton = React.forwardRef<HTMLButtonElement, MultiButtonProps>(
  (
    {
      dimension = 'l',
      appearance = 'primary',
      disabled,
      disabledMainButton,
      items = [],
      onMainButtonClick,
      disableSelectedOptionHighlight,
      selected,
      onSelectItem,
      active,
      onActivateItem,
      isVisible,
      onVisibilityChange,
      onClickOutside,
      onChange,
      onClose,
      onOpen,
      skeleton = false,
      alignSelf = 'auto',
      menuMaxHeight,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      renderTopPanel,
      renderBottomPanel,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      children,
      ...props
    },
    ref,
  ) => {
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const menuDimension = dimension === 'xl' ? 'l' : dimension;
    const menuWidth = dimension === 's' ? '240px' : '280px';

    const handleWrapperFocus = () => {
      wrapperRef.current?.setAttribute('data-focused', 'true');
    };
    const handleWrapperBlur = () => {
      wrapperRef.current?.setAttribute('data-focused', 'false');
    };

    const dropMenuProps = {
      ...passDropdownDataAttributes(props),
      renderTopPanel,
      renderBottomPanel,
      items,
      onChange,
      onOpen,
      onClose,
      isVisible,
      onVisibilityChange,
      onClickOutside,
      disableSelectedOptionHighlight,
      selected,
      onSelectItem,
      active,
      onActivateItem,
      menuMaxHeight,
      menuWidth,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      alignSelf,
      onForwardCycleApprove,
      onBackwardCycleApprove,
    };

    return (
      <DropMenu
        {...dropMenuProps}
        dimension={menuDimension}
        disabled={disabled}
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
                ref={ref}
                skeleton={skeleton}
                dimension={dimension}
                appearance={appearance}
                disabled={disabled || disabledMainButton}
                onClick={onMainButtonClick}
              >
                {React.Children.toArray(children).map((child, index) =>
                  typeof child === 'string' ? <span key={`${child}-${index}`}>{child}</span> : child,
                )}
              </MainButton>
              <Separator disabled={disabled} $skeleton={skeleton} data-appearance={appearance} aria-hidden />
              <MenuButton
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                skeleton={skeleton}
                dimension={dimension}
                appearance={appearance}
                disabled={disabled}
                displayAsSquare
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                aria-expanded={menuState}
                className="multi-button-menu-button-with-dropdown"
              >
                {statusIcon}
              </MenuButton>
            </Wrapper>
          );
        }}
      />
    );
  },
);

MultiButton.displayName = 'MultiButton';
