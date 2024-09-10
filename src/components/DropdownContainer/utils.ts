/** Вычисление позиции дропдауна по вертикали */
export const setVerticalPosition = (
  rect: DOMRect,
  targetRect: DOMRect,
  viewportHeight: number,
): { upward: boolean; translateY: string } => {
  /** учитываем 8px для обязательного отступа от targetRect */
  const rectHeight = rect.bottom - rect.top + 8;

  /** впишется ли rect во viewport, сверху от targetRect */
  const enoughHeightOnTheTop = targetRect.top >= rectHeight;
  /** впишется ли rect во viewport, снизу от targetRect */
  const enoughHeightOnTheBottom = viewportHeight - targetRect.bottom >= rectHeight;

  /** targetRect полностью находится в зоне viewportа */
  const targetInsideViewport = targetRect.top >= 0 && targetRect.bottom <= viewportHeight;
  /** targetRect находится над зоной viewportа */
  const targetAboveViewport = targetRect.bottom < 0;
  /** targetRect находится под зоной viewportа */
  const targetUnderViewport = targetRect.top > viewportHeight;
  /** targetRect пересекает верхнюю границу viewportа */
  const targetCrossTopViewport = targetRect.top < 0 && 0 < targetRect.bottom && targetRect.bottom < viewportHeight;
  /** targetRect пересекает нижнюю границу viewportа */
  const targetCrossBottomViewport =
    0 < targetRect.top && targetRect.top < viewportHeight && targetRect.bottom > viewportHeight;

  if (targetInsideViewport) {
    if (!enoughHeightOnTheTop && !enoughHeightOnTheBottom) {
      /** rect выравнивается по нижнему краю viewportа */
      return { upward: false, translateY: `${viewportHeight - targetRect.bottom - rectHeight}px` };
    } else if (enoughHeightOnTheTop && enoughHeightOnTheBottom) {
      return { upward: false, translateY: '0' };
    } else if (!enoughHeightOnTheTop && enoughHeightOnTheBottom) {
      return { upward: false, translateY: '0' };
    } else if (enoughHeightOnTheTop && !enoughHeightOnTheBottom) {
      return { upward: true, translateY: '0' };
    }
  } else if (targetAboveViewport) {
    /** rect выравнивается по верхнему краю viewportа */
    return { upward: false, translateY: `${0 - targetRect.bottom}px` };
  } else if (targetUnderViewport) {
    /** rect выравнивается по нижнему краю viewportа */
    return { upward: true, translateY: `${viewportHeight - targetRect.top}px` };
  } else if (targetCrossTopViewport) {
    /** пробуем разместить rect под targetRect, иначе выравниванием по верхнему краю viewportа */
    return enoughHeightOnTheBottom
      ? { upward: false, translateY: '0' }
      : { upward: false, translateY: `${0 - targetRect.bottom}px` };
  } else if (targetCrossBottomViewport) {
    /** пробуем разместить rect над targetRect, иначе выравниванием по нижнему краю viewportа */
    return enoughHeightOnTheTop
      ? { upward: true, translateY: '0' }
      : { upward: true, translateY: `${viewportHeight - targetRect.top}` };
  }
  /** по умолчанию rect выравнивается по нижнему краю targetRect */
  return { upward: false, translateY: '0' };
};

/** Вычисление позиции дропдауна по горизонтали */
export const setHorizontalPosition = (
  rect: DOMRect,
  targetRect: DOMRect,
  viewportWidth: number,
): { align: string; translateX: string } => {
  const rectWidth = rect.right - rect.left;

  /** targetRect полностью находится в зоне viewportа */
  const targetInsideViewport = targetRect.left >= 0 && targetRect.right <= viewportWidth;
  /** targetRect находится слева от viewportа */
  const targetBeforeViewport = targetRect.right < 0;
  /** targetRect находится справа от viewportа */
  const targetAfterViewport = targetRect.left > viewportWidth;
  /** targetRect пересекает левую границу viewportа */
  const targetCrossLeftViewport = targetRect.left < 0 && 0 < targetRect.right && targetRect.right < viewportWidth;
  /** targetRect пересекает правую границу viewportа */
  const targetCrossRightViewport =
    targetRect.right > viewportWidth && 0 < targetRect.left && targetRect.left < viewportWidth;

  if (targetInsideViewport) {
    // впишется ли контейнер во viewport, начиная от левого края target
    const enoughWidthOnTheRight = viewportWidth - targetRect.left >= rectWidth;
    // впишется ли контейнер во viewport, если его правой границей будет правый край target
    const enoughWidthOnTheLeft = targetRect.right - 16 >= rectWidth;
    const containerWiderTarget = rectWidth > targetRect.width;

    if (!enoughWidthOnTheLeft && !enoughWidthOnTheRight) {
      /** rect выравнивается по правому краю viewportа */
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
  } else if (targetBeforeViewport || targetCrossLeftViewport) {
    /** rect выравнивается по левому краю viewportа */
    return { align: 'flex-start', translateX: `${0 - targetRect.left}px` };
  } else if (targetAfterViewport || targetCrossRightViewport) {
    /** rect выравнивается по правому краю viewportа */
    return { align: 'flex-end', translateX: `${viewportWidth - targetRect.right}px` };
  }

  return { align: '', translateX: '0' };
};
