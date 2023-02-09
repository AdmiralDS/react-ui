import * as React from 'react';
import styled from 'styled-components';
import type { NotificationStatus } from '#src/components/Notification';
import { mediumGroupBorderRadius } from '#src/components/themes';
import type { NotificationItemStatus } from '#src/components/NotificationItem/index';

const Progress = styled.div.attrs((props: { percent: number }) => ({
  style: { width: `${props.percent}%` },
}))<{ percent: number; status?: NotificationStatus; duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme, status }) => {
    if (status === 'warning') return theme.color['Warning/Warning 50 Main'];
    if (status === 'error') return theme.color['Error/Error 60 Main'];
    if (status === 'success') return theme.color['Success/Success 50 Main'];
    return theme.color['Primary/Primary 60 Main'];
  }};
  height: 4px;
  transition: ${({ duration }) => `all ${duration}ms linear`};
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
`;

export interface NotificationItemWithProgressProps {
  status?: NotificationItemStatus;
  removeRenderToast: () => void;
  autoDeleteTime?: number;
  progressStep?: number;
}

export const NotificationItemWithProgress = ({
  children,
  status,
  removeRenderToast,
  autoDeleteTime,
  progressStep = 1,
}: React.PropsWithChildren<NotificationItemWithProgressProps>) => {
  const [progress, setProgress] = React.useState(100);

  const delta = (autoDeleteTime || 0) / (100 * progressStep);

  React.useEffect(() => {
    if (!autoDeleteTime) return;

    let timerId: NodeJS.Timeout;

    if (progress === 0) {
      removeRenderToast();
    } else {
      timerId = setTimeout(() => setProgress((prev) => prev - 1), delta);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [progress, progressStep]);

  return (
    <Wrapper>
      {children}
      {progress > 0 && <Progress percent={progress} status={status} duration={delta} />}
    </Wrapper>
  );
};
