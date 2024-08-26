import * as React from 'react';
import type { ChangeEvent } from 'react';

import { InputIconButton, TimeInput } from '@admiral-ds/react-ui';
import type { TimeInputProps } from '@admiral-ds/react-ui';
import { ReactComponent as GPSOutline } from '@admiral-ds/icons/build/location/GPSOutline.svg';
import { ReactComponent as TimeSolid } from '@admiral-ds/icons/build/system/TimeSolid.svg';

export const TimeInputIconAlternativeTemplate = (props: TimeInputProps) => {
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
      <TimeInput
        {...props}
        style={{ maxWidth: '320px' }}
        iconsAfter={<InputIconButton icon={GPSOutline} onClick={() => setValue('12:00')} />}
        icon={TimeSolid}
        value={localValue}
        onChange={handleChange}
        readOnly
        dropContainerClassName="dropContainerClass"
      />
    </>
  );
};
