import styled from 'styled-components';
import { MenuItem } from '#src/components/Menu/MenuItem';

export const MessagePanel = styled(MenuItem)`
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  pointer-events: none;
  &&[data-disabled='true'] {
    background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    }
  }
`;
