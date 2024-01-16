import * as React from 'react';
import { FloatingButton, TooltipHoc } from '@admiral-ds/react-ui';
import type { FloatingButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const FloatingButtonWithTooltip = TooltipHoc(FloatingButton);

export const FloatingButtonTooltipTemplate = ({
  themeBorderKind,
  ...props
}: FloatingButtonProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <FloatingButtonWithTooltip badge={5} renderContent={() => 'Написать в чат'} {...props}>
        <PersonSolid />
      </FloatingButtonWithTooltip>
    </ThemeProvider>
  );
};
