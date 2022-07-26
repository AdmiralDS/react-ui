import * as React from 'react';
import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { typography } from '#src/components/Typography';
import { Dropdown } from '#src/components/Dropdown';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { uid } from '#src/components/common/uid';
import { DropMenu } from '#src/components/DropMenu';
import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';

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

  &:focus {
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

const Icon = styled(ChevronDownOutline)<{ $menuOpened: boolean }>`
  transition: all 0.3s;
  ${({ $menuOpened }) => $menuOpened && 'transform: rotate(180deg);'}
`;

const IconArrow = styled.div`
  width: 20px;
  height: 20px;
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
  selected?: string;
  /** Колбек на изменение выбранной опции */
  onChange: (id: string) => void;
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
    const model = React.useMemo(() => {
      return options.slice(1, options.length).map((item) => {
        const id = uid();

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
        {...props}
        items={model}
        onChange={onChange}
        onOpen={onOpen}
        onClose={onClose}
        ref={ref}
        dimension="s"
        disabled={disabled}
        selected={selected}
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
            >
              <span>{children}</span>
              <IconArrow>{statusIcon}</IconArrow>
            </Button>
          );
        }}
      />
    );
  },
);
