import * as React from 'react';
import type { ChangeEvent } from 'react';

import { TimePicker } from '@admiral-ds/react-ui';
import type { TimePickerProps } from '@admiral-ds/react-ui';
import { ReactComponent as GPSOutline } from '@admiral-ds/icons/build/location/GPSOutline.svg';

export const TimePickerIconCustomTemplate = (props: TimePickerProps) => {
  const [localValue, setLocalValue] = React.useState<string>(String(props.value) ?? '');

  React.useEffect(() => {
    if (props.value !== undefined) {
      setLocalValue(String(props.value));
    }
  }, [props.value]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setLocalValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <>
      <TimePicker
        {...props}
        style={{ maxWidth: '320px' }}
        icon={GPSOutline}
        value={localValue}
        onInput={handleInputChange}
        dropContainerClassName="dropContainerClass"
      />
    </>
  );
};
