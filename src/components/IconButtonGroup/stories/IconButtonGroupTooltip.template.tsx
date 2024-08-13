import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { IconButton, IconButtonGroup, TooltipHoc } from '@admiral-ds/react-ui';
import type { IconButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';
import { ReactComponent as ShareOutline } from '@admiral-ds/icons/build/service/ShareOutline.svg';
import { ReactComponent as EditOutline } from '@admiral-ds/icons/build/system/EditOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const IconButtonWithTooltip = TooltipHoc(IconButton);

export const IconButtonGroupTooltipTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
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
  </ThemeProvider>
);
