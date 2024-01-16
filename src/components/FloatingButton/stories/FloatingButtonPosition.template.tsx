import * as React from 'react';
import { FloatingButton } from '@admiral-ds/react-ui';
import type { FloatingButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const FloatingButtonPositionTemplate = ({
  themeBorderKind,
  ...props
}: FloatingButtonProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <FloatingButton {...props}>
        <EmailOutline />
      </FloatingButton>
      <FloatingButton style={{ insetBlockEnd: '88px' }} {...props}>
        <EmailOutline />
      </FloatingButton>
    </ThemeProvider>
  );
};
