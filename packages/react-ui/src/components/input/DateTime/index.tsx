import * as React from 'react';
import styled from 'styled-components';

import { DateInput } from '../DateInput';
import { TimeInput } from '../TimeInput';
import { InputBorderedDiv } from '../TextInput';
import type { InputStatus } from '#src/components/input';

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

export const DateTimeSeparator = styled.div<{ disabled?: boolean; readOnly?: boolean; status?: InputStatus }>`
  border-left: 1px solid ${(p) => p.theme.color[getSeparatorColor(p.disabled, p.readOnly, p.status)]};
`;

DateTimeSeparator.displayName = 'DateTimeSeparator';

export const DateTimeContainer = styled.div<{ disabled?: boolean; readOnly?: boolean; status?: InputStatus }>`
  display: flex;
  min-width: 288px;

  &:hover ${DateTimeSeparator} {
    ${(p) => !p.disabled && !p.readOnly && `border-left-color: ${p.theme.color[getHoverSeparatorColor(p.status)]}`};
  }
  &:focus-within ${DateTimeSeparator} {
    ${(p) => !p.disabled && !p.readOnly && `border-left-color: ${p.theme.color[getFocusSeparatorColor(p.status)]}`};
  }
`;

DateTimeContainer.displayName = 'DateTimeContainer';
