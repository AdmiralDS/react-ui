import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { TimePicker } from '@admiral-ds/react-ui';
import type { TimePickerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const TimePickerDisabledTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TimePickerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = React.useState<string>(String(props.value ?? ''));

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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TimePicker
        {...props}
        style={{ maxWidth: '320px' }}
        value={localValue}
        onChange={handleChange}
        disabled
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};
