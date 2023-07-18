import * as React from 'react';
import { TooltipHoc, InputField, Button } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;

const TooltipedInput = TooltipHoc(InputField);

export const TooltipHocRefTemplate = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const handleBtnClick = () => {
    inputRef.current?.focus();
  };
  return (
    <>
      <TooltipedInput
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        ref={inputRef}
        label={'Прокидывание ref на результат вызова TooltipHoc'}
      />
      <Separator />
      <Button onClick={handleBtnClick}>Click me and focus input</Button>
    </>
  );
};