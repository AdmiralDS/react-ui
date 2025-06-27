import * as React from 'react';
import { Tag, Tags, T } from '@admiral-ds/react-ui';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagIconTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Тэги могут быть с иконками, но только в том случае, если статус отображается через цвет обводки и фона (параметр
        statusViaBackground установлен в true).
      </T>
      <Tags>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />}>
          Neutral
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="success">
          Success
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="primary">
          Primary
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="danger">
          Danger
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="warning">
          Warning
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />}>
          Neutral
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="success">
          Success
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="primary">
          Primary
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="danger">
          Danger
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="warning">
          Warning
        </Tag>
      </Tags>
    </>
  );
};
