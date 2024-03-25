import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { TextButton } from '@admiral-ds/react-ui';
import type { TextButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;

export const TextButtonPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TextButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TextButton text="Text Button" iconStart={<AttachFileOutline />} {...props} />
      <Separator />
      <TextButton text="Text Button" iconEnd={<AttachFileOutline />} {...props} />
    </ThemeProvider>
  );
};
