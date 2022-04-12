import styled from 'styled-components';

import { typography } from '../../Typography';
import { DEFAULT_THEME } from '../../common';

type YearComponentProps = {
  today?: boolean;
  selected?: boolean;
  disabled?: boolean;
};

const YEAR_HEIGHT = '36px';
const YEAR_WIDTH = '60px';
const YEAR_MARGIN_BOTTOM = '16px';
const YEAR_PADDING = '8px 0';
const YEAR_BORDER_RADIUS = '18px';

export const YearComponent = styled.div<YearComponentProps>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: ${YEAR_WIDTH};
  height: ${YEAR_HEIGHT};
  padding: ${YEAR_PADDING};
  margin-bottom: ${YEAR_MARGIN_BOTTOM};
  border: 1px solid ${({ today, theme }) => (today ? theme.color.basic.secondary : 'transparent')};
  border-radius: ${YEAR_BORDER_RADIUS};
  background: transparent;
  ${typography['Additional/S']}
  color: ${({ theme }) => theme.color.text.primary};
  user-select: none;
  cursor: pointer;

  ${({ disabled, theme }) =>
    disabled &&
    `
      cursor: default;
      color: ${theme.color.text.tertiary};
    `}

  ${({ disabled, theme }) =>
    !disabled &&
    `
      &:hover {
        border: 1px solid ${theme.color.basic.primary};
      }
    `}

  ${({ disabled, theme, selected }) =>
    !disabled &&
    selected &&
    `
      border: 1px solid ${theme.color.basic.primary};
      color: ${theme.color.text.staticWhite};
      background: ${theme.color.basic.primary};
      &:hover {
        border: 1px solid ${theme.color.basic.hover};
        background: ${theme.color.basic.hover};
      }
    `}
`;

YearComponent.defaultProps = {
  theme: DEFAULT_THEME,
};
