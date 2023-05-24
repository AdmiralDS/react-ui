import styled, { css } from 'styled-components';
import { ReactComponent as ArrowUpOutline } from '@admiral-ds/icons/build/system/ArrowUpOutline.svg';
import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
import type { TableProps } from '#src/components/Table';
import CursorGrabbing from './icons/cursorGrabbing.svg';
import CursorNotAllowed from './icons/cursorNotAllowed.svg';

import {
  cellStyle,
  disabledRow,
  extraTextStyle,
  groupRowStyle,
  headerStyle,
  multiLineTitle,
  overflowMenuStyle,
  rowBackground,
  rowStyle,
  singleLineTitle,
  underlineRow,
} from './mixins';
import { IconPlacement } from '#src/components/IconPlacement';

export const TableContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
`;

export const StickyGroupRow = styled.div`
  display: flex;
  position: sticky;
  left: 0;
  z-index: 5;
`;

export const StickyWrapper = styled(StickyGroupRow)<{ greyHeader?: boolean }>`
  background: ${({ theme, greyHeader }) =>
    greyHeader ? theme.color['Neutral/Neutral 05'] : theme.color['Neutral/Neutral 00']};
  transition: box-shadow 0.3s;
  ${TableContainer}[data-shadow='true'] & {
    box-shadow: 4px 0 12px rgba(138, 150, 168, 0.16);
  }
`;

export const NormalWrapper = styled.div`
  display: flex;
`;

export const OverflowMenuWrapper = styled.div<{ $offset: number; dimension: TableProps['dimension'] }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  will-change: margin-left;
  z-index: 5;
  ${overflowMenuStyle};
  visibility: hidden;

  &:hover {
    visibility: visible;
  }
`;

export const Filler = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: unset;
`;

export const HeaderWrapper = styled.div<{ scrollbar: number; greyHeader?: boolean }>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;

  &[data-verticalscroll='true'] {
    &:after {
      position: absolute;
      content: '';
      box-sizing: border-box;
      top: 0;
      right: 0;
      height: 100%;
      background: ${({ theme, greyHeader }) =>
        greyHeader ? theme.color['Neutral/Neutral 05'] : theme.color['Neutral/Neutral 00']};
      width: ${({ scrollbar }) => scrollbar}px;
      border-bottom: 1px solid ${({ theme }) => theme.color['Neutral/Neutral 20']};
    }
    & > div.tr {
      overflow-y: scroll;
    }
  }

  ${({ greyHeader }) =>
    greyHeader &&
    css`
      & > div.tr {
        background: ${({ theme }) => theme.color['Neutral/Neutral 05']};
      }
    `}
`;

export const Header = styled.div<{ dimension: TableProps['dimension'] }>`
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  overflow-x: hidden;
  ${headerStyle};

  & > * {
    border-bottom: 1px solid ${({ theme }) => theme.color['Neutral/Neutral 20']};
  }
`;

export const ScrollTableBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1 1 auto;
`;

export const ExpandIconWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    &:before {
      position: absolute;
      content: '';
      top: -6px;
      bottom: -6px;
      left: -6px;
      right: -6px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color['Opacity/Hover']};
    }
  }
  ${({ disabled }) => disabled && 'pointer-events: none;'}
`;

export const ExpandIcon = styled(ChevronDownOutline)<{ $isOpened?: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${(p) => (p.$isOpened ? 180 : 0)}deg);
`;

export const ExpandIconPlacement = styled(IconPlacement)`
  margin: 0;
  flex-shrink: 0;
`;

export const SortIconWrapper = styled.div`
  position: relative;
`;

export const SortIcon = styled(ArrowUpOutline)<{ sort: 'asc' | 'desc' | 'initial' }>`
  display: flex;
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);
  margin: 2px 0;

  & *[fill^='#'] {
    fill: ${({ theme, sort }) => (sort === 'initial' ? 'transparent' : theme.color['Primary/Primary 60 Main'])};
  }
  ${({ sort }) => (sort === 'desc' ? 'transform: rotate(180deg);' : '')}
`;

export const SortOrder = styled.div`
  position: absolute;
  top: 1px;
  right: 0;
  font-family: 'VTB Group UI', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 9px;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
`;

export const Cell = styled.div<{ dimension: TableProps['dimension'] }>`
  display: flex;
  align-items: flex-start;
  flex: 0 0 auto;
  box-sizing: border-box;
  ${cellStyle};
  overflow: hidden;
`;

export const CellTextContent = styled.div<{ cellAlign?: 'left' | 'right' }>`
  display: block;
  align-items: center;
  width: 100%;
  margin: 2px 0;
  ${({ cellAlign }) => cellAlign === 'right' && 'text-align: right;'}
  overflow: hidden;
