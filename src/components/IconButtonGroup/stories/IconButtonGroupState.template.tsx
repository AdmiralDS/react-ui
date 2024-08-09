import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconButton, IconButtonGroup, T } from '@admiral-ds/react-ui';
import type { IconButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';
import { ReactComponent as ShareOutline } from '@admiral-ds/icons/build/service/ShareOutline.svg';
import { ReactComponent as EditOutline } from '@admiral-ds/icons/build/system/EditOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const Separator = styled.div<{ height?: number }>`
  height: ${(p) => p.height || 20}px;
`;

export const IconButtonGroupStateTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Disable (третья иконка)</T>
    <Separator />
    <IconButtonGroup {...props}>
      <IconButton>
        <PrintOutline />
      </IconButton>
      <IconButton>
        <ShareOutline />
      </IconButton>
      <IconButton disabled>
        <EditOutline />
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </IconButtonGroup>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Loading (третья иконка)</T>
    <Separator />
    <IconButtonGroup {...props}>
      <IconButton>
        <PrintOutline />
      </IconButton>
      <IconButton>
        <ShareOutline />
      </IconButton>
      <IconButton loading>
        <EditOutline />
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </IconButtonGroup>
  </ThemeProvider>
);
