import * as React from 'react';
import styled from 'styled-components';

import { IconButton, IconButtonGroup, TextButton, TooltipHoc } from '@admiral-ds/react-ui';
import type { IconButtonGroupProps } from '@admiral-ds/react-ui';

import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';
import { ReactComponent as ShareOutline } from '@admiral-ds/icons/build/service/ShareOutline.svg';
import { ReactComponent as EditOutline } from '@admiral-ds/icons/build/system/EditOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const T = TooltipHoc(TextButton);

export const IconButtonGroupPlaygroundTemplate = (props: IconButtonGroupProps) => (
  <>
    <IconButtonGroup dimension="s" {...props}>
      <IconButton dimension="m">
        <PrintOutline />
      </IconButton>
      <IconButton loading>
        <ShareOutline />
      </IconButton>
      <IconButton dimension="l">
        <EditOutline />
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </IconButtonGroup>
  </>
);