`;

export const GroupTextContent = styled.div`
  display: block;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

// padding-bottom меньше padding-top на 1px, т.к. 1px остается для border-bottom ячейки
export const CheckboxCell = styled(Cell)<{ dimension: TableProps['dimension'] }>`
  width: ${({ dimension }) => (dimension === 's' || dimension === 'm' ? 44 : 56)}px;
  padding: ${({ dimension }) => {
    switch (dimension) {
      case 's':
        return '8px 14px 7px 14px';
      case 'l':
        return '14px 18px 13px 18px';
      case 'xl':
        return '18px 18px 17px 18px';
      case 'm':
      default:
        return '12px 14px 11px 14px';
    }
  }};
`;

// padding-bottom меньше padding-top на 1px, т.к. 1px остается для border-bottom ячейки
export const ExpandCell = styled(Cell)<{ dimension: TableProps['dimension'] }>`
  width: ${({ dimension }) => (dimension === 's' || dimension === 'm' ? 44 : 56)}px;
  padding: ${({ dimension }) => {
    switch (dimension) {
      case 's':
        return '6px 12px 5px 12px';
      case 'l':
        return '12px 16px 11px 16px';
      case 'xl':
        return '16px 16px 15px 16px';
      case 'm':
      default:
        return '10px 12px 9px 12px';
    }
  }};
`;

export const HeaderCell = styled.div<{ dimension: TableProps['dimension'] }>`
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  flex: 0 0 auto;
  ${cellStyle}
  &:hover {
    cursor: pointer;
  }
  align-items: flex-start;
`;

export const HeaderCellContent = styled.div<{ cellAlign: 'left' | 'right' }>`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  width: 100%;
  ${({ cellAlign }) =>
    cellAlign === 'right' &&
    css`
      flex-direction: row-reverse;
      & > ${HeaderCellTitle} {
        text-align: right;
        flex-direction: row-reverse;
      }
    `}
`;

export const HeaderCellSpacer = styled.div<{ width?: string }>`
  display: flex;
  align-self: stretch;
  width: ${(p) => (p.width ? p.width : '12px')};
  flex-shrink: 0;
`;

export const HeaderCellTitle = styled.div<{ sort: 'asc' | 'desc' | 'initial' }>`
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  &:hover {
    *[fill^='#'] {
      fill: ${({ theme, sort }) =>
        sort === 'initial' ? theme.color['Neutral/Neutral 50'] : theme.color['Primary/Primary 70']};
    }
    
    ${SortOrder} {
      color: ${({ theme, sort }) =>
        sort === 'initial' ? theme.color['Neutral/Neutral 50'] : theme.color['Primary/Primary 70']};
    };
    }
  }
`;

export const TitleContent = styled.div<{ dimension: TableProps['dimension']; sortable?: boolean }>`
  display: flex;
  flex-direction: column;

  // leave 20px/16px for SortIcon
  max-width: ${({ sortable, dimension }) =>
    sortable ? `calc(100% - ${dimension === 's' || dimension === 'm' ? 16 : 20}px)` : '100%'};
`;

export const Title = styled.div<{ lineClamp: number }>`
  position: relative;
  width: 100%;
  ${({ lineClamp }) => (lineClamp === 1 ? singleLineTitle : multiLineTitle)}
`;

export const ExtraText = styled.div<{ dimension: TableProps['dimension']; lineClamp: number }>`
  position: relative;
  width: 100%;
  margin: 2px 0;
  ${extraTextStyle}
  ${({ lineClamp }) => (lineClamp === 1 ? singleLineTitle : multiLineTitle)}
`;

const rowWidthStyle = css<{ rowWidth?: number }>`
  width: ${(p) => `${p.rowWidth}px`};
`;

const rowHoverMixin = css`
  cursor: pointer;
  & > .tr-simple > *,
  & ${OverflowMenuWrapper} {
    background: ${({ theme }) => theme.color['Primary/Primary 10']};
  }
`;

