import * as React from 'react';
import { FloatingButton } from '@admiral-ds/react-ui';
import type { FloatingButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const FloatingButtonPlaygroundTemplate = ({
  themeBorderKind,
  ...props
}: FloatingButtonProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <FloatingButton badge={5} {...props}>
        <PersonSolid />
      </FloatingButton>
    </ThemeProvider>
  );
};
