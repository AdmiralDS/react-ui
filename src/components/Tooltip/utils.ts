/** отступ от вызвавшего элемента (anchorElement) */
const GAP = 8;

export type TooltipPositionType = 'bottom' | 'top' | 'left' | 'right';
export type InternalTooltipPositionType =
  | TooltipPositionType
  | 'bottomRight'
  | 'bottomLeft'
  | 'topRight'
  | 'topLeft'
  | 'leftBottom'
  | 'leftTop'
  | 'rightBottom'
  | 'rightTop'
  | 'bottomPageCenter'
  | 'topPageCenter';
export type CalculationResult = {
  check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => boolean;
};

// расположены в порядке приоритета при подборе стороны открытия тултипа
export function getTooltipDirection(
  anchorElement: HTMLElement,
  tooltipElement: HTMLElement,
  scrollbarSize: number,
  tooltipPosition?: TooltipPositionType,
): InternalTooltipPositionType {
  const anchorElementRect: DOMRect = anchorElement.getBoundingClientRect();
  const tooltipRect: DOMRect = tooltipElement.getBoundingClientRect();
  const positions = Object.entries(getPositionMapper(scrollbarSize)) as [
    InternalTooltipPositionType,
    CalculationResult,
  ][];

  /** Если задан параметр tooltipPosition, то тултип обязательно должен отрендериться в указанном направлении
   * (с возможностью сдвига по горизонтальной оси при tooltipPosition === 'top' | 'bottom',
   * и по вертикальной оси при tooltipPosition = 'right' | 'left').
   * Н-р, если tooltipPosition === 'top', то происходит проверка позиций top|topRight|topLeft|topPageCenter
   */
  const compatiblePositions = tooltipPosition
    ? positions.filter((kv) => {
        return kv[0].includes(tooltipPosition) && kv[1].check(anchorElementRect, tooltipRect);
      })
    : positions.filter((kv) => {
        return kv[1].check(anchorElementRect, tooltipRect);
      });

  const defaultPosition = tooltipPosition || 'bottom';
  return compatiblePositions.length ? compatiblePositions[0][0] : defaultPosition;
}

