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

export const PaginationTwoVariantsTemplate = (args: PaginationTwoProps) => {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(1);
  const [page4, setPage4] = useState(1);
  const [page5, setPage5] = useState(1);
  const [page6, setPage6] = useState(1);
  const style = { marginBottom: '60px' };

  return (
    <>
      <Text>Если страниц 7 или меньше, то выводится полный перечень страниц без сокращений:</Text>
      <PaginationTwo {...args} count={7} page={page1} onChange={(_, page) => setPage1(page)} style={style} />
      <Text>
        Если страниц больше, чем 7, то через многоточие указывается ссылка на последнюю страницу в последовательности:
      </Text>
      <PaginationTwo {...args} count={16} page={page2} onChange={(_, page) => setPage2(page)} style={style} />
      <Text>Если страниц больше 21, то можно вводить номер страницы вручную через поле ввода:</Text>
      <PaginationTwo {...args} count={22} page={page3} onChange={(_, page) => setPage3(page)} style={style} />
      <Text>
        Возможны случаи, когда некоторые страницы недоступны. Также блокируются боковые стрелки по достижении
        начала/конца списка
      </Text>
      <PaginationTwo
        {...args}
        count={7}
        page={page4}
        disabledPages={[3]}
        onChange={(_, page) => setPage4(page)}
        style={style}
      />
      <Text>Опционально можно показывать количество записей:</Text>
      <PaginationTwo
        {...args}
        count={7}
        page={page5}
        pageSize={20}
        totalItems={130}
        onChange={(_, page) => setPage5(page)}
        style={style}
      />
      <PaginationTwo
        {...args}
        count={22}
        page={page6}
        pageSize={10}
        totalItems={215}
        onChange={(_, page) => setPage6(page)}
      />
    </>
  );
};
