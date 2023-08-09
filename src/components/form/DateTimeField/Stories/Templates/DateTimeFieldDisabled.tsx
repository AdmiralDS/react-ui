import * as React from 'react';
import styled from 'styled-components';

import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

export const DateTimeFieldDisabledTemplate = () => {
  return (
    <DisplayContainer>
      <Field label="Disabled control" disabled>
        <DateTimeContainer disabled>
          <DateTimeDateInput disabled />
          <DateTimeSeparator disabled />
          <DateTimeTimeInput disabled />
        </DateTimeContainer>
      </Field>
    </DisplayContainer>
  );
};
