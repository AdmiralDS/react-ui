import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import type { ChipAppearance, ChipDimension } from '#src/components/Chips';
import { Badge } from '#src/components/Badge';
import type { IconPlacementAppearance, IconPlacementDimension } from '#src/components/IconPlacement';
import { CloseIconPlacementButton } from '#src/components/IconPlacement';

const heights = css<{ $dimension: ChipDimension }>`
  height: ${({ $dimension }) => {
    switch ($dimension) {
      case 'm':
        return '32px';
      case 's':
        return '24px';
      default:
        return '24px';
    }
  }};
`;

const widths = css<{ $dimension: ChipDimension }>`
  width: ${({ $dimension }) => {
    switch ($dimension) {
      case 'm':
        return '32px';
      case 's':
        return '24px';
      default:
        return '24px';
    }
  }};
`;

const heightIcons = css<{ $dimension: ChipDimension }>`
  height: ${({ $dimension }) => {
    switch ($dimension) {
      case 'm':
        return '20px';
      case 's':
        return '16px';
      default:
        return '16px';
    }
  }};
`;

const heightText = css<{ $dimension: ChipDimension }>`
  height: ${({ $dimension }) => {
    switch ($dimension) {
      case 'm':
        return '20px';
      case 's':
        return '16px';
      default:
        return '16px';
    }
  }};
`;

const widthIcons = css<{ $dimension: ChipDimension }>`
  width: ${({ $dimension }) => {
    switch ($dimension) {
      case 'm':
        return '20px';
      case 's':
        return '16px';
      default:
        return '16px';
    }
  }};
`;

const filledPaddings = css<{ $dimension: ChipDimension }>`
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 'm':
        return '6px 12px';
      case 's':
        return '4px 8px';
      default:
        return '4px 8px';
    }
  }};
`;
const outlinedPaddings = css<{ $dimension: ChipDimension }>`
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 'm':
        return '5px 11px';
      case 's':
        return '3px 7px';
      default:
        return '3px 7px';
    }
  }};
`;
const paddings = css<{ $dimension: ChipDimension; $appearance?: ChipAppearance }>`
  ${({ $appearance }) => ($appearance === 'filled' ? filledPaddings : outlinedPaddings)}
`;

const chipTypographyHover = css<{
  $dimension: ChipDimension;
  $disabled?: boolean;
  $selected?: boolean;
  $appearance?: ChipAppearance;
}>`
  &:hover {
    color: ${({ theme, $appearance, $selected }) => {
      if ($selected) {
        return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      }

      if ($appearance === 'filled' && !$selected) {
        return `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`;
      } else {
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
      }
    }};
  }
`;

const chipTypography = css<{
  $dimension: ChipDimension;
  $disabled?: boolean;
  $selected?: boolean;
  $appearance?: ChipAppearance;
}>`
  ${({ $dimension }) => ($dimension === 's' ? typography['Caption/Caption 1'] : typography['Body/Body 2 Long'])}
  color: ${({ theme, $appearance, $disabled, $selected }) => {
    if ($disabled && !$selected) {
      return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
    }

    if ($selected || ($selected && $disabled)) {
      return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
    }

    return $appearance === 'filled'
      ? `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
  }};

  ${($disabled) => !$disabled && chipTypographyHover}
`;

const actionsMixin = css<{
  $selected?: boolean;
  $appearance?: ChipAppearance;
  $withCloseIcon?: boolean;
}>`
  &:hover {
    ${({ theme, $appearance, $selected, $withCloseIcon }) => {
      if ($selected) {
        return `background-color: var(--admiral-color-Primary_Primary70, ${theme.color['Primary/Primary 70']});`;
      }
      if ($appearance === 'filled') {
        return `background-color: var(--admiral-color-Opacity_Neutral12, ${theme.color['Opacity/Neutral 12']});`;
      } else if (!$withCloseIcon) {
        return `background-color: var(--admiral-color-Opacity_Hover, ${theme.color['Opacity/Hover']});`;
      }
    }};
    ${(p) =>
      p.$selected &&
      `
      border-color: var(--admiral-color-Primary_Primary70, ${p.theme.color['Primary/Primary 70']});
    `}
  }
  &:active {
    ${({ theme, $appearance, $selected, $withCloseIcon }) => {
      if ($selected) {
        return `background-color: var(--admiral-color-Primary_Primary80, ${theme.color['Primary/Primary 80']});`;
      }
      if ($appearance === 'filled') {
        return `background-color: var(--admiral-color-Opacity_Neutral16, ${theme.color['Opacity/Neutral 16']});`;
      } else if (!$withCloseIcon) {
        return `background-color: var(--admiral-color-Opacity_Press, ${theme.color['Opacity/Press']});`;
      }
    }};
    ${(p) =>
      p.$selected &&
      `
      border-color: var(--admiral-color-Primary_Primary80, ${p.theme.color['Primary/Primary 80']});
    `}
  }
