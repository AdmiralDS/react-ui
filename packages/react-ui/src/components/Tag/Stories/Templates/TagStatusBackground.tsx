import * as React from 'react';
import { Tag, Tags } from '@admiral-ds/react-ui';

const clickHandler = () => console.log('click active tag');

export const TagStatusBackgroundTemplate = () => {
  return (
    <>
      <Tags>
        <Tag onClick={clickHandler} statusViaBackground>
          Neutral
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="success">
          Success
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="primary">
          Primary
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="danger">
          Danger
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="warning">
          Warning
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag statusViaBackground>Neutral</Tag>
        <Tag statusViaBackground kind="success">
          Success
        </Tag>
        <Tag statusViaBackground kind="primary">
          Primary
        </Tag>
        <Tag statusViaBackground kind="danger">
          Danger
        </Tag>
        <Tag statusViaBackground kind="warning">
          Warning
        </Tag>
      </Tags>
    </>
  );
};
