import * as React from 'react';

import { SuggestInput } from '@admiral-ds/react-ui';
import type { SuggestInputProps } from '@admiral-ds/react-ui';

const options = ['one', 'two', 'three'];

export const SuggestInputUncontrolledTemplate = (props: SuggestInputProps) => {
  return (
    <SuggestInput
      options={options}
      placeholder="numbers"
      dimension={props.dimension}
      onChange={(e) => {
        // eslint-disable-next-line no-console
        console.log(e.target.value);
      }}
    />
  );
};
