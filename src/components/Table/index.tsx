import * as React from 'react';
import styled from 'styled-components';
import { Checkbox } from '#/components/Checkbox';
import { ReactComponent as ArrowDownOutline } from '@admiral-ds/icons/build/system/ArrowDownOutline.svg';

import { RowWidthResizer } from './RowWidthResizer';
import { cellStyle, firstCellPadding, rowStyle, headerStyle, headerCellStyle } from './mixins';

export const DEFAULT_COLUMN_WIDTH = 100;

const SortIcon = styled(ArrowDownOutline)`
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);

  [data-sort='asc'] && {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
    transform: rotate(180deg);
  }
  [data-sort='desc'] && *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.hover};
  }
  [data-sort='initial'] && *[fill^='#'] {
    fill: transparent;
  }
`;

const Cell = styled.div<{ cellAlign?: 'left' | 'right' }>`
  box-sizing: border-box;
  ${cellStyle};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 0 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.color.basic.disable};
  ${({ cellAlign }) => cellAlign === 'right' && 'text-align: right;'}
`;

const CheckboxCell = styled(Cell)`
  width: unset;
  padding: 12px 0 12px 12px;
  [data-dimension='s'] & {
    padding: 8px 0 8px 12px;
  }
  [data-dimension='l'] & {
    padding: 14px 0 14px 16px;
  }
  [data-dimension='xl'] & {
    padding: 18px 0 18px 16px;
  }
`;

const TableContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.background.primary};
`;

const Header = styled.div<{ greyHeader?: boolean }>`
  flex: 0 0 auto;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  ${({ greyHeader, theme }) => greyHeader && `background: ${theme.color.background.tertiary};`}
  ${headerStyle}
  ${firstCellPadding}
  transform: translateZ(0);
`;

const HeaderCell = styled.div`
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  flex: 0 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.color.basic.disable};
  ${headerCellStyle}
  &:hover {
    cursor: pointer;
  }
`;

const HeaderCellSpacer = styled.div<{ width?: string }>`
  height: 100%;
  width: ${(p) => (p.width ? p.width : '12px')};
  flex-shrink: 0;
`;

const ResizerCompensator = styled(HeaderCellSpacer)`
  // 17px - 8px, чтобы HeaderCellSpacer занимал место ровно от текста до серой полоски разделителя
  width: 9px;
`;

const HeaderCellTitle = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  [data-cellalign='right'] & {
    text-align: right;
    flex-direction: row-reverse;
  }
`;

const Title = styled.div`
  position: relative;
  display: inline-block;
  max-width: calc(100% - 20px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  [data-dimension='s'] & {
    max-width: calc(100% - 16px);
  }
  [data-dimension='m'] & {
    max-width: calc(100% - 16px);
  }
`;

const Filler = styled(Cell)`
  flex: 1 1 auto;
  width: unset;
`;

const ScrollTableBody = styled.div`
  overflow: auto;
  flex: 1 1 auto;
`;

const Row = styled.div<{ isSelected: boolean }>`
  display: flex;
  ${rowStyle}
  ${firstCellPadding}
  ${({ isSelected, theme }) =>
    isSelected &&
    `
    & > * {
      background: ${theme.color.special.softBlue};
    }
  `}
`;

const HeaderCellContent = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  [data-cellalign='right'] & {
    flex-direction: row-reverse;
    padding-right: 20px;
  }
  &:hover {
    [data-sort='initial'] && *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.secondary};
    }
  }
