import styled from 'styled-components';

import { OverflowMenu } from '#src/components/OverflowMenu';

import type { TabDimension } from '#src/components/TabMenuComponent/types';
import {
  FOCUS_BORDER_OFFSET_L,
  FOCUS_BORDER_OFFSET_M,
  OVERFLOW_MENU_CONTAINER_PADDING_L,
  OVERFLOW_MENU_CONTAINER_PADDING_M,
  OVERFLOW_MENU_CONTAINER_SIZE_L,
  OVERFLOW_MENU_CONTAINER_SIZE_M,
} from '#src/components/TabMenuComponent/constants';
import type { TabOverflowMenuProps } from '#src/components/TabMenuComponent/containerElements/types';

const OverflowMenuContainer = styled.div<{ $isHidden?: boolean; $dimension?: TabDimension }>`
  box-sizing: border-box;
  visibility: ${(p) => (p.$isHidden ? 'hidden' : 'visible')};
  padding: ${(p) => (p.$dimension === 'l' ? OVERFLOW_MENU_CONTAINER_PADDING_L : OVERFLOW_MENU_CONTAINER_PADDING_M)}px;
  ${(p) => `
    width: ${p.$dimension === 'l' ? OVERFLOW_MENU_CONTAINER_SIZE_L : OVERFLOW_MENU_CONTAINER_SIZE_M}px;
    height: ${p.$dimension === 'l' ? OVERFLOW_MENU_CONTAINER_SIZE_L : OVERFLOW_MENU_CONTAINER_SIZE_M}px;
  `}
`;
const StyledOverflowMenu = styled(OverflowMenu)<{ dimension?: TabDimension }>`
  &:focus-visible:not(:disabled) {
    outline-offset: ${(p) => (p.dimension === 'l' ? FOCUS_BORDER_OFFSET_L : FOCUS_BORDER_OFFSET_M)}px;
    border-radius: 0;
  }
`;

export const HorizontalTabOverflowMenu = ({ dimension = 'l', isHidden = false, ...props }: TabOverflowMenuProps) => {
  return (
    <OverflowMenuContainer $dimension={dimension} $isHidden={isHidden}>
      <StyledOverflowMenu {...props} dimension={dimension} />
    </OverflowMenuContainer>
  );
};
HorizontalTabOverflowMenu.displayName = 'TabOverflowMenu';
