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

export const IconButtonStateTemplate = (props: IconButtonProps) => (
  <>
    <WrapperIconButton>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Loading
        </T>
        <IconButton loading dimension={props.dimension} />
      </WrapperVertical>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Disabled
        </T>
        <IconButton disabled dimension={props.dimension}>
          <StarSolid />
        </IconButton>
      </WrapperVertical>
      {/*<div>*/}
      {/*  <T font="Body/Body 1 Long" as="div">*/}
      {/*    Skeleton*/}
      {/*  </T>*/}
      {/*  <IconButton skeleton dimension="xl" />*/}
      {/*</div>*/}
    </WrapperIconButton>
  </>
);
