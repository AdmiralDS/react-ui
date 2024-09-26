import * as React from 'react';
import { OrderedList, ListItem, T } from '@admiral-ds/react-ui';
import type { OrderedListProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, auto);
  .desc {
    grid-column-start: 1;
    grid-column-end: span 2;
    margin-top: 20px;
  }
`;

export const OrderedListVariantsTemplate = (props: OrderedListProps) => {
  return (
    <Layout>
      <T font="Body/Body 1 Long" className="desc">
        Numbers
      </T>
      <OrderedList {...props}>
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
      <OrderedList {...props} dimension="s">
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
      <T font="Body/Body 1 Long" className="desc">
        Letters lower
      </T>
      <OrderedList {...props} styleType="lower-letters">
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
      <OrderedList {...props} styleType="lower-letters" dimension="s">
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
      <T font="Body/Body 1 Long" className="desc">
        Letters upper
      </T>
      <OrderedList {...props} styleType="upper-letters">
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
      <OrderedList {...props} styleType="upper-letters" dimension="s">
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
    </Layout>
  );
};
