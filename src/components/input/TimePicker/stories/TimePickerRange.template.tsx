import * as React from 'react';
import type { ChangeEvent } from 'react';

import { TimePicker } from '@admiral-ds/react-ui';
import type { TimePickerProps } from '@admiral-ds/react-ui';

export const TimePickerRangeTemplate = (props: TimePickerProps) => {
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
    <>
      <TimePicker
        {...props}
        style={{ maxWidth: '320px' }}
        startTime="09:00"
        endTime="18:00"
        value={localValue}
        onChange={handleChange}
        dropContainerClassName="dropContainerClass"
      />
    </>
  );
};
