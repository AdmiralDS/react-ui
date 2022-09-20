import * as React from 'react';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import type { SuggestItem } from './';
import { MenuItem, RenderOptionProps } from '#src/components/Menu/MenuItem';

const Highlight = styled.span`
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
`;

export function getHighlightedText(text = '', highlight = '') {
  const chunks = highlight
    .split(/[ ]+/)
    .filter((chunk) => Boolean(chunk))
    .map((chunk) => chunk.toLowerCase());

  const pattern = chunks
    .map((chunk) => {
      // в каждом чанке экранируем спецсимволы (.?*+^$(){}|[]\-())
      const newChunk = chunk.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
      return `(${newChunk})?`;
    })
    .join('');

  const parts = text.split(new RegExp(pattern, 'gi')).filter((chunk) => Boolean(chunk));
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
