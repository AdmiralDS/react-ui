import * as React from 'react';
import { Tag, Tags } from '@admiral-ds/react-ui';

const clickHandler = () => console.log('click active tag');

export const TagStatusTemplate = () => {
  return (
    <>
      <Tags>
        <Tag onClick={clickHandler}>Neutral</Tag>
        <Tag onClick={clickHandler} kind="success">
          Success
        </Tag>
        <Tag onClick={clickHandler} kind="primary">
          Primary
        </Tag>
        <Tag onClick={clickHandler} as="span" kind="danger">
          Danger
        </Tag>
        <Tag onClick={clickHandler} kind="warning">
          Warning
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag>Neutral</Tag>
        <Tag kind="success">Success</Tag>
        <Tag kind="primary">Primary</Tag>
        <Tag as="span" kind="danger">
          Danger
        </Tag>
        <Tag kind="warning">Warning</Tag>
      </Tags>
    </>
  );
};
