import styled from 'styled-components';
import type { FloatingButtonMenuProps } from '.';

export const GroupWrapper = styled.div<{ $dimension: FloatingButtonMenuProps['dimension']; $mobile: boolean }>`
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
`;

export const MenuWrapper = styled.div<{ $dimension: FloatingButtonMenuProps['dimension'] }>`
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
