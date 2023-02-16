export type HintPositionType = 'bottom' | 'top' | 'left' | 'right';
export type InternalHintPositionType =
  | HintPositionType
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
  check: (
    anchorElementRect: DOMRect,
    hintRect: DOMRect,
    withScroll: boolean,
    viewportScrollHeight: number,
    viewportScrollWidth: number,
  ) => boolean;
};

// расположены в порядке приоритета при подборе стороны открытия тултипа
const POSITION_MAPPER: Record<InternalHintPositionType, CalculationResult> = {
  bottomRight: {
    /** проверяем, что тултипу хватит места снизу и справа */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + window.scrollY) > hintRect.height;
      const isEnoughOnRight =
        document.documentElement.clientWidth - anchorElementRect.right > hintRect.width - anchorElementRect.width;
      return (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) && isEnoughOnRight;
    },
  },
  bottomLeft: {
    /** проверяем, что тултипу хватит места снизу и слева */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + window.scrollY) > hintRect.height;
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width - anchorElementRect.width;
      return (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) && isEnoughOnLeft;
    },
  },
  topRight: {
    /** проверяем, что тултипу хватит места сверху и справа */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.top + window.scrollY > hintRect.height;
      const isEnoughOnRight =
        document.documentElement.clientWidth - anchorElementRect.right > hintRect.width - anchorElementRect.width;
      return isEnoughOnRight && (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop);
    },
  },
  topLeft: {
    /** проверяем, что тултипу хватит места сверху и слева */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.top + window.scrollY > hintRect.height;
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width - anchorElementRect.width;
      return isEnoughOnLeft && (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop);
    },
  },
  leftBottom: {
    /** проверяем, что тултипу хватит места слева и снизу */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width;
      const isEnoughOnLeftWithScroll = anchorElementRect.left + window.scrollX > hintRect.width;
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.top > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.top + window.scrollY) > hintRect.height;
      return (
        (withScroll ? isEnoughOnLeftWithScroll : isEnoughOnLeft) &&
        (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom)
      );
    },
  },
  leftTop: {
    /** проверяем, что тултипу хватит места слева и сверху */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width;
      const isEnoughOnLeftWithScroll = anchorElementRect.left + window.scrollX > hintRect.width;
      const isEnoughOnTop = anchorElementRect.bottom > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.bottom + window.scrollY > hintRect.height;
      return (
        (withScroll ? isEnoughOnLeftWithScroll : isEnoughOnLeft) &&
        (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop)
      );
    },
  },
  rightBottom: {
    /** проверяем, что тултипу хватит места справа и снизу */
    check: (
      anchorElementRect: DOMRect,
      hintRect: DOMRect,
      withScroll: boolean,
      viewportScrollHeight: number,
      viewportScrollWidth: number,
    ) => {
      const isEnoughOnRight = document.documentElement.clientWidth - anchorElementRect.right > hintRect.width;
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
  rightTop: {
    /** проверяем, что тултипу хватит места справа и сверху */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, _, viewportScrollWidth: number) => {
      const isEnoughOnRight = document.documentElement.clientWidth - anchorElementRect.right > hintRect.width;
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
  bottom: {
    /** проверяем, что тултипу хватит места снизу и по центру anchorElementRect */
    check: (
      anchorElementRect: DOMRect,
      hintRect: DOMRect,
      withScroll: boolean,
      viewportScrollHeight: number,
      viewportScrollWidth: number,
    ) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + window.scrollY) > hintRect.height;

      const isEnoughOnLeft = anchorElementRect.left + anchorElementRect.width / 2 > hintRect.width / 2;
      const isEnoughOnLeftWithScroll =
        anchorElementRect.left + window.scrollX + anchorElementRect.width / 2 > hintRect.width / 2;

      const isEnoughOnRight =
        document.documentElement.clientWidth - anchorElementRect.right + anchorElementRect.width / 2 >
        hintRect.width / 2;
      const isEnoughOnRightWithScroll =
        viewportScrollWidth - (anchorElementRect.right + window.scrollX) + anchorElementRect.width / 2 >
        hintRect.width / 2;

      return (
        (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) &&
        (withScroll ? isEnoughOnLeftWithScroll : isEnoughOnLeft) &&
        (withScroll ? isEnoughOnRightWithScroll : isEnoughOnRight)
      );
    },
  },
  top: {
    /** проверяем, что тултипу хватит места сверху и по центру anchorElementRect */
    check: (
      anchorElementRect: DOMRect,
      hintRect: DOMRect,
      withScroll: boolean,
      viewportScrollHeight: number,
      viewportScrollWidth: number,
    ) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + window.scrollY) > hintRect.height;

      const isEnoughOnLeft = anchorElementRect.left + anchorElementRect.width / 2 > hintRect.width / 2;
      const isEnoughOnLeftWithScroll =
        anchorElementRect.left + window.scrollX + anchorElementRect.width / 2 > hintRect.width / 2;

      const isEnoughOnRight =
        document.documentElement.clientWidth - anchorElementRect.right + anchorElementRect.width / 2 >
        hintRect.width / 2;
      const isEnoughOnRightWithScroll =
        viewportScrollWidth - (anchorElementRect.right + window.scrollX) + anchorElementRect.width / 2 >
        hintRect.width / 2;

      return (
        (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) &&
        (withScroll ? isEnoughOnLeftWithScroll : isEnoughOnLeft) &&
        (withScroll ? isEnoughOnRightWithScroll : isEnoughOnRight)
      );
    },
  },
  left: {
    /** проверяем, что тултипу хватит места слева и по центру anchorElementRect */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width;
      const isEnoughOnLeftWithScroll = anchorElementRect.left + window.scrollX > hintRect.width;

      const isEnoughOnTop = anchorElementRect.top > (hintRect.height - anchorElementRect.height) / 2;
      const isEnoughOnTopWithScroll =
        anchorElementRect.top + window.screenY > (hintRect.height - anchorElementRect.height) / 2;

      const isEnoughOnBottom =
        document.documentElement.clientHeight - anchorElementRect.bottom >
        (hintRect.height - anchorElementRect.height) / 2;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + window.scrollY) >
        (hintRect.height - anchorElementRect.height) / 2;

      return (
        (withScroll ? isEnoughOnLeftWithScroll : isEnoughOnLeft) &&
        (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop) &&
        (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom)
      );
    },
  },
  right: {
    /** проверяем, что тултипу хватит места справа и по центру anchorElementRect */
    check: (
      anchorElementRect: DOMRect,
      hintRect: DOMRect,
      withScroll: boolean,
      viewportScrollHeight: number,
      viewportScrollWidth: number,
    ) => {
      const isEnoughOnRight = document.documentElement.clientWidth - anchorElementRect.right > hintRect.width;
      const isEnoughOnRightWithScroll =
        viewportScrollWidth - (anchorElementRect.right + window.scrollX) > hintRect.width;

      const isEnoughOnTop = anchorElementRect.top > (hintRect.height - anchorElementRect.height) / 2;
      const isEnoughOnTopWithScroll =
        anchorElementRect.top + window.screenY > (hintRect.height - anchorElementRect.height) / 2;

      const isEnoughOnBottom =
        document.documentElement.clientHeight - anchorElementRect.bottom >
        (hintRect.height - anchorElementRect.height) / 2;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + window.scrollY) >
        (hintRect.height - anchorElementRect.height) / 2;
      return (
        (withScroll ? isEnoughOnRightWithScroll : isEnoughOnRight) &&
        (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop) &&
        (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom)
      );
    },
  },
  bottomPageCenter: {
    /** проверяем, что тултипу хватит места снизу и по центру страницы */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + window.scrollY) > hintRect.height;
      const isEnoughOnCenter = hintRect.width < document.documentElement.clientWidth;
      return (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) && isEnoughOnCenter;
    },
  },
  topPageCenter: {
    /** проверяем, что тултипу хватит места сверху и по центру страницы */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.top + window.scrollY > hintRect.height;
      const isEnoughOnCenter = hintRect.width < document.documentElement.clientWidth;
      return isEnoughOnCenter && (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop);
    },
  },
};

