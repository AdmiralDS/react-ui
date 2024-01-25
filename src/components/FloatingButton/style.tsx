import styled, { css } from 'styled-components';
import type { RuleSet } from 'styled-components';
import type { FloatingButtonProps } from '#src/components/FloatingButton';
import { Badge as BaseBadge } from '#src/components/Badge';
import { TooltipHoc } from '#src/components/TooltipHOC';

const focusVisibleStyle = css`
  &:focus-visible {
    outline-offset: 2px;
    outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
  }
`;

export const FloatingButtonWrapper = styled.button<{
  $dimension: FloatingButtonProps['dimension'];
  $appearance: FloatingButtonProps['appearance'];
  $mobile: boolean;
  $disabled: boolean;
}>`
  position: fixed;
  inset-inline-end: ${(p) => (p.$mobile ? 16 : 28)}px;
  inset-block-end: ${(p) => (p.$mobile ? 16 : 28)}px;
  box-sizing: border-box;
  border: none;
  appearance: none;
  flex: 0 0 auto;
  margin: 0;
  padding: ${(p) => (p.$dimension == 'm' ? 8 : 16)}px;
  height: ${(p) => (p.$dimension == 'm' ? 40 : 56)}px;
  width: ${(p) => (p.$dimension == 'm' ? 40 : 56)}px;
  border-radius: ${(p) => (p.$dimension == 'm' ? 20 : 28)}px;
  background-color: ${(p) =>
    p.$appearance == 'primary' ? p.theme.color['Primary/Primary 60 Main'] : p.theme.color['Special/Elevated BG']};
  ${(p) => p.theme.shadow['Shadow 08']}
  ${focusVisibleStyle}

  cursor: pointer;
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

export const BadgeContent = styled.div<{ $dimension: FloatingButtonProps['dimension'] }>`
  position: absolute;
  top: -3px;
  inset-inline-end: -3px;
  &:has(> *[data-dot]) {
    top: ${(p) => (p.$dimension == 'm' ? 1 : 3)}px;
    inset-inline-end: ${(p) => (p.$dimension == 'm' ? 1 : 3)}px;
  }
  && > * {
    border-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
  }
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

  & button {
    position: static;
    display: block;
    margin-bottom: ${(p) => (p.$dimension == 'm' ? 12 : 16)}px;
  }

  & button:last-child {
    margin: 0px;
  }

  &[data-open='true'] {
    & > div {
      opacity: 1;
      margin-bottom: 12px;
      transition:
        margin-bottom 0.2s cubic-bezier(0.4, 0, 1, 1) 0ms,
        opacity 0.2s cubic-bezier(0.4, 0, 1, 1) 0ms;
    }
  }

  ${(p) => p.$dropContainerCssMixin || ''}
`;

export const MenuWrapper = styled.div<{ $dimension: FloatingButtonProps['dimension'] }>`
  position: relative;
  display: block;
  box-sizing: border-box;
  z-index: -1;
  opacity: 0;
  margin-bottom: -20px;
  transition:
    margin-bottom 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms,
    opacity 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms;
`;
// margin-bottom: ${(p) => (p.$dimension == 'm' ? 12 : 16)}px;
