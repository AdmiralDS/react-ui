import styled from 'styled-components';

export const CLOSE_BUTTON_SIZE = '20px';
export const CLOSE_BUTTON_MARGIN_LEFT = '16px';

export const CloseButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  border: 0;
  margin-left: ${CLOSE_BUTTON_MARGIN_LEFT};
  padding: 0;
  width: ${CLOSE_BUTTON_SIZE};
  height: ${CLOSE_BUTTON_SIZE};
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  ${({ theme }) => `
    & *[fill^='#'] {
      fill: ${theme.color.basic.tertiary};
    }

    &:hover,
    &:focus {
      & *[fill^='#'] {
        fill: ${theme.color.basic.hover};
      }
    }

    &:active {
      & *[fill^='#'] {
        fill: ${theme.color.basic.press};
      }
    }
  `}
`;
