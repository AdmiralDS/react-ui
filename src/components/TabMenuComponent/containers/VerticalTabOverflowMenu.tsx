import styled from 'styled-components';

import type { TabDimension } from '#src/components/TabMenuComponent/types';
import {
  VERTICAL_OVERFLOW_MENU_CONTAINER_PADDING,
  VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_L,
  VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_M,
} from '#src/components/TabMenuComponent/constants';
import { OverflowMenu } from '#src/components/OverflowMenu';
import type { OverflowMenuProps } from '#src/components/OverflowMenu';

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

export interface TabOverflowMenuProps extends Omit<OverflowMenuProps, 'dimension'> {
  dimension?: TabDimension;
  isHidden?: boolean;
}

export const VerticalTabOverflowMenu = ({ dimension = 'l', isHidden = false, ...props }: TabOverflowMenuProps) => {
  return (
    <OverflowMenuContainer $dimension={dimension} $isHidden={isHidden}>
      <OverflowMenu {...props} dimension={dimension} />
    </OverflowMenuContainer>
  );
};
VerticalTabOverflowMenu.displayName = 'VerticalTabOverflowMenu';
