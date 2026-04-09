import styled, { css } from 'styled-components';
import type { SideMenuDimension } from './types';
import { ScrollContainer } from '../Scrollbar';
import { Drawer } from '../Drawer';
import { typography } from '../Typography';
import { mediumGroupBorderRadius } from '../themes';

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

export const LabelText = styled.span<{ $dimension: SideMenuDimension; $header?: boolean; $multiline?: boolean }>`
  overflow: hidden;

  ${({ $multiline }) => ($multiline ? 'overflow-wrap: normal;' : 'white-space: nowrap; text-overflow: ellipsis;')};

  ${({ $dimension, $header }) =>
    $dimension === 'l'
      ? $header
        ? typography['Subtitle/Subtitle 2']
        : typography['Body/Body 1 Long']
      : $header
        ? typography['Subtitle/Subtitle 3']
        : typography['Body/Body 2 Long']};
`;

export const StyledDrawer = styled(Drawer)<{
  $dimension: SideMenuDimension;
}>`
  justify-content: space-between;
  box-shadow: unset;
  padding: ${({ $dimension }) => ($dimension === 'l' ? '16px 0' : '12px 0')};
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
  padding: ${({ $dimension }) => ($dimension === 'l' ? '16px 0' : '12px 0')};
  box-sizing: border-box;

  /** Если SideMenu внутри Drawer, то обнуляем паддинги у Drawer */
  .drawer[role='dialog']:has(&) {
    padding: 0;
  }
`;

export const StyledScrollContainer = styled(ScrollContainer)<{
  $dimension: SideMenuDimension;
  //todo определить отступ
  $gap: number;
}>`
  flex-grow: 1;
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px' : '0 12px')};
  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: ${(p) => p.$gap + 'px'};
  }
`;

export const TopPanelContent = styled.div<{
  $dimension: SideMenuDimension;
}>`
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px' : '0 12px')};
`;

export const BottomPanelContent = styled.div<{ $dimension: SideMenuDimension }>`
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

export const LabelDivider = styled(LabelText)`
  margin-top: 10px;
  color: var(--admiral-color-Neutral_Neutral50, ${({ theme }) => theme.color['Neutral/Neutral 50']});
`;

export const WrapperDivider = styled.div<{ $dimension: SideMenuDimension; $simple: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ $dimension, $simple }) =>
    $dimension === 'l'
      ? $simple
        ? '8px 16px 7px 16px'
        : '8px 16px 5px 16px'
      : $simple
        ? '6px 12px 5px 12px'
        : '6px 12px 3px 12px'};
`;

export const WrapperLabelTooltip = styled.div<{ $tooltipCssMixin?: ReturnType<typeof css> }>`
  ${(p) => p.$tooltipCssMixin};
`;
