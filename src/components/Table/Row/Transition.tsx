import { useState, useEffect, useRef, cloneElement, Children } from 'react';

type Status = 'entering' | 'entered' | 'exiting' | 'exited';

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
  const [status, setStatus] = useState<Status>(_in ? 'entered' : 'exited');
  const statusRef = useRef(_in ? 'entered' : 'exited');
  const timer = useRef<any>(0);

  useEffect(() => {
    return () => {
      cancelCallback();
    };
  }, []);

  useEffect(() => {
    let nextStatus: 'entering' | 'exiting' | null = null;

    if (_in) {
      if (statusRef.current !== 'entering' && statusRef.current !== 'entered') {
        nextStatus = 'entering';
      }
    } else {
      if (statusRef.current === 'entering' || statusRef.current === 'entered') {
        nextStatus = 'exiting';
      }
    }
    updateStatus(nextStatus);
  }, [_in]);

  useEffect(() => {
    // пропускаю инициализацию статуса при первоначальном рендере
    if (statusRef.current !== status) {
      statusRef.current = status;

      const { enter: enterTimeout, exit: exitTimeout } = getTimeouts();

      if (status == 'entering') {
        onEntering?.();
        onTransitionEnd(enterTimeout, () => {
          setStatus('entered');
        });
      } else if (status == 'exiting') {
        onExiting?.();

        onTransitionEnd(exitTimeout, () => {
          setStatus('exited');
        });
      } else if (status == 'entered') {
        onEntered?.();
      } else if (status == 'exited') {
        onExited?.();
      }
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

  const updateStatus = (nextStatus: 'entering' | 'exiting' | null) => {
    if (nextStatus !== null) {
      cancelCallback();

      if (nextStatus === 'entering') {
        performEnter();
      } else {
        performExit();
      }
    }
  };

  const performEnter = () => {
    onEnter?.();
    setStatus('entering');
  };

  const performExit = () => {
    onExit?.();
    setStatus('exiting');
  };

  const cancelCallback = () => {
    clearTimeout(timer.current);
  };

  const onTransitionEnd = (timeout: number, handler: () => void) => {
    timer.current = setTimeout(handler, timeout);
  };

  return (
    <>
      {typeof children === 'function'
        ? children(status, childProps)
        : cloneElement(Children.only(children) as React.ReactElement, childProps)}
    </>
  );
};
