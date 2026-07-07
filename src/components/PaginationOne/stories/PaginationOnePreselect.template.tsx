import { useState } from 'react';
import { PaginationOne, T, useId } from '@admiral-ds/react-ui';
import type { PaginationOneProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const PaginationOnePreselectTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: PaginationOneProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = props.totalItems || 250;

  const leftButtonProps = { 'data-testid': useId() };
  const rightButtonProps = { 'data-testid': useId() };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Режим preselected включается пропсом <code>preselectedModeActive</code>. При навигации клавиатурой
        подсвечивается preselected, при наведении мыши — active. Эти состояния независимы.
      </T>
      <PaginationOne
        {...props}
        preselectedModeActive
        showPageNumberInput
        onChange={({ page, pageSize }) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        page={page}
        pageSize={pageSize}
        totalItems={totalElements}
        pageSizes={pageSizes}
        className="pagination-preselect-story"
        pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
        pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
        leftButtonPropsConfig={() => leftButtonProps}
        rightButtonPropsConfig={() => rightButtonProps}
      />
    </ThemeProvider>
  );
};
