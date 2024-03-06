import { typography } from '#src/components/Typography';
import styled from 'styled-components';

export const MessagePanel = styled.div`
  height: 40px;
  ${typography['Body/Body 1 Long']}
  line-height: 40px;
  padding: 0 16px;
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});

  [data-dimension='xl'] & {
    height: 48px;
    line-height: 48px;
  }

  [data-dimension='s'] & {
    height: 32px;
    ${typography['Body/Body 2 Long']}
    line-height: 32px;
    padding: 0 12px;
  }
`;