export const Row = styled.div<{
  dimension: TableProps['dimension'];
  underline: boolean;
  disabled?: boolean;
  isGroup?: boolean;
  rowWidth?: number;
  hover?: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  ${(p) => (p.isGroup ? groupRowStyle : rowStyle)}
  ${({ disabled }) => disabled && disabledRow}
  ${({ underline }) => underline && underlineRow}
  ${({ rowWidth }) => rowWidth && rowWidthStyle}
   &:hover:is(.hoverable) {
    ${({ hover }) => hover && rowHoverMixin}
  }
`;

export const SimpleRow = styled.div<{
  selected?: boolean;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  grey?: boolean;
}>`
  display: inline-flex;
  min-width: max-content;

  & > *,
  & + ${OverflowMenuWrapper} {
    background: ${rowBackground};
  }

  &:hover {
    & + ${OverflowMenuWrapper} {
      visibility: visible;
    }
  }
  & + div[data-opened='true'] {
    visibility: visible;
  }
`;

export const ExpandedRow = styled.div<{ opened?: boolean; contentMaxHeight?: number | string }>`
  display: inline-flex;
  overflow: hidden;
  transition: max-height 250ms cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${(p) => (!p.opened ? 0 : p.contentMaxHeight)};
`;

export const ExpandedRowContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 0 12px 11px 12px;
`;

export const EmptyMessage = styled(Cell)`
  margin: 2px 0;
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
`;

const getTechColumnsWidth = (
  dimension: TableProps['dimension'],
  selectionCol?: boolean,
  expansionCol?: boolean,
): number =>
  (selectionCol ? (dimension === 's' || dimension === 'm' ? 44 : 56) : 0) +
  (expansionCol ? (dimension === 's' || dimension === 'm' ? 44 : 56) : 0);

export const HeaderCellsWrapper = styled.div<{
  dimension: TableProps['dimension'];
  selectionColumn?: boolean;
  expansionColumn?: boolean;
}>`
  display: flex;
  flex: 0 0 auto;
  width: calc(100% - ${(p) => getTechColumnsWidth(p.dimension, p.selectionColumn, p.expansionColumn) + 'px'});
`;

export const HiddenHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  visibility: hidden;
  display: flex;
  overflow: hidden;
`;

export const Mirror = styled(HeaderCell)`
  position: fixed;
  z-index: 6;
  visibility: hidden;
  ${({ theme }) => theme.shadow['Shadow 08']}
  background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  padding-left: 36px;

  &[data-cursor='normal'] {
    cursor: url(${CursorGrabbing}), grabbing;
  }
  &[data-cursor='error'] {
    cursor: url(${CursorNotAllowed}), not-allowed;
  }
`;

// &[data-cursor='normal'] {
//   cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8xNjQ1MDRfMTUyNDY5KSI+CjxwYXRoIGQ9Ik02LjA3NjIxIDQuNDI1OTZDNi4wNzYyMSAzLjc3NDQgNi42MDQ0IDMuMjQ2MjEgNy4yNTU5NSAzLjI0NjIxQzcuOTA3NTEgMy4yNDYyMSA4LjQzNTcxIDMuNzc0NCA4LjQzNTcxIDQuNDI1OTZWNi42OTI2NEw4LjY4MjgzIDYuNjkyMzlWMy44NzYyOUM4LjY4MjgzIDMuMjI0NzMgOS4yMTEwMiAyLjY5NjUzIDkuODYyNTggMi42OTY1M0MxMC41MTQxIDIuNjk2NTMgMTEuMDQyMyAzLjIyNDczIDExLjA0MjMgMy44NzYyOFY2LjY5MDAyTDExLjI5MTIgNi42ODk3N1Y0LjU0OTMzQzExLjI5MTIgMy44OTc3NyAxMS44MTk0IDMuMzY5NTggMTIuNDcwOSAzLjM2OTU4QzEzLjEyMjUgMy4zNjk1OCAxMy42NTA3IDMuODk3NzcgMTMuNjUwNyA0LjU0OTMzVjYuNjg3MzlMMTMuODk3OCA2LjY4NzE0VjUuNDYzMzlDMTMuODk3OCA0LjgxMTgzIDE0LjQyNiA0LjI4MzYzIDE1LjA3NzYgNC4yODM2M0MxNS43MjkxIDQuMjgzNjMgMTYuMjU3MyA0LjgxMTgzIDE2LjI1NzMgNS40NjMzOUwxNi4yNTc1IDExLjAxNDdDMTYuMjU3NSAxMy43NzQxIDE1LjE4MzMgMTcuMzAzMyAxMC43ODMxIDE3LjMwMzNDNy4xNzU5NCAxNy4zMDMzIDUuNDcyNjYgMTUuMTkwMiA0LjY5OTA4IDEzLjU4NzRDNC40OTc3OSAxMy4xNzA0IDQuMjA0NjcgMTIuMTQ5NSA0LjIwNDY3IDEyLjE0OTVMMy45MjAwOCAxMS4wMDQ5QzMuOTIwMDggMTEuMDA0OSAzLjMxODE2IDguMTczNzIgNC4zMjI4NiA3LjYzODY4QzUuMDkwMyA3LjIyOTk4IDUuOTg1MDggNy4yNDk5OSA2LjA3NjIxIDEwLjEzNjVWNC40MjU5NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02LjA3NjIxIDQuNDI1OTZDNi4wNzYyMSAzLjc3NDQgNi42MDQ0IDMuMjQ2MjEgNy4yNTU5NSAzLjI0NjIxQzcuOTA3NTEgMy4yNDYyMSA4LjQzNTcxIDMuNzc0NCA4LjQzNTcxIDQuNDI1OTZWNi42OTI2NEw4LjY4MjgzIDYuNjkyMzlWMy44NzYyOUM4LjY4MjgzIDMuMjI0NzMgOS4yMTEwMiAyLjY5NjUzIDkuODYyNTggMi42OTY1M0MxMC41MTQxIDIuNjk2NTMgMTEuMDQyMyAzLjIyNDczIDExLjA0MjMgMy44NzYyOFY2LjY5MDAyTDExLjI5MTIgNi42ODk3N1Y0LjU0OTMzQzExLjI5MTIgMy44OTc3NyAxMS44MTk0IDMuMzY5NTggMTIuNDcwOSAzLjM2OTU4QzEzLjEyMjUgMy4zNjk1OCAxMy42NTA3IDMuODk3NzcgMTMuNjUwNyA0LjU0OTMzVjYuNjg3MzlMMTMuODk3OCA2LjY4NzE0VjUuNDYzMzlDMTMuODk3OCA0LjgxMTgzIDE0LjQyNiA0LjI4MzYzIDE1LjA3NzYgNC4yODM2M0MxNS43MjkxIDQuMjgzNjMgMTYuMjU3MyA0LjgxMTgzIDE2LjI1NzMgNS40NjMzOUwxNi4yNTc1IDExLjAxNDdDMTYuMjU3NSAxMy43NzQxIDE1LjE4MzMgMTcuMzAzMyAxMC43ODMxIDE3LjMwMzNDNy4xNzU5NCAxNy4zMDMzIDUuNDcyNjYgMTUuMTkwMiA0LjY5OTA4IDEzLjU4NzRDNC40OTc3OSAxMy4xNzA0IDQuMjA0NjcgMTIuMTQ5NSA0LjIwNDY3IDEyLjE0OTVMMy45MjAwOCAxMS4wMDQ5QzMuOTIwMDggMTEuMDA0OSAzLjMxODE2IDguMTczNzIgNC4zMjI4NiA3LjYzODY4QzUuMDkwMyA3LjIyOTk4IDUuOTg1MDggNy4yNDk5OSA2LjA3NjIxIDEwLjEzNjVWNC40MjU5NloiIHN0cm9rZT0iIzIzMjYyRCIgc3Ryb2tlLXdpZHRoPSIwLjYiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzE2NDUwNF8xNTI0NjkiIHg9IjEuNDQxNDEiIHk9IjEuMjk2NDgiIHdpZHRoPSIxNy4xMTYyIiBoZWlnaHQ9IjE5LjIwNjgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iMC45Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI4IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTY0NTA0XzE1MjQ2OSIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18xNjQ1MDRfMTUyNDY5IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo='),
//     grabbing;
// }
// &[data-cursor='error'] {
//   cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iOCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIgMTBDMiA1LjU4ODg3IDUuNTg4ODcgMiAxMCAyQzE0LjQxMTEgMiAxOCA1LjU4ODg3IDE4IDEwQzE4IDE0LjQxMTEgMTQuNDExMSAxOCAxMCAxOEM1LjU4ODg3IDE4IDIgMTQuNDExMSAyIDEwWk0xMCAxNkMxMS4yNDU0IDE2IDEyLjQwMzEgMTUuNjE4MiAxMy4zNjMgMTQuOTY2MUw1LjAzMzgyIDYuNjM3MjZDNC4zODE3NyA3LjU5NzExIDQgOC43NTQ2NCA0IDEwQzQgMTMuMzA4NiA2LjY5MTQxIDE2IDEwIDE2Wk0xMCA0QzguNjU3NjUgNCA3LjQyMTIgNC40NDg0MyA2LjQyMDU5IDUuMTk1OTJMMTQuODA0MyAxMy41NzkyQzE1LjU1MTYgMTIuNTc4NiAxNiAxMS4zNDIyIDE2IDEwQzE2IDYuNjkxNDEgMTMuMzA4NiA0IDEwIDRaIiBmaWxsPSIjRDkyMDIwIi8+Cjwvc3ZnPgo='),
//     not-allowed;
// }
