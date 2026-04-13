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

const selectedItemMixin = css<{ $selected?: boolean }>`
  background-color: var(--admiral-color-Opacity_Neutral8, ${({ theme }) => theme.color['Opacity/Neutral 8']});
  color: var(--admiral-color-Primary_Primary60Main, ${({ theme }) => theme.color['Primary/Primary 60 Main']});

  ${LeftCluster} [fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${({ theme }) => theme.color['Primary/Primary 60 Main']});
  }

  &:hover {
    background-color: var(--admiral-color-Opacity_Neutral8, ${({ theme }) => theme.color['Opacity/Neutral 8']});
  }
`;

export const ItemButton = styled.button<{
  $selected?: boolean;
  $dimension: SideMenuDimension;
  $indentLevel: number;
  $header?: boolean;
  $hasIcons?: boolean;
}>`
  width: 100%;
  display: flex;
  border: 0;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  border-radius: var(--admiral-border-radius-Medium, ${({ theme }) => mediumGroupBorderRadius(theme.shape)});

  &:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${({ theme }) => theme.color['Opacity/Hover']});
  }

  &:focus-visible {
    outline: 2px solid
      var(--admiral-color-Primary_Primary60Main, ${({ theme }) => theme.color['Primary/Primary 60 Main']});
    outline-offset: -2px;
  }

  &:active {
    background-color: var(--admiral-color-Opacity_Press, ${({ theme }) => theme.color['Opacity/Press']});
  }

  padding: ${({ $dimension, $indentLevel, $hasIcons }) => {
    const indentIcon = $hasIcons && $indentLevel > 0 ? 12 : 0;

    return $dimension === 'l'
      ? `12px 16px 12px ${16 + indentIcon + $indentLevel * INDENT}px`
      : `10px 12px 10px ${12 + indentIcon + $indentLevel * INDENT}px`;
  }};

  ${({ $selected }) => $selected && selectedItemMixin};
`;

export const GroupButton = styled.button<{
  $indentLevel: number;
  $dimension: SideMenuDimension;
  $selected?: boolean;
  $hasIcons?: boolean;
}>`
  width: 100%;
  display: flex;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  border-radius: var(--admiral-border-radius-Medium, ${({ theme }) => mediumGroupBorderRadius(theme.shape)});

  &:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${({ theme }) => theme.color['Opacity/Hover']});
  }
  &:focus-visible {
    outline: 2px solid
      var(--admiral-color-Primary_Primary60Main, ${({ theme }) => theme.color['Primary/Primary 60 Main']});
    outline-offset: -2px;
  }
  &:active {
    background-color: var(--admiral-color-Opacity_Press, ${({ theme }) => theme.color['Opacity/Press']});
  }

  ${({ $selected }) => $selected && selectedItemMixin};

  padding: ${({ $dimension, $indentLevel, $hasIcons }) => {
    const indentIcon = $hasIcons && $indentLevel > 0 ? 12 : 0;

    return $dimension === 'l'
      ? `12px 16px 12px ${16 + indentIcon + $indentLevel * INDENT}px`
      : `10px 12px 10px ${12 + indentIcon + $indentLevel * INDENT}px`;
  }};
`;

export const RightCluster = styled.span<{ $dimension: SideMenuDimension }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
  ${({ $dimension }) => ($dimension === 'l' ? 'height: 24px' : 'height: 20px')};
  margin-left: 8px;
`;

export const SideMenuWrapper = styled.div<{
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

export const ScrollableContent = styled.div<{ $gap: number; $dimension: SideMenuDimension }>`
  ${hideNativeScrollbarsCss}

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${(p) => p.$gap + 'px'};
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px' : '0 12px')};
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
