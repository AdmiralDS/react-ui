import * as React from 'react';
import { UnorderedList, OrderedList, ListItem, T } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';

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

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

export const ListMarkerCustomTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Пользователь может кастомизировать внешний вид и контент маркеров в списках с помощью параметра markerCssMixin,
        задаваемого для компонентов OrderedList и UnorderedList.
        <Separator /> В компонентах OrderedList и UnorderedList также специально введен css счётчик с именем
        admiral-list-counter. Пользователи могут опираться на значение данного счетчика для задания контента маркеров с
        использованием css функций counter() и counters().
      </T>
      <Separator $height={24} />
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
