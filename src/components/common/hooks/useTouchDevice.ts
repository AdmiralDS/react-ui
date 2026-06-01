import { useEffect, useState } from 'react';

const TOUCH_MEDIA_QUERIES = [
  '(hover: none)',
  '(any-hover: none)',
  '(pointer: coarse)',
  '(any-pointer: coarse)',
] as const;

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

export const useTouchDevice = () => {
  const [isTouch, setTouch] = useState(false);

  useEffect(() => {
    const updateDeviceInfo = () => setTouch(detectTouchDevice());

    updateDeviceInfo();

    const mediaQueryLists = TOUCH_MEDIA_QUERIES.map((query) => window.matchMedia(query));

    mediaQueryLists.forEach((mql) => mql.addEventListener('change', updateDeviceInfo));

    return () => {
      mediaQueryLists.forEach((mql) => mql.removeEventListener('change', updateDeviceInfo));
    };
  }, []);

  return isTouch;
};
