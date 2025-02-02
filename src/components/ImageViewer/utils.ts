export function getClientSize() {
  const width = document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width,
    height,
  };
}

function fixPoint(start: number, size: number, clientSize: number) {
  const end = start + size;
  const offsetStart = (size - clientSize) / 2;

  if (size > clientSize) {
    if (start > 0) {
      return offsetStart;
    }
    if (start < 0 && end < clientSize) {
      return -offsetStart;
    }
  } else if (start > 0 && end < clientSize) {
    return 0;
  } else if (start < 0 || end > clientSize) {
    return start < 0 ? offsetStart : -offsetStart;
  }
  return undefined;
}

export function updatePosition(
  width: number,
  height: number,
  left: number,
  top: number,
  rotate: number,
  coordinates: { x: number; y: number },
): { x: number; y: number } {
  const { width: clientWidth, height: clientHeight } = getClientSize();
  const isRotate = rotate % 180 !== 0;

  let x: number, y: number;

  if (width <= clientWidth && height <= clientHeight) {
    x = 0;
    y = 0;
  } else {
    // расчет горизонтального сдвига
    x = fixPoint(left, isRotate ? height : width, clientWidth) ?? coordinates.x;
    // расчет вертикального сдвига
    y = fixPoint(top, isRotate ? width : height, clientHeight) ?? coordinates.y;
  }

  return { x, y };
}

export const getPrev = (current: number, _total: number) => {
  const newIndex = current - 1;
  return newIndex > 0 ? newIndex : 0;
};
export const getNext = (current: number, total: number) => {
  const newIndex = current + 1;
  return newIndex < total ? newIndex : total - 1;
};
