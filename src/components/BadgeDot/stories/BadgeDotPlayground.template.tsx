import * as React from 'react';
import styled from 'styled-components';
import { BadgeDot, typography } from '@admiral-ds/react-ui';
import type { BadgeDotProps } from '@admiral-ds/react-ui';

const String = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  & > * {
    margin-right: 16px;
  }
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const BadgeDotPlaygroundTemplate = (props: BadgeDotProps) => {
  return (
    <String>
      <BadgeDot {...props} />
      Appearance: {props.appearance || 'neutral'}
      <br />
      Dimension: {props.dimension || 'm'}
    </String>
  );
};
