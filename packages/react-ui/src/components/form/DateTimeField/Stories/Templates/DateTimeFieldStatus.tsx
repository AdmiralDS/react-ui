import * as React from 'react';
import styled from 'styled-components';

import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import type { ComponentDimension, FieldProps, InputStatus } from '@admiral-ds/react-ui';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

interface DateTimeFieldProps extends FieldProps {
  dimension?: ComponentDimension;
}

export const DateTimeFieldStatusTemplate = ({ status = 'success', ...props }: DateTimeFieldProps) => {
  const [dateTimeStatus, setDateTimeStatus] = React.useState<InputStatus | undefined>(status);
  const [additionalText, setAdditionalText] = React.useState<string>('');

  React.useEffect(() => {
    if (props.disabled || props.readOnly) {
      setAdditionalText('');
      return;
    }
    setAdditionalText('Additional text');
  }, [props.disabled, props.readOnly]);

  React.useEffect(() => {
    if (props.disabled || props.readOnly) {
      return;
    }
    switch (status) {
      case 'success':
        setDateTimeStatus('success');
        break;
      case 'error':
        setDateTimeStatus('error');
        break;
    }
    setAdditionalText('Additional text');
  }, [status]);

  return (
    <DisplayContainer>
      <Field
        label="Status control"
        status={dateTimeStatus}
        extraText={additionalText}
        disabled={props.disabled}
        readOnly={props.readOnly}
      >
        <DateTimeContainer status={dateTimeStatus} disabled={props.disabled} readOnly={props.readOnly}>
          <DateTimeDateInput
            defaultValue="12.10.2022"
            status={dateTimeStatus}
            disabled={props.disabled}
            readOnly={props.readOnly}
            dimension={props.dimension}
          />
          <DateTimeSeparator status={dateTimeStatus} disabled={props.disabled} readOnly={props.readOnly} />
          <DateTimeTimeInput
            defaultValue="12:10"
            status={dateTimeStatus}
            disabled={props.disabled}
            readOnly={props.readOnly}
            dimension={props.dimension}
          />
        </DateTimeContainer>
      </Field>
    </DisplayContainer>
  );
};
