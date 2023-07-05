import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { TimeInput } from '@admiral-ds/react-ui';
import type { TimeInputProps, Theme } from '@admiral-ds/react-ui';

export const TimeInputSimpleTemplate = (props: TimeInputProps) => {
  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');

  React.useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      <TimeInput
        {...props}
        style={{ maxWidth: '320px' }}
        value={localValue}
        onChange={handleChange}
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};
