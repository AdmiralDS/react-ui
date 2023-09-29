import * as React from 'react';
import { ReactElement } from 'react';

type Status = 'entering' | 'entered' | 'exiting' | 'exited';

const EXITED = 'exited';
const ENTERING = 'entering';
const ENTERED = 'entered';
const EXITING = 'exiting';

type TransitionProps = {
  children: React.ReactNode | ((status: Status, props: any) => React.ReactNode);
  /** Show the component; triggers the enter or exit states */
  in: boolean;
  /** The duration of the transition, in milliseconds */
  timeout?: number | { enter: number; exit: number };
  /** Callback fired before the "entering" status is applied */
  onEnter?: () => void;
  /** Callback fired after the "entering" status is applied */
  onEntering?: () => void;
  /** Callback fired after the "entered" status is applied */
  onEntered?: () => void;
  /** Callback fired before the "exiting" status is applied */
  onExit?: () => void;
  /** Callback fired after the "exiting" status is applied */
  onExiting?: () => void;
  /** Callback fired after the "exited" status is applied */
  onExited?: () => void;
};

export const Transition = ({
  children,
  in: _in = false,
  timeout = 300,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...childProps
}: TransitionProps) => {
  const [status, setStatus] = React.useState<Status>(_in ? ENTERED : EXITED);
  const _inRef = React.useRef(_in);
  const timer = React.useRef(0);

  React.useEffect(() => {
    return () => {
      cancelNextCallback();
    };
  }, []);

  // нужно, чтобы при первом рендере не срабатывало (пропускало первую установку in) и реагировало только на изменение in
  React.useEffect(() => {
    if (_inRef.current !== _in) {
      _inRef.current = _in;

      let nextStatus;

      if (_in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
      updateStatus(nextStatus);
    }
  }, [_in, status]);

  React.useEffect(() => {
    const { enter: enterTimeout, exit: exitTimeout } = getTimeouts();

    if (status == ENTERING) {
      onEntering?.();
      onTransitionEnd(enterTimeout, () => {
        setStatus(ENTERED);
      });
    } else if (status == EXITING) {
      onExiting?.();

      onTransitionEnd(exitTimeout, () => {
        setStatus(EXITED);
      });
    } else if (status == ENTERED) {
      onEntered?.();
    } else if (status == EXITED) {
      onExited?.();
    }
  }, [status]);

  const getTimeouts = () => {
    let exit, enter;

    if (typeof timeout === 'number') {
      exit = enter = timeout;
    } else {
      exit = timeout.exit;
      enter = timeout.enter;
    }

    return { exit, enter };
  };

  const updateStatus = (nextStatus: any) => {
    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      cancelNextCallback();

      if (nextStatus === ENTERING) {
        performEnter();
      } else {
        performExit();
      }
    }
  };

  const performEnter = () => {
    onEnter?.();
    setStatus(ENTERING);
  };

  const performExit = () => {
    onExit?.();
    setStatus(EXITING);
  };

  const cancelNextCallback = () => {
    window.clearTimeout(timer.current);
  };

  const onTransitionEnd = (timeout: any, handler: any) => {
    timer.current = window.setTimeout(handler, timeout);
  };

  return (
    <>
      {typeof children === 'function'
        ? children(status, childProps)
        : React.cloneElement(React.Children.only(children) as ReactElement, childProps)}
      {/* <Test _in /> */}
    </>
  );
};

const Test = ({ _in }: any) => {
  const [status, setStatus] = React.useState<Status>(_in ? ENTERED : EXITED);
  const statusRef = React.useRef(_in ? ENTERED : EXITED);
  const hasMounted = React.useRef(false);
  const _inRef = React.useRef(_in);

  React.useEffect(() => {
    if (_inRef.current !== _in) {
      console.log(_in);
      _inRef.current = _in;
    }
  }, [_in]);

  return <div>test</div>;
};
