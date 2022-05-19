import styled from 'styled-components';
import { ReactComponent as ArrowUpOutline } from '@admiral-ds/icons/build/system/ArrowUpOutline.svg';
import { OpenStatusButton } from '#src/components/OpenStatusButton';

import {
  cellStyle,
  disabledRow,
  headerStyle,
  multiLineTitle,
  rowBackground,
  rowStyle,
  singleLineTitle,
  underlineRow,
  extraTextStyle,
  overflowMenuStyle,
} from './mixins';

export const TableContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
`;

export const StickyWrapper = styled.div`
  display: flex;
  position: sticky;
  left: 0;
  z-index: 5;
  background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  ${rowBackground}
  transition: box-shadow 0.3s;
  [data-shadow='true'] & {
    box-shadow: 4px 0px 12px rgba(138, 150, 168, 0.16);
  }
`;

export const OverflowMenuWrapper = styled.div<{ $offset: number }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 5;
  background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  ${rowBackground}
  ${overflowMenuStyle}
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

export const HeaderWrapperContainer = styled.div<{ scrollbar: number; greyHeader?: boolean }>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;

  [data-verticalscroll='true'] && {
    &:after {
      position: absolute;
      content: '';
      box-sizing: border-box;
      top: 0;
      right: 0;
      height: 100%;
      background: ${({ theme, greyHeader }) =>
        greyHeader ? theme.color['Neutral/Neutral 10'] : theme.color['Neutral/Neutral 00']};
      width: ${({ scrollbar }) => scrollbar}px;
      border-bottom: 1px solid ${({ theme }) => theme.color['Neutral/Neutral 20']};
    }
  }
`;

export const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  overflow-x: hidden;
  [data-verticalscroll='true'] & {
    overflow-y: scroll;
  }
  [data-greyheader='true'] & {
    background: ${({ theme }) => theme.color['Neutral/Neutral 10']};
  }
  ${headerStyle}
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

export const ExpandIconWrapper = styled.div`
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
`;

export const ExpandIcon = styled(OpenStatusButton)`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  &&:hover {
    & *[fill^='#'] {
      fill: ${(props) => props.theme.color['Neutral/Neutral 50']};
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
      fill: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    }
  }
  [data-sort='desc'] && {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
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
  overflow: visible;
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
      fill: ${({ theme }) => theme.color['Primary/Primary 70']};
    }
    [data-sort='desc'] && *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Primary/Primary 70']};
    }
    [data-sort='initial'] && *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    }
  }
`;

export const TitleContent = styled.div<{ sortable?: boolean }>`
  display: flex;
  flex-direction: column;

  // leave 20px/16px for SortIcon
  max-width: ${({ sortable }) => (sortable ? 'calc(100% - 20px)' : '100%')};

  [data-dimension='s'] && {
    max-width: ${({ sortable }) => (sortable ? 'calc(100% - 16px)' : '100%')};
  }
  [data-dimension='m'] && {
    max-width: ${({ sortable }) => (sortable ? 'calc(100% - 16px)' : '100%')};
  }
`;

export const Title = styled.div<{ lineClamp: number }>`
  position: relative;
  width: 100%;
  ${({ lineClamp }) => (lineClamp === 1 ? singleLineTitle : multiLineTitle)}
`;

export const ExtraText = styled.div<{ lineClamp: number }>`
  position: relative;
  width: 100%;
  // box-sizing: border-box;
  margin: 2px 0;
  ${extraTextStyle}
  ${({ lineClamp }) => (lineClamp === 1 ? singleLineTitle : multiLineTitle)}
`;

export const Row = styled.div<{ disabled: boolean; underline: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  ${rowStyle}
  ${({ disabled }) => disabled && disabledRow}
  ${({ underline }) => underline && underlineRow}
`;

export const SimpleRow = styled.div`
  display: inline-flex;
  min-width: max-content;
  background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  ${rowBackground}

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
