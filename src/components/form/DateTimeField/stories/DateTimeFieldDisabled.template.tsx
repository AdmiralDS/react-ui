import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, ComponentDimension, FieldProps } from '@admiral-ds/react-ui';
import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

interface DateTimeFieldProps extends FieldProps {
  dimension?: ComponentDimension;
}

export const DateTimeFieldDisabledTemplate = ({
  label = 'Disabled control',
  additionalLabel,
  dimension,
  status,
  disabled = true,
  readOnly,
  skeleton,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateTimeFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const fieldProps: FieldProps = {
    label,
    additionalLabel,
    status,
    disabled,
    readOnly,
    skeleton,
    ...props,
  };
  const baseDateTimeProps = {
    status,
    disabled,
    readOnly,
  };
  const dateTimeProps = {
    dimension,
    skeleton,
    ...baseDateTimeProps,
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DisplayContainer>
        <Field {...fieldProps}>
          <DateTimeContainer {...baseDateTimeProps} disabled={disabled || skeleton}>
            <DateTimeDateInput {...dateTimeProps} />
            <DateTimeSeparator {...baseDateTimeProps} disabled={disabled || skeleton} />
            <DateTimeTimeInput {...dateTimeProps} />
          </DateTimeContainer>
        </Field>
      </DisplayContainer>
    </ThemeProvider>
  );
};
