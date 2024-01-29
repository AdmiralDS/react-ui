import styled, { css } from 'styled-components';
import type { RuleSet } from 'styled-components';
import type { FloatingButtonProps } from '#src/components/FloatingButton';
import { Badge as BaseBadge } from '#src/components/Badge';
import { BadgeDot as BaseBadgeDot } from '#src/components/BadgeDot';
import { TooltipHoc } from '#src/components/TooltipHOC';

const focusVisibleStyle = css`
  &:focus-visible {
    outline-offset: 2px;
    outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
  }
`;

const primaryAppearanceMixin = css`
  background-color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Special/Static White']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color['Primary/Primary 70']};
  }

  &:active {
    background-color: ${({ theme }) => theme.color['Primary/Primary 80']};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color['Neutral/Neutral 10']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;

const secondaryAppearanceMixin = css`
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color['Opacity/Hover']};
  }

  &:active {
    background-color: ${({ theme }) => theme.color['Opacity/Press']};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;

export const FloatingButtonWrapper = styled.button<{
  $dimension: FloatingButtonProps['dimension'];
  $appearance: FloatingButtonProps['appearance'];
  $mobile: boolean;
  disabled: boolean;
}>`
  position: fixed;
  inset-inline-end: ${(p) => (p.$mobile ? 16 : 28)}px;
  inset-block-end: ${(p) => (p.$mobile ? 16 : 28)}px;
  display: block;
  border: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  margin: 0;
  padding: ${(p) => (p.$dimension == 'm' ? 8 : 16)}px;
  height: ${(p) => (p.$dimension == 'm' ? 40 : 56)}px;
  width: ${(p) => (p.$dimension == 'm' ? 40 : 56)}px;
  border: none;
  border-radius: 50%;
  pointer-events: ${(p) => (p.disabled ? 'none' : 'all')};
  ${(p) => p.theme.shadow['Shadow 08']}

  &:hover {
    cursor: pointer;
  }
  ${(p) => (p.$appearance == 'primary' ? primaryAppearanceMixin : secondaryAppearanceMixin)}
  ${focusVisibleStyle}
`;

export const FloatingButtonWrapperWithTooltip = TooltipHoc(FloatingButtonWrapper);

export const IconColor = css<{ $appearance?: FloatingButtonProps['appearance'] }>`
  & *[fill^='#'] {
    fill: ${(p) =>
      p.$appearance == 'primary' ? p.theme.color['Special/Static White'] : p.theme.color['Primary/Primary 60 Main']};
  }
`;

export const FloatingButtonContent = styled.div<{
  $appearance: FloatingButtonProps['appearance'];
}>`
  ${IconColor}

  & > svg {
    height: 24px;
    width: 24px;
  }
`;

export const Badge = styled(BaseBadge)`
  position: absolute;
  top: -3px;
  inset-inline-end: -3px;
  border-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
`;

export const BadgeDot = styled(BaseBadgeDot)<{ dimension: FloatingButtonProps['dimension'] }>`
  position: absolute;
  top: ${(p) => (p.dimension == 'm' ? 1 : 3)}px;
  inset-inline-end: ${(p) => (p.dimension == 'm' ? 1 : 3)}px;
  border-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
`;

export const GroupWrapper = styled.div<{
  $dimension: FloatingButtonProps['dimension'];
  $mobile: boolean;
  $dropContainerCssMixin?: RuleSet<object>;
}>`
  position: fixed;
  inset-inline-end: ${(p) => (p.$mobile ? 16 : 28)}px;
  inset-block-end: ${(p) => (p.$mobile ? 16 : 28)}px;
  box-sizing: border-box;
  width: ${(p) => (p.$dimension == 'm' ? 40 : 56)}px;
  height: auto;

  &[data-open='true'] {
    & > div {
      margin-bottom: ${(p) => (p.$dimension == 'm' ? 12 : 16)}px;
      opacity: 1;
      transition:
        margin-bottom 0.2s cubic-bezier(0.4, 0, 1, 1) 0ms,
        opacity 0.2s cubic-bezier(0.4, 0, 1, 1) 0ms;
    }
  }

  & button {
    position: relative;
    inset-block-end: auto;
    inset-inline-end: auto;
  }

  ${(p) => p.$dropContainerCssMixin || ''}
`;

export const MenuWrapper = styled.div<{ $dimension: FloatingButtonProps['dimension'] }>`
  position: relative;
  display: block;
  box-sizing: border-box;
  z-index: -1;
  margin-bottom: ${(p) => (p.$dimension == 'm' ? -20 : -28)}px;
  opacity: 0;
  transition:
    margin-bottom 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms,
    opacity 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms;

  & > button {
    margin-bottom: ${(p) => (p.$dimension == 'm' ? 12 : 16)}px;
  }
  & > button:last-child {
    margin: 0px;
  }
`;
