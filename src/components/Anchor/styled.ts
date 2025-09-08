import styled from 'styled-components';

export const AnchorContainer = styled.div<{ $indent?: number }>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;

  &:before {
    position: absolute;
    inset-inline-start: 0;
    top: 0;
    height: 100%;
    border-inline-start: 2px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
    content: ' ';
  }

  > *:not(:last-child):not(:first-child) {
    margin-top: ${({ $indent }) => `${$indent}px`};
  }
`;

AnchorContainer.displayName = 'AnchorContainer';
