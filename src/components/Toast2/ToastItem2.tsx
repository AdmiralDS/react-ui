import * as React from 'react';
import styled from 'styled-components';
import type { NotificationProps, NotificationStatus } from '#src/components/Notification';
import { Notification } from '#src/components/Notification';
import { useToast2 } from '#src/components/Toast2/ToastProvider2';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

const StyledNotification = styled(Notification)`
  ${(props) => props.theme.shadow['Shadow 08']}
`;

export interface ToastItem2Props extends NotificationProps {
  /** Id всплывающего уведомления */
  id: string;
}

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

export const ToastItem2 = ({ children, ...props }: ToastItem2Props) => {
  const { removeToast2, autoDeleteTime2, showProgress2, progressStep2 = 1 } = useToast2();
  const [progress, setProgress] = React.useState(showProgress2 ? 100 : 0);

  const delta = (autoDeleteTime2 || 0) / (100 * progressStep2);

  React.useEffect(() => {
    if (!autoDeleteTime2) return;

    let timerId: NodeJS.Timeout;

    if (showProgress2) {
      if (progress === 0) removeToast2(props.id);

      timerId = setTimeout(() => setProgress((prev) => prev - progressStep2), delta);
    } else {
      timerId = setTimeout(() => {
        removeToast2(props.id);
      }, autoDeleteTime2);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [progress, autoDeleteTime2, showProgress2, progressStep2]);

  return (
    <Wrapper>
      <StyledNotification {...props} onClose={() => removeToast2(props.id)}>
        {children}
      </StyledNotification>
      {showProgress2 && <Progress percent={progress} status={props.status} duration={delta} />}
    </Wrapper>
  );
};
