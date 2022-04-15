import styled from 'styled-components';
import { ReactComponent as ChevronRight } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

export const Separator = styled(ChevronRight)`
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
  flex-shrink: 0;
  margin-left: 8px;
`;

export const Wrapper = styled.ol<{ mobile?: boolean }>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 800px;
  list-style: none;
  padding: 0;
  & > li {
    margin-left: 4px;
  }
  & > li:first-child {
    margin-left: 0;
  }

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

export const Content = styled.div`
  display: flex;
  align-items: center;
`;
