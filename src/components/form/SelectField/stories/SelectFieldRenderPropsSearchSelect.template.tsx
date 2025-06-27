import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { MenuItem, Option, SelectField } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps, RenderOptionProps } from '@admiral-ds/react-ui';
import type { ChangeEvent } from 'react';

const jump = keyframes`
  50% {
    transform: translate3d(0, -7px, 0);
  }
`;

const animation = css`
  animation: ${jump} 0.35s ease-in-out;
`;

const CustomOptionWrapper = styled(MenuItem)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
`;

const Icon = styled.div<{ $shouldAnimate?: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  ${({ $shouldAnimate }) => ($shouldAnimate ? animation : '')}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

interface MyIncredibleOptionProps extends RenderOptionProps {
  shouldAnimate?: boolean;
  text: string;
}

const MyIncredibleOption = ({ text, shouldAnimate, ...props }: MyIncredibleOptionProps) => (
  <CustomOptionWrapper {...props}>
    <Icon $shouldAnimate={shouldAnimate} />
    <TextWrapper>{text}</TextWrapper>
  </CustomOptionWrapper>
);

export const SelectFieldRenderPropsSearchSelectTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <SelectField mode="searchSelect" label="SelectField с кастомными опциями" value={selectValue} onChange={onChange}>
        {OPTIONS.map(({ text, value }, index) => (
          <Option
            key={`${value}-${index}`}
            value={value}
            renderOption={(options) => (
              <MyIncredibleOption
                {...options}
                text={text}
                shouldAnimate={options.hovered && value !== selectValue}
                key={`${value}-${index}`}
              />
            )}
          />
        ))}
      </SelectField>
    </>
  );
};
