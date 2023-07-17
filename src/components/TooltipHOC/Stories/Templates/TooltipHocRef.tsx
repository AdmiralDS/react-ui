import * as React from 'react';
import { TooltipHoc, InputField, Button } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import type { TooltipHocProps, Theme } from '@admiral-ds/react-ui';

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;

const TooltipedInput = TooltipHoc(InputField);

export const TooltipHocRefTemplate = (args: TooltipHocProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const handleBtnClick = () => {
    inputRef.current?.focus();
  };
  return (
    <ThemeProvider theme={swapBorder}>
      <TooltipedInput
        {...args}
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        ref={inputRef}
        label={'Прокидывание ref на результат вызова TooltipHoc'}
      />
      <Separator />
      <Button onClick={handleBtnClick}>Click me and focus input</Button>
    </ThemeProvider>
  );
};
