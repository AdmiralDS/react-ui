import * as React from 'react';
import { UnorderedList, ListItem, ListIcon } from '@admiral-ds/react-ui';
import type { UnorderedListProps } from '@admiral-ds/react-ui';
import { ReactComponent as TasksOutline } from '@admiral-ds/icons/build/documents/TasksOutline.svg';
import { ReactComponent as PeopleOutline } from '@admiral-ds/icons/build/system/PeopleOutline.svg';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';

export const ListUnorderedTemplate = (props: UnorderedListProps) => {
  return (
    <>
      <UnorderedList {...props}>
        <ListItem>Уборка</ListItem>
        <ListItem>
          Покупка продуктов
          <UnorderedList {...props} nested styleType="virgule">
            <ListItem>Куриная грудка</ListItem>
            <ListItem>Сливки</ListItem>
            <ListItem>Чеснок</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Работа
          <UnorderedList {...props} nested styleType="icon">
            <ListItem>
              <ListIcon as={TasksOutline} />
              Задачи
            </ListItem>
            <ListItem>
              <ListIcon as={EmailOutline} />
              Почта
            </ListItem>
            <ListItem>
              <ListIcon as={PeopleOutline} />
              Встречи
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </>
  );
};
