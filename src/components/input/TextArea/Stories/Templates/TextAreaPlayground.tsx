import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { TextArea } from '@admiral-ds/react-ui';
import type { TextAreaProps, Theme } from '@admiral-ds/react-ui';

export const TextAreaPlaygroundTemplate = ({
  value = 'Привет!',
  placeholder = 'Placeholder',
  ...props
}: TextAreaProps) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TextArea {...props} value={localValue} onChange={handleChange} placeholder={placeholder} />
    </ThemeProvider>
  );
};
