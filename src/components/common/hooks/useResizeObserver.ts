import { useLayoutEffect } from 'react';
import { useCallbackRef } from './useCallbackRef';

function useResizeObserver(
  element: HTMLElement | null,
  onResize: (params: { entries: ResizeObserverEntry[]; observer: ResizeObserver; time: DOMHighResTimeStamp }) => void,
) {
  const handleResize = useCallbackRef(
    (entries: ResizeObserverEntry[], observer: ResizeObserver) => (time: DOMHighResTimeStamp) =>
      onResize({ entries, observer, time }),
  );
  useLayoutEffect(() => {
    let rAF = 0;
    if (element) {
      /**
       * Resize Observer will throw an often benign error that says `ResizeObserver loop
       * completed with undelivered notifications`. This means that ResizeObserver was not
       * able to deliver all observations within a single animation frame, so we use
       * `requestAnimationFrame` to ensure we don't deliver unnecessary observations.
       * Further reading: https://github.com/WICG/resize-observer/issues/38
       */
      const resizeObserver = new ResizeObserver((entries, observer) => {
        cancelAnimationFrame(rAF);
        rAF = requestAnimationFrame(handleResize(entries, observer));
      });
      resizeObserver.observe(element);
      return () => {
        cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}

export { useResizeObserver };
