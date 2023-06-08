import * as React from 'react';
import styled from 'styled-components';

import { IconButton, T } from '@admiral-ds/react-ui';
import type { IconButtonProps } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const WrapperIconButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: space-between;
  align-items: center;
`;

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const IconButtonAppearanceTemplate = (props: IconButtonProps) => (
  <>
    <WrapperIconButton>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Primary
        </T>
        <IconButton {...props} appearance="primary">
          <StarSolid />
        </IconButton>
      </WrapperVertical>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Secondary
        </T>
        <IconButton {...props} appearance="secondary">
          <StarSolid />
        </IconButton>
      </WrapperVertical>
    </WrapperIconButton>
  </>
);
