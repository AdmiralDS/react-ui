import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

export const DateTimeFieldBaseTemplate = () => {
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
