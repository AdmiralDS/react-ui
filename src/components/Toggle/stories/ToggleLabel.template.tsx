import * as React from 'react';
import styled from 'styled-components';

import { Toggle, T } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const ToggleLabelTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Варианты компонента без подписи, с подписью слева и справа.
      </T>
      <Toggle />
      <Separator />
      <Toggle>Some label</Toggle>
      <Separator />
      <Toggle labelPosition="left">Some label</Toggle>
    </>
  );
};