`;

export type Dimension = 'xl' | 'l' | 'm' | 's';

export type Column = {
  /** Уникальное название столбца */
  name: string;
  /** Заголовок столбца */
  title: string;
  /** Ширина столбца. По умолчанию 100px */
  width?: number;
  /** Выравнивание контента ячеек столбца по левому или правому краю. По умолчанию left */
  cellAlign?: 'left' | 'right';
  /** Является ли столбец сортируемым. По умолчанию false */
  sortable?: boolean;
};

type RowId = string | number;
type IdSelectionStatusMap = Record<RowId, boolean>;

export interface TableRow extends Record<RowId, React.ReactNode> {
  id: RowId;
  selected?: boolean;
}

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Массив столбцов */
  columnList: Column[];
  /** Массив строк */
  rowList: TableRow[];
  /** Колбек на выбор/снятие выбора со строки (на нажатие по чекбоксу строки).
   * idSelectionStatusMap - это объект, ключами которого являются id строк, чье состояние checked было изменено,
   * а значениями ключей - значение checked
   */
  onRowSelectionChange?: (idSelectionStatusMap: IdSelectionStatusMap) => void;
  /** Колбек для клика по строке таблицы */
  onRowClick?: (rowId: RowId) => void;
  /** Размер таблицы */
  dimension?: Dimension;
  /** Отображение столбца с чекбоксами, позволяющими выбрать необходимые строки */
  displayRowSelectionColumn?: boolean;
  /** Окрашивание шапки таблицы в серый цвет */
  greyHeader?: boolean;

  /** Ширина колонки (заголовка) регулируется через параметр Spacing Between Items в настройках
   * Auto Layout, при выбранном заголовке. Минимальное значение 12px, для таблиц S и M, и 16px для таблиц L и XL.
   * При выборе расстояния следует учитывать размеры пространства под иконки сортировки и меню, если они есть
   * в функционале заголовка.
   */
  spacingBetweenItems?: string;
  /** Колбек на изменение сортировки. Возвращает уникальное имя столбца, к которому применили сортировку,
   * и порядок сортировки (возрастающий/убывающий или сброс сортировки до первоначального состояния (initial))
   */
  onSortChange?: (sortObj: { name: string; sort: 'asc' | 'desc' | 'initial' }) => void;
}

export const Table: React.FC<TableProps> = ({
  columnList,
  rowList,
  displayRowSelectionColumn = false,
  onRowSelectionChange,
  onRowClick,
  onSortChange,
  dimension = 'm',
  greyHeader = false,
  spacingBetweenItems,
  ...props
}) => {
  const checkboxDimension = dimension === 's' || dimension === 'm' ? 's' : 'm';
  const iconSize = dimension === 's' || dimension === 'm' ? 16 : 20;
  const defaultSpacerLeft = dimension === 'l' || dimension === 'xl' ? '16px' : '12px';
  const defaultSpacerRight =
    dimension === 'l' || dimension === 'xl' ? Number(spacingBetweenItems) - 16 : Number(spacingBetweenItems) - 12;
  const spacerLeft = spacingBetweenItems || defaultSpacerLeft;
  const spacerRight = spacingBetweenItems ? (defaultSpacerRight > 0 ? defaultSpacerRight + 'px' : '0px') : '0px';

  const [cols, setColumns] = React.useState([...columnList]);
  const [sort, setSort] = React.useState({} as any);

  const headerRef = React.useRef<HTMLDivElement>(null);
  const scrollBodyRef = React.useRef<HTMLDivElement>(null);
  // Счетчик смены сортировки для столбца. При третьем нажатии на столбец сортировка должна отменяться
  const sortedCol = React.useRef<{ name: string; count: number }>({ name: '', count: 0 });

  const scrollHeader = (scrollLeft: number) => {
    if (headerRef.current) headerRef.current.scrollLeft = scrollLeft;
  };

  const handleScroll = (e: any) => {
    if (e.target === scrollBodyRef.current) {
      requestAnimationFrame(function () {
        scrollHeader(e.target.scrollLeft);
      });
    }
  };

  React.useLayoutEffect(() => {
    const scrollBody = scrollBodyRef.current;
    if (scrollBody) {
      scrollBody.addEventListener('scroll', handleScroll);
      return () => scrollBody.removeEventListener('scroll', handleScroll);
    }
  }, [scrollBodyRef.current]);

  function handleRowSelectionChange(idSelectionStatusMap: IdSelectionStatusMap) {
    onRowSelectionChange?.(idSelectionStatusMap);
  }

  function handleRowClick(rowId: RowId) {
    onRowClick?.(rowId);
  }

  function handleCheckboxChange(id: RowId) {
    const idsMap = rowList.reduce((ids: IdSelectionStatusMap, row) => {
      const value = row.id === id ? !row.selected : !!row.selected;
      ids[row.id] = value;
      return ids;
    }, {});
    handleRowSelectionChange(idsMap);
  }

  const isSelected = (row: { selected?: boolean }) => row.selected;
  const allRowsChecked = rowList.every(isSelected);
  const someRowsChecked = rowList.some(isSelected);

  function handleHeaderCheckboxChange() {
    const toRemove = rowList.reduce((ids: IdSelectionStatusMap, row) => {
      ids[row.id] = !someRowsChecked;
      return ids;
    }, {});
    handleRowSelectionChange(toRemove);
  }

  function handleResizeChange({ key, width }: { key: string; width: number }) {
    const newColumns = cols.map((column) =>
      column.name === key
        ? {
            ...column,
            width: width > DEFAULT_COLUMN_WIDTH ? width : DEFAULT_COLUMN_WIDTH,
          }
        : column,
    );
    setColumns(newColumns);
  }

  return (
    <TableContainer data-dimension={dimension} {...props}>
      <Header greyHeader={greyHeader} ref={headerRef}>
        {displayRowSelectionColumn && (
          <CheckboxCell>
            <Checkbox
              dimension={checkboxDimension}
              checked={allRowsChecked || someRowsChecked}
              indeterminate={someRowsChecked && !allRowsChecked}
              onChange={handleHeaderCheckboxChange}
            />
          </CheckboxCell>
        )}
        {cols.map(({ name, title, width = DEFAULT_COLUMN_WIDTH, cellAlign = 'left', sortable = false }, index) => {
          const handleSort = () => {
            let newSort = sort[name] === 'desc' ? 'asc' : 'desc';

            // нажатие на столбец, у которого уже включена сортировка
            if (sortedCol.current.name === name) {
              // если уже дважды нажали, отключаем сортировку
              if (sortedCol.current.count === 2) {
                newSort = 'initial';
                sortedCol.current = { name: '', count: 0 };
              } else {
                sortedCol.current = { name, count: 2 };
              }
            }
            // нажатие на столбец с выключенной сортировкой
            else {
              sortedCol.current = { name, count: 1 };
            }
            const toRemove = cols.reduce((sortObj, col) => {
              sortObj[col.name] = 'initial';
              return sortObj;
            }, {} as Record<any, any>);
            setSort({ ...toRemove, [name]: newSort });

            onSortChange?.({ name, sort: newSort as any });
          };
          return (
            <HeaderCell
              key={`head_${name}`}
              style={{ width: width, minWidth: width }}
              data-first={index === 0}
              data-cellalign={cellAlign}
              data-sort={String(sort[name] || 'initial')}
            >
              <HeaderCellContent onClick={sortable ? handleSort : undefined}>
                <HeaderCellTitle>
                  <Title>{title}</Title>
                  {sortable && <SortIcon width={iconSize} height={iconSize} />}
                </HeaderCellTitle>
                <HeaderCellSpacer width={cellAlign === 'left' ? spacerLeft : spacerRight} />
                {cellAlign === 'left' && <ResizerCompensator />}
              </HeaderCellContent>
              <RowWidthResizer id={name} width={width ? width : DEFAULT_COLUMN_WIDTH} onChange={handleResizeChange} />
            </HeaderCell>
          );
        })}
        <Filler />
      </Header>
      <ScrollTableBody ref={scrollBodyRef}>
        {rowList.map((row) => (
          <Row onClick={() => handleRowClick(row.id)} key={`row_${row.id}`} isSelected={!!row.selected}>
            {displayRowSelectionColumn && (
              <CheckboxCell>
                <Checkbox
                  dimension={checkboxDimension}
                  checked={!!row.selected}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </CheckboxCell>
            )}
            {cols.map((col, index) => (
              <Cell
                key={`${row.id}_${col.name}`}
                style={{ width: col.width || DEFAULT_COLUMN_WIDTH }}
                data-first={index === 0}
                cellAlign={col.cellAlign}
              >
                {row[col.name]}
              </Cell>
            ))}
            <Filler />
          </Row>
        ))}
      </ScrollTableBody>
    </TableContainer>
  );
};
