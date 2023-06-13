import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { TextButton } from '@admiral-ds/react-ui';
import type { TextButtonProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;

export const TextButtonPlaygroundTemplate = (props: TextButtonProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TextButton text="Text Button" iconStart={<AttachFileOutline />} {...props} />
      <Separator />
      <TextButton text="Text Button" iconEnd={<AttachFileOutline />} {...props} />
    </ThemeProvider>
  );
};
