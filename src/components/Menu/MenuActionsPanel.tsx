import type { ReactNode } from 'react';
import type { css } from 'styled-components';
import styled from 'styled-components';
import type { MenuDimensions } from '#src/components/Menu/index';
import { getTextHighlightMeta } from '#src/components/common/utils/getTextHighlightMeta';
import type { RenderOptionProps, MenuModelItemProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import type { ItemDimension } from '#src/components/Menu/menuItemMixins';
import { uid } from '#src/components/common/uid';

const MenuActionsPanelDiv = styled.div<{
  $dimension: MenuDimensions;
  $menuActionsPanelCssMixin?: ReturnType<typeof css>;
}>`
  padding: ${(p) => (p.$dimension === 's' ? '10px 12px' : '12px 16px')};

  ${(p) => p.$menuActionsPanelCssMixin}
`;

export interface MenuActionsPanelProps {
  dimension: MenuDimensions;
  menuActionsPanelCssMixin?: ReturnType<typeof css>;
  children: ReactNode;
}

export const MenuActionsPanel = ({ dimension, menuActionsPanelCssMixin, ...props }: MenuActionsPanelProps) => {
  return <MenuActionsPanelDiv {...props} $dimension={dimension} $menuActionsPanelCssMixin={menuActionsPanelCssMixin} />;
};

const HighlightText = styled.span`
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
`;
const TextWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledMenuItem = styled(MenuItem)`
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  pointer-events: none;

  &&[data-disabled='true'] {
    background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
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
  const model: MenuModelItemProps[] = [];

  options.forEach((option) => {
    const { shouldHighlight, parts, chunks } = highlightFunction(option.label, searchValue, 'wholly');
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
            <MenuItem dimension={dimension} {...options} key={option.id}>
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
          <StyledMenuItem dimension={dimension} {...options} key={id}>
            {emptyMessage}
          </StyledMenuItem>
        );
      },
      disabled: true,
    });
  }

  return model;
}
