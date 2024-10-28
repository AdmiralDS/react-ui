import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { SuggestInput } from '@admiral-ds/react-ui';
import type { SuggestInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

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

export const SuggestInputPlaygroundTemplate = ({
  placeholder = 'Начните набирать text',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SuggestInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');
  const [isLoading, setIsLoading] = React.useState(true);
  const [options, setOptions] = React.useState<string[] | undefined>();

  const handleSelectOption = (option: string) => {
    setValue(option);
    // eslint-disable-next-line no-console
    console.log(`Selected option - ${option}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    // Если в инпуте больше 3х символов производим запрос на поиск совпадений
    if (localValue?.length < 3 && inputValue?.length > 2) {
      setIsLoading(true);
      setOptions([]);
    }
    setValue(inputValue);
    props.onChange?.(e);
  };

  // Имитация запросов на бакэнд
  React.useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        setOptions([...OPTIONS]);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <SuggestInput
        className="suggest"
        {...props}
        value={localValue}
        onChange={handleChange}
        onOptionSelect={handleSelectOption}
        options={options}
        isLoading={isLoading}
        onSearchButtonClick={() => {
          // eslint-disable-next-line no-console
          console.log('search button click');
        }}
        displayClearIcon
        dropContainerClassName="dropContainerClass"
        placeholder={placeholder}
      />
    </ThemeProvider>
  );
};
