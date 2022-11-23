import styled, { css } from 'styled-components';
import { ReactComponent as ArrowUpOutline } from '@admiral-ds/icons/build/system/ArrowUpOutline.svg';
import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import type { TableProps } from '#src/components/Table';

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

export const StickyWrapper = styled.div<{ greyHeader?: boolean }>`
  display: flex;
  position: sticky;
  left: 0;
  z-index: 5;
  background: ${({ theme, greyHeader }) =>
    greyHeader ? theme.color['Neutral/Neutral 05'] : theme.color['Neutral/Neutral 00']};
  transition: box-shadow 0.3s;
  ${TableContainer}[data-shadow='true'] & {
    box-shadow: 4px 0 12px rgba(138, 150, 168, 0.16);
  }
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
  transform: translateZ(0);

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
  width: unset;
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

export const Row = styled.div<{
  dimension: TableProps['dimension'];
  underline: boolean;
  disabled?: boolean;
  isGroup?: boolean;
  rowWidth?: number;
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
