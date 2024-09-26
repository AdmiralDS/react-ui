import * as React from 'react';
import { UnorderedList, ListItem, ListIcon, T } from '@admiral-ds/react-ui';
import type { UnorderedListProps } from '@admiral-ds/react-ui';
import { ReactComponent as TasksOutline } from '@admiral-ds/icons/build/documents/TasksOutline.svg';
import { ReactComponent as PeopleOutline } from '@admiral-ds/icons/build/system/PeopleOutline.svg';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
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

export const UnorderedListVariantsTemplate = (props: UnorderedListProps) => {
  return (
    <Layout>
      <T font="Body/Body 1 Long" className="desc">
        Bullet
      </T>
      <UnorderedList {...props}>
        <ListItem>Уборка</ListItem>
        <ListItem>Покупка продуктов</ListItem>
        <ListItem>Работа</ListItem>
      </UnorderedList>
      <UnorderedList {...props} dimension="s">
        <ListItem>Уборка</ListItem>
        <ListItem>Покупка продуктов</ListItem>
        <ListItem>Работа</ListItem>
      </UnorderedList>
      <T font="Body/Body 1 Long" className="desc">
        Virgule
      </T>
      <UnorderedList {...props} styleType="virgule">
        <ListItem>Куриная грудка</ListItem>
        <ListItem>Сливки</ListItem>
        <ListItem>Чеснок</ListItem>
      </UnorderedList>
      <UnorderedList {...props} styleType="virgule" dimension="s">
        <ListItem>Куриная грудка</ListItem>
        <ListItem>Сливки</ListItem>
        <ListItem>Чеснок</ListItem>
      </UnorderedList>
      <T font="Body/Body 1 Long" className="desc">
        Icon
      </T>
      <UnorderedList {...props} styleType="icon">
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
      <UnorderedList {...props} styleType="icon" dimension="s">
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
    </Layout>
  );
};
