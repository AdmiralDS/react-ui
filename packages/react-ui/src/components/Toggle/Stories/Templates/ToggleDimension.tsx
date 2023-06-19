import * as React from 'react';
import styled from 'styled-components';

import { Toggle } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const ToggleDimensionTemplate = () => {
  return (
    <>
      <Toggle>Dimension - m</Toggle>
      <Separator />
      <Toggle dimension="s">Dimension - s</Toggle>
    </>
  );
};
