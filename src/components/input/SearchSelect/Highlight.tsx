import * as React from 'react';
import styled from 'styled-components';
import { HTMLAttributes } from 'react';
import { useOptionContext, useDropDownSearchSelectContext } from './useSearchSelectContext';
import { getTextHighlightMeta } from './utils';

const HighlightText = styled.span`
  color: ${(p) => p.theme.color.basic.primary};
`;

const Panel = styled.div`
  color: inherit;
`;

interface TextHighlightPanelProps extends HTMLAttributes<HTMLDivElement> {
  children?: string;
}

export const Highlight = ({ children = '', ...props }: TextHighlightPanelProps) => {
  const selectContext = useDropDownSearchSelectContext();
  const optionContext = useOptionContext();

  const searchValue = selectContext?.searchValue || '';

  const { chunks, parts } = React.useMemo(
    () => getTextHighlightMeta(children, searchValue, selectContext?.highlightFormat),
    [children, searchValue],
  );

  React.useEffect(() => {
    optionContext?.onAddTextToHighlight(children);
  }, [optionContext?.onAddTextToHighlight, children]);

  return (
    <Panel {...props} title={children}>
      {parts.map((part, i) =>
        chunks.includes(part.toLowerCase()) ? <HighlightText key={i}>{part}</HighlightText> : part,
      )}
    </Panel>
  );
};
