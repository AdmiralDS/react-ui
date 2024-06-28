import styled from 'styled-components';

import { OverflowMenu } from '#src/components/OverflowMenu';

import type { TabDimension } from '#src/components/TabMenuComponent/types';
import {
  VERTICAL_OVERFLOW_MENU_CONTAINER_PADDING,
  VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_L,
  VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_M,
} from '#src/components/TabMenuComponent/constants';
import type { TabOverflowMenuProps } from '#src/components/TabMenuComponent/containerElements/types';

const OverflowMenuContainer = styled.div<{ $isHidden?: boolean; $dimension?: TabDimension }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  visibility: ${(p) => (p.$isHidden ? 'hidden' : 'visible')};
  padding: ${VERTICAL_OVERFLOW_MENU_CONTAINER_PADDING};

  width: 100%;
  height: ${(p) =>
    p.$dimension === 'l' ? VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_L : VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_M}px;
`;

export const VerticalTabOverflowMenu = ({ dimension = 'l', isHidden = false, ...props }: TabOverflowMenuProps) => {
  return (
    <OverflowMenuContainer $dimension={dimension} $isHidden={isHidden}>
      <OverflowMenu {...props} dimension={dimension} />
    </OverflowMenuContainer>
  );
};
VerticalTabOverflowMenu.displayName = 'VerticalTabOverflowMenu';
