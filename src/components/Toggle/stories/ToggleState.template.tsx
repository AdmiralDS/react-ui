import * as React from 'react';
import styled from 'styled-components';

import { Toggle } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const ToggleStateTemplate = () => {
  return (
    <>
      <Toggle checked onChange={() => undefined}>
        Active
      </Toggle>
      <Separator />
      <Toggle checked={false} onChange={() => undefined}>
        Not active
      </Toggle>
      <Separator />
      <Toggle checked readOnly>
        Active readonly
      </Toggle>
      <Separator />
      <Toggle checked={false} readOnly>
        Not active readonly
      </Toggle>
      <Separator />
      <Toggle checked disabled>
        Active disabled
      </Toggle>
      <Separator />
      <Toggle checked={false} disabled>
        Not active disabled
      </Toggle>
    </>
  );
};
