import { HighlightFormat } from '#src/components/input/Select/types';
import * as React from 'react';
import { getTextHighlightMeta } from '#src/components/input/Select/utils';
import { HighlightProvider } from '#src/components/input/Select/Highlight/Context';

interface HighlightWrapperProps {
  searchValue?: string;
  highlightFormat?: HighlightFormat;
}

export const HighlightWrapper = ({
  children,
  searchValue,
  highlightFormat,
}: React.PropsWithChildren<HighlightWrapperProps>) => {
  return (
    <HighlightProvider
      // onAddTextToHighlight={onAddTextToHighlight}
      searchValue={searchValue}
      highlightFormat={highlightFormat}
    >
      {children}
    </HighlightProvider>
  );
};
