import styled from 'styled-components';

export const AnchorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  &:before {
    position: absolute;
    inset-inline-start: 0;
    top: 0;
    height: 100%;
    border-inline-start: 2px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
    content: ' ';
  }
`;
AnchorContainer.displayName = 'AnchorContainer';
