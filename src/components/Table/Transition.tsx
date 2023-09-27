import * as React from 'react';
import { ReactElement } from 'react';

export const EXITED = 'exited';
export const ENTERING = 'entering';
export const ENTERED = 'entered';
export const EXITING = 'exiting';

type TransitionProps = {
  nodeRef: React.RefObject<HTMLElement>;
  children: React.ReactNode | ((state: any, props: any) => React.ReactNode);
  in: boolean;
  timeout?: number | { enter?: number; exit?: number };
  addEndListener?: (node?: any, done?: boolean) => void;
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
};

export const Transition = ({
  children,
  // filter props for `Transition`
  in: _in = false,
  timeout,
  addEndListener,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  nodeRef,
  ...childProps
}: TransitionProps) => {
  const [status, setStatus] = React.useState<any>(_in ? ENTERED : EXITED);
  const timer = React.useRef(0);
  const nextCallbackRef = React.useRef<any>(() => {});

  React.useEffect(() => {
    return () => {
      cancelNextCallback();
    };
  }, []);

  React.useEffect(() => {
    let nextStatus = null;
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
  }, [_in, status]);

  const getTimeouts = () => {
    let exit, enter;

    exit = enter = timeout;

    if (timeout != null && typeof timeout !== 'number') {
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

  React.useEffect(() => {
    const timeouts = getTimeouts();
    const enterTimeout = timeouts.enter;
    const exitTimeout = timeouts.exit;

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

  const cancelNextCallback = () => {
    window.clearTimeout(timer.current);
  };

  const onTransitionEnd = (timeout: any, handler: any) => {
    const node = nodeRef.current;

    const doesNotHaveTimeoutOrListener = timeout == null && !addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      timer.current = window.setTimeout(handler, 0);
      return;
    }

    if (addEndListener) {
      const [maybeNode, maybeNextCallback] = [node, nextCallbackRef.current];
      addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      timer.current = window.setTimeout(handler, timeout);
    }
  };

  return (
    <>
      {typeof children === 'function'
        ? children(status, childProps)
        : React.cloneElement(React.Children.only(children) as ReactElement, childProps)}
    </>
  );
};
