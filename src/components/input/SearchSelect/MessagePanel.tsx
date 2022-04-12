import { typography } from '#/components/Typography';
import styled from 'styled-components';

export const MessagePanel = styled.div`
  height: 40px;
  ${typography['Additional/L']}
  line-height: 40px;
  padding: 0 16px;
  color: ${(p) => p.theme.color.text.primary};

  [data-dimension='xl'] & {
    height: 48px;
    line-height: 48px;
  }

  [data-dimension='s'] & {
    height: 32px;
    ${typography['Additional/S']}
    line-height: 32px;
    padding: 0 12px;
  }
`;
