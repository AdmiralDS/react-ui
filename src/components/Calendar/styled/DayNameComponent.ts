import styled from 'styled-components';

import { typography } from '../../Typography';
import { DEFAULT_THEME } from '../../common';

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
  ${typography['Additional/S']}
  color: ${({ theme }) => theme.color.text.primary};
  box-sizing: border-box;
`;

DayNameComponent.defaultProps = {
  theme: DEFAULT_THEME,
};
