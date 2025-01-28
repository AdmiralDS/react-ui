import * as React from 'react';
import { Breadcrumbs, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const MobileWrapper = styled.div`
  width: 320px;
  padding: 20px 8px 80px;
  box-sizing: border-box;
  border: 8px solid var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  border-bottom-style: none;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-top: 20px;
`;
const Wrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Separator = styled.div<{ $height?: number }>`
  height: 24px;
`;

const items = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { url: '#', text: 'page 5' },
  { url: '#', text: 'page 6' },
  { url: '#', text: 'page 7' },
  { url: '#', text: 'page 8' },
  { url: '#', text: 'page 9' },
  { url: '#', text: 'page 10' },
  { url: '#', text: 'page 11' },
  { text: 'current page' },
];

export const BreadcrumbsMobileTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        На мобильных устройствах предполагается использовать компонент в режиме адаптива (mobile). Компонент настроен
        таким образом, что если закладки не помещаются в ширину экрана, то они “выходят” за область экрана и их можно
        прокручивать свайпом, при этом текущая вкладка видна по дефолту, а вкладки, которые не помещаются, “уходят” за
        левую часть экрана (как на примере).
      </T>
      <Separator />
      <Wrapper>
        <MobileWrapper>
          <Breadcrumbs items={items} mobile />
        </MobileWrapper>
      </Wrapper>
    </>
  );
};
