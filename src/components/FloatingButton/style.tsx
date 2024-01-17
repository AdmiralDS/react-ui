import styled, { css } from 'styled-components';
import type { FloatingButtonProps } from '#src/components/FloatingButton';
import { Badge as BaseBadge } from '#src/components/Badge';

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

const badgeDotBackground = css<{ $status: FloatingButtonProps['status'] }>`
  background: ${({ $status, theme }) => {
    switch ($status) {
      case 'success':
        return theme.color['Success/Success 50 Main'];
      case 'error':
        return theme.color['Error/Error 60 Main'];
      case 'warning':
        return theme.color['Warning/Warning 50 Main'];
      case 'info':
      default:
        return theme.color['Primary/Primary 60 Main'];
    }
  }};
`;

export const BadgeDot = styled.div<{
  $status: FloatingButtonProps['status'];
  $dimension: FloatingButtonProps['dimension'];
}>`
  position: absolute;
  top: ${(p) => (p.$dimension == 'm' ? 1 : 3)}px;
  inset-inline-end: ${(p) => (p.$dimension == 'm' ? 1 : 3)}px;
  border: 1px solid ${(p) => p.theme.color['Neutral/Neutral 00']};
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  width: ${(p) => (p.$dimension == 'm' ? 10 : 12)}px;
  height: ${(p) => (p.$dimension == 'm' ? 10 : 12)}px;
  border-radius: 50%;
  ${badgeDotBackground}
`;

export const Badge = styled(BaseBadge)<{ dimension: 's' | 'm' }>`
  box-sizing: border-box;
  border: 1px solid ${(p) => p.theme.color['Neutral/Neutral 00']};
  padding: ${({ dimension }) => (dimension === 's' ? '0 4px' : '0 5px')};
  position: absolute;
  top: -3px;
  inset-inline-end: -3px;
`;
