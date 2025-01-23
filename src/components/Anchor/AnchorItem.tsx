import { forwardRef } from 'react';
import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import type { AnchorHTMLAttributes } from 'react';

export type AnchorDimension = 'm' | 's';

const AnchorItemLink = styled.a<{ $dimension: AnchorDimension; $active?: boolean }>`
  text-decoration: none;
  color: ${(props) =>
    props.$active
      ? `var(--admiral-color-Neutral_Neutral90, ${props.theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Neutral_Neutral50, ${props.theme.color['Neutral/Neutral 50']})`};

  padding: ${(props) => (props.$dimension === 'm' ? `6px 8px 6px 18px` : '4px 8px 4px 18px')};

  ${(props) => (props.$dimension === 'm' ? typography['Body/Body 2 Short'] : typography['Caption/Caption 1'])};

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
}

export const AnchorItem = forwardRef<HTMLAnchorElement, AnchorItemProps>(
  ({ active, dimension = 'm', children, ...props }, ref) => {
    return (
      <AnchorItemLink {...props} $dimension={dimension} $active={active} ref={ref}>
        {children}
      </AnchorItemLink>
    );
  },
);
AnchorItem.displayName = 'AnchorItem';
