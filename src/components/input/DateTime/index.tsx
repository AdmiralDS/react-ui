import { forwardRef } from 'react';
import styled from 'styled-components';

import { DateInput } from '../DateInput';
import { TimeInput } from '../TimeInput';
import { InputBorderedDiv } from '../TextInput';
import type { InputStatus } from '#src/components/input';

export type DateTimeBaseProps = { disabled?: boolean; readOnly?: boolean; status?: InputStatus };

function getFocusBorderColor(status?: InputStatus) {
  if (!status) return 'Primary/Primary 60 Main';
  switch (status) {
    case 'error':
      return 'Error/Error 60 Main';
    case 'success':
      return 'Success/Success 50 Main';
  }
}

export const DateTimeDateInput = styled(DateInput)<{ disabled?: boolean; readOnly?: boolean; status?: InputStatus }>`
  flex: 1 1 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  & ${InputBorderedDiv}${InputBorderedDiv}${InputBorderedDiv} {
    border-right: none;
  }

  &:focus-within ${InputBorderedDiv}${InputBorderedDiv}${InputBorderedDiv} {
    ${(p) => !p.disabled && !p.readOnly && `border-right: 1px solid ${p.theme.color[getFocusBorderColor(p.status)]}`};
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
    ${(p) => !p.disabled && !p.readOnly && `border-left: 1px solid ${p.theme.color[getFocusBorderColor(p.status)]}`};
  }
`;

DateTimeTimeInput.displayName = 'DateTimeTimeInput';

export type DateTimeSeparatorProps = DateTimeBaseProps & React.HTMLAttributes<HTMLDivElement>;

function getSeparatorColor(disabled?: boolean, readOnly?: boolean, status?: InputStatus) {
  if (disabled) return 'Neutral/Neutral 30';
  if (readOnly || !status) return 'Neutral/Neutral 40';
  switch (status) {
    case 'error':
      return 'Error/Error 60 Main';
    case 'success':
      return 'Success/Success 50 Main';
  }
  return 'Neutral/Neutral 40';
}

function getHoverSeparatorColor(status?: InputStatus) {
  if (!status) return 'Neutral/Neutral 60';
  switch (status) {
    case 'error':
      return 'Error/Error 70';
    case 'success':
      return 'Success/Success 60';
  }
}

function getFocusSeparatorColor(status?: InputStatus) {
  if (!status) return 'Primary/Primary 60 Main';
  switch (status) {
    case 'error':
      return 'Error/Error 60 Main';
    case 'success':
      return 'Success/Success 50 Main';
  }
}

const DateTimeSeparatorDiv = styled.div<{ disabled?: boolean; readOnly?: boolean; $status?: InputStatus }>`
  border-left: 1px solid ${(p) => p.theme.color[getSeparatorColor(p.disabled, p.readOnly, p.$status)]};
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
    ${(p) => !p.disabled && !p.readOnly && `border-left-color: ${p.theme.color[getHoverSeparatorColor(p.$status)]}`};
  }
  &:focus-within ${DateTimeSeparatorDiv} {
    ${(p) => !p.disabled && !p.readOnly && `border-left-color: ${p.theme.color[getFocusSeparatorColor(p.$status)]}`};
  }
`;

export const DateTimeContainer = forwardRef<HTMLDivElement, DateTimeContainerProps>(({ status, ...props }, ref) => {
  return <DateTimeContainerDiv ref={ref} $status={status} {...props} />;
});

DateTimeContainer.displayName = 'DateTimeContainer';
