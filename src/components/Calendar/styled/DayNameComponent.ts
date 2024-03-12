import styled from 'styled-components';
import { typography } from '#src/components/Typography';

const DAY_NAME_SIZE = '36px';
const DAY_NAME_MARGIN_BOTTOM = '4px';
const DAY_NAME_PADDING = '8px 0';

export const DayNameComponent = styled.div`
  display: inline-block;
  user-select: none;
  width: ${DAY_NAME_SIZE};
  height: ${DAY_NAME_SIZE};
  padding: ${DAY_NAME_PADDING};
  margin-bottom: ${DAY_NAME_MARGIN_BOTTOM};
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  box-sizing: border-box;
`;
