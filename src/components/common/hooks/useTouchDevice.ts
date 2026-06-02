import { useEffect, useState, useRef, useCallback } from 'react';

const TOUCH_MEDIA_QUERIES = [
  '(hover: none)',
  '(any-hover: none)',
  '(pointer: coarse)',
  '(any-pointer: coarse)',
] as const;

const THROTTLE_TIMEOUT = 50;

/** Определяет touch-устройство (телефон, планшет). Samsung Galaxy часто игнорирует (hover: none), но отвечает на (pointer: coarse). */
export function detectTouchDevice(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!hasTouchSupport) {
    return false;
  }

  const hasHoverNone = window.matchMedia('(hover: none)').matches;
  const hasAnyHoverNone = window.matchMedia('(any-hover: none)').matches;
  const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const hasAnyCoarsePointer = window.matchMedia('(any-pointer: coarse)').matches;

  return hasHoverNone || hasAnyHoverNone || hasCoarsePointer || hasAnyCoarsePointer;
}

const useTouchDeviceDetector = () => {
  const [isTouch, setTouch] = useState(() => detectTouchDevice());
  const previousValueRef = useRef(isTouch);

  const updateDeviceInfo = useCallback(() => {
    const newValue = detectTouchDevice();

    if (previousValueRef.current !== newValue) {
      previousValueRef.current = newValue;
      setTouch(newValue);
    }
  }, []);

  return { isTouch, updateDeviceInfo };
};

export const useTouchDevice = () => {
  const { isTouch, updateDeviceInfo } = useTouchDeviceDetector();

  useEffect(() => {
    const mediaQueryLists = TOUCH_MEDIA_QUERIES.map((query) => window.matchMedia(query));

    let timeoutId: NodeJS.Timeout;
    const throttledUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDeviceInfo, THROTTLE_TIMEOUT);
    };

    mediaQueryLists.forEach((mql) => mql.addEventListener('change', throttledUpdate));

    return () => {
      clearTimeout(timeoutId);
      mediaQueryLists.forEach((mql) => mql.removeEventListener('change', throttledUpdate));
    };
  }, [updateDeviceInfo]);

  return isTouch;
};
