import styled from 'styled-components';
import type { HighlightFormat } from '#src/components/common/utils/getTextHighlightMeta';
import { getTextHighlightMeta } from '#src/components/common/utils/getTextHighlightMeta';

const Highlight = styled.span`
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
`;

export function getHighlightedText(text = '', highlight = '', highlightFormat: HighlightFormat = 'wholly') {
  const { parts, chunks } = getTextHighlightMeta(text, highlight, highlightFormat);

  return parts.map((part, i) =>
    chunks.indexOf(part.toLowerCase()) >= 0 ? <Highlight key={i}>{part}</Highlight> : part,
  );
}
