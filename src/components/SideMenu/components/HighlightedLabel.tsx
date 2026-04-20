import styled from 'styled-components';
import type { HighlightFormat } from '#src/components/common/utils/getTextHighlightMeta';
import { getTextHighlightMeta } from '#src/components/common/utils/getTextHighlightMeta';

const Highlight = styled.span`
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
`;
const TextWrapper = styled.div<{ $multilineView: boolean }>`
  overflow: hidden;
  ${(p) => !p.$multilineView && '  text-overflow: ellipsis; white-space: nowrap;'}
`;

function getHighlightedText(text = '', highlight = '', highlightFormat: HighlightFormat = 'wholly') {
  const { parts, chunks } = getTextHighlightMeta(text, highlight, highlightFormat);

  return parts.map((part, i) =>
    chunks.indexOf(part.toLowerCase()) >= 0 ? <Highlight key={i}>{part}</Highlight> : part,
  );
}

export interface HighlightedLabelProps {
  text?: string;
  searchText?: string;
  highlightFormat: HighlightFormat;
  multilineView?: boolean;
}

export const HighlightedLabel = ({
  searchText = '',
  text = '',
  highlightFormat,
  multilineView = false,
}: HighlightedLabelProps) => {
  return (
    <TextWrapper $multilineView={multilineView}>{getHighlightedText(text, searchText, highlightFormat)}</TextWrapper>
  );
};
