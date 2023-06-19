import * as React from 'react';

import { SuggestInput } from '@admiral-ds/react-ui';
import type { SuggestInputProps } from '@admiral-ds/react-ui';

const optionsNoMatch: string[] = [];

export const SuggestInputNoMatchTemplate = (props: SuggestInputProps) => {
  return <SuggestInput options={optionsNoMatch} placeholder="numbers" dimension={props.dimension} />;
};
