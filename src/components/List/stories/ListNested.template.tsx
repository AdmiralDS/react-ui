import * as React from 'react';
import { OrderedList, UnorderedList, ListItem, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto);
`;
const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

export const ListNestedTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Списки могут быть вложенными, а разновидности могут смешиваться внутри вложенных группировок.
        <Separator />
        Отступ слева равен расстоянию от текста до левого края компонента вышестоящего уровня. То есть выравнивание идет
        по краю текста вышестоящего уровня.
      </T>
      <Separator $height={24} />
      <Layout>
        <OrderedList>
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <OrderedList>
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </OrderedList>
        <OrderedList dimension="s">
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <OrderedList dimension="s">
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </OrderedList>
        <UnorderedList>
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <UnorderedList styleType="virgule">
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </UnorderedList>
        <UnorderedList dimension="s">
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <UnorderedList dimension="s" styleType="virgule">
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </UnorderedList>
      </Layout>
    </>
  );
};
