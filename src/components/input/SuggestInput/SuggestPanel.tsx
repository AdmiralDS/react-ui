import * as React from 'react';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import type { SuggestItem } from './';
import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';
import { getTextHighlightMeta } from '#src/components/input/Select/utils';
import { HighlightFormat } from '#src/components/input/Select/types';

const Highlight = styled.span`
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
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

export interface SuggestPanelProps extends SuggestItem, HTMLAttributes<HTMLDivElement>, RenderOptionProps {
  text?: string;
}

export const SuggestPanel = ({ searchText = '', text = '', ...props }: SuggestPanelProps) => {
  return (
    <MenuItem title={text} {...props}>
      <TextWrapper>{getHighlightedText(text, searchText)}</TextWrapper>
    </MenuItem>
  );
};
