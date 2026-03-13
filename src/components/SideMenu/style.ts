import styled from 'styled-components';

import type { SideMenuAppearance, SideMenuDimension } from '.';
import { Drawer } from '../Drawer';
import { ScrollContainer } from '../Scrollbar';
import { typography } from '../Typography';

export const SideMenuItem = styled.div<{ $dimension: SideMenuDimension }>`
  ${({ $dimension }) =>
    $dimension === 'l'
      ? `padding: 12px 16px; ${typography['Body/Body 1 Long']}`
      : `padding: 10px 12px; ${typography['Body/Body 2 Long']}`};
`;

export const StyledDrawer = styled(Drawer)<{
  $visibleBorder?: boolean;
  $appearance: SideMenuAppearance;
}>`
  justify-content: space-between;
  box-shadow: unset;
  ${({ theme, $visibleBorder }) =>
    $visibleBorder &&
    `border-right: 1px solid var(--admiral-color-Neutral_Neutral20, ${theme.color['Neutral/Neutral 20']})`};

  ${({ theme, $appearance }) =>
    $appearance === 'secondary' &&
    `background-color: var(--admiral-color-Neutral_Neutral05, ${theme.color['Neutral/Neutral 05']})`};
`;

export const StyledScrollContainer = styled(ScrollContainer)<{
  $dimension: SideMenuDimension;
  $isTopPanelContent: boolean;
  $isBottomPanelContent: boolean;
  $gap: number;
}>`
  flex-grow: 1;
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px' : '0 12px')};
  margin: ${({ $dimension, $isTopPanelContent, $isBottomPanelContent }) => {
    if ($isTopPanelContent && $isBottomPanelContent) return '0';
    else if ($isTopPanelContent) return $dimension === 'l' ? '0 0 16px 0' : '0 0 12px 0';
    else if ($isBottomPanelContent) return $dimension === 'l' ? '16px 0 0 0' : '12px 0 0 0';
    else return $dimension === 'l' ? '16px 0' : '12px 0';
  }};

  ${SideMenuItem}:not(:first-child) {
    margin-top: ${({ $gap }) => $gap}px;
  }
`;

export const TopPanelContent = styled.div<{
  $dimension: SideMenuDimension;
  $gap: number;
}>`
  padding: ${({ $dimension }) => ($dimension === 'l' ? '16px 16px 0 16px' : '12px 12px 0 12px')};

  ${SideMenuItem} {
    margin-bottom: ${({ $gap }) => $gap}px;
  }
`;

export const BottomPanelContent = styled.div<{ $dimension: SideMenuDimension; $gap: number }>`
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px 16px 16px' : '0 12px 12px 12px')};
  ${SideMenuItem} {
    margin-top: ${({ $gap }) => $gap}px;
  }
`;
