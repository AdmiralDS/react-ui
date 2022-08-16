/** отступ от вызвавшего элемента (anchorElement) */
const GAP = 8;

export type TooltipPositionType = 'bottom' | 'top' | 'left' | 'right' | 'bottomPageCenter' | 'topPageCenter';
export type CalculationResult = {
  check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => boolean;
};

// расположены в порядке приоритета при подборе стороны открытия тултипа
export function getTooltipDirection(
  anchorElement: HTMLElement,
  tooltipElement: HTMLElement,
  scrollbarSize: number,
  tooltipPosition?: TooltipPositionType,
): any {
  const anchorElementRect: DOMRect = anchorElement.getBoundingClientRect();
  const tooltipRect: DOMRect = tooltipElement.getBoundingClientRect();
  const positions = Object.entries(getPositionMapper(scrollbarSize)) as [TooltipPositionType, CalculationResult][];

  const compatiblePositions = tooltipPosition
    ? positions.filter((kv) => {
        return kv[0] === tooltipPosition;
      })
    : positions.filter((kv) => {
        return kv[1].check(anchorElementRect, tooltipRect);
      });

  return compatiblePositions.length ? compatiblePositions[0][0] : 'bottom';
}

function getPositionMapper(scrollbarSize: number): Record<TooltipPositionType, CalculationResult> {
  return {
    bottom: {
      /** проверяем, что тултипу хватит места сверху и по ширине (если ширина тултипа больше
       * ширины вызвавшего элемента (anchorElement), то нужно убедиться, что тултипу хватит
       * места слева и справа */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnBottom =
          window.innerHeight - anchorElementRect.bottom - scrollbarSize > GAP + tooltipRect.height;
        const isEnoughOnLeft = anchorElementRect.left + anchorElementRect.width / 2 > tooltipRect.width / 2;
        const isEnoughOnRight =
          window.innerWidth - anchorElementRect.right - scrollbarSize + anchorElementRect.width / 2 >
          tooltipRect.width / 2;
        return isEnoughOnBottom && isEnoughOnLeft && isEnoughOnRight;
      },
    },
    top: {
      /** проверяем, что тултипу хватит места сверху и по ширине (если ширина тултипа больше
       * ширины вызвавшего элемента (anchorElement), то нужно убедиться, что тултипу хватит
       * места слева и справа */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnTop = anchorElementRect.top > GAP + tooltipRect.height;
        const isEnoughOnLeft = anchorElementRect.left + anchorElementRect.width / 2 > tooltipRect.width / 2;
        const isEnoughOnRight =
          window.innerWidth - anchorElementRect.right - scrollbarSize + anchorElementRect.width / 2 >
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
          window.innerHeight - anchorElementRect.bottom - scrollbarSize >
          (tooltipRect.height - anchorElementRect.height) / 2;
        return isEnoughOnLeft && isEnoughOnBottom && isEnoughOnTop;
      },
    },
    right: {
      /** проверяем, что тултипу хватит места справа и по высоте (если высота тултипа больше
       * высоты вызвавшего элемента (anchorElement), то нужно убедиться, что тултипу хватит
       * места сверху и снизу) */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnRight = window.innerWidth - anchorElementRect.right - scrollbarSize > GAP + tooltipRect.width;
        const isEnoughOnTop = anchorElementRect.top > (tooltipRect.height - anchorElementRect.height) / 2;
        const isEnoughOnBottom =
          window.innerHeight - anchorElementRect.bottom - scrollbarSize >
          (tooltipRect.height - anchorElementRect.height) / 2;
        return isEnoughOnRight && isEnoughOnBottom && isEnoughOnTop;
      },
    },
    bottomPageCenter: {
      /** проверяем, что тултипу хватит места снизу и по центру */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnBottom =
          window.innerHeight - anchorElementRect.bottom - scrollbarSize > GAP + tooltipRect.height;
        const isEnoughOnCenter = window.innerWidth - scrollbarSize >= tooltipRect.width;
        return isEnoughOnBottom && isEnoughOnCenter;
      },
    },
    topPageCenter: {
      /** проверяем, что тултипу хватит места сверху и по центру */
      check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
        const isEnoughOnTop = anchorElementRect.top > GAP + tooltipRect.height;
        const isEnoughOnCenter = window.innerWidth - scrollbarSize >= tooltipRect.width;
        return isEnoughOnTop && isEnoughOnCenter;
      },
    },
  };
}
