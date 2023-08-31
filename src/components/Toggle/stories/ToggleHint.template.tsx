import * as React from 'react';
import styled from 'styled-components';

import { Toggle } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const ToggleHintTemplate = () => {
  return (
    <>
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
