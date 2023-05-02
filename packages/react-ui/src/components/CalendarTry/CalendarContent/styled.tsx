import { css } from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes';

export const rangeHighlightMixin = css<{
  disabled?: boolean;
  inRange?: boolean;
  inSelectingRange?: boolean;
  isWeekStart: boolean;
  isWeekEnd: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
}>`
  ${({ disabled, inRange, inSelectingRange, isRangeStart, isRangeEnd, isWeekStart, isWeekEnd, theme }) =>
    !disabled &&
    (inRange || inSelectingRange) &&
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
        background: ${inSelectingRange ? theme.color['Opacity/Focus'] : theme.color['Opacity/Hover']};
        ${
          (isRangeStart && isWeekStart) || (isRangeStart && isWeekEnd) || (isRangeStart && !isWeekEnd && !isWeekStart)
            ? `border-top-left-radius: 50%;
               border-bottom-left-radius: 50%;`
            : ''
        };
        ${
          (isRangeEnd && isWeekEnd) || (isRangeEnd && isWeekStart) || (isRangeEnd && !isWeekEnd && !isWeekStart)
            ? `border-top-right-radius: 50%;
               border-bottom-right-radius: 50%;`
            : ''
        };        
        
        ${
          isWeekStart && !isRangeStart
            ? `border-top-left-radius: ${mediumGroupBorderRadius(theme.shape)};
               border-bottom-left-radius: ${mediumGroupBorderRadius(theme.shape)};`
            : ''
        };
        ${
          isWeekEnd && !isRangeEnd
            ? `border-top-right-radius: ${mediumGroupBorderRadius(theme.shape)};
               border-bottom-right-radius: ${mediumGroupBorderRadius(theme.shape)};`
            : ''
        };
      }
    `}
`;
