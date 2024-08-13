import styled from 'styled-components';

import type { TabDimension } from '#src/components/TabMenuComponent/types';
import type { AddTabButtonProps } from '#src/components/TabMenuComponent/containerElements/types';
import {
  ADD_TAB_BUTTON_CONTAINER_PADDING_L,
  ADD_TAB_BUTTON_CONTAINER_PADDING_M,
  ADD_TAB_BUTTON_CONTAINER_SIZE_L,
  ADD_TAB_BUTTON_CONTAINER_SIZE_M,
  FOCUS_BORDER_OFFSET_L,
  FOCUS_BORDER_OFFSET_M,
} from '#src/components/TabMenuComponent/constants';
import { IconPlacement } from '#src/components/IconPlacement';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';

const AddTabButtonContainer = styled.div<{ $dimension?: TabDimension }>`
  box-sizing: border-box;
  padding: ${(p) => (p.$dimension === 'l' ? ADD_TAB_BUTTON_CONTAINER_PADDING_L : ADD_TAB_BUTTON_CONTAINER_PADDING_M)}px;
  ${(p) => `
    width: ${p.$dimension === 'l' ? ADD_TAB_BUTTON_CONTAINER_SIZE_L : ADD_TAB_BUTTON_CONTAINER_SIZE_M}px;
    height: ${p.$dimension === 'l' ? ADD_TAB_BUTTON_CONTAINER_SIZE_L : ADD_TAB_BUTTON_CONTAINER_SIZE_M}px;
  `}
`;
const StyledIconPlacement = styled(IconPlacement)<{ dimension?: TabDimension }>`
  &:focus-visible:not(:disabled) {
    outline-offset: ${(p) => (p.dimension === 'l' ? FOCUS_BORDER_OFFSET_L : FOCUS_BORDER_OFFSET_M)}px;
    border-radius: 0;
  }
`;
const TooltipedIconPlacement = TooltipHoc(StyledIconPlacement);

export const HorizontalAddTabButton = ({ dimension = 'l', ...props }: AddTabButtonProps) => {
  return (
    <AddTabButtonContainer $dimension={dimension}>
      <TooltipedIconPlacement
        {...props}
        dimension={dimension}
        highlightFocus={false}
        renderContent={() => `Создать вкладку`}
      >
        <PlusOutline />
      </TooltipedIconPlacement>
    </AddTabButtonContainer>
  );
};
HorizontalAddTabButton.displayName = 'HorizontalAddTabButton';
