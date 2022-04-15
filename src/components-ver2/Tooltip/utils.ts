const getScrollbarSize = () => {
  let scrollBarWidth = 0;
  const scrollbox = document.createElement('div');
  scrollbox.innerHTML = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
  nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
  Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
  lobortis nisl ut aliquip ex ea commodo consequat.`;
  scrollbox.style.overflow = 'scroll';
  scrollbox.style.fontSize = '14px';
  scrollbox.style.height = '50px';
  scrollbox.style.maxHeight = '50px';
  scrollbox.style.width = '100px';
  scrollbox.style.position = 'absolute';
  scrollbox.style.top = '-100000px';
  scrollbox.style.left = '-100000px';
  document.body.appendChild(scrollbox);
  scrollBarWidth = scrollbox.offsetWidth - scrollbox.clientWidth;
  document.body.removeChild(scrollbox);
  return scrollBarWidth;
};

/**
 * Обычно ширину полосы прокрутки можно вычислить с помощью offsetWidth - clientWidth. Но есть исключение:
 * если на Mac в настройках стоит System Preferences -> General -> Show scroll bars: Automatically based on mouse or trackpad,
 * то полоса прокрутки будет выводиться поверх всего layoutа и результатом вычислений offsetWidth - clientWidth будет 0.
 * Поэтому, если getScrollbarSize будет возвращать 0, буду вместо 0 брать стандартную для Mac ширину полосы прокрутки (16 пикселей)
 * https://gist.github.com/martynchamberlin/6aaf8a45b36907e9f1e21a28889f6b0a
 */
/** отступ от правого и нижнего края, чтобы тултип не заходил за полосу прокрутки */
const SCROLLBAR_GAP = getScrollbarSize() || 16;
/** отступ от вызвавшего элемента (anchorElement) */
const GAP = 8;

export type TooltipPositionType = 'bottom' | 'top' | 'left' | 'right' | 'bottomPageCenter' | 'topPageCenter';
export type CalculationResult = {
  check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => boolean;
};

// расположены в порядке приоритета при подборе стороны открытия тултипа
const POSITION_MAPPER: Record<TooltipPositionType, CalculationResult> = {
  bottom: {
    /** проверяем, что тултипу хватит места сверху и по ширине (если ширина тултипа больше
     * ширины вызвавшего элемента (anchorElement), то нужно убедиться, что тултипу хватит
     * места слева и справа */
    check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
      const isEnoughOnBottom = window.innerHeight - anchorElementRect.bottom - SCROLLBAR_GAP > GAP + tooltipRect.height;
      const isEnoughOnLeft = anchorElementRect.left + anchorElementRect.width / 2 > tooltipRect.width / 2;
      const isEnoughOnRight =
        window.innerWidth - anchorElementRect.right - SCROLLBAR_GAP + anchorElementRect.width / 2 >
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
        window.innerWidth - anchorElementRect.right - SCROLLBAR_GAP + anchorElementRect.width / 2 >
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
        window.innerHeight - anchorElementRect.bottom - SCROLLBAR_GAP >
        (tooltipRect.height - anchorElementRect.height) / 2;
      return isEnoughOnLeft && isEnoughOnBottom && isEnoughOnTop;
    },
  },
  right: {
    /** проверяем, что тултипу хватит места справа и по высоте (если высота тултипа больше
     * высоты вызвавшего элемента (anchorElement), то нужно убедиться, что тултипу хватит
     * места сверху и снизу) */
    check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
      const isEnoughOnRight = window.innerWidth - anchorElementRect.right - SCROLLBAR_GAP > GAP + tooltipRect.width;
      const isEnoughOnTop = anchorElementRect.top > (tooltipRect.height - anchorElementRect.height) / 2;
      const isEnoughOnBottom =
        window.innerHeight - anchorElementRect.bottom - SCROLLBAR_GAP >
        (tooltipRect.height - anchorElementRect.height) / 2;
      return isEnoughOnRight && isEnoughOnBottom && isEnoughOnTop;
    },
  },
  bottomPageCenter: {
    /** проверяем, что тултипу хватит места снизу и по центру */
    check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
      const isEnoughOnBottom = window.innerHeight - anchorElementRect.bottom - SCROLLBAR_GAP > GAP + tooltipRect.height;
      const isEnoughOnCenter = window.innerWidth - SCROLLBAR_GAP >= tooltipRect.width;
      return isEnoughOnBottom && isEnoughOnCenter;
    },
  },
  topPageCenter: {
    /** проверяем, что тултипу хватит места сверху и по центру */
    check: (anchorElementRect: DOMRect, tooltipRect: DOMRect) => {
      const isEnoughOnTop = anchorElementRect.top > GAP + tooltipRect.height;
      const isEnoughOnCenter = window.innerWidth - SCROLLBAR_GAP >= tooltipRect.width;
      return isEnoughOnTop && isEnoughOnCenter;
    },
  },
};

export function getTooltipDirection(
  anchorElement: HTMLElement,
  tooltipElement: HTMLElement,
  tooltipPosition?: TooltipPositionType,
): any {
  const anchorElementRect: DOMRect = anchorElement.getBoundingClientRect();
  const tooltipRect: DOMRect = tooltipElement.getBoundingClientRect();
  const positions = Object.entries(POSITION_MAPPER) as [TooltipPositionType, CalculationResult][];

  const compatiblePositions = tooltipPosition
    ? positions.filter((kv) => {
        return kv[0] === tooltipPosition;
      })
    : positions.filter((kv) => {
        return kv[1].check(anchorElementRect, tooltipRect);
      });

  return compatiblePositions.length ? compatiblePositions[0][0] : 'bottom';
}
