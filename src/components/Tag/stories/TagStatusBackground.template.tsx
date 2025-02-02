import * as React from 'react';
import { Tag, Tags, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagStatusBackgroundTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Тэг также может отображать статус через цвет обводки и фона, когда нужен выраженный цветовой акцент.
        <Separator />
        Чтобы отобразить статус через цвет обводки и фона необходимо передать в компонент параметр statusViaBackground,
        установленный в true.
      </T>
      <Separator $height={24} />
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
