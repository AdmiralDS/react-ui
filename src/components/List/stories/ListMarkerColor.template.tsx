import * as React from 'react';
import { UnorderedList, ListItem, ListIcon, T } from '@admiral-ds/react-ui';
import { ReactComponent as TasksOutline } from '@admiral-ds/icons/build/documents/TasksOutline.svg';
import { ReactComponent as PeopleOutline } from '@admiral-ds/icons/build/system/PeopleOutline.svg';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import styled from 'styled-components';

const ItemWithColoredMarker = styled(ListItem)<{ $color: string }>`
  &&::before {
    color: ${(p) => p.$color};
  }
`;

export const ListMarkerColorTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пользователь может кастомизировать цвет маркеров и иконок самостоятельно, как это продемонстрировано в данном
        примере.
      </T>
      <UnorderedList>
        <ListItem>Уборка</ListItem>
        <ListItem>
          Покупка продуктов
          <UnorderedList>
            <ItemWithColoredMarker $color="blue">Куриная грудка</ItemWithColoredMarker>
            <ItemWithColoredMarker $color="red">Сливки</ItemWithColoredMarker>
            <ItemWithColoredMarker $color="green">Чеснок</ItemWithColoredMarker>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Работа
          <UnorderedList styleType="icon">
            <ListItem>
              <ListIcon as={TasksOutline} color="blue" />
              Задачи
            </ListItem>
            <ListItem>
              <ListIcon as={EmailOutline} color="red" />
              Почта
            </ListItem>
            <ListItem>
              <ListIcon as={PeopleOutline} color="green" />
              Встречи
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </>
  );
};
