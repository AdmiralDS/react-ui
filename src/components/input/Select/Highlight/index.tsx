import * as React from 'react';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { useHighlightContext } from '#src/components/input/Select/Highlight/Context';
import { HighlightFormat } from '#src/components/input/Select/types';

const HighlightText = styled.span`
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
`;

const Panel = styled.div`
  color: inherit;
`;

export const getTextHighlightMeta = (text = '', highlight = '', highlightFormat: HighlightFormat = 'word') => {
  const splittedHighlight = highlightFormat === 'word' ? highlight.split(' ') : [highlight];
  const chunks = splittedHighlight.filter(Boolean).map((chunk) => chunk.toLowerCase());

  const specialCharacters = ['[', ']', '\\', '^', '$', '.', '|', '?', '*', '+', '(', ')'];

  const pattern = chunks
    .map((chunk) => {
      const chunkForRegExp = chunk
        .split('')
        .map((letter) => (specialCharacters.includes(letter) ? `\\${letter}` : letter))
        .join('');
      return `(${chunkForRegExp})?`;
    })
    .join('');

  const parts = text.split(new RegExp(pattern, 'gi')).filter(Boolean);

  const shouldHighlight = !highlight ? true : parts.some((part) => chunks.includes(part.toLowerCase()));

  return { shouldHighlight, parts, chunks };
};

interface TextHighlightPanelProps extends HTMLAttributes<HTMLDivElement> {
  children?: string;
  highlightText?: string;
}

export const Highlight = ({ children = '', ...props }: TextHighlightPanelProps) => {
  const highlightContext = useHighlightContext();

  const searchValue = highlightContext?.searchValue || '';

  const { chunks, parts } = React.useMemo(
    () => getTextHighlightMeta(children, searchValue, highlightContext?.highlightFormat),
    [children, searchValue],
  );

  return (
    <Panel {...props} title={children}>
      {parts.map((part, i) =>
        chunks.includes(part.toLowerCase()) ? <HighlightText key={i}>{part}</HighlightText> : part,
      )}
    </Panel>
  );
};
