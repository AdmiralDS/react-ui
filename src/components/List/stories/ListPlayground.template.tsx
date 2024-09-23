import * as React from 'react';
import styled from 'styled-components';
import { UnorderedList, OrderedList, ListItem } from '@admiral-ds/react-ui';
import type { UnorderedListProps } from '@admiral-ds/react-ui';

export const ListPlaygroundTemplate = (props: UnorderedListProps) => {
  return (
    <>
      <UnorderedList {...props}>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
      </UnorderedList>
      <OrderedList {...props}>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
      </OrderedList>
    </>
  );
};
