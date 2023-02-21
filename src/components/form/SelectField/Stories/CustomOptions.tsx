import * as React from 'react';
import type { ChangeEvent } from 'react';
import type { SearchSelectFieldProps } from '#src/components/form';
import { SelectField } from '#src/components/form';
import { Option } from '#src/components/input';
import { Icon, TextWrapper, ExtraText } from '#src/components/form/SelectField/Stories/styled';

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

export const CustomOptionsTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <SelectField mode="searchSelect" label="label" value={selectValue} onChange={onChange}>
        {OPTIONS.map((option) => (
          <Option key={option.value} value={option.value}>
            <Icon />
            <TextWrapper>
              {option.text}
              <ExtraText>{option.extraText}</ExtraText>
            </TextWrapper>
          </Option>
        ))}
      </SelectField>
    </>
  );
};
