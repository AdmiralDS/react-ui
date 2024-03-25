import * as React from 'react';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';

type Dimension = 'm' | 's';

const Text = styled.span``;

const Circle = styled.div``;

const cssDefault = css`
  > ${Text} {
    color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  }
  > ${Circle} {
    svg {
      path {
        fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
      }
    }
  }
`;

const StatusContainer = styled.div<{
  $dimension: Dimension;
  $displayRight?: boolean;
  $cssMixin?: ReturnType<typeof css>;
}>`
  display: inline-flex;
  align-items: center;
  flex-direction: ${(p) => (p.$displayRight ? 'row' : 'row-reverse')};
  height: ${(p) => (p.$dimension === 'm' ? '24px' : '20px')};
  ${(p) => (p.$dimension === 'm' ? typography['Body/Body 1 Long'] : typography['Body/Body 2 Long'])}
  > ${Circle} {
    width: ${(p) => (p.$dimension === 'm' ? '20px' : '16px')};
    height: ${(p) => (p.$dimension === 'm' ? '20px' : '16px')};
    margin: ${(p) => (p.$displayRight ? '0 10px 0 0' : '0 0 0 10px')};
  }
  ${(p) => p.$cssMixin || cssDefault}
`;

export interface StatusIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Позволяет добавлять миксин, созданный с помощью styled css  */
  cssMixin?: ReturnType<typeof css>;
  /** Иконка индикатора статуса */
  icon?: ReactNode;
  /** Позиционирование иконки статуса. По умолчанию - слева */
  displayRight?: boolean;
  /** Текст статуса */
  text: string;
}

export const StatusIndicator: FC<StatusIndicatorProps> = ({
  dimension = 'm',
  displayRight = true,
  icon,
  cssMixin,
  text,
}) => {
  return (
    <StatusContainer $dimension={dimension} $displayRight={displayRight} $cssMixin={cssMixin}>
      {icon && <Circle>{icon}</Circle>}
      <Text>{text}</Text>
    </StatusContainer>
  );
};

StatusIndicator.displayName = 'StatusIndicator';
