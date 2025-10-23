import styled from 'styled-components';

import { typography } from '#src/components/Typography';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import type { DropMenuComponentProps, DropMenuStyleProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { refSetter } from '../common/utils/refSetter';
import type { DataAttributeMap } from '#src/components/common/utils/splitDataAttributes';
import { forwardRef, useMemo } from 'react';

type PaginationOneMenuButtonDimension = 'm' | 's';

const Button = styled.button<{ $menuOpened?: boolean; $dimension?: PaginationOneMenuButtonDimension }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(p) => (p.$dimension === 's' ? 32 : 40)}px;
  padding: 10px 12px;
  border: 2px solid transparent;
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
  & > span {
    min-width: 20px;
  }

  &:hover {
    cursor: pointer;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
    }
  }

  &:active {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    }
  }

  &:focus-visible {
    outline: none;
    border-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
`;

export interface MenuButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    Omit<DropMenuComponentProps, 'targetElement' | 'disableSelectedOptionHighlight'>,
    Omit<DropMenuStyleProps, 'alignSelf'> {
  /** Размер компонента */
  dimension?: PaginationOneMenuButtonDimension;
  /** Массив опций */
  options: Array<number>;
  /** Выбранная опция */
  selected?: string;
  /** Отключение компонента */
  disabled?: boolean;
  /** Data-attributes для DropMenu */
  dropMenuDataAttributes?: DataAttributeMap;
}

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      children,
      disabled = false,
      dimension = 'm',
      options,
      selected,
      onSelectItem = () => undefined,
      active,
      onActivateItem = () => undefined,
      menuMaxHeight,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      menuWidth,
      dropMenuDataAttributes,
      className = '',
      isVisible,
      onVisibilityChange,
      onClickOutside,
      onClick,
      renderTopPanel,
      renderBottomPanel,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      ...props
    },
    ref,
  ) => {
    const dropMenuProps = {
      ...dropMenuDataAttributes,
      renderTopPanel,
      renderBottomPanel,
      isVisible,
      onVisibilityChange,
      onClickOutside,
      selected,
      onSelectItem,
      active,
      onActivateItem,
      menuMaxHeight,
      menuWidth,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      onForwardCycleApprove,
      onBackwardCycleApprove,
    };
    const model = useMemo(() => {
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
        {...dropMenuProps}
        items={model}
        dimension="s"
        virtualScroll={{ itemHeight: 'auto' }}
        alignSelf={menuWidth ? 'flex-end' : 'stretch'}
        disabled={disabled}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <Button
              {...props}
              $dimension={dimension}
              ref={refSetter(ref, buttonRef as React.Ref<HTMLButtonElement>)}
              disabled={disabled}
              $menuOpened={menuState}
              onKeyDown={handleKeyDown}
              onClick={onClick || handleClick}
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
