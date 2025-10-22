import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { TimePicker } from '@admiral-ds/react-ui';
import type { TimePickerProps, BorderRadiusType, SlotProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const customSlots: SlotProps[] = [
  { value: '00:00', disabled: false },
  { value: '01:00', disabled: false },
  { value: '02:00', disabled: false },
  { value: '03:00', disabled: false },
  { value: '04:00', disabled: false },
  { value: '05:00', disabled: false },
  { value: '06:00', disabled: false },
  { value: '07:00', disabled: false },
  { value: '08:00', disabled: false },
  { value: '09:00', disabled: false },
  { value: '10:00', disabled: false },
  { value: '11:00', disabled: false },
  { value: '12:00', disabled: false },
  { value: '13:00', disabled: false },
  { value: '14:00', disabled: false },
  { value: '15:00', disabled: false },
  { value: '16:00', disabled: false },
  { value: '17:00', disabled: false },
  { value: '18:00', disabled: false },
  { value: '19:00', disabled: false },
  { value: '20:00', disabled: false },
  { value: '21:00', disabled: false },
  { value: '22:00', disabled: false },
  { value: '23:00', disabled: false },
];

export const TimePickerSimpleCustomSlotsTemplate = ({
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
        dropContainerClassName="dropContainerClass"
        slots={customSlots}
      />
    </ThemeProvider>
  );
};
