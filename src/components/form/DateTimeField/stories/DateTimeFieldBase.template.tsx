import styled, { ThemeProvider } from 'styled-components';
import type { BorderRadiusType, FieldProps, ComponentDimension } from '@admiral-ds/react-ui';
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

export const DateTimeFieldBaseTemplate = ({
  label = 'Введите дату',
  dimension,
  status,
  disabled,
  readOnly,
  skeleton,
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
    status,
    disabled,
    readOnly,
  } as Record<string, any>;
  const dateTimeProps = {
    dimension,
    skeleton,
    ...baseDateTimeProps,
  } as Record<string, any>;

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DisplayContainer>
        <Field {...fieldProps}>
          <DateTimeContainer {...baseDateTimeProps} disabled={disabled || skeleton}>
            <DateTimeDateInput {...dateTimeProps} dropContainerClassName="dateDropContainerClass" />
            <DateTimeSeparator {...baseDateTimeProps} disabled={disabled || skeleton} />
            <DateTimeTimeInput {...dateTimeProps} dropContainerClassName="timeDropContainerClass" />
          </DateTimeContainer>
        </Field>
      </DisplayContainer>
    </ThemeProvider>
  );
};
