import * as React from 'react';
import styled from 'styled-components';

import { IconButton, IconButtonGroup, TooltipHoc } from '@admiral-ds/react-ui';
import type { IconButtonGroupProps } from '@admiral-ds/react-ui';

import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';
import { ReactComponent as ShareOutline } from '@admiral-ds/icons/build/service/ShareOutline.svg';
import { ReactComponent as EditOutline } from '@admiral-ds/icons/build/system/EditOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const IconButtonWithTooltip = TooltipHoc(IconButton);

export const IconButtonGroupTooltipTemplate = (props: IconButtonGroupProps) => (
  <>
    <IconButtonGroup {...props}>
      <IconButtonWithTooltip renderContent={() => 'Print'}>
        <PrintOutline />
      </IconButtonWithTooltip>
      <IconButtonWithTooltip renderContent={() => 'Share'}>
        <ShareOutline />
      </IconButtonWithTooltip>
      <IconButtonWithTooltip renderContent={() => 'Edit'}>
        <EditOutline />
      </IconButtonWithTooltip>
      <IconButtonWithTooltip renderContent={() => 'Delete'}>
        <DeleteOutline />
      </IconButtonWithTooltip>
    </IconButtonGroup>
  </>
);
