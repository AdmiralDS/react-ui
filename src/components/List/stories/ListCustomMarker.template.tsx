import * as React from 'react';
import { UnorderedList, ListItem, ListIcon } from '@admiral-ds/react-ui';
import type { UnorderedListProps } from '@admiral-ds/react-ui';
import { ReactComponent as TasksOutline } from '@admiral-ds/icons/build/documents/TasksOutline.svg';
import { ReactComponent as PeopleOutline } from '@admiral-ds/icons/build/system/PeopleOutline.svg';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';

export const ListCustomMarkerTemplate = (props: UnorderedListProps) => {
  return (
    <>
      <UnorderedList {...props} styleType="circle">
        <ListItem>Уборка</ListItem>
        <ListItem>
          Покупка продуктов
          <UnorderedList {...props} nested>
            <ListItem markerColor="blue">Куриная грудка</ListItem>
            <ListItem markerColor="red">Сливки</ListItem>
            <ListItem markerColor="green">Чеснок</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Работа
          <UnorderedList {...props} nested styleType="icon">
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