`;

const colorsBorderAndBackground = css<{
  $dimension: ChipDimension;
  $disabled?: boolean;
  $selected?: boolean;
  $appearance?: ChipAppearance;
  $clickable: boolean;
}>`
  background-color: ${({ theme, $appearance, $selected, $disabled }) => {
    if ($selected && !$disabled) {
      return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }
    if ($selected && $disabled) {
      return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
    }
    return $appearance === 'filled'
      ? `var(--admiral-color-Opacity_Neutral8, ${theme.color['Opacity/Neutral 8']})`
      : 'transparent';
  }};

  border: ${({ theme, $appearance, $disabled }) => {
    if ($appearance === 'filled') return 'none';
    if ($disabled) {
      return `1px solid var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
    } else {
      return `1px solid var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }
  }};

  border-radius: 16px;

  ${(p) => p.$clickable && !p.$disabled && actionsMixin}

  &:focus-visible {
    outline: 0;

    &:before {
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
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
  $disabled?: boolean;
  $dimension: ChipDimension;
  $appearance?: ChipAppearance;
  $selected?: boolean;
  $defaultChip?: boolean;
  $withCloseIcon?: boolean;
  $withBadge?: boolean;
  $withTooltip?: boolean;
  $clickable: boolean;
  $readOnly?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  max-width: 190px;
  user-select: none;
  & > * {
    pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  }
  cursor: ${({ $defaultChip, $disabled, $withTooltip }) =>
    ($defaultChip || $withTooltip) && !$disabled ? 'pointer' : $disabled ? 'not-allowed' : 'default'};
  ${colorsBorderAndBackground}
  ${heights}
  ${(p) =>
    p.$withCloseIcon && !p.$readOnly
      ? `padding-inline-start: ${(p.$dimension === 's' ? 8 : 12) - (p.$appearance === 'outlined' ? 1 : 0)}px;`
      : paddings}
  ${(p) =>
    p.$withBadge && (!p.$withCloseIcon || p.$readOnly)
      ? `padding-inline-end: ${(p.$dimension === 's' ? 4 : 6) - (p.$appearance === 'outlined' ? 1 : 0)}px;
         padding-inline-start: ${(p.$dimension === 's' ? 8 : 12) - (p.$appearance === 'outlined' ? 1 : 0)}px;`
      : ''}
  ${chipTypography}
`;

const closeIconWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChipContentWrapperStyled = styled.div<{
  $appearance?: ChipAppearance;
  $disabled?: boolean;
  $selected?: boolean;
  $dimension: ChipDimension;
  $withCloseIcon?: boolean;
}>`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;

  ${(p) => p.$withCloseIcon && closeIconWrapperStyle}
  ${(p) => (p.$withCloseIcon ? heights : heightText)}
  & svg {
    ${heightIcons}
    ${widthIcons}
    & *[fill^='#'] {
      fill: ${({ theme, $appearance, $disabled, $selected }) => {
        if ($selected) {
          return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
        }
        return $disabled
          ? `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`
          : $appearance === 'filled'
            ? `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`
            : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
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
export const IconStartWrapperStyled = styled.div`
  display: inline-block;
  margin-inline-end: 8px;
`;
export const IconEndWrapperStyled = styled.div<{ $dimension: ChipDimension; $withCloseIcon?: boolean }>`
  display: inline-block;
  margin-inline-start: ${(p) => (p.$withCloseIcon ? '2px' : '8px')};
`;
export const IconWrapperStyled = styled.div<{
  $dimension: ChipDimension;
  $withCloseIcon?: boolean;
}>`
  ${(p) => p.$withCloseIcon && closeIconWrapperStyle}
  ${(p) => (p.$withCloseIcon ? heights : heightIcons)}
  ${(p) => (p.$withCloseIcon ? widths : widthIcons)}
  & > svg {
    ${heightIcons}
    ${widthIcons}
  }
`;

export const StyledBadge = styled(Badge)<{ dimension: ChipDimension }>`
  margin-inline-start: ${({ dimension }) => (dimension === 's' ? '6px' : '8px')};
`;

export const CloseIconButton = styled(CloseIconPlacementButton)<{
  dimension: IconPlacementDimension;
  appearance: IconPlacementAppearance;
}>`
  //дополнительный отступ в 2px, чтобы кружок ховера не стоял вплотную к элементу слева
  margin-inline-start: ${(p) => (p.dimension === 's' ? '6px' : '8px')};
  ${(p) =>
    p.appearance === 'primary' ? (p.dimension === 's' ? 'margin-inline-end: 3px' : 'margin-inline-end: 5px') : ''};
`;
