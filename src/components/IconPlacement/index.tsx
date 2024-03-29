import * as React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';

const IconSizeL = 24;
const IconSizeM = 20;
const IconSizeS = 16;
const HighlighterOffsetBig = 6;
const HighlighterOffsetSmall = 4;

export type IconPlacementDimension = 'lBig' | 'lSmall' | 'mBig' | 'mSmall' | 's';
export type IconPlacementAppearance = 'primary' | 'secondary';

function getIconSize(dimension?: IconPlacementDimension) {
  switch (dimension) {
    case 'lSmall':
    case 'lBig':
      return IconSizeL;
    case 'mSmall':
    case 'mBig':
      return IconSizeM;
    case 's':
      return IconSizeS;
    default:
      return IconSizeL;
  }
}

function getHighlighterOffset(dimension?: IconPlacementDimension) {
  switch (dimension) {
    case 'lBig':
    case 'mBig':
      return HighlighterOffsetBig;
    case 'lSmall':
    case 'mSmall':
    case 's':
      return HighlighterOffsetSmall;
    default:
      return HighlighterOffsetBig;
  }
}

function getHighlighterSize(dimension?: IconPlacementDimension) {
  return getIconSize(dimension) + getHighlighterOffset(dimension) * 2;
}

export interface IconPlacementProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Размер кнопки */
  dimension?: IconPlacementDimension;
  /** Отключение кнопки */
  disabled?: boolean;
  /** Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается */
  highlightFocus?: boolean;
  /** Внешний вид кнопки */
  appearance?: IconPlacementAppearance | { iconColor: string };
}

const IconColor = css<{ $iconColor: IconPlacementAppearance | string }>`
  & *[fill^='#'] {
    fill: ${(p) => {
      switch (p.$iconColor) {
        case 'primary':
          return `var(--admiral-color-Primary_Primary60Main, ${p.theme.color['Primary/Primary 60 Main']})`;
        case 'secondary':
          return `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`;
        default:
          return p.$iconColor;
      }
    }};
  }
`;

const IconPlacementContent = styled.div<{
  $dimension?: IconPlacementDimension;
  $iconColor: IconPlacementAppearance | string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${IconColor}

  & > svg {
    height: ${(p) => getIconSize(p.$dimension)}px;
    width: ${(p) => getIconSize(p.$dimension)}px;
  }
`;

const ActivityHighlighter = styled.div<{ $dimension?: IconPlacementDimension }>`
  width: ${(p) => getHighlighterSize(p.$dimension)}px;
  height: ${(p) => getHighlighterSize(p.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const eventsMixin = css<{ $highlightFocus: boolean }>`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
  }

  &:focus {
    > ${ActivityHighlighter} {
      background-color: ${(p) =>
        p.$highlightFocus ? `var(--admiral-color-Opacity_Focus, ${p.theme.color['Opacity/Focus']})` : 'transparent'};
    }
  }
  &:hover {
    > ${ActivityHighlighter} {
      background-color: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
    }
  }
  &:active {
    > ${ActivityHighlighter} {
      background-color: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
    }
  }
  &:focus-visible {
    > ${ActivityHighlighter} {
      background-color: transparent;
    }
  }
`;

const IconPlacementButton = styled.button<{ $dimension?: IconPlacementDimension; $highlightFocus: boolean }>`
  position: relative;
  padding: 0;
  margin: ${(p) => getHighlighterOffset(p.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${(p) => getIconSize(p.$dimension)}px;
  width: ${(p) => getIconSize(p.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${(p) => smallGroupBorderRadius(p.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
  &:not(:disabled) {
    ${eventsMixin}
  }
`;

export const IconPlacement = React.forwardRef<HTMLButtonElement, IconPlacementProps>(
  (
    { type = 'button', dimension = 'lBig', disabled = false, highlightFocus = true, appearance, children, ...props },
    ref,
  ) => {
    const iconColor: IconPlacementAppearance | string =
      typeof appearance === 'object'
        ? appearance.iconColor
          ? appearance.iconColor
          : 'secondary'
        : (appearance as IconPlacementAppearance);
    return (
      <IconPlacementButton
        ref={ref}
        type={type}
        $dimension={dimension}
        disabled={disabled}
        $highlightFocus={highlightFocus}
        {...props}
      >
        <ActivityHighlighter $dimension={dimension} aria-hidden />
        <IconPlacementContent $dimension={dimension} $iconColor={iconColor} aria-hidden>
          {children}
        </IconPlacementContent>
      </IconPlacementButton>
    );
  },
);

export const CloseIconPlacementButton = React.forwardRef<HTMLButtonElement, IconPlacementProps>(
  ({ className, ...props }, ref) => {
    return (
      <IconPlacement ref={ref} className={`close-button ${className || ''}`} {...props}>
        <CloseOutline aria-hidden />
      </IconPlacement>
    );
  },
);
