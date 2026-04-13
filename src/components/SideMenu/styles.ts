import styled, { css } from 'styled-components';
import { hideNativeScrollbarsCss } from '#src/components/Scrollbar';
import { mediumGroupBorderRadius } from '#src/components/themes';

import type { SideMenuDimension } from './types';

const INDENT = 20;

export const LeftCluster = styled.span<{ $dimension: SideMenuDimension }>`
  display: inline-flex;
  gap: ${({ $dimension }) => ($dimension === 'l' ? '16px' : '12px')};
  flex: 1 1 auto;
  min-width: 0;
`;

const unselectedItemMixin = css`
  &:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${({ theme }) => theme.color['Opacity/Hover']});
  }
  &:active {
    background-color: var(--admiral-color-Opacity_Press, ${({ theme }) => theme.color['Opacity/Press']});
  }
  ${LeftCluster} *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${({ theme }) => theme.color['Neutral/Neutral 50']});
  }
`;

const selectedItemMixin = css`
  background-color: var(--admiral-color-Opacity_Neutral8, ${({ theme }) => theme.color['Opacity/Neutral 8']});
  color: var(--admiral-color-Primary_Primary60Main, ${({ theme }) => theme.color['Primary/Primary 60 Main']});
  ${LeftCluster} *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${({ theme }) => theme.color['Primary/Primary 60 Main']});
  }
`;

export const Item = styled.li<{
  $selected?: boolean;
  $dimension: SideMenuDimension;
  $indentLevel: number;
  $hasIcons?: boolean;
}>`
  display: flex;
  width: 100%;
  padding: ${({ $dimension, $indentLevel, $hasIcons }) => {
    const indentIcon = $hasIcons && $indentLevel > 0 ? 12 : 0;

    return $dimension === 'l'
      ? `12px 16px 12px ${16 + indentIcon + $indentLevel * INDENT}px`
      : `10px 12px 10px ${12 + indentIcon + $indentLevel * INDENT}px`;
  }};
  box-sizing: border-box;
  cursor: pointer;
  color: var(--admiral-color-Neutral_Neutral90, ${({ theme }) => theme.color['Neutral/Neutral 90']});
  border-radius: var(--admiral-border-radius-Medium, ${({ theme }) => mediumGroupBorderRadius(theme.shape)});
  ${({ $selected }) => ($selected ? selectedItemMixin : unselectedItemMixin)};
`;

export const RightCluster = styled.span<{ $dimension: SideMenuDimension }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
  ${({ $dimension }) => ($dimension === 'l' ? 'height: 24px' : 'height: 20px')};
  margin-left: 8px;
`;

export const SideMenuWrapper = styled.nav<{
  $dimension: SideMenuDimension;
  $gap: number;
}>`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  gap: ${(p) => p.$gap + 'px'};
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: ${({ $dimension }) => ($dimension === 'l' ? '16px 0' : '12px 0')};
  box-sizing: border-box;

  /** Если SideMenu внутри Drawer, то обнуляем паддинги у Drawer */
  .drawer[role='dialog']:has(&) {
    padding: 0;
  }
`;

export const ScrollWrapper = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const ScrollableContent = styled.ul<{ $gap: number; $dimension: SideMenuDimension }>`
  ${hideNativeScrollbarsCss}

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${(p) => p.$gap + 'px'};
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px' : '0 12px')};
  margin: 0;
`;

export const TopPanelContent = styled.div<{
  $dimension: SideMenuDimension;
}>`
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px' : ' 0 12px')};
`;

export const BottomPanelContent = styled.div<{
  $dimension: SideMenuDimension;
}>`
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px' : '0 12px')};
`;

export const WrapperIcon = styled.span<{ $dimension: SideMenuDimension }>`
  ${({ $dimension }) => ($dimension === 'l' ? 'width: 24px; height: 24px' : 'width: 20px; height: 20px')};
  flex-shrink: 0;
`;

export const Chevron = styled(WrapperIcon)<{ $open?: boolean }>`
  transform: rotate(${({ $open }) => ($open ? 90 : 0)}deg);
  transition: transform 0.3s ease;
`;
