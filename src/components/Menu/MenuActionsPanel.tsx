import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { MenuDimensions } from '#src/components/Menu/index';
import { getTextHighlightMeta } from '#src/components/input/Select/utils';
import { ItemProps, MenuItem, RenderOptionProps } from '#src/components/Menu/MenuItem';
import React from 'react';
import { ItemDimension } from '#src/components/Menu/menuItemMixins';
import { uid } from '#src/components/common/uid';

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
const StyledMenuItem = styled(MenuItem)`
  color: ${(p) => p.theme.color['Neutral/Neutral 50']};
  pointer-events: none;

  &&[data-disabled='true'] {
    background-color: ${(p) => p.theme.color['Special/Elevated BG']};
    color: ${(p) => p.theme.color['Neutral/Neutral 50']};
    && *[fill^='#'] {
      fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
    }
  }
`;

export interface HighlightedFilteredOptionProps {
  id: string;
  label: string;
}

export function getHighlightedFilteredOptions(
  options: HighlightedFilteredOptionProps[],
  searchValue = '',
  emptyMessage: React.ReactNode,
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

  if (model.length === 0) {
    const id = uid();
    model.push({
      id: id,
      render: (options: RenderOptionProps) => {
        return (
          <StyledMenuItem dimension={dimension || 's'} {...options} key={id}>
            {emptyMessage}
          </StyledMenuItem>
        );
      },
      disabled: true,
    });
  }

  return model;
}
