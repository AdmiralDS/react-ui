import * as React from 'react';
import styled from 'styled-components';
import { UnorderedList, ListItem, ListIcon } from '@admiral-ds/react-ui';
import type { UnorderedListProps } from '@admiral-ds/react-ui';
import { ReactComponent as TasksOutline } from '@admiral-ds/icons/build/documents/TasksOutline.svg';
import { ReactComponent as PeopleOutline } from '@admiral-ds/icons/build/system/PeopleOutline.svg';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';

export const ListPlaygroundTemplate = (props: UnorderedListProps) => {
  return (
    <>
      <UnorderedList {...props} nested={false}>
        <ListItem markerColor="red">Куриная грудка</ListItem>
        <ListItem>Мука</ListItem>
        <ListItem>
          Чеснок
          <UnorderedList {...props} nested styleType="virgule">
            <ListItem>Example 1</ListItem>
            <ListItem>Example 2</ListItem>
            <ListItem>
              Example 3
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
        </ListItem>
        <ListItem>Соевый соус</ListItem>
      </UnorderedList>
    </>
  );
};
