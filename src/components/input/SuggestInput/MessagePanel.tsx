import styled from 'styled-components';
import { MenuItem } from '#src/components/Menu/MenuItem';

export const MessagePanel = styled(MenuItem)`
  margin: 8px 0;
  color: ${(p) => p.theme.color['Neutral/Neutral 50']};
  pointer-events: none;

  &&[data-disabled='true'] {
    background-color: ${(p) => p.theme.color['Special/Elevated BG']};
    color: ${(p) => p.theme.color['Neutral/Neutral 50']};
    && *[fill^='#'] {
      fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
    }
  }
`;
