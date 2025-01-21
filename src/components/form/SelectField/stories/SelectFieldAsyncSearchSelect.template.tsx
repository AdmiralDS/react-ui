import * as React from 'react';

import { Option, SelectField } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps } from '@admiral-ds/react-ui';
import type { ChangeEvent } from 'react';

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
    extraText: 'Доп Теttкст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
    extraText: 'дддопТекст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
    extraText: 'Доооп Тексттт 41232',
  },
];

async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const SelectFieldAsyncSearchSelectTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);
  const [options, setOptions] = React.useState<Array<{ value: string; text: string }>>([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await wait(2000);
      setOptions(OPTIONS.map(({ value, text }) => ({ value, text })));
      setIsLoading(false);
    })();
  }, [searchValue]);

  // Пример работы с нативным событием клавиатуры на внутреннем input
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    function keyboardEventListener(e: KeyboardEvent) {
      // eslint-disable-next-line no-console
      console.log(`Нативное событие ${e}`);
    }
    const inputNode = inputRef.current;
    if (inputNode) {
      inputNode.addEventListener('keydown', keyboardEventListener);
      return () => inputNode.removeEventListener('keydown', keyboardEventListener);
    }
  }, []);

  return (
    <>
      <SelectField
        mode="searchSelect"
        label="label"
        value={selectValue}
        isLoading={isLoading}
        onChange={onChange}
        onInputChange={onInputChange}
        // eslint-disable-next-line no-console
        onInputKeyDown={(e) => console.log(e.key)}
        inputTargetRef={inputRef}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.text}
          </Option>
        ))}
      </SelectField>
    </>
  );
};
