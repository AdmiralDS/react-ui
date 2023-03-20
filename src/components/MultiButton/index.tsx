import type { CSSProperties, MouseEvent, ReactNode, HTMLAttributes } from 'react';
import * as React from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { css } from 'styled-components';
import { Button } from '#src/components/Button';
import type { Shape } from '#src/components/themes/common';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import type { ItemProps, RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import type { DropMenuComponentProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import { uid } from '#src/components/common/uid';

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
    border-radius: ${(p) => (p.skeleton ? 0 : mainButtonBorderRadius(p.theme.shape))};
  }
  &[data-appearance~='secondary'] {
    border-right: none;
    border-radius: ${(p) => (p.skeleton ? 0 : mainButtonBorderRadius(p.theme.shape))};
  }
  ${focusStyle}
`;

const MenuButton = styled(Button)`
  &[data-appearance~='primary'] {
    border-radius: ${(p) => (p.skeleton ? 0 : menuButtonBorderRadius(p.theme.shape))};
  }
  &[data-appearance~='secondary'] {
    border-left: none;
    border-radius: ${(p) => (p.skeleton ? 0 : menuButtonBorderRadius(p.theme.shape))};
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

  ${({ skeleton }) => skeleton && skeletonAnimationMixin}};
`;

const Wrapper = styled.div`
  display: inline-flex;
`;

type Dimension = 'xl' | 'l' | 'm' | 's';
type Appearance = 'primary' | 'secondary';

interface SeparatorProps {
  disabled?: boolean;
  skeleton?: boolean;
}

export interface MultiButtonItem extends HTMLAttributes<HTMLElement> {
  /** Содержимое опции, предназначенное для отображения */
  display: ReactNode;
  /** Уникальный идентификатор опции */
  id: string;
  /** Отключение опции */
  disabled?: boolean;
}

export interface MultiButtonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>, DropMenuComponentProps {
  /** Опции выпадающего списка */
  items?: Array<ItemProps>;
  /** @deprecated use items instead
   * Массив опций */
  options?: Array<MultiButtonItem>;
  /** Массив опций */
  selected?: string;
  /** Колбек на нажатие основной кнопки */
  onMainButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** @deprecated use onSelectItem instead
   * Колбек на изменение выбранной опции */
  onChange?: (id: string) => void;
  /** @deprecated use onVisibilityChange instead
   * Колбек на открытие меню */
  onOpen?: () => void;
  /** @deprecated use onVisibilityChange instead
   * Колбек на закрытие меню */
  onClose?: () => void;
  /** Размер компонента */
  dimension?: Dimension;
  /** Внешний вид компонента */
  appearance?: Appearance;
  /** Отключение компонента */
  disabled?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
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

export const MultiButton = React.forwardRef<HTMLButtonElement, MultiButtonProps>(
  (
    {
      dimension = 'l',
      appearance = 'primary',
      disabled,
      items,
      options,
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
      children,
      ...props
    },
    ref,
  ) => {
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const menuDimension = dimension === 'xl' ? 'l' : dimension;
    const menuWidth = dimension === 's' ? '240px' : '280px';

    const model = React.useMemo(() => {
      return options
        ? options.slice(1, options.length).map((item) => ({
            id: item.id,
            render: (items: RenderOptionProps) => (
              <MenuItem dimension={menuDimension} {...items} key={item.id}>
                {item.display}
              </MenuItem>
            ),
            disabled: item.disabled,
          }))
        : [];
    }, [dimension, options]);

    const handleWrapperFocus = () => {
      wrapperRef.current?.setAttribute('data-focused', 'true');
    };
    const handleWrapperBlur = () => {
      wrapperRef.current?.setAttribute('data-focused', 'false');
    };

    const dropMenuProps = passDropdownDataAttributes(props);

    return (
      <DropMenu
        dimension={menuDimension}
        menuWidth={menuWidth}
        menuMaxHeight={menuMaxHeight}
        items={items || model}
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
        ref={ref}
        {...dropMenuProps}
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
                skeleton={skeleton}
                dimension={dimension}
                appearance={appearance}
                disabled={disabled ? disabled : options ? options[0].disabled : false} //TODO: remove after removing deprecated options
                onClick={onMainButtonClick}
              >
                {/*TODO: remove after removing deprecated options*/}
                {children
                  ? React.Children.toArray(children).map((child) =>
                      typeof child === 'string' ? <span key={uid()}>{child}</span> : child,
                    )
                  : options
                  ? options[0].display
                  : ''}
              </MainButton>
              <Separator disabled={disabled} skeleton={skeleton} data-appearance={appearance} aria-hidden />
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
