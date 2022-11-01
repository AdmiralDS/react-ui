import * as React from 'react';
import styled from 'styled-components';

import { DateInput } from '../DateInput';
import { TimeInput } from '../TimeInput';
import { InputBorderedDiv } from '../TextInput';

export const DateTimeDateInput = styled(DateInput)`
  flex: 1 1 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  [data-disabled] & ${InputBorderedDiv}${InputBorderedDiv}${InputBorderedDiv} {
    border-right: 1px solid ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-read-only] & ${InputBorderedDiv}${InputBorderedDiv}${InputBorderedDiv} {
    border-right: 1px solid ${(props) => props.theme.color['Neutral/Neutral 40']};
  }
`;

DateTimeDateInput.displayName = 'DateTimeDateInput';

export const DateTimeTimeInput = styled(TimeInput)`
  flex: 0 0 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  & ${InputBorderedDiv} {
    border-left: none;
  }

  [data-status='success']
    &
    ${InputBorderedDiv}${InputBorderedDiv}${InputBorderedDiv},
    [data-status='error']
    &
    ${InputBorderedDiv}${InputBorderedDiv}${InputBorderedDiv} {
    border-left: none;
  }
`;

DateTimeTimeInput.displayName = 'DateTimeTimeInput';
