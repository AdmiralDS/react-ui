import styled from 'styled-components';

import type { TabDimension } from '#src/components/TabMenuComponent/types';
import type { AddTabButtonProps } from '#src/components/TabMenuComponent/containerElements/types';
import {
  ADD_TAB_BUTTON_CONTAINER_PADDING_L,
  ADD_TAB_BUTTON_CONTAINER_PADDING_M,
  ADD_TAB_BUTTON_CONTAINER_SIZE_L,
  ADD_TAB_BUTTON_CONTAINER_SIZE_M,
} from '#src/components/TabMenuComponent/constants';
import { IconPlacement } from '#src/components/IconPlacement';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';

const AddTabButtonContainer = styled.div<{ $isHidden?: boolean; $dimension?: TabDimension }>`
  box-sizing: border-box;
  visibility: ${(p) => (p.$isHidden ? 'hidden' : 'visible')};
  padding: ${(p) => (p.$dimension === 'l' ? ADD_TAB_BUTTON_CONTAINER_PADDING_L : ADD_TAB_BUTTON_CONTAINER_PADDING_M)}px;
  ${(p) => `
    width: ${p.$dimension === 'l' ? ADD_TAB_BUTTON_CONTAINER_SIZE_L : ADD_TAB_BUTTON_CONTAINER_SIZE_M}px;
    height: ${p.$dimension === 'l' ? ADD_TAB_BUTTON_CONTAINER_SIZE_L : ADD_TAB_BUTTON_CONTAINER_SIZE_M}px;
  `}
`;
const TooltipedIconPlacement = TooltipHoc(IconPlacement);

export const HorizontalAddTabButton = ({ dimension = 'l', isHidden = false, ...props }: AddTabButtonProps) => {
  const buttonDimension = dimension === 'l' ? 'lBig' : 'mBig';
  return (
    <AddTabButtonContainer $dimension={dimension} $isHidden={isHidden}>
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
HorizontalAddTabButton.displayName = 'AddTabButton';
