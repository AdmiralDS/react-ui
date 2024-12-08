import styled from 'styled-components';

import { typography } from '#src/components/Typography';
import { OverflowMenu } from '#src/components/OverflowMenu';

import type { Dimension } from '#src/components/TabMenu/constants';
import {
  BADGE_MARGIN,
  ICON_MARGIN,
  ICON_SIZE_L,
  ICON_SIZE_M,
  LINE_HEIGHT,
  TAB_HEIGHT_L,
  TAB_HEIGHT_M,
  TAB_PADDING_L,
  TAB_PADDING_M,
  OVERFLOW_MENU_MARGIN_L,
  OVERFLOW_MENU_MARGIN_M,
  FOCUS_BORDER_OFFSET_L,
  FOCUS_BORDER_OFFSET_M,
  TAB_LEFT_OFFSET_M,
  TAB_LEFT_OFFSET_L,
  OVERFLOW_MENU_CONTAINER_SIZE_M,
  OVERFLOW_MENU_CONTAINER_SIZE_L,
} from '#src/components/TabMenu/constants';

export const IconWrapper = styled.div<{ $dimension: Dimension }>`
  ${({ $dimension }) => `
    width: ${$dimension === 'l' ? ICON_SIZE_L : ICON_SIZE_M}px;
    height: ${$dimension === 'l' ? ICON_SIZE_L : ICON_SIZE_M}px;`}
  margin-right: 8px;
`;

export const BadgeWrapper = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

export const Wrapper = styled.div<{ $underline?: boolean; $mobile?: boolean; $dimension?: Dimension }>`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: ${({ $mobile }) => ($mobile ? 'nowrap' : 'wrap')};
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 -${LINE_HEIGHT} 0 0
    ${(p) =>
      p.$underline ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})` : 'transparent'};
  overflow: ${({ $mobile }) => ($mobile ? 'scroll' : 'hidden')};

  height: ${({ $dimension }) => ($dimension === 'l' ? TAB_HEIGHT_L : TAB_HEIGHT_M)}px;
  max-height: ${({ $dimension }) => ($dimension === 'l' ? TAB_HEIGHT_L : TAB_HEIGHT_M)}px;

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  height: ${LINE_HEIGHT};
  transition: all 0.2s ease-out;
`;

export const TabContent = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const TabContentWrapper = styled.span<{ $dimension: Dimension }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${({ $dimension }) => ($dimension === 'l' ? TAB_PADDING_L : TAB_PADDING_M)};
`;

export const Tab = styled.button<{ $dimension: Dimension; $selected: boolean }>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  height: ${({ $dimension }) => ($dimension === 'm' ? TAB_HEIGHT_M : TAB_HEIGHT_L)}px;
  padding: 0;
  background: transparent;
  appearance: none;
  border: none;
  color: ${(p) =>
    p.$selected
      ? `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
  ${({ $dimension }) => ($dimension === 'm' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus:not(:active) {
    &:before {
      position: absolute;
      content: '';
      border: ${LINE_HEIGHT} solid
        var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  &:focus,
  & > ${TabContentWrapper} {
    outline: none;
  }

  & svg {
    display: inline-block;
    flex: 1 0 auto;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    }
    width: ${({ $dimension }) => ($dimension === 'm' ? ICON_SIZE_M : ICON_SIZE_L)}px;
    height: ${({ $dimension }) => ($dimension === 'm' ? ICON_SIZE_M : ICON_SIZE_L)}px;
    margin-right: ${ICON_MARGIN};
  }
  & [data-badge] {
    margin-left: ${BADGE_MARGIN};
  }

  &:hover:not(:disabled) {
    background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }
  &:active:not(:disabled) {
    background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
  }
  &:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;

const getOffset = (dimension: Dimension) => {
  return dimension === 'l' ? TAB_LEFT_OFFSET_L : TAB_LEFT_OFFSET_M;
};

export const TabWrapper = styled.div<{ $needsOffset: boolean; $dimension: Dimension }>`
  display: flex;
  align-items: center;

  margin-left: ${({ $needsOffset, $dimension }) => ($needsOffset ? getOffset($dimension) : 0)}px;
`;

export const OverflowMenuContainer = styled.div<{ $isHidden?: boolean; $dimension?: Dimension }>`
  visibility: ${({ $isHidden }) => ($isHidden ? 'hidden' : 'visible')};
  ${({ $dimension }) => `
    width: ${$dimension === 'l' ? OVERFLOW_MENU_CONTAINER_SIZE_L : OVERFLOW_MENU_CONTAINER_SIZE_M};
    height: ${$dimension === 'l' ? OVERFLOW_MENU_CONTAINER_SIZE_L : OVERFLOW_MENU_CONTAINER_SIZE_M};
  `}
`;
export const StyledOverflowMenu = styled(OverflowMenu)<{ $isActive: boolean; dimension?: Dimension }>`
  margin: ${(p) => (p.dimension === 'l' ? OVERFLOW_MENU_MARGIN_L : OVERFLOW_MENU_MARGIN_M)};
  &:focus-visible {
    outline-offset: ${(p) => (p.dimension === 'l' ? FOCUS_BORDER_OFFSET_L : FOCUS_BORDER_OFFSET_M)};
    border-radius: 0;
  }

  & svg {
    & *[fill^='#'] {
      fill: ${({ theme, $isActive }) =>
        $isActive
          ? `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`
          : `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`};
    }
  }
`;
