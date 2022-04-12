import * as React from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#/components/Typography';
import type { SuggestItem } from './';
import { HTMLAttributes } from 'react';

const Highlight = styled.span`
  color: ${(p) => p.theme.color.basic.primary};
`;

function getHighlightedText(text = '', highlight = '') {
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

const activePanel = css`
  background-color: ${(p) => p.theme.color.background.secondary};
  cursor: pointer;
`;

export const Panel = styled.div<{ active?: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  height: 40px;
  ${typography['Additional/L']}
  line-height: 40px;
  padding: 0 16px;

  [data-dimension='xl'] & {
    height: 48px;
    line-height: 48px;
  }
  [data-dimension='s'] & {
    height: 32px;
    ${typography['Additional/S']}
    line-height: 32px;
    padding: 0 12px;
  }

  color: ${(p) => p.theme.color.text.primary};

  ${(p) => (p.active ? activePanel : '')}
`;

export interface SuggestPanelProps extends SuggestItem, HTMLAttributes<HTMLDivElement> {
  text?: string;
  active?: boolean;
}

export const SuggestPanel = ({ searchText = '', text = '', ...props }: SuggestPanelProps) => {
  return (
    <Panel {...props} title={text}>
      {getHighlightedText(text, searchText)}
    </Panel>
  );
};