export function getHintDirection(
  anchorElement: HTMLElement,
  hintElement: HTMLElement,
  hintPosition?: HintPositionType,
): InternalHintPositionType {
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

  /** Если задан параметр hintPosition, то тултип обязательно должен отрендериться в указанном направлении
   * (с возможностью сдвига по горизонтальной оси при hintPosition === 'top' | 'bottom',
   * и по вертикальной оси при hintPosition = 'right' | 'left').
   * Н-р, если hintPosition === 'top', то происходит проверка позиций topLeft|topRight|top|topPageCenter
   */
  let compatiblePositions = hintPosition
    ? positions.filter((kv) => {
        return (
          kv[0].includes(hintPosition) &&
          kv[1].check(anchorElementRect, hintRect, false, viewportScrollHeight, viewportScrollWidth)
        );
      })
    : positions.filter((kv) => {
        return kv[1].check(anchorElementRect, hintRect, false, viewportScrollHeight, viewportScrollWidth);
      });

  // вычисляем позицию хинта с учетом вертикального и горизонтального скроллов
  if (compatiblePositions.length === 0) {
    compatiblePositions = hintPosition
      ? positions.filter((kv) => {
          return (
            kv[0].includes(hintPosition) &&
            kv[1].check(anchorElementRect, hintRect, true, viewportScrollHeight, viewportScrollWidth)
          );
        })
      : positions.filter((kv) => {
          return kv[1].check(anchorElementRect, hintRect, true, viewportScrollHeight, viewportScrollWidth);
        });
  }

  const defaultPosition = hintPosition || 'bottomRight';
  return compatiblePositions.length ? compatiblePositions[0][0] : defaultPosition;
}
