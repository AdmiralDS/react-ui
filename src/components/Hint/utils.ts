type HintPositionType =
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-pageCenter'
  | 'top-right'
  | 'top-left'
  | 'top-pageCenter';

export type CalculationResult = {
  check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => boolean;
};

// расположены в порядке приоритета при подборе стороны открытия тултипа
const POSITION_MAPPER: Record<HintPositionType, CalculationResult> = {
  'bottom-right': {
    /** проверяем, что тултипу хватит места снизу и справа */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + window.scrollY) > hintRect.height;
      const isEnoughOnRight =
        document.documentElement.clientWidth - anchorElementRect.right >= hintRect.width - anchorElementRect.width;
      return (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) && isEnoughOnRight;
    },
  },
  'bottom-left': {
    /** проверяем, что тултипу хватит места снизу и слева */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + window.scrollY) > hintRect.height;
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width - anchorElementRect.width;
      return (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) && isEnoughOnLeft;
    },
  },
  'bottom-pageCenter': {
    /** проверяем, что тултипу хватит места снизу и по центру страницы */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + window.scrollY) > hintRect.height;
      const isEnoughOnCenter = hintRect.width < document.documentElement.clientWidth;
      return (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) && isEnoughOnCenter;
    },
  },
  'top-right': {
    /** проверяем, что тултипу хватит места сверху и справа */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.top + window.scrollY > hintRect.height;
      const isEnoughOnRight =
        document.documentElement.clientWidth - anchorElementRect.right >= hintRect.width - anchorElementRect.width;
      return isEnoughOnRight && (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop);
    },
  },
  'top-left': {
    /** проверяем, что тултипу хватит места сверху и слева */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.top + window.scrollY > hintRect.height;
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width - anchorElementRect.width;
      return isEnoughOnLeft && (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop);
    },
  },
  'top-pageCenter': {
    /** проверяем, что тултипу хватит места сверху и по центру страницы */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.top + window.scrollY > hintRect.height;
      const isEnoughOnCenter = hintRect.width < document.documentElement.clientWidth;
      return isEnoughOnCenter && (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop);
    },
  },
};

export function getHintDirection(anchorElement: HTMLElement, hintElement: HTMLElement): any {
  const anchorElementRect: DOMRect = anchorElement.getBoundingClientRect();
  const hintRect: DOMRect = hintElement.getBoundingClientRect();
  const positions = Object.entries(POSITION_MAPPER) as [HintPositionType, CalculationResult][];

  const viewportScrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );

  let compatiblePositions = positions.filter((kv) => {
    return kv[1].check(anchorElementRect, hintRect, false, viewportScrollHeight);
  });

  // вычисляем позицию хинта с учетом вертикального скролла
  if (compatiblePositions.length === 0) {
    compatiblePositions = positions.filter((kv) => {
      return kv[1].check(anchorElementRect, hintRect, true, viewportScrollHeight);
    });
  }

  return compatiblePositions.length ? compatiblePositions[0][0] : 'bottom-right';
}
