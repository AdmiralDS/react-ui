import * as React from 'react';
import styled from 'styled-components';

import { RadioButton } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const RadioButtonStateTemplate = () => {
  return (
    <>
      <RadioButton value={1} checked onChange={() => undefined}>
        Checked
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked={false} onChange={() => undefined}>
        Not checked
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked readOnly>
        Checked readonly
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked={false} readOnly>
        Not checked readonly
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked disabled onChange={() => undefined}>
        Checked disabled
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked={false} disabled onChange={() => undefined}>
        Not checked disabled
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked={false} error onChange={() => undefined}>
        Not checked error
      </RadioButton>
    </>
  );
};
