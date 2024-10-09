import * as React from 'react';
import { UnorderedList, OrderedList, ListItem } from '@admiral-ds/react-ui';
import { css } from 'styled-components';

/**
 * Контент маркера может зависить от значения счетчика.
 * В компонентах OrderedList и UnorderedList используется счетчик с именем admiral-list-counter
 **/
const latinLettersMarker = css`
  content: counter(admiral-list-counter, lower-latin) ')';
`;

const squareMarker = css`
  content: counter(admiral-list-counter, square);
`;

const checkMarker = css`
  content: '✓';
  color: green;
`;

export const ListMarkerCustomTemplate = () => {
  return (
    <>
      <OrderedList styleType="lower-letters" markerCssMixin={latinLettersMarker}>
        <ListItem>Уборка</ListItem>
        <ListItem>
          Покупка продуктов
          <UnorderedList markerCssMixin={checkMarker}>
            <ListItem>Куриная грудка</ListItem>
            <ListItem>Сливки</ListItem>
            <ListItem>Чеснок</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Работа
          <UnorderedList markerCssMixin={squareMarker}>
            <ListItem>Задачи</ListItem>
            <ListItem>Почта</ListItem>
            <ListItem>Встречи</ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>
    </>
  );
};
