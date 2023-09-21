import * as React from 'react';
import { TooltipHoc, InputField } from '@admiral-ds/react-ui';
import type { TooltipHocProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const TooltipedInput = TooltipHoc(InputField);

export const TooltipHocBaseTemplate = ({
  themeBorderKind,
  ...props
}: TooltipHocProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <TooltipedInput
        {...props}
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        label={'TooltipHoc. Базовый пример.'}
      />
    </ThemeProvider>
  );
};
