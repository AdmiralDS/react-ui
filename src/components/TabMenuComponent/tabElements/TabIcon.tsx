import styled from 'styled-components';

import type { FilterTabDimension, TabDimension } from '#src/components/TabMenuComponent/types';
import {
  FILTER_TAB_ICON_SIZE_M,
  FILTER_TAB_ICON_SIZE_S,
  HORIZONTAL_TAB_ICON_SIZE_L,
  HORIZONTAL_TAB_ICON_SIZE_M,
} from '#src/components/TabMenuComponent/constants';

export const TabIcon = styled.div<{ $dimension: TabDimension; $disabled?: boolean }>`
  padding: 0;
  margin: 0;
  width: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_ICON_SIZE_M : HORIZONTAL_TAB_ICON_SIZE_L)}px;
  height: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_ICON_SIZE_M : HORIZONTAL_TAB_ICON_SIZE_L)}px;
  & svg {
    display: inline-block;
    flex: 1 0 auto;
    & *[fill^='#'] {
      fill: ${(p) =>
        p.$disabled
          ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
          : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
    }
    width: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_ICON_SIZE_M : HORIZONTAL_TAB_ICON_SIZE_L)}px;
    height: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_ICON_SIZE_M : HORIZONTAL_TAB_ICON_SIZE_L)}px;
  }
`;
TabIcon.displayName = 'TabIcon';

export const FilterTabIcon = styled(TabIcon)<{ $dimension: FilterTabDimension }>`
  width: ${({ $dimension }) => ($dimension === 'm' ? FILTER_TAB_ICON_SIZE_M : FILTER_TAB_ICON_SIZE_S)}px;
  height: ${({ $dimension }) => ($dimension === 'm' ? FILTER_TAB_ICON_SIZE_M : FILTER_TAB_ICON_SIZE_S)}px;
  & svg {
    width: ${({ $dimension }) => ($dimension === 'm' ? FILTER_TAB_ICON_SIZE_M : FILTER_TAB_ICON_SIZE_S)}px;
    height: ${({ $dimension }) => ($dimension === 'm' ? FILTER_TAB_ICON_SIZE_M : FILTER_TAB_ICON_SIZE_S)}px;
  }
`;

FilterTabIcon.displayName = 'FilterTabIcon';
