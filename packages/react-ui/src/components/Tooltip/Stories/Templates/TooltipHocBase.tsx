import * as React from 'react';
import { TooltipHoc, InputField } from '@admiral-ds/react-ui';

const TooltipedInput = TooltipHoc(InputField);

export const TooltipHocBaseTemplate = () => {
  return (
    <TooltipedInput
      renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
      label={'TooltipHoc. Базовый пример.'}
    />
  );
};
