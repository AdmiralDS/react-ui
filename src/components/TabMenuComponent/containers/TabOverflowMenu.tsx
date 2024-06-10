import styled from 'styled-components';

import type { TabDimension } from '#src/components/TabMenuComponent/types';
import {
  OVERFLOW_MENU_CONTAINER_PADDING_L,
  OVERFLOW_MENU_CONTAINER_PADDING_M,
  OVERFLOW_MENU_CONTAINER_SIZE_L,
  OVERFLOW_MENU_CONTAINER_SIZE_M,
} from '#src/components/TabMenuComponent/constants';
import type { OverflowMenuProps } from '#src/components/OverflowMenu';
import { OverflowMenu } from '#src/components/OverflowMenu';

const OverflowMenuContainer = styled.div<{ $isHidden?: boolean; $dimension?: TabDimension }>`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  visibility: ${(p) => (p.$isHidden ? 'hidden' : 'visible')};
  padding: ${(p) => (p.$dimension === 'l' ? OVERFLOW_MENU_CONTAINER_PADDING_L : OVERFLOW_MENU_CONTAINER_PADDING_M)}px;
  ${(p) => `
    width: ${p.$dimension === 'l' ? OVERFLOW_MENU_CONTAINER_SIZE_L : OVERFLOW_MENU_CONTAINER_SIZE_M}px;
    height: ${p.$dimension === 'l' ? OVERFLOW_MENU_CONTAINER_SIZE_L : OVERFLOW_MENU_CONTAINER_SIZE_M}px;
  `}
`;

export interface TabOverflowMenuProps extends Omit<OverflowMenuProps, 'dimension'> {
  dimension?: TabDimension;
  isHidden?: boolean;
}

export const TabOverflowMenu = ({ dimension = 'l', isHidden = false, ...props }: TabOverflowMenuProps) => {
  return (
    <OverflowMenuContainer $dimension={dimension} $isHidden={isHidden}>
      <OverflowMenu {...props} dimension={dimension} />
    </OverflowMenuContainer>
  );
};
