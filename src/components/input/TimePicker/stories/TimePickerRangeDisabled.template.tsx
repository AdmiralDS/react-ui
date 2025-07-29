import * as React from 'react';
import type { ChangeEvent } from 'react';

import { TimePicker } from '@admiral-ds/react-ui';
import type { TimePickerProps } from '@admiral-ds/react-ui';

export const TimePickerRangeDisabledTemplate = (props: TimePickerProps) => {
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
  return (
    <>
      <TimePicker
        {...props}
        style={{ maxWidth: '320px' }}
        disabledSlots={['12:30', '15:30', '17:00', '19:30']}
        startTime="11:00"
        endTime="20:00"
        value={localValue}
        onChange={handleChange}
        dropContainerClassName="dropContainerClass"
      />
    </>
  );
};
