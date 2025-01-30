import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';
import type { TagKind, TagDimension } from '#src/components/Tag';

const TAG_HEIGHT_S = 20;
const TAG_HEIGHT_M = 24;
const TAG_PADDING_TOP_S = 1;
const TAG_PADDING_TOP_M = 3;
const TAG_PADDING_LEFT_S = 5;
const TAG_PADDING_LEFT_M = 7;

const circleBackground = css<{ $background: TagKind | string }>`
  background: ${({ $background, theme }) => {
    switch ($background) {
      case 'success':
      case 'green':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      case 'primary':
      case 'blue':
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
      case 'danger':
      case 'red':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'warning':
      case 'orange':
        return `var(--admiral-color-Warning_Warning50Main, ${theme.color['Warning/Warning 50 Main']})`;
      default:
        return $background;
    }
  }};
`;

const wrapperBackground = css<{ $background: TagKind | string }>`
  background: ${({ $background, theme }) => {
    switch ($background) {
      case 'success':
      case 'green':
        return `var(--admiral-color-Success_Success10, ${theme.color['Success/Success 10']})`;
      case 'primary':
      case 'blue':
        return `var(--admiral-color-Primary_Primary10, ${theme.color['Primary/Primary 10']})`;
      case 'danger':
      case 'red':
        return `var(--admiral-color-Error_Error10, ${theme.color['Error/Error 10']})`;
      case 'warning':
      case 'orange':
        return `var(--admiral-color-Warning_Warning10, ${theme.color['Warning/Warning 10']})`;
      case 'neutral':
        return `var(--admiral-color-Opacity_Neutral8, ${theme.color['Opacity/Neutral 8']})`;
      default:
        return $background || `var(--admiral-color-Opacity_Neutral8, ${theme.color['Opacity/Neutral 8']})`;
    }
  }};
`;

const wrapperBorder = css<{ $border: TagKind | string }>`
  border: 1px solid
    ${({ $border, theme }) => {
      switch ($border) {
        case 'success':
        case 'green':
          return `var(--admiral-color-Success_Success40, ${theme.color['Success/Success 40']})`;
        case 'primary':
        case 'blue':
          return `var(--admiral-color-Primary_Primary50, ${theme.color['Primary/Primary 50']})`;
        case 'danger':
        case 'red':
          return `var(--admiral-color-Error_Error50, ${theme.color['Error/Error 50']})`;
        case 'warning':
        case 'orange':
          return `var(--admiral-color-Warning_Warning40, ${theme.color['Warning/Warning 40']})`;
        case 'neutral':
          return `var(--admiral-color-Neutral_Neutral40, ${theme.color['Neutral/Neutral 40']})`;
        default:
          return $border || `var(--admiral-color-Neutral_Neutral40, ${theme.color['Neutral/Neutral 40']})`;
      }
    }};
`;

const wrapperHover = css<{ $backgroundHover: TagKind | string }>`
  background: ${({ $backgroundHover, theme }) => {
    switch ($backgroundHover) {
      case 'success':
      case 'green':
        return `var(--admiral-color-Success_Success20, ${theme.color['Success/Success 20']})`;
      case 'primary':
      case 'blue':
        return `var(--admiral-color-Primary_Primary20, ${theme.color['Primary/Primary 20']})`;
      case 'danger':
      case 'red':
        return `var(--admiral-color-Error_Error20, ${theme.color['Error/Error 20']})`;
      case 'warning':
      case 'orange':
        return `var(--admiral-color-Warning_Warning20, ${theme.color['Warning/Warning 20']})`;
      case 'neutral':
        return `var(--admiral-color-Opacity_Neutral12, ${theme.color['Opacity/Neutral 12']})`;
      default:
        return $backgroundHover || `var(--admiral-color-Opacity_Neutral12, ${theme.color['Opacity/Neutral 12']})`;
    }
  }};
`;

export const Wrapper = styled.button<{
  $dimension?: TagDimension;
  $width?: number | string;
  $clickable: boolean;
  $statusViaBackground?: boolean;
  $border: TagKind | string;
  $background: TagKind | string;
  $backgroundHover: TagKind | string;
}>`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;

  ${({ $dimension }) => `
    height: ${$dimension === 's' ? TAG_HEIGHT_S : TAG_HEIGHT_M}px;
    padding: ${$dimension === 's' ? TAG_PADDING_TOP_S : TAG_PADDING_TOP_M}px ${
      $dimension === 's' ? TAG_PADDING_LEFT_S : TAG_PADDING_LEFT_M
    }px;
  `}

  ${({ $width }) => $width && `width: ${typeof $width === 'number' ? `${$width}px` : $width};`}
  border-radius: var(--admiral-border-radius-Small, ${(p) => smallGroupBorderRadius(p.theme.shape)});
  ${({ $statusViaBackground, theme }) =>
    $statusViaBackground
      ? wrapperBackground
      : `background: var(--admiral-color-Opacity_Neutral8, ${theme.color['Opacity/Neutral 8']});`}
  ${({ $statusViaBackground }) => ($statusViaBackground ? wrapperBorder : `border: 1px solid transparent;`)}

  display: inline-flex;
  align-items: center;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};

  &:hover,
  &:active {
    ${({ $statusViaBackground, $clickable }) =>
      $clickable && !$statusViaBackground ? `border: 1px solid transparent;` : ''}
    ${({ $statusViaBackground, theme, $clickable }) =>
      $clickable
        ? $statusViaBackground
          ? wrapperHover
          : `background: var(--admiral-color-Opacity_Neutral12, ${theme.color['Opacity/Neutral 12']});`
        : ''}
  }

  &:focus-visible {
    outline: none;

    &:before {
      content: '';
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: var(--admiral-border-radius-Small, ${(p) => smallGroupBorderRadius(p.theme.shape)});
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    }
  }
`;

export const Text = styled.span`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${typography['Caption/Caption 1']}
`;

export const TagCircle = styled.div<{ $background: TagKind | string }>`
  display: flex;
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  ${circleBackground}
`;

export const Icon = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;

export const StatusIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-left: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  &:hover {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    }
  }
`;
