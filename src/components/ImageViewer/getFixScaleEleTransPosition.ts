export function getClientSize() {
  const width = document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width,
    height,
  };
}

function fixPoint(start: number, size: number, clientSize: number) {
  const startAddWidth = start + size;
  const offsetStart = (size - clientSize) / 2;

  if (size > clientSize) {
    if (start > 0) {
      return offsetStart;
    }
    if (start < 0) {
      if (startAddWidth < clientSize) {
        return -offsetStart;
      } else {
        return start < 0 ? offsetStart : -offsetStart;
      }
    }
  }
  return undefined;
}

/**
 * Fix positon x,y point when
 *
 * Ele width && height < client
 * - left | top > 0 -> Back 0
 *
 * - Ele width | height > clientWidth | clientHeight
 * - left | top + width | height < clientWidth | clientHeight -> Back left | top + width | height === clientWidth | clientHeight
 *
 * Regardless of other
 */
export function getFixScaleEleTransPosition(
  width: number,
  height: number,
  left: number,
  top: number,
): null | { x: number; y: number } {
  const { width: clientWidth, height: clientHeight } = getClientSize();

  let x, y;

  if (width <= clientWidth && height <= clientHeight) {
    x = 0;
    y = 0;
  } else if (width > clientWidth || height > clientHeight) {
    x = fixPoint(left, width, clientWidth);
    y = fixPoint(top, height, clientHeight);
  }

  return x !== undefined && y !== undefined ? { x, y } : null;
}
