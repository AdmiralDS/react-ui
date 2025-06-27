import { forwardRef } from 'react';
import styled from 'styled-components';

import type { TabDimension } from '#src/components/TabMenuComponent/types';
import { HORIZONTAL_TAB_ICON_SIZE_L, HORIZONTAL_TAB_ICON_SIZE_M } from '#src/components/TabMenuComponent/constants';
import { ReactComponent as SmallCloseOutline } from '@admiral-ds/icons/build/service/SmallCloseOutline.svg';
import { keyboardKey } from '../../common/keyboardKey';

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

export interface TabCloseIconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: TabDimension;
  /** Состояние disabled */
  disabled?: boolean;
  /** Коллбэк для обработки закрытия вкладки */
  onCloseIconButtonClick?: () => void;
}

export const TabCloseIconButton = forwardRef<HTMLDivElement, TabCloseIconButtonProps>(
  ({ dimension = 'l', disabled, onCloseIconButtonClick, ...props }, ref) => {
    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();
      const code = keyboardKey.getCode(e);
      if (code === keyboardKey.Enter) {
        e.preventDefault();
      }
      if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
        onCloseIconButtonClick?.();
      }
    };
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();
      onCloseIconButtonClick?.();
    };
    return (
      <Wrapper
        {...props}
        role="button"
        tabIndex={0}
        ref={ref}
        $dimension={dimension}
        $disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <SmallCloseOutline />
      </Wrapper>
    );
  },
);

TabCloseIconButton.displayName = 'TabCloseIconButton';
