type HintPositionType =
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-pageCenter'
  | 'top-right'
  | 'top-left'
  | 'top-pageCenter'
  | 'right-bottom'
  | 'right-top'
  | 'right-pageCenter'
  | 'left-bottom'
  | 'left-top'
  | 'left-pageCenter';

export type CalculationResult = {
  check: (
    anchorElementRect: DOMRect,
    hintRect: DOMRect,
    withScroll: boolean,
    viewportScrollHeight: number,
    viewportScrollWidth: number,
  ) => boolean;
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
  'right-bottom': {
    /** проверяем, что тултипу хватит места справа и снизу */
    check: (
      anchorElementRect: DOMRect,
      hintRect: DOMRect,
      withScroll: boolean,
      viewportScrollHeight: number,
      viewportScrollWidth: number,
    ) => {
      const isEnoughOnRight = document.documentElement.clientWidth - anchorElementRect.right >= hintRect.width;
      const isEnoughOnRightWithScroll =
        viewportScrollWidth - (anchorElementRect.right + window.scrollX) > hintRect.width;
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.top > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.top + window.scrollY) > hintRect.height;
      return (
        (withScroll ? isEnoughOnRightWithScroll : isEnoughOnRight) &&
        (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom)
      );
    },
  },
  'right-top': {
    /** проверяем, что тултипу хватит места справа и сверху */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, _, viewportScrollWidth: number) => {
      const isEnoughOnRight = document.documentElement.clientWidth - anchorElementRect.right >= hintRect.width;
      const isEnoughOnRightWithScroll =
        viewportScrollWidth - (anchorElementRect.right + window.scrollX) > hintRect.width;
      const isEnoughOnTop = anchorElementRect.bottom > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.bottom + window.scrollY > hintRect.height;
      return (
        (withScroll ? isEnoughOnRightWithScroll : isEnoughOnRight) &&
        (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop)
      );
    },
  },
  'right-pageCenter': {
    /** проверяем, что тултипу хватит места справа и по центру страницы */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, _, viewportScrollWidth: number) => {
      const isEnoughOnRight = document.documentElement.clientWidth - anchorElementRect.right >= hintRect.width;
      const isEnoughOnRightWithScroll =
        viewportScrollWidth - (anchorElementRect.right + window.scrollX) > hintRect.width;
      const isEnoughOnCenter = hintRect.height < document.documentElement.clientHeight;
      return isEnoughOnCenter && (withScroll ? isEnoughOnRightWithScroll : isEnoughOnRight);
    },
  },
  'left-bottom': {
    /** проверяем, что тултипу хватит места слева и снизу */
    check: (
      anchorElementRect: DOMRect,
      hintRect: DOMRect,
      withScroll: boolean,
      viewportScrollHeight: number,
      viewportScrollWidth: number,
    ) => {
      const isEnoughOnLeft = document.documentElement.clientWidth - anchorElementRect.left >= hintRect.width;
      const isEnoughOnLeftWithScroll = viewportScrollWidth - (anchorElementRect.left + window.scrollX) > hintRect.width;
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.top > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.top + window.scrollY) > hintRect.height;
      return (
        (withScroll ? isEnoughOnLeftWithScroll : isEnoughOnLeft) &&
        (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom)
      );
    },
  },
  'left-top': {
    /** проверяем, что тултипу хватит места слева и сверху */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, _, viewportScrollWidth: number) => {
      const isEnoughOnLeft = document.documentElement.clientWidth - anchorElementRect.left >= hintRect.width;
      const isEnoughOnLeftWithScroll = viewportScrollWidth - (anchorElementRect.left + window.scrollX) > hintRect.width;
      const isEnoughOnTop = anchorElementRect.bottom > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.bottom + window.scrollY > hintRect.height;
      return (
        (withScroll ? isEnoughOnLeftWithScroll : isEnoughOnLeft) &&
        (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop)
      );
    },
  },
  'left-pageCenter': {
    /** проверяем, что тултипу хватит места слева и по центру страницы */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, _, viewportScrollWidth: number) => {
      const isEnoughOnLeft = document.documentElement.clientWidth - anchorElementRect.left >= hintRect.width;
      const isEnoughOnLeftWithScroll = viewportScrollWidth - (anchorElementRect.left + window.scrollX) > hintRect.width;
      const isEnoughOnCenter = hintRect.height < document.documentElement.clientHeight;
      return isEnoughOnCenter && (withScroll ? isEnoughOnLeftWithScroll : isEnoughOnLeft);
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

  const viewportScrollWidth = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth,
  );

  let compatiblePositions = positions.filter((kv) => {
    return kv[1].check(anchorElementRect, hintRect, false, viewportScrollHeight, viewportScrollWidth);
  });

  // вычисляем позицию хинта с учетом вертикального скролла
  if (compatiblePositions.length === 0) {
    compatiblePositions = positions.filter((kv) => {
      return kv[1].check(anchorElementRect, hintRect, true, viewportScrollHeight, viewportScrollWidth);
    });
  }

  return compatiblePositions.length ? compatiblePositions[0][0] : 'bottom-right';
}
