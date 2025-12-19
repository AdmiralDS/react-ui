import styled from 'styled-components';
import { ReactComponent as ChevronRight } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import type { BreadcrumbsProps } from '#src/components/Breadcrumbs';

/** Стили прописаны с учетом accessability макетов,
 * то есть при задании размеров учтены размеры синей рамки, которая появляется при переходе табом на хлебную крошку.
 * */

export const Separator = styled(ChevronRight)<{ $disabled?: boolean }>`
  & *[fill^='#'] {
    fill: ${({ theme, $disabled }) =>
      $disabled
        ? `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`
        : `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`};
  }
  flex-shrink: 0;
  margin-left: 4px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Navigation = styled.nav`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 800px;
`;

export const Wrapper = styled.ol<{ $mobile?: boolean; $opacity: 0 | 1 }>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: ${({ $opacity }) => $opacity};
  flex-wrap: nowrap;
  overflow-x: ${({ $mobile }) => ($mobile ? 'scroll' : 'visible')};
  overflow-y: visible;
  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > li {
    margin-left: 4px;
  }
  & > li:first-child,
  & > li[data-overflow] {
    margin-left: 0;
  }
`;

export const OverflowContentWrapper = styled.li<{ $dimension: BreadcrumbsProps['dimension'] }>`
  display: flex;
  overflow: hidden;
  height: ${({ $dimension }) => ($dimension === 'l' ? 28 : 24)}px;
  max-height: ${({ $dimension }) => ($dimension === 'l' ? 28 : 24)}px;
  width: 100%;
`;

export const OverflowContent = styled.ol`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  & > li {
    margin-left: 4px;
  }
  & > li[data-number='0'],
  & > li:last-child {
    margin-left: 0;
  }
`;

export const Compensator = styled.li`
  display: flex;
  flex: 1;
  order: 0;
`;

export const OverflowItem = styled.li`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;
