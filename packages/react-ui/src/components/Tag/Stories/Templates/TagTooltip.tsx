import * as React from 'react';
import { Tag, Tags } from '@admiral-ds/react-ui';

const clickHandler = () => console.log('click active tag');

export const TagTooltipTemplate = () => {
  return (
    <>
      <Tags>
        <Tag width={150} onClick={clickHandler}>
          Если текст длинее ширины тэга, добавляется тултип
        </Tag>
        <Tag width={150}>Если текст длинее ширины тэга, добавляется тултип </Tag>
      </Tags>
    </>
  );
};
