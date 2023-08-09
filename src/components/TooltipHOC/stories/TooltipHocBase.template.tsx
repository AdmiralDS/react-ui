import * as React from 'react';
import { TooltipHoc, InputField } from '@admiral-ds/react-ui';
import type { TooltipHocProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

const TooltipedInput = TooltipHoc(InputField);

export const TooltipHocBaseTemplate = (args: TooltipHocProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TooltipedInput
        {...args}
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        label={'TooltipHoc. Базовый пример.'}
      />
    </ThemeProvider>
  );
};
