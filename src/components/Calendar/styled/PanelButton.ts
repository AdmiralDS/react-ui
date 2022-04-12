import styled from 'styled-components';

import { DEFAULT_THEME } from '../../common';

const BUTTON_SIZE = '32px';
const BUTTON_PADDING = '4px';

export const PanelButton = styled.div<{
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  padding: ${BUTTON_PADDING};
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `
      pointer-events: none;
      cursor: default;
    `}

  & *[fill^='#'] {
    fill: ${({ disabled, theme }) => (disabled ? theme.color.basic.disable : theme.color.basic.tertiary)};
  }

  ${({ disabled, theme }) => `
    &:hover,
    &:focus {
      background-color: ${disabled ? 'transparent' : theme.color.background.secondary};
      & *[fill^='#'] {
        fill: ${theme.color.basic.hover};
      }
    }
    &:active {
      background-color: ${disabled ? 'transparent' : theme.color.background.secondary};
      & *[fill^='#'] {
        fill: ${theme.color.basic.press};
      }
    }
  `}
`;

PanelButton.defaultProps = {
  theme: DEFAULT_THEME,
};
