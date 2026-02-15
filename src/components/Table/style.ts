import styled, { css } from 'styled-components';
import { ReactComponent as ArrowUpOutline } from '@admiral-ds/icons/build/system/ArrowUpOutline.svg';
import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
// import { ReactComponent as DragOutline } from './icons/dragIcon.svg';
import { ReactComponent as DragOutline } from '@admiral-ds/icons/build/service/DragOutline.svg';

import type { TableProps, TableRow } from '#src/components/Table';

import {
  cellStyle,
  disabledRow,
  extraTextStyle,
  groupRowStyle,
  headerStyle,
  multiLineTitle,
  rowBackground,
  rowStyle,
  singleLineTitle,
  underlineRow,
  borderStyle,
} from './mixins';
import { IconPlacement } from '#src/components/IconPlacement';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';
import { typography } from '../Typography';
import { ResizerWrapper } from './RowWidthResizer';
import { getActionSize } from './OverflowMenu';

// устанавливаем  pointer-events: none для ResizerWrapper во время drag&drop столбцов, так как ResizerWrapper
// располагается прямо между соседними столбцами, и это мешает правильно рассчитать то, над каким столбцом находится курсор
export const TableContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  overflow: auto;

  &[data-dragging='true'] ${ResizerWrapper} {
    pointer-events: none;
  }

  &[data-borders='true'] {
    border: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  }
`;

export const StickyWrapper = styled.div<{ $greyHeader?: boolean }>`
  display: flex;
  position: sticky;
  left: 0;
  z-index: 5;
  background: ${({ theme, $greyHeader }) =>
    $greyHeader
      ? `var(--admiral-color-Neutral_Neutral05, ${theme.color['Neutral/Neutral 05']})`
      : `var(--admiral-color-Neutral_Neutral00, ${theme.color['Neutral/Neutral 00']})`};
  transition: box-shadow 0.3s;
  ${TableContainer}[data-shadow-left='true'] & {
    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.12);
  }
`;

/**
 * Если NormalWrapper занимает всё свободное место в строке (это можно проверить через элемент Filler и его data-empty атрибут),
 * то для NormalWrapper следует задать стиль overflow-x: hidden.
 *
 * Это важно для случаев, когда у последней ячейки включен resizer. Дело в том, что resizer выходит на 8px за пределы ячейки.
 * И за счет этого может вызывать увеличение таблицы по длине. Чтобы этого не произошло используется стиль overflow-x: hidden.
 *
 * В качестве референса взята реализация из mui https://mui.com/material-ui/react-table/
 */
export const NormalWrapper = styled.div`
  display: flex;
  &:has(+ div[data-empty='true']) {
    overflow-x: hidden;
  }
