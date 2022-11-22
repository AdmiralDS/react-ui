import {
  ExpandCell,
  Cell,
  ExpandIcon,
  ExpandIconWrapper,
  CheckboxCell,
  GroupTextContent,
  StickyWrapper,
} from '#src/components/Table/style';
import * as React from 'react';
import type { TableRow } from '#src/components/Table';
import { Checkbox } from '#src/components/Checkbox';
import type { RegularRowProps } from '#src/components/Table/Row/RerularRow';

export interface GroupRowProps extends Omit<RegularRowProps, 'columns' | 'stickyColumns' | 'renderBodyCell'> {
  /** Рендер функция для отрисовки контента ячейки. Входные параметры - объект строки и название столбца */
  renderCell?: (row: TableRow, columnName: string) => React.ReactNode;
  /** Неопределенное состояние checkbox-а */
  indeterminate?: boolean;
  /** Значение checkbox-а */
  checked?: boolean;
}

export const GroupRow = ({
  row,
  dimension,
  displayRowSelectionColumn,
  checkboxDimension,
  renderCell,
  onRowExpansionChange,
  onRowSelectionChange,
  indeterminate,
  checked,
}: GroupRowProps) => {
  const handleExpandClick = () => {
    onRowExpansionChange?.(row.id);
  };

  const handleCheckboxClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по чекбоксу не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  const handleCheckboxChange = () => {
    onRowSelectionChange?.(row.id);
  };

  return (
    <>
      <StickyWrapper>
        <ExpandCell dimension={dimension}>
          <ExpandIconWrapper disabled={row.disabled || row.groupRows?.length === 0}>
            <ExpandIcon
              $isOpen={row.expanded}
              data-disabled={row.disabled || row.groupRows?.length === 0 ? true : undefined}
              onClick={handleExpandClick}
              aria-hidden
            />
          </ExpandIconWrapper>
        </ExpandCell>
        {displayRowSelectionColumn && (
          <CheckboxCell dimension={dimension} className="td_checkbox">
            <Checkbox
              disabled={row.disabled || row.checkboxDisabled || row.groupRows?.length === 0}
              dimension={checkboxDimension}
              checked={!!checked}
              indeterminate={indeterminate}
              onChange={handleCheckboxChange}
              onClick={handleCheckboxClick}
            />
          </CheckboxCell>
        )}
      </StickyWrapper>
      <Cell key={`${row.id}`} dimension={dimension} className="td" data-column={'group'} data-row={row.id}>
        {renderCell ? renderCell(row, 'group') : <GroupTextContent>{row.groupTitle || ''}</GroupTextContent>}
      </Cell>
    </>
  );
};
