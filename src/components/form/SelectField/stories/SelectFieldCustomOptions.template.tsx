import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled, { css, keyframes } from 'styled-components';

import type { SearchSelectFieldProps } from '@admiral-ds/react-ui';
import { SelectField, Option, typography, T } from '@admiral-ds/react-ui';

const jump = keyframes`
  50% {
    transform: translate3d(0, -7px, 0);
  }
`;

const animation = css`
  animation: ${jump} 0.35s ease-in-out;
`;

export const Icon = styled.div<{ shouldAnimate?: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  ${({ shouldAnimate }) => (shouldAnimate ? animation : '')}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
`;

const ExtraText = styled.div`
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  ${typography['Body/Body 2 Short']}
`;

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

export const SelectFieldCustomOptionsTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример отображения кастомных опций с использованием компонента Option
      </T>
      <SelectField mode="searchSelect" label="label" value={selectValue} onChange={onChange}>
        {OPTIONS.map((option, index) => (
          <Option key={`${option.value}-${index}`} value={option.value}>
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
