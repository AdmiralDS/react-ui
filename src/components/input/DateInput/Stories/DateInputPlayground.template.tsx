import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { DateInput } from '@admiral-ds/react-ui';
import type { DateInputProps, Theme } from '@admiral-ds/react-ui';

export const DateInputPlaygroundTemplate = (props: DateInputProps) => {
  console.log(`После очистки:\n`);
  console.dir(props);
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
      <DateInput
        {...props}
        value={localValue}
        onChange={handleChange}
        placeholder={'Some placeholder'}
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};
