import styled from 'styled-components';

import { YearComponent } from './YearComponent';

const MONTH_WIDTH = '84px';
const MONTH_MARGIN_BOTTOM = '32px';

export const MonthComponent = styled(YearComponent)`
  width: ${MONTH_WIDTH};
  margin-bottom: ${MONTH_MARGIN_BOTTOM};
`;
