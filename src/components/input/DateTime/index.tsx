import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { DateInput } from '../DateInput';
import { TimeInput } from '../TimeInput';
import { InputBorderedDiv } from '../TextInput';
import type { InputStatus } from '#src/components/input';

export type DateTimeBaseProps = { disabled?: boolean; readOnly?: boolean; status?: InputStatus };

const getFocusBorderColor = css<{ status?: InputStatus }>`
  ${({ status, theme }) => {
    if (!status) {
      return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }
    switch (status) {
      case 'error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
    }
  }}
`;

export const DateTimeDateInput = styled(DateInput)<{ disabled?: boolean; readOnly?: boolean; status?: InputStatus }>`
  flex: 1 1 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  & ${InputBorderedDiv}${InputBorderedDiv}${InputBorderedDiv} {
    border-right: none;
  }

  &:focus-within ${InputBorderedDiv}${InputBorderedDiv}${InputBorderedDiv} {
    ${(p) =>
      !p.disabled &&
      !p.readOnly &&
      css`
        border-right: 1px solid ${getFocusBorderColor};
      `};
  }
`;

DateTimeDateInput.displayName = 'DateTimeDateInput';

export const DateTimeTimeInput = styled(TimeInput)<{ disabled?: boolean; readOnly?: boolean; status?: InputStatus }>`
  flex: 0 0 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  & ${InputBorderedDiv}${InputBorderedDiv}${InputBorderedDiv} {
    border-left: none;
  }

  &:focus-within ${InputBorderedDiv}${InputBorderedDiv}${InputBorderedDiv} {
    ${(p) =>
      !p.disabled &&
      !p.readOnly &&
      css`
        border-left: 1px solid ${getFocusBorderColor};
      `};
  }
`;

DateTimeTimeInput.displayName = 'DateTimeTimeInput';

export type DateTimeSeparatorProps = DateTimeBaseProps & React.HTMLAttributes<HTMLDivElement>;

const getSeparatorColor = css<{ disabled?: boolean; readOnly?: boolean; $status?: InputStatus }>`
  ${({ disabled, readOnly, $status, theme }) => {
    if (disabled) {
      return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
    }
    if (readOnly || !$status) {
      return `var(--admiral-color-Neutral_Neutral40, ${theme.color['Neutral/Neutral 40']})`;
    }
    switch ($status) {
      case 'error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
    }
    return `var(--admiral-color-Neutral_Neutral40, ${theme.color['Neutral/Neutral 40']})`;
  }}
`;

const getHoverSeparatorColor = css<{ $status?: InputStatus }>`
  border-left-color: ${({ $status, theme }) => {
    if (!$status) {
      return `var(--admiral-color-Neutral_Neutral60, ${theme.color['Neutral/Neutral 60']})`;
    }
    switch ($status) {
      case 'error':
        return `var(--admiral-color-Error_Error70, ${theme.color['Error/Error 70']})`;
      case 'success':
        return `var(--admiral-color-Success_Success60, ${theme.color['Success/Success 60']})`;
    }
  }};
`;

const getFocusSeparatorColor = css<{ $status?: InputStatus }>`
  border-left-color: ${({ $status, theme }) => {
    if (!$status) {
      return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }
    switch ($status) {
      case 'error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
    }
  }};
`;

const DateTimeSeparatorDiv = styled.div<{ disabled?: boolean; readOnly?: boolean; $status?: InputStatus }>`
  border-left: 1px solid ${getSeparatorColor};
`;

export const DateTimeSeparator = forwardRef<HTMLDivElement, DateTimeSeparatorProps>(({ status, ...props }, ref) => {
  return <DateTimeSeparatorDiv ref={ref} $status={status} {...props} />;
});

DateTimeSeparator.displayName = 'DateTimeSeparator';

export type DateTimeContainerProps = DateTimeBaseProps & React.HTMLAttributes<HTMLDivElement>;

const DateTimeContainerDiv = styled.div<{ disabled?: boolean; readOnly?: boolean; $status?: InputStatus }>`
  display: flex;
  min-width: 288px;

  &:hover ${DateTimeSeparatorDiv} {
    ${(p) => !p.disabled && !p.readOnly && getHoverSeparatorColor};
  }
  &:focus-within ${DateTimeSeparatorDiv} {
    ${(p) => !p.disabled && !p.readOnly && getFocusSeparatorColor};
  }
`;

export const DateTimeContainer = forwardRef<HTMLDivElement, DateTimeContainerProps>(({ status, ...props }, ref) => {
  return <DateTimeContainerDiv ref={ref} $status={status} {...props} />;
});

DateTimeContainer.displayName = 'DateTimeContainer';
