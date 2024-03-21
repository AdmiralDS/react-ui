import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import type { ComponentDimension, FieldProps, InputStatus, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

interface DateTimeFieldProps extends FieldProps {
  dimension?: ComponentDimension;
}

export const DateTimeFieldStatusTemplate = ({
  label = 'Status control',
  dimension,
  disabled,
  readOnly,
  skeleton,
  status = 'success',
  extraText,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateTimeFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const fieldProps = {
    label,
    disabled,
    readOnly,
    skeleton,
    ...props,
  } as Record<string, any>;
  const baseDateTimeProps = {
    disabled,
    readOnly,
  } as Record<string, any>;
  const dateTimeProps = {
    dimension,
    skeleton,
    ...baseDateTimeProps,
  } as Record<string, any>;

  const [dateTimeStatus, setDateTimeStatus] = React.useState<InputStatus | undefined>(status);
  const [additionalText, setAdditionalText] = React.useState<string>('');

  React.useEffect(() => {
    if (disabled || readOnly) {
      setAdditionalText('');
      return;
    }
    if (extraText) {
      setAdditionalText(String(extraText));
      return;
    }
    setAdditionalText('Additional text');
  }, [disabled, readOnly, extraText]);

  React.useEffect(() => {
    if (disabled || readOnly) {
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
    if (extraText) {
      setAdditionalText(String(extraText));
      return;
    }
    setAdditionalText('Additional text');
  }, [status]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DisplayContainer>
        <Field {...fieldProps} status={dateTimeStatus} extraText={additionalText}>
          <DateTimeContainer {...baseDateTimeProps} status={dateTimeStatus} disabled={disabled || skeleton}>
            <DateTimeDateInput {...dateTimeProps} defaultValue="12.10.2022" status={dateTimeStatus} />
            <DateTimeSeparator {...baseDateTimeProps} status={dateTimeStatus} disabled={disabled || skeleton} />
            <DateTimeTimeInput {...dateTimeProps} defaultValue="12:10" status={dateTimeStatus} />
          </DateTimeContainer>
        </Field>
      </DisplayContainer>
    </ThemeProvider>
  );
};
