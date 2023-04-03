import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';

const YEAR_MONTH_HEIGHT = '32px';
const YEAR_MONTH_PADDING = '4px 8px';
const YEAR_MONTH_BORDER_RADIUS = '16px';
const YEAR_WIDTH = '54px';

const panelItemStyle = css<{ view: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: ${YEAR_MONTH_HEIGHT};
  padding: ${YEAR_MONTH_PADDING};
  margin: 0;
  border-radius: ${YEAR_MONTH_BORDER_RADIUS};
  ${typography['Subtitle/Subtitle 2']}
  color: ${(props) => props.theme.color['Primary/Primary 60 Main']};
  background: ${(props) => (props.view ? props.theme.color['Opacity/Focus'] : 'transparent')};
  &:hover {
    background: ${(props) => props.theme.color['Opacity/Hover']};
  }
`;

export const Month = styled.h6<{
  view: boolean;
}>`
  ${panelItemStyle}
`;

export const Year = styled.h6<{
  view: boolean;
}>`
  ${panelItemStyle};
  width: ${YEAR_WIDTH};
`;

export const PanelDate = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
