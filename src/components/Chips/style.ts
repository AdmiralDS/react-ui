import styled, { css } from 'styled-components';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { TYPOGRAPHY } from '#/components/Typography';
import type { ChipAppearance, ChipDimension } from '#/components/Chips';

const heights = css<{ dimension: ChipDimension }>`
  height: ${({ dimension }) => {
    switch (dimension) {
      case 'm':
        return '32px';
      case 's':
        return '24px';
      default:
        return '24px';
    }
  }};
`;

const heightIcons = css<{ dimension: ChipDimension }>`
  height: ${({ dimension }) => {
    switch (dimension) {
      case 'm':
        return '20px';
      case 's':
        return '16px';
      default:
        return '16px';
    }
  }};
`;

const heightText = css<{ dimension: ChipDimension }>`
  height: ${({ dimension }) => {
    switch (dimension) {
      case 'm':
        return '20px';
      case 's':
        return '16px';
      default:
        return '16px';
    }
  }};
`;

const widthIcons = css<{ dimension: ChipDimension }>`
  width: ${({ dimension }) => {
    switch (dimension) {
      case 'm':
        return '20px';
      case 's':
        return '16px';
      default:
        return '16px';
    }
  }};
`;

const paddings = css<{ dimension: ChipDimension }>`
  padding: ${({ dimension }) => {
    switch (dimension) {
      case 'm':
        return '6px 12px';
      case 's':
        return '4px 8px';
      default:
        return '4px 8px';
    }
  }};
`;

const typography = css<{
  dimension: ChipDimension;
  disabled?: boolean;
  selected?: boolean;
  appearance?: ChipAppearance;
}>`
  font-family: ${TYPOGRAPHY.fontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: ${({ dimension }) => (dimension === 's' ? '12px' : '14px')};
  line-height: ${({ dimension }) => (dimension === 's' ? '16px' : '20px')};
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: ${({ theme, appearance, disabled, selected }) => {
    if (disabled && !selected) return theme.color.text.tertiary;

    if (selected || (selected && disabled)) return theme.color.text.staticWhite;

    return appearance === 'filled' ? theme.color.text.primary : theme.color.basic.primary;
  }};

  &:hover {
    color: ${({ theme, appearance, selected }) => {
      if (selected) return theme.color.text.staticWhite;
      if (appearance === 'filled') return theme.color.text.primary;
      else theme.color.basic.hover;
    }}
`;

const colorsBorderAndBackground = css<{
  dimension: ChipDimension;
  disabled?: boolean;
  selected?: boolean;
  appearance?: ChipAppearance;
}>`
  background-color: ${({ theme, appearance, selected, disabled }) => {
    if (selected && !disabled) {
      return theme.color.basic.primary;
    }
    if (selected && disabled) return theme.color.basic.disable;
    return appearance === 'filled' ? theme.color.background.tertiary : theme.color.background.primary;
  }};

  border: 1px solid
    ${({ theme, appearance, disabled }) => {
      if (disabled) return theme.color.background.tertiary;
      if (appearance === 'filled') return 'transparent';
      else return theme.color.basic.primary;
    }};

  border-radius: 16px;

  &:hover {
    background-color: ${({ theme, appearance, selected }) => {
      if (selected) return theme.color.basic.hover;
      if (appearance === 'filled') return theme.color.background.tertiaryHover;
      else return theme.color.background.secondary;
    }};
  }

  &:active {
    color: ${({ theme, appearance }) => (appearance === 'filled' ? theme.color.text.primary : theme.color.basic.press)};
    background-color: ${({ theme, appearance, selected }) => {
      if (selected) {
        return theme.color.basic.primary;
      }
      return appearance === 'filled' ? theme.color.background.tertiaryHover : theme.color.background.secondary;
    }};
  }

  &:focus-visible {
    outline: 0;

    &:before {
      border: 2px solid ${({ theme }) => theme.color.basic.hover};
      border-radius: 20px;
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      pointer-events: none;
    }
  }
`;
export const ChipComponentStyled = styled.div<{
  disabled?: boolean;
  dimension: ChipDimension;
  appearance?: ChipAppearance;
  selected?: boolean;
  defaultChip?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  max-width: 190px;
  user-select: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  & *[fill^='#'] {
    fill: ${({ theme, appearance, disabled }) =>
      appearance === 'filled' || disabled ? theme.color.basic.tertiary : theme.color.basic.primary};
  }
  cursor: ${({ defaultChip, disabled }) => (defaultChip && !disabled ? 'pointer' : 'default')};
  ${colorsBorderAndBackground}
  ${heights}
  ${paddings}
  ${typography}
`;
export const CloseIconWrapperStyled = styled(CloseOutline)<{
  disabled?: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:hover {
    outline: none;
    cursor: pointer;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
  }

  &:active {
    outline: none;
    border: none;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.press};
    }
  }
`;
export const ChipContentWrapperStyled = styled.div<{
  appearance?: ChipAppearance;
  disabled?: boolean;
  selected?: boolean;
  dimension: ChipDimension;
}>`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;

  ${heightText}
  & svg {
    ${heightIcons}
    ${widthIcons}
    & *[fill^='#'] {
      fill: ${({ theme, appearance, disabled, selected }) => {
        if (selected) {
          return theme.color.background.primary;
        }
        return appearance === 'filled' || disabled ? theme.color.basic.tertiary : theme.color.basic.primary;
      }};
    }
  }
`;
export const ChipChildrenWrapperStyled = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`;
export const IconBeforeWrapperStyled = styled.div`
  display: inline-block;
  margin-right: 8px;
`;
export const IconAfterWrapperStyled = styled.div`
  display: inline-block;
  margin-left: 8px;
`;
export const IconWrapperStyled = styled.div<{
  dimension: ChipDimension;
}>`
  ${heightIcons}
  ${widthIcons}
  & > svg {
    ${heightIcons}
    ${widthIcons}
  }
`;
