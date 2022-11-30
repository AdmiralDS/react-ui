import * as React from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import type { DropMenuComponentProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';

const Button = styled.button<{ $menuOpened?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 10px 12px;
  border: 2px solid transparent;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
  & > span {
    min-width: 20px;
  }

  &:hover {
    cursor: pointer;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Primary/Primary 70']};
    }
  }

  &:active {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    }
  }

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
`;

export interface MenuButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    DropMenuComponentProps {
  /** Массив опций */
  options: Array<number>;
  /** Выбранная опция */
  selected?: string;
  /** Отключение компонента */
  disabled?: boolean;
  /** Задает максимальную высоту контейнера с опциями */
  dropMaxHeight: string | number;
  /** Позволяет добавлять миксин на дроп контейнер созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Ширина выпадающего меню */
  menuWidth?: string;
  /** Data-attributes для DropMenu */
  dropMenuDataAttributes?: Record<string, any>;
}

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      children,
      disabled = false,
      options,
      selected,
      onSelectItem = (id: string) => undefined,
      dropMaxHeight,
      dropContainerCssMixin,
      menuWidth,
      dropMenuDataAttributes,
      className = '',
      ...props
    },
    ref,
  ) => {
    const model = React.useMemo(() => {
      return options.map((item) => {
        const id = item.toString();

        return {
          id: id,
          render: (items: RenderOptionProps) => (
            <MenuItem dimension="s" {...items} key={id}>
              {item}
            </MenuItem>
          ),
        };
      });
    }, [options]);

    return (
      <DropMenu
        items={model}
        ref={ref}
        dimension="s"
        menuWidth={menuWidth}
        alignSelf={menuWidth ? 'flex-end' : 'stretch'}
        menuMaxHeight={dropMaxHeight}
        dropContainerCssMixin={dropContainerCssMixin}
        disabled={disabled}
        selected={selected}
        onSelectItem={onSelectItem}
        {...dropMenuDataAttributes}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <Button
              {...props}
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              disabled={disabled}
              $menuOpened={menuState}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
              aria-expanded={menuState}
              type="button"
              className={className}
            >
              <span>{children}</span>
              <Icon>{statusIcon}</Icon>
            </Button>
          );
        }}
      />
    );
  },
);
