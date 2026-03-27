import styled, { css } from 'styled-components';
import type { SideMenuAppearance, SideMenuDimension } from './types';
import { ScrollContainer } from '../Scrollbar';
import { Drawer } from '../Drawer';
import { typography } from '../Typography';
import { mediumGroupBorderRadius } from '../themes';

const selectedItemMixin = css<{ $selected?: boolean }>`
  background-color: var(--admiral-color-Opacity_Neutral8, ${({ theme }) => theme.color['Opacity/Neutral 8']});
  color: var(--admiral-color-Primary_Primary60Main, ${({ theme }) => theme.color['Primary/Primary 60 Main']});

  & *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${({ theme }) => theme.color['Primary/Primary 60 Main']});
  }

  &:hover {
    background-color: var(--admiral-color-Opacity_Neutral8, ${({ theme }) => theme.color['Opacity/Neutral 8']});
  }
`;

const disabledItemMixin = css<{ $selected?: boolean }>`
  background-color: transparent;
  color: var(--admiral-color-Neutral_Neutral30, ${({ theme }) => theme.color['Neutral/Neutral 30']});

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral30, ${({ theme }) => theme.color['Neutral/Neutral 30']});
  }
`;

export const ItemButton = styled.button<{ $selected?: boolean; $dimension: SideMenuDimension; $indent: number }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  border: 0;
  background-color: transparent;
  color: inherit;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-align: left;
  border-radius: var(--admiral-border-radius-Medium, ${({ theme }) => mediumGroupBorderRadius(theme.shape)});

  &:hover:not(:disabled) {
    background-color: var(--admiral-color-Opacity_Hover, ${({ theme }) => theme.color['Opacity/Hover']});
  }

  &:focus-visible:not(:disabled) {
    outline: 2px solid
      var(--admiral-color-Primary_Primary60Main, ${({ theme }) => theme.color['Primary/Primary 60 Main']});
    outline-offset: -2px;
  }

  &:active:not(:disabled) {
    background-color: var(--admiral-color-Opacity_Press, ${({ theme }) => theme.color['Opacity/Press']});
  }

  &:disabled {
    ${disabledItemMixin}
  }

  ${({ $dimension, $indent }) =>
    $dimension === 'l'
      ? `padding: 12px 16px 12px ${16 + $indent}px; ${typography['Body/Body 1 Long']}`
      : `padding: 10px 12px 10px ${12 + $indent}px; ${typography['Body/Body 2 Long']}`};

  ${({ $selected, disabled }) => $selected && !disabled && selectedItemMixin};
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

export const LeftCluster = styled.span<{ $dimension: SideMenuDimension }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $dimension }) => ($dimension === 'l' ? '16px' : '12px')};
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
  $dimension: SideMenuDimension;
}>`
  justify-content: space-between;
  box-shadow: unset;
  padding: ${({ $dimension }) => ($dimension === 'l' ? '16px 0' : '12px 0')};
  ${({ theme, $visibleBorder }) =>
    $visibleBorder &&
    `border-right: 1px solid var(--admiral-color-Neutral_Neutral20, ${theme.color['Neutral/Neutral 20']})`};

  ${({ theme, $appearance }) =>
    $appearance === 'secondary' &&
    `background-color: var(--admiral-color-Neutral_Neutral05, ${theme.color['Neutral/Neutral 05']})`};
`;

export const StyledScrollContainer = styled(ScrollContainer)<{
  $dimension: SideMenuDimension;
  //todo определить между какими элементами должен быть отступ
  $gap: number;
}>`
  flex-grow: 1;
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px' : '0 12px')};
`;

export const TopPanelContent = styled.div<{
  $dimension: SideMenuDimension;
}>`
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px' : '0 12px')};
`;

export const BottomPanelContent = styled.div<{ $dimension: SideMenuDimension }>`
  padding: ${({ $dimension }) => ($dimension === 'l' ? '0 16px' : '0 12px')};
`;

export const WrapperIcon = styled.div<{ $dimension: SideMenuDimension }>`
  ${({ $dimension }) => ($dimension === 'l' ? 'width: 24px; height: 24px' : 'width: 20px; height: 20px')};
`;
