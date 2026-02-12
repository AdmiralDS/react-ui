import * as React from 'react';
import { PaginationOne, useId } from '@admiral-ds/react-ui';
import type { PaginationOneProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const PaginationOnePlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: PaginationOneProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [pageSize, setPageSize] = React.useState(8);
  const [page, setPage] = React.useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = props.totalItems || 100;

  const leftButtonProps = { 'data-testid': useId() };
  const rightButtonProps = { 'data-testid': useId() };
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <PaginationOne
        {...props}
        onChange={({ page, pageSize }) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        page={page}
        pageSize={pageSize}
        // totalItems={totalElements}
        totalItems={19880516}
        pageSizes={pageSizes}
        data-dropdown-container-id="pagination-with-dropdown"
        data-dropdown-container-test-id="pagination-test-id-with-dropdown"
        className="pagination-class-name"
        pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
        pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
        leftButtonPropsConfig={() => leftButtonProps}
        rightButtonPropsConfig={() => rightButtonProps}
      />
    </ThemeProvider>
  );
};
