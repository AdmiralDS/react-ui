import * as React from 'react';
import styled from 'styled-components';

import { Toggle, T } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const ToggleHintTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Варианты компонента с дополнительным текстом.
      </T>
      <Toggle extraText="Add text">Dimension - m</Toggle>
      <Separator />
      <Toggle extraText="Add text" dimension="s">
        Dimension - s
      </Toggle>
      <Separator />
      <Toggle labelPosition="left" extraText="Add text">
        Dimension - m
      </Toggle>
      <Separator />
      <Toggle labelPosition="left" extraText="Add text" dimension="s">
        Dimension - s
      </Toggle>
    </>
  );
};
