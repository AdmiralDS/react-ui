export const SWIPE_THRESHOLD = 20;
export const SWIPE_UNIT = 'px';
export const SWIPE_TIMEOUT = 500;

export type Point = {
  x: number;
  y: number;
};

export type TouchPointInfoType = {
  point1: Point;
  point2: Point;
  eventType: string;
  startEl?: EventTarget;
  timeDown?: number;
  xDown?: number;
  yDown?: number;
  xDiff?: number;
  yDiff?: number;
  touchCount?: number;
};

export function getDistance(a: Point, b: Point) {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.hypot(x, y);
}

export function getCenter(oldPoint1: Point, oldPoint2: Point, newPoint1: Point, newPoint2: Point) {
  // Calculate the distance each point has moved
  const distance1 = getDistance(oldPoint1, newPoint1);
  const distance2 = getDistance(oldPoint2, newPoint2);

  // If both distances are 0, return the original points
  if (distance1 === 0 && distance2 === 0) {
    return [oldPoint1.x, oldPoint1.y];
  }

  // Calculate the ratio of the distances
  const ratio = distance1 / (distance1 + distance2);

  // Calculate the new center point based on the ratio
  const x = oldPoint1.x + ratio * (oldPoint2.x - oldPoint1.x);
  const y = oldPoint1.y + ratio * (oldPoint2.y - oldPoint1.y);

  return [x, y];
}

export function getSwipeType(
  startEl?: EventTarget,
  target?: EventTarget,
  timeDown?: number,
  timeUp?: number,
  xDown?: number,
  yDown?: number,
  xDiff?: number,
  yDiff?: number,
) {
  if (
    startEl !== target ||
    typeof timeDown === 'undefined' ||
    typeof timeUp === 'undefined' ||
    typeof xDown === 'undefined' ||
    typeof yDown === 'undefined' ||
    typeof xDiff === 'undefined' ||
    typeof yDiff === 'undefined'
  ) {
    return '';
  }
  const timeDiff = timeUp - timeDown;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    // most significant
    if (Math.abs(xDiff) > SWIPE_THRESHOLD && timeDiff < SWIPE_TIMEOUT) {
      if (xDiff > 0) {
        return 'swiped-left';
      } else {
        return 'swiped-right';
      }
    }
  } else if (Math.abs(yDiff) > SWIPE_THRESHOLD && timeDiff < SWIPE_TIMEOUT) {
    if (yDiff > 0) {
      return 'swiped-up';
    } else {
      return 'swiped-down';
    }
  }
}
