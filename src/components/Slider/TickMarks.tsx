import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import {
  fitToCurrency,
  getDecimalSeparator,
  getThousandSeparator,
  validateThousand,
} from '#src/components/input/NumberInput/utils';

const Wrapper = styled.div<{ $position: number }>`
  position: absolute;
  left: ${({ $position }) => $position}%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 16px;
  [data-dimension='m'] && {
    top: 14px;
  }
  white-space: nowrap;
  ${typography['Body/Body 2 Short']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  &:hover {
    color: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
  }
  &:active {
    color: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
  }
  [data-disabled='true'] && {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
`;

interface TickMarksProps {
  minValue: number;
  maxValue: number;
  decimal?: string;
  precision?: number;
  thousand?: string;
  tickMarks: number[];
  onPointClick: (e: any, value: number) => void;
  renderTickMark?: (mark: string) => React.ReactNode;
}

export const TickMarks = ({
  minValue,
  maxValue,
  decimal: userDecimal,
  thousand: userThousand,
  precision = 2,
  tickMarks,
  onPointClick,
  renderTickMark,
}: TickMarksProps) => {
  const theme = useTheme() || LIGHT_THEME;
  const thousand =
    typeof userThousand !== 'undefined' && validateThousand(userThousand)
      ? userThousand.slice(0, 1)
      : getThousandSeparator(theme.currentLocale);
  const decimal = userDecimal?.slice(0, 1) ?? getDecimalSeparator(theme.currentLocale);

  // filter items that fall into the range between minValue and maxValue
  const items = tickMarks.filter((d) => d >= minValue && d <= maxValue);
  const range = maxValue - minValue;
  return (
    <>
      {items.map((value, index) => {
        const key = value.toString() + index;
        const position = ((value - minValue) / range) * 100;
        let style: any = {};
        style = index === 0 ? { left: 0 } : style;
        style = index === tickMarks.length - 1 ? { right: 0 } : style;
        return (
          <Wrapper
            key={key}
            $position={position}
            onMouseDown={(e: any) => {
              onPointClick(e, value);
            }}
          >
            <Content style={style}>
              {renderTickMark
                ? renderTickMark(fitToCurrency(value, precision, decimal, thousand))
                : fitToCurrency(value, precision, decimal, thousand)}
            </Content>
          </Wrapper>
        );
      })}
    </>
  );
};
