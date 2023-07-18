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

export const DateTimeFieldReadOnlyTemplate = () => {
  return (
    <DisplayContainer>
      <Field label="read only control" readOnly>
        <DateTimeContainer readOnly>
          <DateTimeDateInput defaultValue="12.10.2022" readOnly />
          <DateTimeSeparator readOnly />
          <DateTimeTimeInput defaultValue="12:10" readOnly />
        </DateTimeContainer>
      </Field>
    </DisplayContainer>
  );
};
