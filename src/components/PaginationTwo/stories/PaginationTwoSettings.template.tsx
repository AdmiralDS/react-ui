import { useState } from 'react';
import styled from 'styled-components';
import { PaginationTwo, T } from '@admiral-ds/react-ui';
import type { PaginationTwoProps } from '@admiral-ds/react-ui';

const Text = styled(T).attrs(() => ({
  font: 'Body/Body 1 Long',
  color: 'Neutral/Neutral 70',
  forwardedAs: 'div',
}))`
  margin-bottom: 8px;
`;

export const PaginationTwoSettingsTemplate = (args: PaginationTwoProps) => {
  const [page1, setPage1] = useState(9);
  const [page2, setPage2] = useState(9);
  const [page3, setPage3] = useState(9);
  const style = { marginBottom: '60px' };

  return (
    <>
      <Text>
        По умолчанию компонент имеет по одному значению справа и слева от текущей страницы. Аналогично по краям
        компонента — по одному значению:
      </Text>
      <PaginationTwo {...args} count={16} page={page1} onChange={(_, page) => setPage1(page)} style={style} />
      <Text>
        С помощью параметра SiblingCount можно менять количество значений рядом с текущей страницей, а с помощью
        параметра BoundaryCount — по краям.
      </Text>
      <Text>Пример: SiblingCount = 2, BoundaryCount = 1</Text>
      <PaginationTwo
        {...args}
        count={16}
        page={page2}
        siblingCount={2}
        boundaryCount={1}
        onChange={(_, page) => setPage2(page)}
        style={style}
      />
      <Text>Пример: SiblingCount = 2, BoundaryCount = 2</Text>
      <PaginationTwo
        {...args}
        count={16}
        page={page3}
        siblingCount={2}
        boundaryCount={2}
        onChange={(_, page) => setPage3(page)}
        style={style}
      />
    </>
  );
};
