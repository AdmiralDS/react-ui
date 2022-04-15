import styled from 'styled-components';
import { ReactComponent as ArrowUpOutline } from '@admiral-ds/icons/build/system/ArrowUpOutline.svg';
import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';

import {
  cellStyle,
  rowStyle,
  headerStyle,
  singleLineTitle,
  multiLineTitle,
  disabledRow,
  underlineRow,
  rowBackground,
} from './mixins';

export const TableContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.background.primary};
`;

export const StickyWrapper = styled.div`
  display: flex;
  position: sticky;
  left: 0;
  z-index: 5;
  background: ${({ theme }) => theme.color.background.primary};
  ${rowBackground}
  transition: box-shadow 0.3s;
  [data-shadow='true'] & {
    box-shadow: 4px 0px 12px rgba(138, 150, 168, 0.16);
  }
`;

export const ScrollbarCompensator = styled.div<{ width: string }>`
  display: flex;
  flex: 1 1 auto;
  min-width: ${({ width }) => width};
  max-width: ${({ width }) => width};
`;

export const Filler = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: unset;
`;

export const Header = styled.div<{ greyHeader?: boolean }>`
  flex: 0 0 auto;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  ${({ greyHeader, theme }) => greyHeader && `background: ${theme.color.background.tertiary};`}
  ${headerStyle}
  transform: translateZ(0);

  & > * {
    border-bottom: 1px solid ${({ theme }) => theme.color.basic.disable};
  }
`;

export const ScrollTableBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1 1 auto;
`;

export const ExpandIcon = styled(ChevronDownOutline)`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);
  cursor: pointer;
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.secondary};
  }
  &:hover *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.hover};
  }
  [data-expanded='true'] & {
    transform: rotate(180deg);
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.press};
    }
    &:hover *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.tertiary};
    }
  }
`;

export const SortIcon = styled(ArrowUpOutline)`
  display: flex;
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);
  margin: 2px 0;

  [data-sort='asc'] && {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.primary};
    }
  }
  [data-sort='desc'] && {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.primary};
    }
    transform: rotate(180deg);
  }
  [data-sort='initial'] && *[fill^='#'] {
    fill: transparent;
  }
`;

export const Cell = styled.div`
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

// padding-bottom меньше padding-top на 1px, т.к. 1px остается для border-bottom ячейки
export const CheckboxCell = styled(Cell)`
  width: unset;
  overflow: visible;
  [data-dimension='s'] && {
    padding: 8px 2px 7px 14px;
  }
  [data-dimension='m'] && {
    padding: 12px 2px 11px 14px;
  }
  [data-dimension='l'] && {
    padding: 14px 2px 13px 18px;
  }
  [data-dimension='xl'] && {
    padding: 18px 2px 17px 18px;
  }
`;

// padding-bottom меньше padding-top на 1px, т.к. 1px остается для border-bottom ячейки
export const ExpandCell = styled(Cell)`
  [data-dimension='s'] && {
    padding: 6px 0px 5px 12px;
    width: 32px;
  }
  [data-dimension='m'] && {
    padding: 10px 0px 9px 12px;
    width: 32px;
  }
  [data-dimension='l'] && {
    padding: 12px 0px 11px 16px;
    width: 40px;
  }
  [data-dimension='xl'] && {
    padding: 16px 0px 15px 16px;
    width: 40px;
  }
`;

export const HeaderCell = styled.div`
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

export const HeaderCellContent = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  width: 100%;
  [data-cellalign='right'] & {
    flex-direction: row-reverse;
  }
`;

export const HeaderCellSpacer = styled.div<{ width?: string }>`
  display: flex;
  align-self: stretch;
  width: ${(p) => (p.width ? p.width : '12px')};
  flex-shrink: 0;
`;

export const HeaderCellTitle = styled.div`
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  [data-cellalign='right'] & {
    text-align: right;
    flex-direction: row-reverse;
  }
  &:hover {
    [data-sort='asc'] && *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
    [data-sort='desc'] && *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
    [data-sort='initial'] && *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.secondary};
    }
  }
`;

export const Title = styled.div<{ sortable?: boolean; lineClamp: number }>`
  position: relative;
  ${({ lineClamp }) => (lineClamp === 1 ? singleLineTitle : multiLineTitle)}

  // leave 20px/16px for SortIcon
  max-width: ${({ sortable }) => (sortable ? 'calc(100% - 20px)' : '100%')};

  [data-dimension='s'] && {
    max-width: ${({ sortable }) => (sortable ? 'calc(100% - 16px)' : '100%')};
  }
  [data-dimension='m'] && {
    max-width: ${({ sortable }) => (sortable ? 'calc(100% - 16px)' : '100%')};
  }
`;

export const Row = styled.div<{ disabled: boolean; underline: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  background: ${({ theme }) => theme.color.background.primary};
  ${rowStyle}
  ${({ disabled }) => disabled && disabledRow}
  ${({ underline }) => underline && underlineRow}
`;

export const SimpleRow = styled.div`
  display: inline-flex;
  min-width: max-content;
  background: ${({ theme }) => theme.color.background.primary};
  ${rowBackground}
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
