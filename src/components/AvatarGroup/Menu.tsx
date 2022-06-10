import * as React from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Dropdown } from '#src/components/Dropdown';
import styled from 'styled-components';
import type { AvatarProps } from '#src/components/Avatar';
import { Avatar } from '#src/components/Avatar';

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

    const handleKeyDownItem = (e: React.KeyboardEvent<HTMLElement>, onKeyDown: (e: any) => void) => {
      e.preventDefault();
      if (e.key === 'Enter' || e.key === ' ') {
        onKeyDown?.(e);
        onAvatarSelect?.(e);
        setOpen(false);
        (refWrapper.current as HTMLElement).focus();
      } else if (e.key === 'Escape' || e.key === 'Tab') {
        setOpen(false);
        (refWrapper.current as HTMLElement).focus();
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

    // оборачиваю StyledDropDown в старую тему до тех пор, пока Dropdown не будет переведен на новые цветовые токены
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
