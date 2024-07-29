import type { MouseEventHandler, HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

import type { TabDimension } from '#src/components/TabMenuComponent/types';
import { HORIZONTAL_TAB_ICON_SIZE_L, HORIZONTAL_TAB_ICON_SIZE_M } from '#src/components/TabMenuComponent/constants';
import { ReactComponent as SmallCloseOutline } from '@admiral-ds/icons/build/service/SmallCloseOutline.svg';

const Wrapper = styled.div<{ $dimension: TabDimension; $disabled?: boolean }>`
  position: relative;
  padding: 0;
  margin: 0;
  width: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_ICON_SIZE_M : HORIZONTAL_TAB_ICON_SIZE_L)}px;
  height: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_ICON_SIZE_M : HORIZONTAL_TAB_ICON_SIZE_L)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }
  &:hover {
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
    }
  }
  &:active {
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary80, ${(p) => p.theme.color['Primary/Primary 80']});
    }
  }

  &:focus-visible {
    border-radius: 0;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
    outline-offset: -2px;
  }
`;

export interface TabCloseIconButtonProps extends HTMLAttributes<HTMLDivElement> {
  dimension?: TabDimension;
  disabled?: boolean;
}

export const TabCloseIconButton = forwardRef<HTMLDivElement, TabCloseIconButtonProps>(
  ({ dimension = 'l', disabled, onClick, ...props }, ref) => {
    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();
      onClick?.(e);
    };
    return (
      <Wrapper {...props} ref={ref} $dimension={dimension} $disabled={disabled} onClick={handleClick}>
        <SmallCloseOutline />
      </Wrapper>
    );
  },
);

TabCloseIconButton.displayName = 'TabCloseIconButton';
