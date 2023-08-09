import * as React from 'react';
import styled from 'styled-components';

import { RadioButton } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const RadioButtonSizeTemplate = () => {
  return (
    <>
      <RadioButton value={1}>Dimension - m</RadioButton>
      <Separator />
      <RadioButton value={1} dimension="s">
        Dimension - s
      </RadioButton>
    </>
  );
};
