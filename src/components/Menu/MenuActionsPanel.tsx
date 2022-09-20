import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { MenuDimensions } from '#src/components/Menu/index';
import { getTextHighlightMeta } from '#src/components/input/Select/utils';
import { ItemProps, MenuItem, RenderOptionProps } from '#src/components/Menu/MenuItem';
import React from 'react';
import { ItemDimension } from '#src/components/Menu/menuItemMixins';

export const MenuActionsPanel = styled.div<{
  dimension: MenuDimensions;
  menuActionsPanelCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  padding: ${(p) => (p.dimension === 's' ? '10px 12px' : '12px 16px')};

  ${(p) => p.menuActionsPanelCssMixin}
`;

const HighlightText = styled.span`
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
`;
const TextWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export interface HighlightedFilteredOptionProps {
  id: string;
  label: string;
}

export function getHighlightedFilteredOptions(
  options: HighlightedFilteredOptionProps[],
  searchValue = '',
  dimension?: ItemDimension,
  highlightFunction = getTextHighlightMeta,
) {
  const model: ItemProps[] = [];

  options.forEach((option) => {
    const { shouldHighlight, parts, chunks } = highlightFunction(option.label, searchValue);
    const itemValue = shouldHighlight
      ? parts.map((part, i) =>
          chunks.includes(part.toLowerCase()) ? <HighlightText key={i}>{part}</HighlightText> : part,
        )
      : !searchValue
      ? option.label
      : null;
    if (itemValue) {
      model.push({
        id: option.id,
        render: (options: RenderOptionProps) => {
          return (
            <MenuItem dimension={dimension || 's'} {...options} key={option.id}>
              <TextWrapper>{itemValue}</TextWrapper>
            </MenuItem>
          );
        },
      });
    }
  });

  return model;
}
