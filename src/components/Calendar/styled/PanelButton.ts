import styled from 'styled-components';

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
    fill: ${({ disabled, theme }) =>
      disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 50']};
  }

  ${({ disabled, theme }) => `
    &:hover {
      background-color: ${disabled ? 'transparent' : theme.color['Opacity/Hover']};
      & *[fill^='#'] {
        fill: ${theme.color['Neutral/Neutral 50']};
      }
    }
  `}
`;
