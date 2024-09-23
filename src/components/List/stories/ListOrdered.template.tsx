import * as React from 'react';
import { OrderedList, ListItem } from '@admiral-ds/react-ui';
import type { OrderedListProps } from '@admiral-ds/react-ui';

export const ListOrderedTemplate = (props: OrderedListProps) => {
  return (
    <>
      <OrderedList {...props}>
        <ListItem>Обработка запроса</ListItem>
        <ListItem>
          Исследование
          <OrderedList {...props} nested>
            <ListItem>Сбор информации</ListItem>
            <ListItem>Анализ</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
      <OrderedList {...props} style={{ marginTop: '40px' }}>
        <ListItem>Обработка запроса</ListItem>
        <ListItem>
          Исследование
          <OrderedList {...props} styleType="lower-letters" nested>
            <ListItem>Сбор информации</ListItem>
            <ListItem>Анализ</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
    </>
  );
};
