import * as React from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Dropdown } from '#src/components/Dropdown';
import styled from 'styled-components';
import { Avatar } from '#src/components/Avatar';
import type { AvatarProps } from '#src/components/Avatar';
import { keyboardKey } from '#src/components/common/keyboardKey';

const StyledDropDown = styled(Dropdown)<{ alignDropdown?: string; dropMaxHeight: string | number }>`
  padding: 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  ${(p) => (p.alignDropdown ? `align-self: ${p.alignDropdown}` : '')};
  max-height: ${(p) => p.dropMaxHeight};
  min-width: 100%;
`;

const SelectWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  cursor: pointer;
`;

const MenuAvatar = styled(Avatar)`
  cursor: pointer;
`;

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Референс на контейнер для правильного позиционирования выпадающего списка */
  portalTargetRef?: React.RefObject<HTMLElement>;
  /**
   * Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
   * Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)
   */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Задает максимальную высоту контейнера с опциями */
  dropMaxHeight?: string | number;
  /** Внешний вид аватара, который будет использован в меню */
  appearance: AvatarProps['appearance'];
  /** Размер аватара, который будет использован в меню */
  dimension: AvatarProps['dimension'];
  onAvatarSelect?: (e: any) => void;
}

export const Menu = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      portalTargetRef,
      children,
      alignDropdown,
      dropMaxHeight = '300px',
      appearance,
      dimension,
      onAvatarSelect,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const refWrapper = React.useRef<HTMLInputElement>(null);
    const [hovered, setHovered] = React.useState<string | undefined>('');
    const childrenArray = React.Children.toArray(children);
    const findOptionValue = (option: (React.ReactChild | React.ReactFragment | React.ReactPortal)[]) => {
      if (React.isValidElement(option[0]) && 'props' in option[0]) {
        return option[0].props.id;
      }
    };

    const hoverIndex = React.useMemo(
      () =>
        childrenArray?.findIndex((child) => {
          if (React.isValidElement(child) && 'props' in child) {
            return child.props.id === hovered;
          }
          return -1;
        }),
      [childrenArray, hovered],
    );

    const findNextHoverValue = React.useCallback(() => {
      const nextAbledOptionValue = findOptionValue(childrenArray.slice(hoverIndex + 1));
      if (nextAbledOptionValue) return nextAbledOptionValue;
      return findOptionValue(childrenArray);
    }, [hoverIndex, childrenArray]);

    const findPrevHoverValue = React.useCallback(() => {
      const sliceInd = hoverIndex === -1 ? undefined : hoverIndex;
      const prevAbledOptionValue = findOptionValue(childrenArray.slice(0, sliceInd).reverse());
      if (prevAbledOptionValue) return prevAbledOptionValue;
      return findOptionValue(childrenArray.slice().reverse());
    }, [hoverIndex, childrenArray]);

    const handleKeyDownItem = (e: React.KeyboardEvent<HTMLElement>, onKeyDown: (e: any) => void) => {
      e.preventDefault();
      const code = keyboardKey.getCode(e);
      switch (code) {
        case keyboardKey.ArrowUp: {
          onKeyDown?.(e);
          const prevValue = findPrevHoverValue();
          if (!prevValue) break;
          setHovered(prevValue);
          break;
        }
        case keyboardKey.ArrowDown: {
          onKeyDown?.(e);
          const nextValue = findNextHoverValue();
          if (!nextValue) break;
          setHovered(nextValue);
          break;
        }
        case keyboardKey[' ']:
        case keyboardKey.Enter: {
          onKeyDown?.(e);
          onAvatarSelect?.(e);
          setOpen(false);
          (refWrapper.current as HTMLElement).focus();
          break;
        }
        case keyboardKey.Escape:
        case keyboardKey.Tab: {
          setOpen(false);
          (refWrapper.current as HTMLElement).focus();
          break;
        }
      }
    };

    const handleClickItem = (e: React.MouseEvent<HTMLElement>, onClick: (e: any) => void) => {
      refWrapper.current?.focus();
      onClick?.(e);
      onAvatarSelect?.(e);
    };

    const renderChildrenDropDown = () => {
      return React.Children.map(children, (child: React.ReactNode) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return React.cloneElement(child, {
          ...child.props,
          hovered: hovered === child.props.id,
          onClick: (e: React.MouseEvent<HTMLElement>) => handleClickItem(e, child.props.onClick),
          onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => handleKeyDownItem(e, child.props.onKeyDown),
        });
      });
    };

    const clickOutside = (e: Event) => {
      if (e.target && refWrapper.current?.contains(e.target as Node)) {
        return;
      }
      setOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ' ' && !open) {
        setOpen(true);
        e.preventDefault();
      }
    };

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
      setOpen((open) => !open);
    };

    return (
      <SelectWrapper
        ref={refSetter(ref, refWrapper)}
        role="button"
        {...props}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={onClick}
      >
        {React.Children.count(children) ? (
          <MenuAvatar
            userName={'+' + React.Children.count(children)}
            isMenuAvatar
            appearance={appearance}
            dimension={dimension}
            showTooltip={false}
          />
        ) : null}
        {open && (
          <StyledDropDown
            targetRef={portalTargetRef || refWrapper}
            data-dimension="m"
            onClickOutside={clickOutside}
            alignDropdown={alignDropdown}
            dropMaxHeight={dropMaxHeight}
          >
            {renderChildrenDropDown()}
          </StyledDropDown>
        )}
      </SelectWrapper>
    );
  },
);
