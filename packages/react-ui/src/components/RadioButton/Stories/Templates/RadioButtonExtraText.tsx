import * as React from 'react';
import styled from 'styled-components';

import { RadioButton } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const RadioButtonExtraTextTemplate = () => {
  return (
    <>
      <RadioButton value={1} extraText="Additional text">
        Text
      </RadioButton>
      <Separator />
      <RadioButton value={1} dimension="s" extraText="Additional text">
        Text
      </RadioButton>
    </>
  );
};
