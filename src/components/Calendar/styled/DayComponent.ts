import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';

import type { CornerKeys, Corners } from '../constants';

type DayComponentProps = {
  inRange?: boolean;
  corners?: Corners;
  selected?: boolean;
  isActiveDate: boolean;
  today?: boolean;
  disabled?: boolean;
  inSelectingRange: boolean;
  outsideMonth?: boolean;
};

const DAY_SIZE = '36px';
const DAY_PADDING = '8px 0';
const DAY_MARGIN_BOTOM = '4px';

const hoverMixin = css`
  &:hover:after {
    border: 1px solid ${(p) => p.theme.color['Primary/Primary 60 Main']};
    background: ${(p) => p.theme.color['Special/Elevated BG']};
    z-index: -1;
  }
`;

export const DayComponent = styled.div<DayComponentProps>`
  position: relative;
  display: inline-block;
  width: ${DAY_SIZE};
  height: ${DAY_SIZE};
  padding: ${DAY_PADDING};
  margin-bottom: ${DAY_MARGIN_BOTOM};
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  box-sizing: border-box;
  user-select: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid
      ${({ theme, today, selected }) => (today && !selected ? theme.color['Neutral/Neutral 90'] : 'transparent')};
    border-radius: 50%;
  }

  ${({ disabled, theme }) =>
    disabled &&
    `
      color: ${theme.color['Neutral/Neutral 30']};
    `}

  ${({ theme, outsideMonth }) =>
    outsideMonth &&
    `
      color: ${theme.color['Neutral/Neutral 30']};
      opacity: 0;
      pointer-events: none;
    `}

  ${(p) => (p.disabled ? '' : hoverMixin)}

  ${({ disabled, theme, selected, inSelectingRange }) =>
    !disabled &&
    selected &&
    `
      color: ${theme.color['Special/Static White']};
      background: ${inSelectingRange ? theme.color['Primary/Primary 70'] : theme.color['Primary/Primary 60 Main']};
      border-radius: 50%;
      &:hover {
        background: ${theme.color['Primary/Primary 70']};
      }
    `}

  ${({ disabled, inRange, theme, corners, selected, isActiveDate }) =>
    !disabled &&
    inRange &&
    `
      &:before {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: ${theme.color['Opacity/Hover']};
        ${
          corners &&
          Object.keys(corners)
            .map((key) =>
              corners[key as CornerKeys]
                ? selected || isActiveDate
                  ? `border-${key}-radius: 50%;`
                  : `border-${key}-radius: 4px;`
                : '',
            )
            .join('')
        }
      }
    `}
`;