`;

export const Filler = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: unset;
`;

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 6;
`;

export const Header = styled.div<{
  $dimension: TableProps['dimension'];
  $greyHeader?: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  flex: 1 0 auto;
  min-width: fit-content;
  ${headerStyle}
  background: ${(p) =>
    p.$greyHeader
      ? `var(--admiral-color-Neutral_Neutral05, ${p.theme.color['Neutral/Neutral 05']})`
      : `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})`};
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
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

export const SortIcon = styled(ArrowUpOutline)<{ $sort: 'asc' | 'desc' | 'initial' }>`
  display: flex;
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);
  margin: 2px 0;

  & *[fill^='#'] {
    fill: ${({ theme, $sort }) =>
      $sort === 'initial'
        ? 'transparent'
        : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`};
  }
  ${({ $sort }) => ($sort === 'desc' ? 'transform: rotate(180deg);' : '')}
`;

export const SortOrder = styled.div`
  position: absolute;
  top: 1px;
  right: 0;
  font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 9px;
  font-feature-settings:
    'tnum' on,
    'lnum' on;
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
`;

export const DragIcon = styled(DragOutline)<{ $disabled?: boolean }>`
  display: flex;
  flex-shrink: 0;
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  & *[fill^='#'] {
    fill: ${({ theme }) => `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`};
  }
`;

export const Cell = styled.div<{ $dimension: TableProps['dimension']; $resizer?: boolean }>`
  display: flex;
  align-items: flex-start;
  flex: 0 0 auto;
  box-sizing: border-box;
  ${cellStyle};
  overflow: hidden;
  ${borderStyle}
`;

export const CellTextContent = styled.div<{ $cellAlign?: 'left' | 'right' }>`
  display: block;
  align-items: center;
  width: 100%;
  margin: 2px 0;
  ${({ $cellAlign }) => $cellAlign === 'right' && 'text-align: right;'}
  overflow: hidden;
`;

export const GroupTextContent = styled.div`
  display: block;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

// padding-bottom меньше padding-top на 1px, т.к. 1px остается для border-bottom ячейки
export const CheckboxCell = styled(Cell)<{ $dimension: TableProps['dimension'] }>`
  width: ${({ $dimension }) => ($dimension === 's' || $dimension === 'm' ? 44 : 56)}px;
  padding: ${({ $dimension }) => {
    switch ($dimension) {
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
  border: none;
`;

// padding-bottom меньше padding-top на 1px, т.к. 1px остается для border-bottom ячейки
export const ExpandCell = styled(Cell)<{ $dimension: TableProps['dimension'] }>`
  width: ${({ $dimension }) => ($dimension === 's' || $dimension === 'm' ? 44 : 56)}px;
  padding: ${({ $dimension }) => {
    switch ($dimension) {
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
  border: none;
`;

// padding-bottom меньше padding-top на 1px, т.к. 1px остается для border-bottom ячейки
export const DragCell = styled(Cell)<{ $dimension: TableProps['dimension'] }>`
  width: ${({ $dimension }) => ($dimension === 's' || $dimension === 'm' ? 36 : 48)}px;
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '6px 8px 5px 8px';
      case 'l':
        return '12px 12px 11px 12px';
      case 'xl':
        return '16px 12px 15px 12px';
      case 'm':
      default:
        return '10px 8px 9px 8px';
    }
  }};
  border: none;
`;

export const HeaderCell = styled.div<{ $dimension: TableProps['dimension']; $resizer?: boolean }>`
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  flex: 0 0 auto;
  ${cellStyle}
  ${borderStyle}
  cursor: default;
  &[data-draggable='true'] {
    cursor: pointer;
  }
  align-items: flex-start;
`;

export const HeaderCellContent = styled.div<{ $cellAlign: 'left' | 'right' }>`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  width: 100%;
  ${({ $cellAlign }) =>
    $cellAlign === 'right' &&
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

export const HeaderCellTitle = styled.div<{ $sort: 'asc' | 'desc' | 'initial'; $sortable: boolean }>`
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  ${({ $sortable }) => $sortable && 'cursor: pointer;'}
  &:hover {
    ${SortIcon} *[fill^='#'] {
      fill: ${({ theme, $sort }) =>
        $sort === 'initial'
          ? `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`
          : `var(--admiral-color-Primary_Primary70, ${theme.color['Primary/Primary 70']})`};
    }

    ${SortOrder} {
      color: ${({ theme, $sort }) =>
        $sort === 'initial'
          ? `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`
          : `var(--admiral-color-Primary_Primary70, ${theme.color['Primary/Primary 70']})`};
    }
  }
`;

export const TitleContent = styled.div<{ $dimension: TableProps['dimension']; $sortable?: boolean }>`
  display: flex;
  flex-direction: column;

  // leave 20px/16px for SortIcon
  max-width: ${({ $sortable, $dimension }) =>
    $sortable ? `calc(100% - ${$dimension === 's' || $dimension === 'm' ? 16 : 20}px)` : '100%'};
`;

export const Title = styled.div<{ $lineClamp: number; $withTooltip: boolean }>`
  position: relative;
  width: 100%;
  ${({ $lineClamp }) => ($lineClamp === 1 ? singleLineTitle : multiLineTitle)}
  ${({ $withTooltip }) => $withTooltip && 'cursor: pointer;'}
`;

export const ExtraText = styled(Title)<{ $dimension: TableProps['dimension'] }>`
  margin: 2px 0;
  ${extraTextStyle}
`;

const rowWidthStyle = css<{ $rowWidth?: string }>`
  width: ${(p) => p.$rowWidth};
`;

const rowHoverMixin = css`
  cursor: pointer;
  & > .tr-simple > * {
    background: var(--admiral-color-Primary_Primary10, ${(p) => p.theme.color['Primary/Primary 10']});
  }
`;

const groupRowHoverMixin = css`
  &[data-groupover='true'] > .tr-simple > * {
    background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }
`;

export const Row = styled.div<{
  $dimension: TableProps['dimension'];
  $underline: boolean;
  disabled?: boolean;
  $isGroup?: boolean;
  $rowWidth?: string;
  $hover?: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  ${(p) => (p.$isGroup ? groupRowStyle : rowStyle)}
  ${({ disabled }) => disabled && disabledRow}
  ${({ $underline }) => $underline && underlineRow}
  ${({ $rowWidth }) => $rowWidth && rowWidthStyle}
   &:hover:is(.hoverable) {
    ${({ $hover, disabled }) => $hover && !disabled && rowHoverMixin}
  }

  &[data-dragover='true'] > * {
    opacity: 0.4;
  }
  transition: opacity 0.3s ease;

  ${groupRowHoverMixin}
`;

export const SimpleRow = styled.div<{
  $showRowsActions: boolean;
  selected?: boolean;
  disabled?: boolean;
  $grey?: boolean;
  $status?: TableRow['status'];
  $rowStatusMap?: TableProps['rowBackgroundColorByStatusMap'];
}>`
  display: inline-flex;
  min-width: max-content;

  & > * {
    background: ${rowBackground};
  }

  ${({ $showRowsActions }) =>
    !$showRowsActions &&
    css`
      &:hover {
        & div[data-overflowmenu] {
          visibility: visible;
        }
      }
      & div[data-overflowmenu][data-opened='true'] {
        visibility: visible;
      }
    `}
`;

export const ExpandedRowWrapper = styled.div`
  display: inline-flex;
  overflow: hidden;
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ExpandedRowContent = styled.div`
  display: flex;
  flex: 1 0 auto;
  height: fit-content;
  box-sizing: border-box;
  padding: 0 12px 11px 12px;
`;

export const EmptyMessage = styled(Cell)`
  margin: 2px 0;
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  border: none;
`;

const getTechColumnsWidth = (p: {
  $dimension: TableProps['dimension'];
  $selectionColumn?: boolean;
  $expansionColumn?: boolean;
  $overflowMenuColumn?: boolean;
}): number =>
  (p.$selectionColumn ? (p.$dimension === 's' || p.$dimension === 'm' ? 44 : 56) : 0) +
  (p.$expansionColumn ? (p.$dimension === 's' || p.$dimension === 'm' ? 44 : 56) : 0) +
  (p.$overflowMenuColumn ? getActionSize(p.$dimension) : 0);

export const HeaderCellsWrapper = styled.div<{
  $dimension: TableProps['dimension'];
  $selectionColumn?: boolean;
  $expansionColumn?: boolean;
  $overflowMenuColumn?: boolean;
}>`
  display: flex;
  flex: 0 0 auto;
  width: calc(100% - ${(p) => getTechColumnsWidth(p) + 'px'});
`;

export const HiddenHeader = styled.div<{ $dimension: TableProps['dimension'] }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  visibility: hidden;
  display: flex;
  overflow: hidden;
  ${headerStyle}
`;

export const MirrorColumn = styled(HeaderCell)<{
  $dimension: TableProps['dimension'];
  $cssMixin?: ReturnType<typeof css>;
}>`
  position: fixed;
  z-index: 6;
  visibility: hidden;
  display: flex;
  box-sizing: border-box;
  max-width: 200px;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${({ $dimension }) =>
    $dimension === 's' || $dimension === 'm' ? typography['Subtitle/Subtitle 3'] : typography['Subtitle/Subtitle 2']}
  padding-left: ${({ $dimension }) => ($dimension === 's' || $dimension === 'm' ? 36 : 40)}px;
  border: none;

  &[data-cursor='normal'] {
    cursor: grabbing;
  }
  &[data-cursor='error'] {
    cursor: not-allowed;
  }
  & > [data-title] {
    ${singleLineTitle}
  }
  ${(p) => p.$cssMixin}
`;

export const MirrorRow = styled.div<{ $dimension: TableProps['dimension']; $cssMixin?: ReturnType<typeof css> }>`
  position: fixed;
  z-index: 6;
  visibility: hidden;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  max-width: 288px;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  padding-left: ${({ $dimension }) => ($dimension === 's' || $dimension === 'm' ? 36 : 48)}px;
  ${rowStyle}

  &[data-cursor='normal'] {
    cursor: grabbing;
  }
  &[data-cursor='error'] {
    cursor: not-allowed;
  }
  & > .td {
    width: 100%;
  }
  ${(p) => p.$cssMixin}
`;

export const Spacer = styled.div`
  display: flex;
  flex: 0 0 auto;
  will-change: min-height;
  transform: translate3d(0px, 0px, 0px);
`;

export const Edge = styled.div`
  display: flex;
  width: 0;
  height: auto;
`;

export const ActionMock = styled.div<{ $dimension: TableProps['dimension'] }>`
  display: flex;
  position: sticky;
  right: 0;
  z-index: 5;
  .table[data-shadow-right='true'] & {
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.12);
  }

  min-height: ${({ $dimension }) => getActionSize($dimension) - 1}px;
  width: ${({ $dimension }) => getActionSize($dimension)}px;
  background-color: inherit;
`;
