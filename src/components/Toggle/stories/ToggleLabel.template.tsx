import * as React from 'react';
import styled from 'styled-components';

import { Toggle } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const ToggleLabelTemplate = () => {
  return (
    <>
      <Toggle />
      <Separator />
      <Toggle>Some label</Toggle>
      <Separator />
      <Toggle labelPosition="left">Some label</Toggle>
    </>
  );
};
