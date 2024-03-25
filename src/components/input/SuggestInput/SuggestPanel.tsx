import * as React from 'react';
import styled from 'styled-components';
import type { SuggestItem } from './';
import type { MenuItemProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import type { HighlightFormat } from '#src/components/common/utils/getTextHighlightMeta';
import { getTextHighlightMeta } from '#src/components/common/utils/getTextHighlightMeta';

const Highlight = styled.span`
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
`;

function getHighlightedText(text = '', highlight = '', highlightFormat: HighlightFormat = 'wholly') {
  const { parts, chunks } = getTextHighlightMeta(text, highlight, highlightFormat);

  return parts.map((part, i) =>
    chunks.indexOf(part.toLowerCase()) >= 0 ? <Highlight key={i}>{part}</Highlight> : part,
  );
}

const TextWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export interface SuggestPanelProps extends SuggestItem, MenuItemProps {
  text?: string;
  highlightFormat?: HighlightFormat;
}

export const SuggestPanel = ({ searchText = '', text = '', highlightFormat, ...props }: SuggestPanelProps) => {
  return (
    <MenuItem title={text} {...props}>
      <TextWrapper>{getHighlightedText(text, searchText, highlightFormat)}</TextWrapper>
    </MenuItem>
  );
};
