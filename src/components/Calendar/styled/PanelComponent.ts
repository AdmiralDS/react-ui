import styled from 'styled-components';

const PANEL_MARGIN_BOTTOM = {
  days: '12px',
  months_years: '28px',
};

export const PanelComponent = styled.div<{
  $monthsView: boolean;
  $yearsView: boolean;
}>`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0 none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-bottom: ${({ $monthsView, $yearsView }) => {
    if ($monthsView || $yearsView) return PANEL_MARGIN_BOTTOM.months_years;
    return PANEL_MARGIN_BOTTOM.days;
  }};
`;
