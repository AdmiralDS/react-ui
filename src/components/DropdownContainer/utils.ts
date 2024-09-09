// Обдумать отступы при позиционировании по краю экрана

export const setVerticalPosition = (
  rect: DOMRect,
  targetRect: DOMRect,
  viewportHeight: number,
): { upward: boolean; translateY: string } => {
  const rectHeight = rect.bottom - rect.top + 8;
  // впишется ли rect во viewport, сверху от targetRect
  const enoughHeightOnTheTop = targetRect.top >= rectHeight;
  // впишется ли rect во viewport, снизу от targetRect
  const enoughHeightOnTheBottom = viewportHeight - targetRect.bottom >= rectHeight;

  if (targetRect.top > 0 && targetRect.bottom < viewportHeight) {
    // targetRect полностью находится в зоне viewportа

    if (!enoughHeightOnTheTop && !enoughHeightOnTheBottom) {
      // выравнивание по низу экрана
      return { upward: false, translateY: `${viewportHeight - targetRect.bottom - rectHeight}px` };
    } else if (enoughHeightOnTheTop && enoughHeightOnTheBottom) {
      return { upward: false, translateY: '0' };
    } else if (!enoughHeightOnTheTop && enoughHeightOnTheBottom) {
      return { upward: false, translateY: '0' };
    } else if (enoughHeightOnTheTop && !enoughHeightOnTheBottom) {
      return { upward: true, translateY: '0' };
    }
  } else if (targetRect.bottom <= 0) {
    // targetRect находится над зоной viewportа => выравнивание по верху экрана
    return { upward: false, translateY: `${0 - targetRect.bottom}px` };
  } else if (targetRect.top >= viewportHeight) {
    // targetRect находится под зоной viewportа => выравнивание по низу экрана
    return { upward: true, translateY: `${viewportHeight - targetRect.top}px` };
  } else if (targetRect.top < 0 && 0 < targetRect.bottom && targetRect.bottom < viewportHeight) {
    // targetRect пересекает верх viewportа => пробуем ставить rect под targetRect, иначе выравнивание по верху экрана
    return enoughHeightOnTheBottom
      ? { upward: false, translateY: '0' }
      : { upward: false, translateY: `${0 - targetRect.bottom}px` };
  } else if (0 < targetRect.top && targetRect.top < viewportHeight && targetRect.bottom > viewportHeight) {
    // targetRect пересекает низ viewportа => пробуем ставить rect над targetRect, иначе выравнивание по низу экрана
    return enoughHeightOnTheTop
      ? { upward: true, translateY: '0' }
      : { upward: true, translateY: `${viewportHeight - targetRect.top}` };
  }
  return { upward: false, translateY: '0' };
};

export const setHorizontalPosition = (
  rect: DOMRect,
  targetRect: DOMRect,
  viewportWidth: number,
): { align: string; translateX: string } => {
  const rectWidth = rect.right - rect.left;

  if (targetRect.left >= 0 && targetRect.right <= viewportWidth) {
    // targetRect полностью находится в зоне viewportа

    // впишется ли контейнер во viewport, начиная от левого края target
    const enoughWidthOnTheRight = viewportWidth - targetRect.left >= rectWidth;
    // впишется ли контейнер во viewport, если его правой границей будет правый край target
    const enoughWidthOnTheLeft = targetRect.right - 16 >= rectWidth;
    const containerWiderTarget = rectWidth > targetRect.width;

    if (!enoughWidthOnTheLeft && !enoughWidthOnTheRight) {
      // выравнивание по правому краю экрана
      return { align: 'flex-end', translateX: `${viewportWidth - targetRect.right - 16}px` };
    } else {
      if (enoughWidthOnTheLeft && enoughWidthOnTheRight) {
        return { align: 'flex-end', translateX: '0' };
      } else if (containerWiderTarget && !enoughWidthOnTheLeft && enoughWidthOnTheRight) {
        return { align: 'flex-start', translateX: '0' };
      } else if (containerWiderTarget && !enoughWidthOnTheRight && enoughWidthOnTheLeft) {
        return { align: 'flex-start', translateX: '0' };
      }
    }
  } else if (targetRect.right < 0) {
    // targetRect находится слева от viewportа => выравнивание по левому краю экрана
    return { align: 'flex-start', translateX: `${0 - targetRect.left}px` };
  } else if (targetRect.left > viewportWidth) {
    // targetRect находится справа от viewportа => выравнивание по правому краю экрана
    return { align: 'flex-end', translateX: `${viewportWidth - targetRect.right}px` };
  } else if (targetRect.left < 0 && 0 < targetRect.right && targetRect.right < viewportWidth) {
    // targetRect пересекает левую границу viewportа => выравнивание по левому краю экрана
    return { align: 'flex-start', translateX: `${0 - targetRect.left}px` };
  } else if (targetRect.right > viewportWidth && 0 < targetRect.left && targetRect.left < viewportWidth) {
    // targetRect пересекает правую границу viewportа => выравнивание по правому краю экрана
    return { align: 'flex-end', translateX: `${viewportWidth - targetRect.right}px` };
  }

  return { align: '', translateX: '0' };
};
