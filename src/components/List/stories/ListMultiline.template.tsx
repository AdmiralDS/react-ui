import * as React from 'react';
import { UnorderedList, ListItem, T } from '@admiral-ds/react-ui';

export const ListMultiLineTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пользователь может настроить необходимую ширину компонента самостоятельно, например, через атрибут style. По
        умолчанию компонент подстраивается под размеры родительского элемента.
      </T>
      <UnorderedList style={{ maxWidth: '500px' }}>
        <ListItem>First, let's set up your Segment Unify space. We'll take you to Segment to do this.</ListItem>
        <ListItem>
          The segment uses IDs to find customer profiles. Give your IDs display names and select IDs to use when
          automatically finding profiles.
        </ListItem>
        <ListItem>
          Customer profiles in your Segment Unify space can include a large number of traits. Select the traits you want
          to make available to Flex agents and give them display names.
        </ListItem>
      </UnorderedList>
    </>
  );
};
