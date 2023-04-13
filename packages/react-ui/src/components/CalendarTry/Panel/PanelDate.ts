import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';

const YEAR_MONTH_HEIGHT = '32px';
const YEAR_MONTH_PADDING = '4px 8px';
const YEAR_MONTH_BORDER_RADIUS = '16px';
const YEAR_WIDTH = '54px';

const basePanelItemStyle = css`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: ${YEAR_MONTH_HEIGHT};
  padding: ${YEAR_MONTH_PADDING};
  margin: 0;
  ${typography['Subtitle/Subtitle 2']}
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};
`;

const actionPanelItemStyle = css<{ view: boolean }>`
  cursor: pointer;
  border-radius: ${YEAR_MONTH_BORDER_RADIUS};
  color: ${(props) => props.theme.color['Primary/Primary 60 Main']};
  background: ${(props) => (props.view ? props.theme.color['Opacity/Focus'] : 'transparent')};
  &:hover {
    background: ${(props) => props.theme.color['Opacity/Hover']};
  }
`;

export const Month = styled.h6<{
  view: boolean;
}>`
  ${basePanelItemStyle}
  ${actionPanelItemStyle}
`;

export const Year = styled.h6<{
  view: boolean;
}>`
  width: ${YEAR_WIDTH};
  ${basePanelItemStyle}
  ${actionPanelItemStyle}
`;

export const YearsRange = styled.h6`
  ${basePanelItemStyle}
`;

export const PanelDate = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
