import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SuggestField } from '@admiral-ds/react-ui';
import type { SuggestFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

const OPTIONS = [
  'text 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'text 6',
];

export const SuggestFieldExampleTemplate = ({
  placeholder = 'Наберите несколько символов...',
  label = 'Поле ввода с вариантами подстановки значений',
  additionalLabel = 'Add label',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SuggestFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const cleanProps = cleanUpProps(props);

  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');
  const [isLoading, setIsLoading] = React.useState(false);
  const [options, setOptions] = React.useState<string[] | undefined>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Если в инпуте больше 3х символов производим запрос на поиск совпадений
    if (localValue?.length < 3 && inputValue?.length > 2) {
      setIsLoading(true);
      setOptions([]);
    }

    // eslint-disable-next-line no-console
    console.log(`>>> onChange: ${inputValue}`);
    setValue(inputValue);
  };

  const handleOptionSelect = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(`>>> onOptionSelect: ${value}`);
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
      <DisplayContainer>
        <SuggestField
          data-container-id="suggestFieldIdOne"
          {...cleanProps}
          defaultValue="text"
          onChange={handleChange}
          onOptionSelect={handleOptionSelect}
          options={options}
          isLoading={isLoading}
          placeholder={placeholder}
          label={label}
          additionalLabel={additionalLabel}
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};
