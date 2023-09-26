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
  timeout?: number | { enter?: number; exit?: number; appear?: number };
  addEndListener?: (node?: any, done?: boolean) => void;
  onEnter?: (isAppearing?: boolean) => void;
  onEntering?: (isAppearing?: boolean) => void;
  onEntered?: (isAppearing?: boolean) => void;
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
  const nextCallbackRef = React.useRef<any>(() => {});
  const cancelRef = React.useRef<any>(() => {});

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
  });

  const getTimeouts = () => {
    let exit, enter, appear;

    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      // TODO: remove fallback for next major
      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }
    return { exit, enter, appear };
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
    let mounting = false;
    const appearing = mounting;
    const [maybeAppearing] = nodeRef ? [appearing] : [appearing];

    const timeouts = getTimeouts();
    const enterTimeout = timeouts.enter;

    onEnter?.(maybeAppearing);

    safeSetState({ status: ENTERING }, () => {
      onEntering?.(maybeAppearing);

      onTransitionEnd(enterTimeout, () => {
        safeSetState({ status: ENTERED }, () => {
          onEntered?.(maybeAppearing);
        });
      });
    });
  };

  const performExit = () => {
    const timeouts = getTimeouts();

    onExit?.();

    safeSetState({ status: EXITING }, () => {
      onExiting?.();

      onTransitionEnd(timeouts.exit, () => {
        safeSetState({ status: EXITED }, () => {
          onExited?.();
        });
      });
    });
  };

  const cancelNextCallback = () => {
    if (nextCallbackRef.current !== null && cancelRef.current !== null) {
      cancelRef.current();
      nextCallbackRef.current = null;
    }
  };

  const safeSetState = (nextState: any, callback: any) => {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = setNextCallback(callback);
    setStatus(nextState.status);
    // this.setState(nextState, callback);
  };

  React.useEffect(() => {
    nextCallbackRef.current();
  }, [status]);

  const setNextCallback = (callback: any) => {
    let active = true;

    nextCallbackRef.current = (event: any) => {
      if (active) {
        active = false;
        nextCallbackRef.current = null;

        callback(event);
      }
    };

    cancelRef.current = () => {
      active = false;
    };

    return nextCallbackRef.current;
  };

  const onTransitionEnd = (timeout: any, handler: any) => {
    setNextCallback(handler);
    const node = nodeRef.current;

    const doesNotHaveTimeoutOrListener = timeout == null && !addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(nextCallbackRef.current, 0);
      return;
    }

    if (addEndListener) {
      const [maybeNode, maybeNextCallback] = nodeRef ? [nextCallbackRef.current] : [node, nextCallbackRef.current];
      addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(nextCallbackRef.current, timeout);
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
