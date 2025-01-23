import { forwardRef } from 'react';
import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import type { AnchorHTMLAttributes } from 'react';

export type AnchorDimension = 'm' | 's';

const AnchorItemLink = styled.a<{ $dimension: AnchorDimension; $active?: boolean; $level: number }>`
  text-decoration: none;
  color: ${(p) =>
    p.$active
      ? `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};

  padding: ${(p) =>
    p.$dimension === 'm' ? `6px 8px 6px ${2 + 16 + p.$level * 16}px` : `4px 8px 4px ${2 + 16 + p.$level * 16}px`};

  ${(p) => (p.$dimension === 'm' ? typography['Body/Body 2 Short'] : typography['Caption/Caption 1'])};

  &:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }

  &:active {
    background-color: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
  }
`;
AnchorItemLink.displayName = 'AnchorItemLink';

export interface AnchorItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  dimension?: AnchorDimension;
  level?: number;
}

export const AnchorItem = forwardRef<HTMLAnchorElement, AnchorItemProps>(
  ({ active, dimension = 'm', level = 0, children, ...props }, ref) => {
    return (
      <AnchorItemLink {...props} $dimension={dimension} $active={active} $level={level} ref={ref}>
        {children}
      </AnchorItemLink>
    );
  },
);
AnchorItem.displayName = 'AnchorItem';
