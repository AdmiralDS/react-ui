import styled from 'styled-components';

import { typography } from '../Typography';

import type { Dimension } from './constants';
import {
  BADGE_MARGIN,
  ICON_MARGIN,
  ICON_SIZE_L,
  ICON_SIZE_M,
  LINE_HEIGHT,
  TAB_HEIGHT_L,
  TAB_HEIGHT_M,
  TAB_PADDING_L,
  TAB_PADDING_M,
} from './constants';

export const Wrapper = styled.div<{ underline?: boolean; mobile?: boolean }>`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 -${LINE_HEIGHT} 0 0 ${({ theme, underline }) => (underline ? theme.color.background.tertiary : 'transparent')};
  overflow-x: ${({ mobile }) => (mobile ? 'scroll' : 'visible')};

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-height: none;
`;

/**
 * Для исправления бага в IE (скачет контент) вместо flex: 1 1 auto используем margin-right: auto
 * Это позволяет избежать скачков контента и при этом ширина TabsWrapper будет равна ровно ширине его контента и не более.
 * Это напрямую влияет на работу observer, повешенного на tabsWrapperRef.current в файле index.ts.
 */
export const TabsWrapper = styled.div`
  display: flex;
  margin-right: auto;
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  background-color: ${({ theme }) => theme.color.basic.primary};
  height: ${LINE_HEIGHT};
  transition: all 0.2s ease-out;
`;

export const TabContent = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const TabContentWrapper = styled.span<{ dimension: Dimension }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${({ dimension }) => (dimension === 'l' ? TAB_PADDING_L : TAB_PADDING_M)};
`;

export const Tab = styled.button<{ dimension: Dimension; selected: boolean }>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  height: ${({ dimension }) => (dimension === 'm' ? TAB_HEIGHT_M : TAB_HEIGHT_L)}px;
  padding: 0;
  background: transparent;
  appearance: none;
  border: none;
  ${({ dimension }) => (dimension === 'm' ? typography['Additional/S'] : typography['Additional/L'])}
  ${({ selected, theme }) => !selected && `color: ${theme.color.text.secondary};`}
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus:not(:active) {
    &:before {
      position: absolute;
      content: '';
      border: ${LINE_HEIGHT} solid ${({ theme }) => theme.color.basic.hover};
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  &:focus,
  & > ${TabContentWrapper} {
    outline: none;
  }

  & svg {
    display: inline-block;
    flex: 1 0 auto;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.secondary};
    }
    width: ${({ dimension }) => (dimension === 'm' ? ICON_SIZE_M : ICON_SIZE_L)}px;
    height: ${({ dimension }) => (dimension === 'm' ? ICON_SIZE_M : ICON_SIZE_L)}px;
    margin-right: ${ICON_MARGIN};
  }
  & [data-badge] {
    margin-left: ${BADGE_MARGIN};
  }

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.color.basic.hover};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
    [data-badge] {
      background: ${({ theme }) => theme.color.basic.hover};
      color: ${({ theme }) => theme.color.text.staticWhite};
    }
  }
  &:active:not(:disabled) {
    color: ${({ theme }) => theme.color.basic.press};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.press};
    }
    [data-badge] {
      background: ${({ theme }) => theme.color.basic.press};
      color: ${({ theme }) => theme.color.text.staticWhite};
    }
  }
  &:disabled {
    color: ${({ theme }) => theme.color.text.tertiary};
    cursor: default;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.tertiary};
    }
  }
`;
