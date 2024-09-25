import * as React from 'react';
import { OrderedList, ListItem } from '@admiral-ds/react-ui';
import type { OrderedListProps } from '@admiral-ds/react-ui';

export const OrderedListPlaygroundTemplate = ({ styleType = 'numbers', ...props }: OrderedListProps) => {
  return (
    <>
      <OrderedList {...props} styleType={styleType}>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
      </OrderedList>
    </>
  );
};
