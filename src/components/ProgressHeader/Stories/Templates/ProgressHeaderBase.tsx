import * as React from 'react';
import styled from 'styled-components';

import { ProgressHeader } from '@admiral-ds/react-ui';
import type { ProgressHeaderProps } from '@admiral-ds/react-ui';

const StyledProgressHeader = styled(ProgressHeader)`
  bottom: 90%;
`;

export const ProgressHeaderBaseTemplate = ({ appearance = 'primary', percent = 50, ...props }: ProgressHeaderProps) => {
  return (
    <>
      <StyledProgressHeader {...props} appearance={appearance} percent={percent} role="alert" aria-live="assertive" />
    </>
  );
};
