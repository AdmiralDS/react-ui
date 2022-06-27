import styled from 'styled-components';
import { ReactComponent as ChevronRight } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import type { BreadcrumbsProps } from '#src/components/Breadcrumbs';

export const Separator = styled(ChevronRight)`
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
  flex-shrink: 0;
  margin-left: 8px;
`;

export const Navigation = styled.nav`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 800px;
`;

export const Wrapper = styled.ol<{ mobile?: boolean }>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  list-style: none;
  padding: 0;
  flex-wrap: nowrap;
  overflow-x: ${({ mobile }) => (mobile ? 'scroll' : 'visible')};
  overflow-y: visible;
  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-height: none;

  & > li {
    margin-left: 4px;
  }
  & > li:first-child {
    margin-left: 0;
  }
`;

export const OverflowContentWrapper = styled.div<{ dimension: BreadcrumbsProps['dimension'] }>`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  overflow: hidden;
  height: ${({ dimension }) => (dimension === 'l' ? 28 : 24)}px;
  max-height: ${({ dimension }) => (dimension === 'l' ? 28 : 24)}px;
  width: 100%;

  & > li {
    margin-left: 4px;
  }
`;

export const Compensator = styled.div`
  display: flex;
  flex: 1;
  order: 0;
`;

export const OverflowItem = styled.li`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;
