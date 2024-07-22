import styled from 'styled-components';

import type { TabDimension } from '#src/components/TabMenuComponent/types';
import type { AddTabButtonProps } from '#src/components/TabMenuComponent/containerElements/types';
import {
  VERTICAL_ADD_TAB_BUTTON_CONTAINER_PADDING,
  VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_L,
  VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_M,
} from '#src/components/TabMenuComponent/constants';
import { IconPlacement } from '#src/components/IconPlacement';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';

const AddTabButtonContainer = styled.div<{ $dimension?: TabDimension }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: ${VERTICAL_ADD_TAB_BUTTON_CONTAINER_PADDING};
  width: 100%;
  height: ${(p) =>
    p.$dimension === 'l' ? VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_L : VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_M}px;
`;
const TooltipedIconPlacement = TooltipHoc(IconPlacement);

export const VerticalAddTabButton = ({ dimension = 'l', ...props }: AddTabButtonProps) => {
  const buttonDimension = dimension === 'l' ? 'lBig' : 'mBig';
  return (
    <AddTabButtonContainer $dimension={dimension}>
      <TooltipedIconPlacement
        {...props}
        dimension={buttonDimension}
        highlightFocus={false}
        renderContent={() => `Создать вкладку`}
      >
        <PlusOutline />
      </TooltipedIconPlacement>
    </AddTabButtonContainer>
  );
};
VerticalAddTabButton.displayName = 'VerticalAddTabButton';
