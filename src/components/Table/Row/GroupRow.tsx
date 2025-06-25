import {
  ExpandCell,
  Cell,
  ExpandIcon,
  ExpandIconPlacement,
  CheckboxCell,
  GroupTextContent,
  StickyWrapper,
  Filler,
  DragCell,
} from '#src/components/Table/style';

import type { TableRow } from '#src/components/Table';
import { CheckboxField } from '#src/components/form';
import type { RegularRowProps } from '#src/components/Table/Row/RegularRow';

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
  rowsDraggable,
  checkboxDimension,
  renderCell,
  onRowExpansionChange,
  onRowSelectionChange,
  indeterminate,
  checked,
}: GroupRowProps) => {
  const handleExpandClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по иконке стрелки не должен вызывать событие клика по строке
    e.stopPropagation();
    onRowExpansionChange?.(row.id);
  };

  const handleCheckboxClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по чекбоксу не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  const handleCheckboxChange = () => {
    onRowSelectionChange?.(row.id);
  };

  const renderGroup = () => {
    if (row.renderGroupTitle) {
      return row.renderGroupTitle(row);
    }
    if (renderCell) {
      return renderCell(row, 'group');
    }
    return <GroupTextContent>{row.groupTitle || ''}</GroupTextContent>;
  };

  return (
    <>
      <StickyWrapper>
        {rowsDraggable && <DragCell $dimension={dimension} />}
        <ExpandCell $dimension={dimension} className="td_expand" data-column="expand" data-row={row.id}>
          <ExpandIconPlacement
            dimension={dimension === 's' || dimension === 'm' ? 'mBig' : 'lBig'}
            disabled={row.disabled || row.groupRows?.length === 0 ? true : undefined}
            highlightFocus={false}
            onClick={handleExpandClick}
          >
            <ExpandIcon $isOpened={row.expanded} aria-hidden />
          </ExpandIconPlacement>
        </ExpandCell>
        {displayRowSelectionColumn && (
          <CheckboxCell $dimension={dimension} className="td_checkbox" data-column="checkbox" data-row={row.id}>
            <CheckboxField
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
      <Cell key={`${row.id}`} $dimension={dimension} className="td" data-column="group" data-row={row.id}>
        {renderGroup()}
      </Cell>
      <Filler />
    </>
  );
};
