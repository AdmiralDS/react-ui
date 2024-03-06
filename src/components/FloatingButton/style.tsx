import styled, { css } from 'styled-components';
import type { FloatingButtonProps } from '../FloatingButton';
import { Badge as BaseBadge } from '#src/components/Badge';
import { BadgeDot as BaseBadgeDot } from '#src/components/BadgeDot';
import { TooltipHoc } from '#src/components/TooltipHOC';
import type { FloatingButtonMenuProps } from './FloatingButtonMenu';

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

const dimensionMixin = css<{ $dimension: FloatingButtonProps['dimension'] }>`
  width: ${(p) => (p.$dimension == 'xl' ? 56 : 40)}px;
  height: ${(p) => (p.$dimension == 'xl' ? 56 : 40)}px;

  .floating_button_menu[data-dimension='xl'] && {
    width: 56px;
    height: 56px;
    margin-bottom: 16px;
  }
  .floating_button_menu[data-dimension='m'] && {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
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
  ${dimensionMixin}
  pointer-events: ${(p) => (p.disabled ? 'none' : 'all')};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  ${(p) => p.theme.shadow['Shadow 08']}
  ${focusVisibleStyle}
`;

export const FloatingButtonWrapperWithTooltip = TooltipHoc(FloatingButtonWrapper);

export const FloatingButtonContent = styled.div<{
  $dimension: FloatingButtonProps['dimension'];
  $appearance: FloatingButtonProps['appearance'];
  $disabled: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: ${(p) => (p.$dimension == 'm' ? 8 : 16)}px;
  border-radius: 50%;
  ${(p) => (p.$appearance == 'primary' ? primaryAppearanceMixin : secondaryAppearanceMixin)}
  .floating_button_menu && {
    ${secondaryAppearanceMixin}
  }

  & > svg {
    flex: 0 0 auto;
    height: 24px;
    width: 24px;
  }
`;

const badgeMixin = css`
  position: absolute;
  border: 1px solid var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

export const Badge = styled(BaseBadge)`
  top: -3px;
  inset-inline-end: -3px;
  ${badgeMixin}
  padding: ${({ dimension }) => (dimension === 's' ? '0 4px' : '0 5px')};
`;

export const BadgeDot = styled(BaseBadgeDot)`
  top: ${(p) => (p.dimension == 'm' ? 1 : 3)}px;
  inset-inline-end: ${(p) => (p.dimension == 'm' ? 1 : 3)}px;
  ${badgeMixin}
`;

export const TRANSITION_DURATION = 200;
const OPEN_TIMING_FUNC = 'cubic-bezier(0, 0, 0.2, 1)';
const CLOSE_TIMING_FUNC = 'cubic-bezier(0.4, 0, 1, 1)';

const openTransitionMixin = `
  ${TRANSITION_DURATION}ms ${OPEN_TIMING_FUNC} 0ms
`;
const closeTransitionMixin = `
  ${TRANSITION_DURATION}ms ${CLOSE_TIMING_FUNC} 0ms
`;

export const GroupWrapper = styled.div<{
  $dimension: FloatingButtonMenuProps['dimension'];
  $mobile: boolean;
  $dropContainerCssMixin?: FloatingButtonMenuProps['containerCssMixin'];
}>`
  position: fixed;
  inset-inline-end: ${(p) => (p.$mobile ? 16 : 28)}px;
  inset-block-end: ${(p) => (p.$mobile ? 16 : 28)}px;
  box-sizing: border-box;
  width: ${(p) => (p.$dimension == 'm' ? 40 : 56)}px;
  height: auto;

  & > div[data-visible='false'] {
    margin-bottom: ${(p) => (p.$dimension == 'm' ? -20 : -28)}px;
    opacity: 0;
    transition:
      margin-bottom ${closeTransitionMixin},
      opacity ${closeTransitionMixin};
  }
  & > div[data-visible='true'] {
    margin-bottom: ${(p) => (p.$dimension == 'm' ? 12 : 16)}px;
    opacity: 1;
    transition:
      margin-bottom ${openTransitionMixin},
      opacity ${openTransitionMixin};
  }

  & button {
    position: relative;
    inset-block-end: auto;
    inset-inline-end: auto;
  }

  ${(p) => p.$dropContainerCssMixin || ''}
`;
export const MenuWrapper = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;

  && > button:last-child {
    margin: 0px;
  }
`;
