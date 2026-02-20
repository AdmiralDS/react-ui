import { useState } from 'react';
import { PaginationOne, Field } from '@admiral-ds/react-ui';
import type { PaginationOneProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div`
  width: 100%;
  height: 40px;
`;

export const PaginationOneTypesTemplate = (
  props: PaginationOneProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean },
) => {
  const [pageSize1, setPageSize1] = useState(8);
  const [page1, setPage1] = useState(1);
  const [pageSize2, setPageSize2] = useState(8);
  const [page2, setPage2] = useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = 100;

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(props.themeBorderKind, props.CSSCustomProps)}>
      <Field label="Pagination One Complex">
        <PaginationOne
          dimension={props.dimension}
          onChange={({ page, pageSize }) => {
            setPage1(page);
            setPageSize1(pageSize);
          }}
          page={page1}
          pageSize={pageSize1}
          totalItems={totalElements}
          pageSizes={pageSizes}
          pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
          pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
        />
      </Field>
      <Separator />
      <Field label="Pagination One Complex. Minimal size">
        <PaginationOne
          dimension={props.dimension}
          style={{ width: 'fit-content' }}
          onChange={({ page, pageSize }) => {
            setPage1(page);
            setPageSize1(pageSize);
          }}
          page={page1}
          pageSize={pageSize1}
          totalItems={totalElements}
          pageSizes={pageSizes}
          pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
          pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
        />
      </Field>
      <Separator />
      <Field label="Pagination One Simple">
        <PaginationOne
          dimension={props.dimension}
          onChange={({ page, pageSize }) => {
            setPage2(page);
            setPageSize2(pageSize);
          }}
          page={page2}
          pageSize={pageSize2}
          totalItems={totalElements}
          pageSizes={pageSizes}
          simple
        />
      </Field>
      <Separator />
      <Field label="Pagination One Simple. Minimal size">
        <PaginationOne
          dimension={props.dimension}
          style={{ width: 'fit-content' }}
          onChange={({ page, pageSize }) => {
            setPage2(page);
            setPageSize2(pageSize);
          }}
          page={page2}
          pageSize={pageSize2}
          totalItems={totalElements}
          pageSizes={pageSizes}
          simple
        />
      </Field>
    </ThemeProvider>
  );
};
