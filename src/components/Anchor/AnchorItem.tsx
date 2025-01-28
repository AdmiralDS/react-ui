import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import type { AnchorHTMLAttributes } from 'react';

export const ANCHOR_ITEM_HEIGHT_M = 28;
export const ANCHOR_ITEM_HEIGHT_S = 24;

export type AnchorDimension = 'm' | 's';

const singleLineMixin = css<{ $dimension: AnchorDimension }>`
  height: ${({ $dimension }) => ($dimension === 'm' ? ANCHOR_ITEM_HEIGHT_M : ANCHOR_ITEM_HEIGHT_S)}px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AnchorItemLink = styled.a<{
  $dimension: AnchorDimension;
  $active?: boolean;
  $level: number;
  $multilineView: boolean;
}>`
  box-sizing: border-box;
  text-decoration: none;
  color: ${(p) =>
    p.$active
      ? `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};

  padding: ${(p) =>
    p.$dimension === 'm' ? `6px 8px 6px ${2 + 16 + p.$level * 16}px` : `4px 8px 4px ${2 + 16 + p.$level * 16}px`};

  ${(p) => (p.$dimension === 'm' ? typography['Body/Body 2 Short'] : typography['Caption/Caption 1'])};

  ${(p) => !p.$multilineView && singleLineMixin}

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
  multilineView?: boolean;
}

export const AnchorItem = forwardRef<HTMLAnchorElement, AnchorItemProps>(
  ({ active, dimension = 'm', level = 0, multilineView = false, children, ...props }, ref) => {
    return (
      <AnchorItemLink
        {...props}
        $dimension={dimension}
        $multilineView={multilineView}
        $active={active}
        $level={level}
        ref={ref}
      >
        {children}
      </AnchorItemLink>
    );
  },
);
AnchorItem.displayName = 'AnchorItem';
