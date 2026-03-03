import { useEffect, useState } from 'react';

export const useTouchDevice = () => {
  const [isTouch, setTouch] = useState(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: none)');

    if (isTouch !== hoverQuery.matches) {
      setTouch(hoverQuery.matches);
    }

    const updateDeviceInfo = () => setTouch(hoverQuery.matches);

    hoverQuery.addEventListener('change', updateDeviceInfo);
    return () => hoverQuery.removeEventListener('change', updateDeviceInfo);
  }, []);

  return isTouch;
};
