import * as React from 'react';
import { Tag, Tags, T } from '@admiral-ds/react-ui';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagTooltipTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        В случае ограниченного пространства используется тултип.
      </T>
      <Tags>
        <Tag width={150} onClick={clickHandler}>
          Если текст длинее ширины тэга, добавляется тултип
        </Tag>
        <Tag width={150}>Если текст длинее ширины тэга, добавляется тултип </Tag>
      </Tags>
    </>
  );
};
