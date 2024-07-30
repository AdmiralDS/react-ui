import * as React from 'react';
import styled from 'styled-components';

import { IconButton, IconButtonGroup } from '@admiral-ds/react-ui';
import type { IconButtonProps } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

export const IconButtonGroupPlaygroundTemplate = (props: IconButtonProps) => (
  <>
    <IconButtonGroup>
      <IconButton>
        <StarSolid />
      </IconButton>
      <IconButton>
        <StarSolid />
      </IconButton>
      <IconButton>
        <StarSolid />
      </IconButton>
      <IconButton>
        <StarSolid />
      </IconButton>
    </IconButtonGroup>
  </>
);
