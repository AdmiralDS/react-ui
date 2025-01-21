import * as React from 'react';
import { Option, Select, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { createOptions } from '#src/components/input/Select/stories/utils';
import styled from 'styled-components';

const options = createOptions(20);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 36px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  flex: 1 0 50%;
  justify-content: space-between;
`;

export const SearchSelectWithClearInputTemplate = (props: SelectProps) => {
  const renderedOptions = () => {
    return options.map((option, ind) => (
      <Option key={option.value} value={option.value} disabled={[2, 4].includes(ind)}>
        {option.text}
      </Option>
    ));
  };

  return (
    <Container>
      <Wrapper>
        <T font={'Body/Body 1 Short'}>Введенное значение удаляется после выбора элемента(по умолчанию)</T>
        <Select
          {...props}
          multiple={true}
          dimension="xl"
          displayClearIcon={true}
          placeholder="Placeholder"
          mode="searchSelect"
        >
          {renderedOptions()}
        </Select>
      </Wrapper>

      <Wrapper>
        <T font={'Body/Body 1 Short'}>Без очистки введенного значения</T>
        <Select
          {...props}
          multiple={true}
          dimension="xl"
          displayClearIcon={true}
          placeholder="Placeholder"
          mode="searchSelect"
          clearInputValueAfterSelect={false}
        >
          {renderedOptions()}
        </Select>
      </Wrapper>
    </Container>
  );
};