function getPositionMapper(scrollbarSize: number): Record<InternalTooltipPositionType, CalculationResult> {
  return {
    bottom: {
      /** проверяем, что тултипу хватит места снизу и по ширине (если ширина тултипа больше
       * ширины вызвавшего элемента (anchorElement), то нужно убедиться, что тултипу хватит
       * места слева и справа) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnBottom =
          globalThis.innerHeight - anchorElementRect.bottom - scrollbarSize > GAP + tooltipRect.height;
        const isEnoughOnLeft = anchorElementRect.left + anchorElementRect.width / 2 > tooltipRect.width / 2;
        const isEnoughOnRight =
          globalThis.innerWidth - anchorElementRect.right - scrollbarSize + anchorElementRect.width / 2 >
          tooltipRect.width / 2;
        return isEnoughOnBottom && isEnoughOnLeft && isEnoughOnRight;
      },
    },
    top: {
      /** проверяем, что тултипу хватит места сверху и по ширине (если ширина тултипа больше
       * ширины вызвавшего элемента (anchorElement), то нужно убедиться, что тултипу хватит
       * места слева и справа) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnTop = anchorElementRect.top > GAP + tooltipRect.height;
        const isEnoughOnLeft = anchorElementRect.left + anchorElementRect.width / 2 > tooltipRect.width / 2;
        const isEnoughOnRight =
          globalThis.innerWidth - anchorElementRect.right - scrollbarSize + anchorElementRect.width / 2 >
          tooltipRect.width / 2;
        return isEnoughOnTop && isEnoughOnLeft && isEnoughOnRight;
      },
    },
    left: {
      /** проверяем, что тултипу хватит места слева и по высоте (если высота тултипа больше
       * высоты вызвавшего элемента (anchorElement), то нужно убедиться, что тултипу хватит
       * места сверху и снизу) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnLeft = anchorElementRect.left > GAP + tooltipRect.width;
        const isEnoughOnTop = anchorElementRect.top > (tooltipRect.height - anchorElementRect.height) / 2;
        const isEnoughOnBottom =
          globalThis.innerHeight - anchorElementRect.bottom - scrollbarSize >
          (tooltipRect.height - anchorElementRect.height) / 2;
        return isEnoughOnLeft && isEnoughOnBottom && isEnoughOnTop;
      },
    },
    right: {
      /** проверяем, что тултипу хватит места справа и по высоте (если высота тултипа больше
       * высоты вызвавшего элемента (anchorElement), то нужно убедиться, что тултипу хватит
       * места сверху и снизу) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnRight =
          globalThis.innerWidth - anchorElementRect.right - scrollbarSize > GAP + tooltipRect.width;
        const isEnoughOnTop = anchorElementRect.top > (tooltipRect.height - anchorElementRect.height) / 2;
        const isEnoughOnBottom =
          globalThis.innerHeight - anchorElementRect.bottom - scrollbarSize >
          (tooltipRect.height - anchorElementRect.height) / 2;
        return isEnoughOnRight && isEnoughOnBottom && isEnoughOnTop;
      },
    },
    bottomRight: {
      /** проверяем, что тултипу хватит места снизу и по ширине справа
       * (то есть тултип будет выровнен по левому краю вызвавшего элемента (anchorElement)) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnBottom =
          globalThis.innerHeight - anchorElementRect.bottom - scrollbarSize > GAP + tooltipRect.height;
        const isEnoughOnRight = globalThis.innerWidth - anchorElementRect.left - scrollbarSize > tooltipRect.width;
        return isEnoughOnBottom && isEnoughOnRight;
      },
    },
    bottomLeft: {
      /** проверяем, что тултипу хватит места снизу и по ширине слева
       * (то есть тултип будет выровнен по правому краю вызвавшего элемента (anchorElement)) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnBottom =
          globalThis.innerHeight - anchorElementRect.bottom - scrollbarSize > GAP + tooltipRect.height;
        const isEnoughOnLeft = anchorElementRect.right > tooltipRect.width;
        return isEnoughOnBottom && isEnoughOnLeft;
      },
    },
    topRight: {
      /** проверяем, что тултипу хватит места сверху и по ширине справа
       * (то есть тултип будет выровнен по левому краю вызвавшего элемента (anchorElement)) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnTop = anchorElementRect.top > GAP + tooltipRect.height;
        const isEnoughOnRight = globalThis.innerWidth - anchorElementRect.left - scrollbarSize > tooltipRect.width;
        return isEnoughOnTop && isEnoughOnRight;
      },
    },
    topLeft: {
      /** проверяем, что тултипу хватит места сверху и по ширине слева
       * (то есть тултип будет выровнен по правому краю вызвавшего элемента (anchorElement)) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnTop = anchorElementRect.top > GAP + tooltipRect.height;
        const isEnoughOnLeft = anchorElementRect.right > tooltipRect.width;
        return isEnoughOnTop && isEnoughOnLeft;
      },
    },
    leftBottom: {
      /** проверяем, что тултипу хватит места слева и по высоте снизу
       * (то есть тултип будет выровнен по верхнему краю вызвавшего элемента (anchorElement)) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnLeft = anchorElementRect.left > GAP + tooltipRect.width;
        const isEnoughOnBottom = globalThis.innerHeight - anchorElementRect.top - scrollbarSize > tooltipRect.height;
        return isEnoughOnLeft && isEnoughOnBottom;
      },
    },
    leftTop: {
      /** проверяем, что тултипу хватит места слева и по высоте сверху
       * (то есть тултип будет выровнен по нижнему краю вызвавшего элемента (anchorElement)) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnLeft = anchorElementRect.left > GAP + tooltipRect.width;
        const isEnoughOnTop = anchorElementRect.bottom > tooltipRect.height;
        return isEnoughOnLeft && isEnoughOnTop;
      },
    },
    rightBottom: {
      /** проверяем, что тултипу хватит места справа и по высоте снизу
       * (то есть тултип будет выровнен по верхнему краю вызвавшего элемента (anchorElement)) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnRight =
          globalThis.innerWidth - anchorElementRect.right - scrollbarSize > GAP + tooltipRect.width;
        const isEnoughOnBottom = globalThis.innerHeight - anchorElementRect.top - scrollbarSize > tooltipRect.height;
        return isEnoughOnRight && isEnoughOnBottom;
      },
    },
    rightTop: {
      /** проверяем, что тултипу хватит места справа и по высоте сверху
       * (то есть тултип будет выровнен по нижнему краю вызвавшего элемента (anchorElement)) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnRight =
          globalThis.innerWidth - anchorElementRect.right - scrollbarSize > GAP + tooltipRect.width;
        const isEnoughOnTop = anchorElementRect.bottom > tooltipRect.height;
        return isEnoughOnRight && isEnoughOnTop;
      },
    },
    bottomPageCenter: {
      /** проверяем, что тултипу хватит места снизу и по центру */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnBottom =
          globalThis.innerHeight - anchorElementRect.bottom - scrollbarSize > GAP + tooltipRect.height;
        const isEnoughOnCenter = globalThis.innerWidth - scrollbarSize >= tooltipRect.width;
        return isEnoughOnBottom && isEnoughOnCenter;
      },
    },
    topPageCenter: {
      /** проверяем, что тултипу хватит места сверху и по центру */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnTop = anchorElementRect.top > GAP + tooltipRect.height;
        const isEnoughOnCenter = globalThis.innerWidth - scrollbarSize >= tooltipRect.width;
        return isEnoughOnTop && isEnoughOnCenter;
      },
    },
  };
}
