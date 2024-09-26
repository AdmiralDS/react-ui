import * as React from 'react';
import { UnorderedList, ListItem, ListIcon } from '@admiral-ds/react-ui';
import type { UnorderedListProps } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

export const UnorderedListPlaygroundTemplate = ({ styleType = 'bullet', ...props }: UnorderedListProps) => {
  const withIcon = styleType === 'icon';
  return (
    <>
      <UnorderedList {...props} styleType={styleType}>
        <ListItem>{withIcon && <ListIcon as={StarSolid} />}Текст строки</ListItem>
        <ListItem>{withIcon && <ListIcon as={StarSolid} />}Текст строки</ListItem>
        <ListItem>{withIcon && <ListIcon as={StarSolid} />}Текст строки</ListItem>
        <ListItem>{withIcon && <ListIcon as={StarSolid} />}Текст строки</ListItem>
      </UnorderedList>
    </>
  );
};
