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

const circleBackground = css<{ background: TagKind | string }>`
  background: ${({ background, theme }) => {
    switch (background) {
      case 'success':
      case 'green':
        return theme.color['Success/Success 50 Main'];
      case 'primary':
      case 'blue':
        return theme.color['Primary/Primary 60 Main'];
      case 'danger':
      case 'red':
        return theme.color['Error/Error 60 Main'];
      case 'warning':
      case 'orange':
        return theme.color['Warning/Warning 50 Main'];
      default:
        return background;
    }
  }};
`;

const wrapperBackground = css<{ background: TagKind | string }>`
  background: ${({ background, theme }) => {
    switch (background) {
      case 'success':
      case 'green':
        return theme.color['Success/Success 10'];
      case 'primary':
      case 'blue':
        return theme.color['Primary/Primary 10'];
      case 'danger':
      case 'red':
        return theme.color['Error/Error 10'];
      case 'warning':
      case 'orange':
        return theme.color['Warning/Warning 10'];
      case 'neutral':
        return theme.color['Neutral/Neutral 10'];
      default:
        return background || theme.color['Neutral/Neutral 10'];
    }
  }};
`;

const wrapperBorder = css<{ border: TagKind | string }>`
  border: 1px solid
    ${({ border, theme }) => {
      switch (border) {
        case 'success':
        case 'green':
          return theme.color['Success/Success 40'];
        case 'primary':
        case 'blue':
          return theme.color['Primary/Primary 50'];
        case 'danger':
        case 'red':
          return theme.color['Error/Error 50'];
        case 'warning':
        case 'orange':
          return theme.color['Warning/Warning 40'];
        case 'neutral':
          return theme.color['Neutral/Neutral 40'];
        default:
          return border || theme.color['Neutral/Neutral 40'];
      }
    }};
`;

const wrapperHover = css<{ backgroundHover: TagKind | string }>`
  background: ${({ backgroundHover, theme }) => {
    switch (backgroundHover) {
      case 'success':
      case 'green':
        return theme.color['Success/Success 20'];
      case 'primary':
      case 'blue':
        return theme.color['Primary/Primary 20'];
      case 'danger':
      case 'red':
        return theme.color['Error/Error 20'];
      case 'warning':
      case 'orange':
        return theme.color['Warning/Warning 20'];
      case 'neutral':
        return theme.color['Neutral/Neutral 20'];
      default:
        return backgroundHover || theme.color['Neutral/Neutral 20'];
    }
  }};
`;

export const Wrapper = styled.button<{
  dimension?: TagDimension;
  width?: number | string;
  clickable: boolean;
  as?: React.ElementType;
  statusViaBackground?: boolean;
  border: TagKind | string;
  background: TagKind | string;
  backgroundHover: TagKind | string;
}>`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;

  ${({ dimension }) => `
    height: ${dimension === 's' ? TAG_HEIGHT_S : TAG_HEIGHT_M}px;
    padding: ${dimension === 's' ? TAG_PADDING_TOP_S : TAG_PADDING_TOP_M}px ${
      dimension === 's' ? TAG_PADDING_LEFT_S : TAG_PADDING_LEFT_M
    }px;
  `}

  ${({ width }) => width && `width: ${typeof width === 'number' ? `${width}px` : width};`}
  border-radius: ${(p) => smallGroupBorderRadius(p.theme.shape)};
  ${({ statusViaBackground, theme }) =>
    statusViaBackground ? wrapperBackground : `background: ${theme.color['Neutral/Neutral 10']};`}
  ${({ statusViaBackground, theme }) =>
    statusViaBackground ? wrapperBorder : `border: 1px solid ${theme.color['Neutral/Neutral 10']};`}

  display: inline-flex;
  align-items: center;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};

  &:hover,
  &:active {
    ${({ statusViaBackground, theme, clickable }) =>
      clickable && !statusViaBackground ? `border: 1px solid ${theme.color['Neutral/Neutral 20']};` : ''}
    ${({ statusViaBackground, theme, clickable }) =>
      clickable ? (statusViaBackground ? wrapperHover : `background: ${theme.color['Neutral/Neutral 20']};`) : ''}
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
      border-radius: ${(p) => smallGroupBorderRadius(p.theme.shape)};
      border: 2px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    }
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${typography['Caption/Caption 1']}
`;

export const TagCircle = styled.div<{ background: TagKind | string }>`
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
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
`;

export const StatusIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-left: 4px;

  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }

  &:hover {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    }
  }
`;
