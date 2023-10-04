import * as React from 'react';
import styled from 'styled-components';

import { MenuItem, Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps, RenderOptionProps } from '@admiral-ds/react-ui';

import { OPTIONS } from '#src/components/input/Select/stories/data';
import { Icon, TextWrapper } from '#src/components/input/Select/stories/styled';

interface MyIncredibleOptionProps extends RenderOptionProps {
  shouldAnimate?: boolean;
  text: string;
}

const CustomOptionWrapper = styled(MenuItem)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
`;

const MyIncredibleOption = ({ text, shouldAnimate, ...props }: MyIncredibleOptionProps) => (
  <CustomOptionWrapper {...props}>
    <Icon $shouldAnimate={shouldAnimate} />
    <TextWrapper>{text}</TextWrapper>
  </CustomOptionWrapper>
);

export const SearchSelectRenderPropsTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <Select {...props} value={selectValue} mode="searchSelect" onChange={onChange}>
      {OPTIONS.map(({ text, value }) => (
        <Option
          key={value}
          value={value}
          renderOption={(options) => (
            <MyIncredibleOption
              text={text}
              shouldAnimate={options.hovered && value !== selectValue}
              {...options}
              key={value}
            />
          )}
        />
      ))}
    </Select>
  );
};
