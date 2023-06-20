import { css } from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes';

export const rangeHighlightMixin = css<{
  disabled?: boolean;
  inRange?: boolean;
  inSelectingRange?: boolean;
  isRowStart: boolean;
  isRowEnd: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  borderRadius: string;
}>`
  ${({ disabled, inRange, inSelectingRange, isRangeStart, isRangeEnd, isRowStart, isRowEnd, theme, borderRadius }) =>
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
          (isRangeStart && isRowStart) || (isRangeStart && isRowEnd) || (isRangeStart && !isRowEnd && !isRowStart)
            ? `border-top-left-radius: ${borderRadius};
               border-bottom-left-radius: ${borderRadius};`
            : ''
        };
        ${
          (isRangeEnd && isRowEnd) || (isRangeEnd && isRowStart) || (isRangeEnd && !isRowEnd && !isRowStart)
            ? `border-top-right-radius: ${borderRadius};
               border-bottom-right-radius: ${borderRadius};`
            : ''
        };        
        
        ${
          isRowStart && !isRangeStart
            ? `border-top-left-radius: ${mediumGroupBorderRadius(theme.shape)};
               border-bottom-left-radius: ${mediumGroupBorderRadius(theme.shape)};`
            : ''
        };
        ${
          isRowEnd && !isRangeEnd
            ? `border-top-right-radius: ${mediumGroupBorderRadius(theme.shape)};
               border-bottom-right-radius: ${mediumGroupBorderRadius(theme.shape)};`
            : ''
        };
      }
    `}
`;
