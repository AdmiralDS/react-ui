import { useState } from 'react';
import styled from 'styled-components';
import { PaginationTwo, T } from '@admiral-ds/react-ui';
import type { PaginationTwoProps } from '@admiral-ds/react-ui';

const MobileWrapper = styled.div`
  width: 320px;
  padding-top: 16px;
  box-sizing: border-box;
  border: 8px solid var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  border-top-style: none;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  margin-bottom: 20px;
`;
const PaginationWrapper = styled.div`
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
const Text = styled(T).attrs(() => ({
  font: 'Body/Body 1 Long',
  color: 'Neutral/Neutral 70',
  forwardedAs: 'div',
}))`
  margin-bottom: 8px;
`;

export const PaginationTwoMobileTemplate = (args: PaginationTwoProps) => {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const style = { marginBottom: '60px' };

  return (
    <>
      <Text>
        В мобильной версии компонента нет стрелок навигации. Компонент можно растягивать во всю ширину экрана устройства
        (с учетом отступов по бокам экрана).
      </Text>
      <MobileWrapper style={{ height: '150px' }}>
        <PaginationWrapper>
          <PaginationTwo {...args} count={7} page={page1} onChange={(_, page) => setPage1(page)} mobile style={style} />
        </PaginationWrapper>
      </MobileWrapper>
      <Text>Можно использовать без кнопки “Дальше”, особенно, если не много страниц.</Text>
      <MobileWrapper style={{ height: '100px' }}>
        <PaginationWrapper>
          <PaginationTwo
            {...args}
            count={7}
            page={page2}
            onChange={(_, page) => setPage2(page)}
            style={style}
            mobile
            showNextBtnMobile={false}
          />
        </PaginationWrapper>
      </MobileWrapper>
    </>
  );
};
