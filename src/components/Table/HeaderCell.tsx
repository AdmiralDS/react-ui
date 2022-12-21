import * as React from 'react';

import {
  HeaderCell,
  HeaderCellContent,
  HeaderCellTitle,
  HeaderCellSpacer,
  TitleContent,
  SortIconWrapper,
  SortIcon,
  SortOrder,
} from './style';
import { RowWidthResizer } from './RowWidthResizer';
import { Filter } from './filter/Filter';
import { TitleText } from './TitleText';

const DEFAULT_COLUMN_WIDTH = 100;

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
};

export const HeaderCellComponent = ({
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
    renderFilter,
  } = column;
  const iconSize = dimension === 's' || dimension === 'm' ? 16 : 20;
  const defaultSpacer = dimension === 'l' || dimension === 'xl' ? '16px' : '12px';
  const spacer = spacingBetweenItems || defaultSpacer;
  const cellRef = React.createRef<HTMLDivElement>();
  const colWidth = typeof width === 'number' ? width + 'px' : width;

  return (
    <HeaderCell
      dimension={dimension}
      // style={{ width: colWidth, minWidth: colWidth }}
      style={{ width: colWidth || '100px', minWidth: colWidth || '100px' }}
      className="th"
      data-column={name}
      ref={cellRef}
    >
      <HeaderCellContent cellAlign={cellAlign}>
        <HeaderCellTitle
          sort={sort || 'initial'}
          onClick={sortable ? () => handleSort(name, sort || 'initial') : undefined}
        >
          <TitleContent dimension={dimension} sortable={sortable}>
            <TitleText dimension={dimension} lineClamp={headerLineClamp} title={title} />
            {extraText && (
              <TitleText extraText dimension={dimension} lineClamp={headerExtraLineClamp} title={extraText} />
            )}
          </TitleContent>
          {sortable && (
            <SortIconWrapper>
              <SortIcon sort={sort || 'initial'} width={iconSize} height={iconSize} />
              {multipleSort && sort && sortOrder && <SortOrder>{sortOrder}</SortOrder>}
            </SortIconWrapper>
          )}
        </HeaderCellTitle>
        <HeaderCellSpacer width={renderFilter ? spacer : `${parseInt(spacer) - parseInt(defaultSpacer)}px`} />
        {renderFilter && <Filter column={column} dimension={dimension} targetRef={cellRef} />}
      </HeaderCellContent>
      {index < columnsAmount - 1 && (
        <RowWidthResizer
          name={name}
          width={width}
          onChange={handleResizeChange}
          disabled={disableResize || disableColumnResize}
          dimension={dimension}
          columnMinWidth={columnMinWidth}
        />
      )}
      {index === columnsAmount - 1 && showDividerForLastColumn && (
        <RowWidthResizer
          name={name}
          width={width}
          onChange={handleResizeChange}
          disabled={disableResize || disableColumnResize}
          dimension={dimension}
          columnMinWidth={columnMinWidth}
        />
      )}
    </HeaderCell>
  );
};
