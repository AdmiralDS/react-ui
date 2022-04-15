type HintPositionType =
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-pageCenter'
  | 'top-right'
  | 'top-left'
  | 'top-pageCenter';

export type CalculationResult = {
  check: (anchorElementRect: DOMRect, hintRect: DOMRect) => boolean;
};

// расположены в порядке приоритета при подборе стороны открытия тултипа
const POSITION_MAPPER: Record<HintPositionType, CalculationResult> = {
  'bottom-right': {
    /** проверяем, что тултипу хватит места снизу и справа */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect) => {
      const isEnoughOnBottom = window.innerHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnRight = window.innerWidth - anchorElementRect.right >= hintRect.width - anchorElementRect.width;
      return isEnoughOnBottom && isEnoughOnRight;
    },
  },
  'bottom-left': {
    /** проверяем, что тултипу хватит места снизу и слева */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect) => {
      const isEnoughOnBottom = window.innerHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width - anchorElementRect.width;
      return isEnoughOnBottom && isEnoughOnLeft;
    },
  },
  'bottom-pageCenter': {
    /** проверяем, что тултипу хватит места снизу и по центру страницы */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect) => {
      const isEnoughOnBottom = window.innerHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnCenter = hintRect.width < window.innerWidth;
      return isEnoughOnBottom && isEnoughOnCenter;
    },
  },
  'top-right': {
    /** проверяем, что тултипу хватит места сверху и справа */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnRight = window.innerWidth - anchorElementRect.right >= hintRect.width - anchorElementRect.width;
      return isEnoughOnRight && isEnoughOnTop;
    },
  },
  'top-left': {
    /** проверяем, что тултипу хватит места сверху и слева */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width - anchorElementRect.width;
      return isEnoughOnLeft && isEnoughOnTop;
    },
  },
  'top-pageCenter': {
    /** проверяем, что тултипу хватит места сверху и по центру страницы */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnCenter = hintRect.width < window.innerWidth;
      return isEnoughOnCenter && isEnoughOnTop;
    },
  },
};

export function getHintDirection(anchorElement: HTMLElement, hintElement: HTMLElement): any {
  const anchorElementRect: DOMRect = anchorElement.getBoundingClientRect();
  const hintRect: DOMRect = hintElement.getBoundingClientRect();
  const positions = Object.entries(POSITION_MAPPER) as [HintPositionType, CalculationResult][];

  const compatiblePositions = positions.filter((kv) => {
    return kv[1].check(anchorElementRect, hintRect);
  });

  return compatiblePositions.length ? compatiblePositions[0][0] : 'bottom-right';
}
