import * as React from 'react';
import styled from 'styled-components';

import { ProgressHeader } from '@admiral-ds/react-ui';
import type { ProgressHeaderProps } from '@admiral-ds/react-ui';

const StyledProgressHeader = styled(ProgressHeader)`
  bottom: 90%;
`;

export const ProgressHeaderAnimationTemplate = ({ appearance = 'primary', percent, ...props }: ProgressHeaderProps) => {
  const [tik, setTick] = React.useState(0);

  React.useEffect(() => {
    const counter = () => setTick((prev) => prev + 1);
    const timerId = setTimeout(counter, 1000);
    if (tik >= 20) {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);

  return (
    <>
      <StyledProgressHeader
        {...props}
        appearance={appearance}
        percent={percent || tik}
        role="alert"
        aria-live="assertive"
      />
    </>
  );
};
