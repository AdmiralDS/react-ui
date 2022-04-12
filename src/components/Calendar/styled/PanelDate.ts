import styled from 'styled-components';

import { typography } from '../../Typography';
import { DEFAULT_THEME } from '../../common';

const YEAR_MONTH_HEIGHT = '32px';
const YEAR_MONTH_PADDING = '4px 8px';
const YEAR_MONTH_BORDER_RADIUS = '16px';
const YEAR_WIDTH = '54px';

const PanelItem = styled.h6<{
  view: boolean;
}>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: ${YEAR_MONTH_HEIGHT};
  padding: ${YEAR_MONTH_PADDING};
  margin: 0;
  border-radius: ${YEAR_MONTH_BORDER_RADIUS};
  ${typography['Additional/L-bold']}

  ${({ theme, view }) => `
    color: ${theme.color.basic.primary};
    background: ${view ? theme.color.background.tertiary : 'transparent'};

    &:hover,
    &:focus {
      color: ${theme.color.basic.hover};
      background: ${theme.color.background.secondary};
    }
    &:active {
      color: ${theme.color.basic.press};
      background: ${theme.color.background.secondary};
    }
  `}
`;

export const Year = styled(PanelItem)`
  width: ${YEAR_WIDTH};
`;

Year.defaultProps = {
  theme: DEFAULT_THEME,
};

export const Month = styled(PanelItem)``;

Month.defaultProps = {
  theme: DEFAULT_THEME,
};

export const PanelDate = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
