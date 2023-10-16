import { forwardRef } from 'react';
import { MenuItem } from './MenuItem';
import { typography } from '#src/components/Typography';
import styled from 'styled-components';
import type { HTMLAttributes } from 'react';
import type { ItemDimension } from '#src/components/Menu/menuItemMixins';

const StyledMenuItem = styled(MenuItem)<{ $dimension: ItemDimension }>`
  ${({ $dimension }) => ($dimension === 's' ? typography['Subtitle/Subtitle 3'] : typography['Subtitle/Subtitle 2'])}
  cursor: default;
`;

export interface CategoryMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  dimension?: ItemDimension;
}

export const CategoryMenuItem = forwardRef<HTMLDivElement, CategoryMenuItemProps>(
  ({ children, dimension = 'l', ...props }: CategoryMenuItemProps, ref) => {
    return (
      <StyledMenuItem
        ref={ref}
        {...props}
        dimension={dimension}
        hovered={false}
        selected={false}
        hasSubmenu={false}
        $dimension={dimension}
      >
        {children}
      </StyledMenuItem>
    );
  },
);
