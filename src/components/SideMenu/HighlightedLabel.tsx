import styled from 'styled-components';
import type { HighlightFormat } from '#src/components/common/utils/getTextHighlightMeta';
import { getHighlightedText } from './utils/getHighlightedText';

const TextWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export interface HighlightedLabelProps {
  text?: string;
  searchText?: string;
  highlightFormat: HighlightFormat;
}

export const HighlightedLabel = ({ searchText = '', text = '', highlightFormat }: HighlightedLabelProps) => {
  return <TextWrapper>{getHighlightedText(text, searchText, highlightFormat)}</TextWrapper>;
};
