import styled from 'styled-components';
import type { SideMenuAppearance, SideMenuDimension } from './types';
import { ScrollContainer } from '../Scrollbar';
import { Drawer } from '../Drawer';

export const ItemButton = styled.button<{ $selected?: boolean; $disabled?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  padding-left: 0;

  border: 0;
  background: ${({ $selected }) =>
    $selected ? 'var(--admiral-color-Primary_Primary10, rgba(22, 119, 255, 0.08))' : 'transparent'};
  color: inherit;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  text-align: left;

  &:hover {
    background: ${({ $disabled, $selected }) =>
      $disabled
        ? 'transparent'
        : $selected
          ? 'var(--admiral-color-Primary_Primary10, rgba(22, 119, 255, 0.08))'
          : 'var(--admiral-color-Neutral_Neutral5, rgba(0,0,0,0.02))'};
  }

  &:focus-visible {
    outline: 2px solid var(--admiral-color-Primary_Primary60Main, #1677ff);
    outline-offset: -2px;
  }
`;

export const GroupButton = styled.button<{ $disabled?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  padding-left: 0;

  border: 0;
  background: transparent;
  color: inherit;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  text-align: left;

  &:hover {
    background: ${({ $disabled }) =>
      $disabled ? 'transparent' : 'var(--admiral-color-Neutral_Neutral5, rgba(0,0,0,0.02))'};
  }

  &:focus-visible {
    outline: 2px solid var(--admiral-color-Primary_Primary60Main, #1677ff);
    outline-offset: -2px;
  }
`;

export const Chevron = styled.span<{ $open?: boolean }>`
  display: inline-flex;
  width: 16px;
  justify-content: center;
  transform: rotate(${({ $open }) => ($open ? 90 : 0)}deg);
  transition: transform 0.15s ease;
  flex: 0 0 auto;
`;

export const LeftCluster = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;
  min-width: 0;
`;

export const RightCluster = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
`;

export const LabelText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  //todo определить между какими элементами должен быть отступ
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
`;

export const TopPanelContent = styled.div<{
  $dimension: SideMenuDimension;
}>`
  padding: ${({ $dimension }) => ($dimension === 'l' ? '16px 16px 0 16px' : '12px 12px 0 12px')};
`;

export const BottomPanelContent = styled.div<{ $dimension: SideMenuDimension }>`
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px 16px 16px' : '0 12px 12px 12px')};
`;
