import * as React from 'react';
import { Tag, Tags } from '@admiral-ds/react-ui';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';

const clickHandler = () => console.log('click active tag');

export const TagIconTemplate = () => {
  return (
    <>
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
