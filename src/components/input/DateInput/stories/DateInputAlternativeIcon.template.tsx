import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { ReactComponent as CalendarSolidSVG } from '@admiral-ds/icons/build/system/CalendarSolid.svg';
import { DateInput } from '@admiral-ds/react-ui';
import type { DateInputProps } from '@admiral-ds/react-ui';

export const DateInputAlternativeIconTemplate = (props: DateInputProps) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <DateInput
      {...props}
      value={value}
      onChange={handleChange}
      placeholder={'Другая иконка ->'}
      style={{ maxWidth: 300 }}
      dropContainerClassName="dropContainerClass"
      icon={CalendarSolidSVG}
    />
  );
};
