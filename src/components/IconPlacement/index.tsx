import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';

const IconSizeM = 24;
const IconSizeS = 20;
const IconSizeXS = 16;

export type IconPlacementDimension = 'mBig' | 'm' | 'sBig' | 's' | 'xs';

function getIconSize(dimension?: IconPlacementDimension) {
  switch (dimension) {
    case 'm':
    case 'mBig':
      return IconSizeM;
    case 's':
    case 'sBig':
      return IconSizeS;
    case 'xs':
      return IconSizeXS;
    default:
      return IconSizeM;
  }
}

function getHoverSize(dimension?: IconPlacementDimension) {
  switch (dimension) {
    case 'mBig':
    case 'sBig':
      return getIconSize(dimension) + 12;
    case 'm':
    case 's':
    case 'xs':
      return getIconSize(dimension) + 8;
    default:
      return getIconSize(dimension) + 8;
  }
}

export interface IconPlacementProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Размер кнопки */
  dimension?: IconPlacementDimension;
  /** Отключение кнопки */
  disabled?: boolean;
}

const hoverStyle = css<{ dimension?: IconPlacementDimension }>`
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: ${(p) => getHoverSize(p.dimension)}px;
    height: ${(p) => getHoverSize(p.dimension)}px;
    background-color: ${({ theme }) => theme.color['Opacity/Hover']};
  }
`;
const StyledButton = styled.button<{ dimension?: IconPlacementDimension }>`
  position: relative;
  padding: 0;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  height: ${(p) => getIconSize(p.dimension)}px;
  width: ${(p) => getIconSize(p.dimension)}px;
  border-radius: ${(p) => smallGroupBorderRadius(p.theme.shape)};

  cursor: pointer;

  &:disabled {
    cursor: default;
    pointer-events: none;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }

  &:focus:not(:disabled) {
    ${hoverStyle}
    &::before {
      background-color: ${({ theme }) => theme.color['Opacity/Focus']};
    }
  }

  &:hover:not(:disabled) {
    ${hoverStyle}
  }

  &:active:not(:disabled) {
    ${hoverStyle}
    &::before {
      background-color: ${({ theme }) => theme.color['Opacity/Press']};
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
  }
`;

const IconPlacementContent = styled.div<{ dimension?: IconPlacementDimension }>`
  height: 100%;

  & *[fill^='#'] {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }

  & > svg {
    height: ${(p) => getIconSize(p.dimension)}px;
    width: ${(p) => getIconSize(p.dimension)}px;
  }
`;

export const IconPlacement = React.forwardRef<HTMLButtonElement, IconPlacementProps>(
  ({ type = 'button', dimension = 'm', disabled = false, children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} type={type} dimension={dimension} disabled={disabled} {...props}>
        <IconPlacementContent dimension={dimension}>{children}</IconPlacementContent>
      </StyledButton>
    );
  },
);
