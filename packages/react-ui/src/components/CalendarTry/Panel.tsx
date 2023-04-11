import * as React from 'react';
import styled, { css } from 'styled-components';
import type { Dayjs } from 'dayjs';
import { typography } from '#src/components/Typography';
import { capitalizeFirstLetter } from '#src/components/CalendarTry/utils';

const PANEL_MARGIN_BOTTOM = {
  days: '12px',
  months_years: '28px',
};

const PanelWrapper = styled.div<{
  monthsView: boolean;
  yearsView: boolean;
}>`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0 none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-bottom: ${({ monthsView, yearsView }) => {
    if (monthsView || yearsView) return PANEL_MARGIN_BOTTOM.months_years;
    return PANEL_MARGIN_BOTTOM.days;
  }};
`;

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
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  background: ${(p) => (p.view ? p.theme.color['Opacity/Focus'] : 'transparent')};
  &:hover {
    background: ${(p) => p.theme.color['Opacity/Hover']};
  }
`;

const Month = styled.h6<{
  view: boolean;
}>`
  ${panelItemStyle}
`;

const Year = styled.h6<{
  view: boolean;
}>`
  ${panelItemStyle};
  width: ${YEAR_WIDTH};
`;

const PanelDate = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

interface PanelProps {
  date: Dayjs;
}

export const Panel = ({ date }: PanelProps) => {
  return (
    <PanelWrapper monthsView={false} yearsView={false}>
      <PanelDate>
        <Month view={false}>{capitalizeFirstLetter(date.format('MMMM'))}</Month>
        <Year view={false}>{date.format('YYYY')}</Year>
      </PanelDate>
    </PanelWrapper>
  );
};
