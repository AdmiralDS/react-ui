import * as React from 'react';
import type { DataAttributes } from 'styled-components';

import { HeaderCell, HeaderCellContent, HeaderCellTitle, HeaderCellSpacer, TitleContent } from './style';
import { RowWidthResizer } from './RowWidthResizer';
import { Filter } from './filter/Filter';
import { TitleText } from './TitleText';
import { SortIcon } from './SortIcon';

const DEFAULT_COLUMN_WIDTH = 100;
const nothing = () => {};

type HeaderCellType = {
  column: any;
  index: number;
  columnsAmount: number;
  showDividerForLastColumn?: boolean;
  disableColumnResize: boolean;
  dimension?: 'xl' | 'l' | 'm' | 's';
  headerLineClamp: number;
  headerExtraLineClamp: number;
  spacingBetweenItems?: string;
  handleResizeChange: (props: { name: string; width: number }) => void;
  handleSort: (name: string, colSort: 'asc' | 'desc' | 'initial') => void;
  multipleSort?: boolean;
  columnMinWidth: number;
  hidden?: boolean;
};

export const HeaderCellComponent = React.memo(
  ({
    column,
    columnsAmount,
    showDividerForLastColumn,
    disableColumnResize,
    headerLineClamp,
    headerExtraLineClamp,
    spacingBetweenItems,
    dimension,
    handleResizeChange,
    handleSort,
    multipleSort,
    columnMinWidth,
    hidden,
    index,
  }: HeaderCellType) => {
    const {
      name,
      title,
      extraText,
      width = DEFAULT_COLUMN_WIDTH,
      cellAlign = 'left',
      sortable = false,
      sort,
      sortOrder,
      disableResize = false,
      draggable = false,
      renderFilter,
      headerPropsConfig = nothing,
    } = column;
    const iconSize = dimension === 's' || dimension === 'm' ? 16 : 20;
    const defaultSpacer = dimension === 'l' || dimension === 'xl' ? '16px' : '12px';
    const spacer = spacingBetweenItems || defaultSpacer;
    const hiddenColWidth = typeof width === 'number' ? width + 'px' : width;
    const normalColWidth = `var(--th-${index}-width, 100px)`;
    const colWidth = hidden ? hiddenColWidth : normalColWidth;

    const withResizer = index < columnsAmount - 1 || (index === columnsAmount - 1 && showDividerForLastColumn);

    const [cellNode, setCellNode] = React.useState<HTMLDivElement | null>(null);

    const headerCellProps = {
      $dimension: dimension,
      $resizer: withResizer,
      style: { width: colWidth, minWidth: colWidth },
      className: 'th',
      'data-draggable': draggable,
      'data-th-column': name,
      ...(hidden ? { 'data-index': index } : {}),
    } satisfies React.ComponentProps<typeof HeaderCell> & DataAttributes;

    return (
      <HeaderCell {...headerCellProps} {...headerPropsConfig(headerCellProps)} ref={(node) => setCellNode(node)}>
        <HeaderCellContent $cellAlign={cellAlign}>
          <HeaderCellTitle
            $sort={sort || 'initial'}
            $sortable={sortable}
            onClick={sortable ? () => handleSort(name, sort || 'initial') : undefined}
          >
            <TitleContent $dimension={dimension} $sortable={sortable}>
              <TitleText dimension={dimension} lineClamp={headerLineClamp} title={title} />
              {extraText && (
                <TitleText extraText dimension={dimension} lineClamp={headerExtraLineClamp} title={extraText} />
              )}
            </TitleContent>
            {sortable && <SortIcon sort={sort} sortOrder={sortOrder} multipleSort={multipleSort} iconSize={iconSize} />}
          </HeaderCellTitle>
          <HeaderCellSpacer width={renderFilter ? spacer : `${parseInt(spacer) - parseInt(defaultSpacer)}px`} />
          {renderFilter && <Filter column={column} dimension={dimension} targetElement={cellNode} />}
        </HeaderCellContent>
        {withResizer && (
          <RowWidthResizer
            name={name}
            onChange={handleResizeChange}
            disabled={disableResize || disableColumnResize}
            dimension={dimension}
            columnMinWidth={columnMinWidth}
          />
        )}
      </HeaderCell>
    );
  },
);
