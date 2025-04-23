import type { InputStatus } from '#src/components/input/types';

import { ReactComponent as ErrorStatusSvg } from '@admiral-ds/icons/build/service/ErrorSolid.svg';
import { ReactComponent as SuccessStatusSvg } from '@admiral-ds/icons/build/service/CheckSolid.svg';
import styled from 'styled-components';

const ErrorIcon = styled(ErrorStatusSvg)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }
`;

const SuccessIcon = styled(SuccessStatusSvg)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Success_Success50Main, ${(p) => p.theme.color['Success/Success 50 Main']});
  }
`;

export interface StatusIconProps {
  status?: InputStatus;
}

export function StatusIcon({ status, ...props }: StatusIconProps): JSX.Element | null {
  switch (status) {
    case 'success':
      return <SuccessIcon {...props} />;
    case 'error':
      return <ErrorIcon {...props} />;

    default:
      return null;
  }
}
