import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import type { ChipAppearance, ChipDimension } from '#src/components/Chips';
import { Badge } from '#src/components/Badge';
import type { IconPlacementAppearance, IconPlacementDimension } from '#src/components/IconPlacement';
import { CloseIconPlacementButton } from '#src/components/IconPlacement';

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

const widths = css<{ dimension: ChipDimension }>`
  width: ${({ dimension }) => {
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

const chipTypography = css<{
  dimension: ChipDimension;
  disabled?: boolean;
  selected?: boolean;
  appearance?: ChipAppearance;
}>`
  ${({ dimension }) => (dimension === 's' ? typography['Caption/Caption 1'] : typography['Body/Body 2 Long'])}
  color: ${({ theme, appearance, disabled, selected }) => {
    if (disabled && !selected) return theme.color['Neutral/Neutral 30'];

    if (selected || (selected && disabled)) return theme.color['Special/Static White'];

    return appearance === 'filled' ? theme.color['Neutral/Neutral 90'] : theme.color['Primary/Primary 60 Main'];
  }};

  &:hover {
    color: ${({ theme, appearance, selected }) => {
      if (selected) return theme.color['Special/Static White'];
      if (appearance === 'filled' && !selected) return theme.color['Neutral/Neutral 90'];
      else return theme.color['Primary/Primary 60 Main'];
    }}
`;

const colorsBorderAndBackground = css<{
  dimension: ChipDimension;
  disabled?: boolean;
  selected?: boolean;
  appearance?: ChipAppearance;
  withCloseIcon?: boolean;
}>`
  background-color: ${({ theme, appearance, selected, disabled }) => {
    if (selected && !disabled) {
      return theme.color['Primary/Primary 60 Main'];
    }
    if (selected && disabled) return theme.color['Neutral/Neutral 30'];
    return appearance === 'filled' ? theme.color['Neutral/Neutral 10'] : 'transparent';
  }};

  border: ${({ theme, appearance, disabled }) => {
    if (appearance === 'filled') return 'none';
    if (disabled) return `1px solid ${theme.color['Neutral/Neutral 30']};`;
    else return `1px solid ${theme.color['Primary/Primary 60 Main']};`;
  }};

  border-radius: 16px;

  &:hover {
    background-color: ${({ theme, appearance, selected, withCloseIcon }) => {
      if (selected) return theme.color['Primary/Primary 70'];
      if (appearance === 'filled') return theme.color['Neutral/Neutral 20'];
      else if (!withCloseIcon) return theme.color['Opacity/Hover'];
    }};
    ${(p) =>
      p.selected &&
      `
      border-color: ${p.theme.color['Primary/Primary 70']};
    `}
  }

  &:active {
    color: ${({ theme, appearance }) =>
      appearance === 'filled' ? theme.color['Primary/Primary 60 Main'] : theme.color['Special/Static White']};
    background-color: ${({ theme, appearance, selected }) => {
      if (selected) {
        return theme.color['Primary/Primary 60 Main'];
      }
      return appearance === 'filled' ? theme.color['Neutral/Neutral 20'] : theme.color['Opacity/Hover'];
    }};
    ${(p) =>
      p.selected &&
      `
      border-color: ${p.theme.color['Primary/Primary 60 Main']};
    `}
  }

  &:focus-visible {
    outline: 0;

    &:before {
      border: 2px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
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
  withCloseIcon?: boolean;
  withBadge?: boolean;
  withTooltip?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  max-width: 190px;
  user-select: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ defaultChip, disabled, withTooltip }) =>
    (defaultChip || withTooltip) && !disabled ? 'pointer' : 'default'};
  ${colorsBorderAndBackground}
  ${heights}
  ${(p) => (p.withCloseIcon ? `padding-left: ${p.dimension === 's' ? 8 : 12}px;` : paddings)}
  ${(p) =>
    p.withBadge && !p.withCloseIcon
      ? `padding-right: ${p.dimension === 's' ? 4 : 6}px;
         padding-left: ${p.dimension === 's' ? 8 : 12}px;`
      : ''}
  ${chipTypography}
`;

const closeIconWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChipContentWrapperStyled = styled.div<{
  appearance?: ChipAppearance;
  disabled?: boolean;
  selected?: boolean;
  dimension: ChipDimension;
  withCloseIcon?: boolean;
}>`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;

  ${(p) => p.withCloseIcon && closeIconWrapperStyle}
  ${(p) => (p.withCloseIcon ? heights : heightText)}
  & svg {
    ${heightIcons}
    ${widthIcons}
    & *[fill^='#'] {
      fill: ${({ theme, appearance, disabled, selected }) => {
        if (selected) {
          return theme.color['Special/Static White'];
        }
        return disabled
          ? theme.color['Neutral/Neutral 30']
          : appearance === 'filled'
          ? theme.color['Neutral/Neutral 50']
          : theme.color['Primary/Primary 60 Main'];
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
export const IconAfterWrapperStyled = styled.div<{ dimension: ChipDimension; withCloseIcon?: boolean }>`
  display: inline-block;
  margin-left: ${(p) => (p.withCloseIcon ? '2px' : '8px')};
`;
export const IconWrapperStyled = styled.div<{
  dimension: ChipDimension;
  withCloseIcon?: boolean;
}>`
  ${(p) => p.withCloseIcon && closeIconWrapperStyle}
  ${(p) => (p.withCloseIcon ? heights : heightIcons)}
  ${(p) => (p.withCloseIcon ? widths : widthIcons)}
  & > svg {
    ${heightIcons}
    ${widthIcons}
  }
`;

export const StyledBadge = styled(Badge)<{ dimension: ChipDimension }>`
  margin-left: ${({ dimension }) => (dimension === 's' ? '6px' : '8px')};
`;

export const CloseIconButton = styled(CloseIconPlacementButton)<{
  dimension: IconPlacementDimension;
  appearance: IconPlacementAppearance;
}>`
  //дополнительный отступ в 2px, чтобы кружок ховера не стоял вплотную к элементу сдева
  margin-left: ${(p) => (p.dimension === 's' ? '6px' : '8px')};
  ${(p) => (p.appearance === 'primary' ? (p.dimension === 's' ? 'margin-right: 3px' : 'margin-right: 5px') : '')};
`;
