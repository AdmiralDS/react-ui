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
  id: string;
}

const Progress = styled.div<{ percent: number; status?: NotificationStatus }>`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme, status }) => {
    if (status === 'warning') return theme.color['Warning/Warning 50 Main'];
    if (status === 'error') return theme.color['Error/Error 60 Main'];
    if (status === 'success') return theme.color['Success/Success 50 Main'];
    return theme.color['Primary/Primary 60 Main'];
  }};
  width: ${({ percent }) => percent}%;
  height: 4px;
  /*transition: all 0.3s linear;*/
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
`;

export const ToastItem2 = ({ children, ...props }: ToastItem2Props) => {
  const { removeToast2, autoDeleteTime2, showProgress2 } = useToast2();
  const [tik, setTick] = React.useState(showProgress2 ? 100 : 0);

  React.useEffect(() => {
    if (!showProgress2) return;
    if (!autoDeleteTime2) return;
    const delta = autoDeleteTime2 / 100;
    const counter = () => setTick((prev) => prev - 1);
    const timerId = setTimeout(counter, delta);
    if (tik == 0) {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);

  /*React.useEffect(() => {
    if (!autoDeleteTime2) return;
    const timer = setTimeout(() => {
      removeToast2(props.id);
    }, autoDeleteTime2);

    return () => {
      clearTimeout(timer);
    };
  }, []);*/
  console.log(tik);

  return (
    <Wrapper>
      <StyledNotification {...props} onClose={() => removeToast2(props.id)}>
        {children}
      </StyledNotification>
      {showProgress2 && <Progress percent={tik} status={props.status} />}
    </Wrapper>
  );
};
