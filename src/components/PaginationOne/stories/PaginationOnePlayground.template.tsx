import * as React from 'react';
import { PaginationOne } from '@admiral-ds/react-ui';
import type { PaginationOneProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const PaginationOnePlaygroundTemplate = ({
  themeBorderKind,
  ...props
}: PaginationOneProps & { themeBorderKind?: BorderRadiusType }) => {
  const [pageSize, setPageSize] = React.useState(8);
  const [page, setPage] = React.useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = props.totalItems || 100;

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <PaginationOne
        {...props}
        onChange={({ page, pageSize }) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        page={page}
        pageSize={pageSize}
        totalItems={totalElements}
        pageSizes={pageSizes}
        data-dropdown-container-id="pagination-with-dropdown"
        data-dropdown-container-test-id="pagination-test-id-with-dropdown"
        className="pagination-class-name"
        pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
        pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
      />
    </ThemeProvider>
  );
};
