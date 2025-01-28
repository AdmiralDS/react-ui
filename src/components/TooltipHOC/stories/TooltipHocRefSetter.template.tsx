import * as React from 'react';
import { TooltipHoc, InputField, Button, refSetter, T } from '@admiral-ds/react-ui';
import type { TooltipHocProps, BorderRadiusType, InputFieldProps } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;

const Component = React.forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const handleBtnClick = () => {
    inputRef.current?.focus();
  };
  return (
    <>
      <InputField ref={refSetter(ref, inputRef)} {...props} />
      <Separator />
      <Button onClick={handleBtnClick}>Click me and focus input</Button>
    </>
  );
});
const TooltipedComponent = TooltipHoc(Component);

export const TooltipHocRefSetterTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TooltipHocProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Если в ваш компонент извне передан параметр ref и у вас есть внутренний ref в компоненте, для синхронной работы
        данных рефов и их мерджа вы можете воспользоваться утилитой refSetter.
      </T>
      <TooltipedComponent
        {...props}
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        label={'Использование утилиты refSetter'}
      />
    </ThemeProvider>
  );
};
