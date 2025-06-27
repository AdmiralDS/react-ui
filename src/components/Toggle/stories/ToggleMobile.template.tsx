import * as React from 'react';
import styled from 'styled-components';

import { Toggle, T } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const ToggleMobileTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        При создании отдельных макетов для мобильных устройств, рекомендуется использовать вариацию комопнента размера M
        с текстом слева, который можно вытянуть на всю ширину экрана.
      </T>
      <div style={{ width: '400px' }}>
        <Toggle labelPosition="left">Some label</Toggle>
        <Separator />
        <Toggle labelPosition="left" width="200px">
          Some label
        </Toggle>
        <Separator />
        <Toggle labelPosition="left" width={300}>
          Some label
        </Toggle>
        <Separator />
        <Toggle labelPosition="left" width="100%">
          Some label
        </Toggle>
      </div>
    </>
  );
};
