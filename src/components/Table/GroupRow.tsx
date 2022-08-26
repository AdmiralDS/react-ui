import {
  ExpandCell,
  Cell,
  ExpandIcon,
  ExpandIconWrapper,
  CheckboxCell,
  SimpleRow,
  Row,
  GroupTextContent,
} from '#src/components/Table/style';
import * as React from 'react';
import type { TableRow, RowId } from '#src/components/Table/index';
import { Checkbox } from '#src/components/Checkbox';
import type { RegularRowProps } from '#src/components/Table/RerularRow';

export interface GroupRowProps extends Omit<RegularRowProps, 'columns' | 'stickyColumns'> {
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
  onRowClick,
  onRowDoubleClick,
  underline,
  indeterminate,
  checked,
}: GroupRowProps) => {
  const handleRowClick = (rowId: RowId) => {
    onRowClick?.(rowId);
  };

  const handleRowDoubleClick = (rowId: RowId) => {
    onRowDoubleClick?.(rowId);
  };

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
    <Row
      onClick={() => handleRowClick(row.id)}
      onDoubleClick={() => handleRowDoubleClick(row.id)}
      key={`row_${row.id}`}
      underline={underline}
      disabled={!!row.disabled}
      dimension={dimension}
      className={`tr ${row.className}`}
      isGroup={true}
    >
      <SimpleRow
        className="tr-simple"
        selected={checked || indeterminate}
        disabled={!!row.disabled}
        error={!!row.error}
        success={!!row.success}
      >
        <>
          <ExpandCell dimension={dimension}>
            <ExpandIconWrapper>
              <ExpandIcon
                $isOpen={row.expanded}
                data-disabled={row.disabled ? true : undefined}
                onClick={handleExpandClick}
                aria-hidden
              />
            </ExpandIconWrapper>
          </ExpandCell>
          {displayRowSelectionColumn && (
            <CheckboxCell dimension={dimension} className="td_checkbox">
              <Checkbox
                disabled={row.disabled || row.checkboxDisabled}
                dimension={checkboxDimension}
                checked={!!checked}
                indeterminate={indeterminate}
                onChange={handleCheckboxChange}
                onClick={handleCheckboxClick}
              />
            </CheckboxCell>
          )}
          <Cell key={`${row.id}`} dimension={dimension} style={{ width: '100%' }} className="td">
            {renderCell ? renderCell(row, 'group') : <GroupTextContent>{row.groupTitle || ''}</GroupTextContent>}
          </Cell>
        </>
      </SimpleRow>
    </Row>
  );
};
