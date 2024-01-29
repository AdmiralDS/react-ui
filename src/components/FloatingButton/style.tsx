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

const primaryAppearanceMixin = css<{ $disabled: boolean }>`
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.color['Neutral/Neutral 10'] : theme.color['Primary/Primary 60 Main']};
  & *[fill^='#'] {
    fill: ${({ theme, $disabled }) =>
      $disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Special/Static White']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color['Primary/Primary 70']};
  }

  &:active {
    background-color: ${({ theme }) => theme.color['Primary/Primary 80']};
  }
`;

const secondaryAppearanceMixin = css<{ $disabled: boolean }>`
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.color['Special/Elevated BG'] : theme.color['Special/Elevated BG']};
  & *[fill^='#'] {
    fill: ${({ theme, $disabled }) =>
      $disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Primary/Primary 60 Main']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color['Opacity/Hover']};
  }

  &:active {
    background-color: ${({ theme }) => theme.color['Opacity/Press']};
  }
`;

export const FloatingButtonWrapper = styled.button<{
  $dimension: FloatingButtonProps['dimension'];
  $mobile: boolean;
  disabled: boolean;
}>`
  position: fixed;
  inset-inline-end: ${(p) => (p.$mobile ? 16 : 28)}px;
  inset-block-end: ${(p) => (p.$mobile ? 16 : 28)}px;
  display: block;
  border: none;
  border-radius: 50%;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: ${(p) => (p.$dimension == 'm' ? 40 : 56)}px;
  width: ${(p) => (p.$dimension == 'm' ? 40 : 56)}px;
  pointer-events: ${(p) => (p.disabled ? 'none' : 'all')};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  ${(p) => p.theme.shadow['Shadow 08']}
  z-index: ${(p) => p.theme.zIndex['floatingButton']};
  ${focusVisibleStyle}
`;

export const FloatingButtonWrapperWithTooltip = TooltipHoc(FloatingButtonWrapper);

export const FloatingButtonContent = styled.div<{
  $dimension: FloatingButtonProps['dimension'];
  $appearance: FloatingButtonProps['appearance'];
  $disabled: boolean;
}>`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: ${(p) => (p.$dimension == 'm' ? 8 : 16)}px;
  border-radius: 50%;
  ${(p) => (p.$appearance == 'primary' ? primaryAppearanceMixin : secondaryAppearanceMixin)}

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

export const BadgeDot = styled(BaseBadgeDot)`
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
  z-index: ${(p) => p.theme.zIndex['floatingButton']};

  & > div[data-visible='false'] {
    margin-bottom: ${(p) => (p.$dimension == 'm' ? -20 : -28)}px;
    opacity: 0;
    transition:
      margin-bottom 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms,
      opacity 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
  & > div[data-visible='true'] {
    margin-bottom: ${(p) => (p.$dimension == 'm' ? 12 : 16)}px;
    opacity: 1;
    transition:
      margin-bottom 0.2s cubic-bezier(0.4, 0, 1, 1) 0ms,
      opacity 0.2s cubic-bezier(0.4, 0, 1, 1) 0ms;
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

  & > button {
    margin-bottom: ${(p) => (p.$dimension == 'm' ? 12 : 16)}px;
  }
  & > button:last-child {
    margin: 0px;
  }
`;
