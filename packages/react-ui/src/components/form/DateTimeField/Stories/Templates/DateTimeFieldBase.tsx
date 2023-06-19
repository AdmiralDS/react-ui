import * as React from 'react';

import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import type { ComponentDimension, FieldProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

interface DateTimeFieldProps extends FieldProps {
  dimension?: ComponentDimension;
}

export const DateTimeFieldBaseTemplate = (props: DateTimeFieldProps) => {
  return (
    <DisplayContainer>
      <Field label="Введите дату">
        <DateTimeContainer>
          <DateTimeDateInput dropContainerClassName="dateDropContainerClass" />
          <DateTimeSeparator />
          <DateTimeTimeInput dropContainerClassName="timeDropContainerClass" />
        </DateTimeContainer>
      </Field>
    </DisplayContainer>
  );
};
