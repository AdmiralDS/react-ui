import * as React from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import type { SuggestItem } from './';
import { RenderOptionProps } from '#src/components/MenuItem';

const Highlight = styled.span`
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
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

export const Panel = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  height: 40px;
  ${typography['Body/Body 1 Long']}
  line-height: 40px;
  padding: 0 16px;

  [data-dimension='xl'] & {
    height: 48px;
    line-height: 48px;
  }
  [data-dimension='s'] & {
    height: 32px;
    ${typography['Body/Body 2 Long']}
    line-height: 32px;
    padding: 0 12px;
  }

  color: ${(p) => p.theme.color['Neutral/Neutral 90']};

  &&[data-hovered='true'] {
    background-color: ${(p) => p.theme.color['Opacity/Hover']};
    cursor: pointer;
  }
`;

export interface SuggestPanelProps extends SuggestItem, HTMLAttributes<HTMLDivElement>, RenderOptionProps {
  text?: string;
}

export const SuggestPanel = ({
  searchText = '',
  text = '',
  hovered,
  onHover,
  onClickItem,
  ...props
}: SuggestPanelProps) => {
  const handleMouseMove = () => {
    onHover?.();
  };

  const handleClick = () => {
    onClickItem?.();
  };
  return (
    <Panel {...props} title={text} data-hovered={hovered} onMouseMove={handleMouseMove} onClick={handleClick}>
      {getHighlightedText(text, searchText)}
    </Panel>
  );
};
