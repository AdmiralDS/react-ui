import * as React from 'react';
import { FloatingButton, TooltipHoc } from '@admiral-ds/react-ui';
import type { FloatingButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as ChatOutline } from '@admiral-ds/icons/build/category/ChatOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const FloatingButtonWithTooltip = TooltipHoc(FloatingButton);

export const FloatingButtonTooltipTemplate = ({
  themeBorderKind,
  ...props
}: FloatingButtonProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <FloatingButtonWithTooltip renderContent={() => 'Написать в чат'} tooltipPosition="left" {...props}>
        <ChatOutline />
      </FloatingButtonWithTooltip>
    </ThemeProvider>
  );
};
