import * as React from 'react';
import type { ChangeEvent } from 'react';

import { getTextHighlightMeta, SuggestInput } from '@admiral-ds/react-ui';
import type { SuggestInputProps } from '@admiral-ds/react-ui';

const OPTIONS = [
  'text 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'text 6',
  'text 7',
  'text 8 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 9',
  'text 10',
  'text 11',
  'text 12',
];

export const SuggestInputFilterTemplate = (props: SuggestInputProps) => {
  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');
  const [options, setOptions] = React.useState<string[] | undefined>([...OPTIONS]);

  const handleSelectOption = (option: string) => {
    setValue(option);
    // eslint-disable-next-line no-console
    console.log(`Selected option - ${option}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    setValue(inputValue);
    props.onChange?.(e);
  };

  React.useEffect(() => {
    const filteredOptions: string[] = OPTIONS.filter(
      (option) => getTextHighlightMeta(option, localValue, 'wholly').shouldHighlight,
    );
    setOptions(filteredOptions);
  }, [localValue]);

  return (
    <SuggestInput
      className="suggest"
      {...props}
      value={localValue}
      onChange={handleChange}
      onOptionSelect={handleSelectOption}
      options={options}
      onSearchButtonClick={() => {
        // eslint-disable-next-line no-console
        console.log('search button click');
      }}
      displayClearIcon
    />
  );
};
