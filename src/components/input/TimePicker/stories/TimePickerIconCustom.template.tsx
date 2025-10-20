import * as React from 'react';
import type { ChangeEvent } from 'react';

import { TimePicker, InputIconButton } from '@admiral-ds/react-ui';
import type { TimePickerProps } from '@admiral-ds/react-ui';
import { ReactComponent as GPSOutline } from '@admiral-ds/icons/build/location/GPSOutline.svg';
import { ReactComponent as TimeSolid } from '@admiral-ds/icons/build/system/TimeSolid.svg';

export const TimePickerIconCustomTemplate = (props: TimePickerProps) => {
  const [localValue, setLocalValue] = React.useState<string>(String(props.value ?? ''));

  React.useEffect(() => {
    if (props.value !== undefined) {
      setLocalValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setLocalValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <>
      <TimePicker
        {...props}
        style={{ maxWidth: '320px' }}
        iconsAfter={<InputIconButton icon={GPSOutline} onClick={() => setLocalValue('12:00')} />}
        icon={TimeSolid}
        value={localValue}
        onChange={handleChange}
        readOnly
        dropContainerClassName="dropContainerClass"
      />
    </>
  );
};
