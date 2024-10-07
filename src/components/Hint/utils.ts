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
  check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => boolean;
};

// расположены в порядке приоритета при подборе стороны открытия хинта
const POSITION_MAPPER: Record<InternalHintPositionType, CalculationResult> = {
  bottomRight: {
    /** проверяем, что хинту хватит места снизу и справа */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + globalThis.scrollY) > hintRect.height;
      const isEnoughOnRight =
        document.documentElement.clientWidth - anchorElementRect.right > hintRect.width - anchorElementRect.width;
      return (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) && isEnoughOnRight;
    },
  },
  bottomLeft: {
    /** проверяем, что хинту хватит места снизу и слева */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + globalThis.scrollY) > hintRect.height;
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width - anchorElementRect.width;
      return (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) && isEnoughOnLeft;
    },
  },
  topRight: {
    /** проверяем, что хинту хватит места сверху и справа */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.top + globalThis.scrollY > hintRect.height;
      const isEnoughOnRight =
        document.documentElement.clientWidth - anchorElementRect.right > hintRect.width - anchorElementRect.width;
      return isEnoughOnRight && (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop);
    },
  },
  topLeft: {
    /** проверяем, что хинту хватит места сверху и слева */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.top + globalThis.scrollY > hintRect.height;
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width - anchorElementRect.width;
      return isEnoughOnLeft && (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop);
    },
  },
  leftBottom: {
    /** проверяем, что хинту хватит места слева и снизу */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width;
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.top > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.top + globalThis.scrollY) > hintRect.height;
      return isEnoughOnLeft && (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom);
    },
  },
  leftTop: {
    /** проверяем, что хинту хватит места слева и сверху */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width;
      const isEnoughOnTop = anchorElementRect.bottom > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.bottom + globalThis.scrollY > hintRect.height;
      return isEnoughOnLeft && (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop);
    },
  },
  rightBottom: {
    /** проверяем, что хинту хватит места справа и снизу */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnRight = document.documentElement.clientWidth - anchorElementRect.right > hintRect.width;
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.top > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.top + globalThis.scrollY) > hintRect.height;
      return isEnoughOnRight && (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom);
    },
  },
  rightTop: {
    /** проверяем, что хинту хватит места справа и сверху */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnRight = document.documentElement.clientWidth - anchorElementRect.right > hintRect.width;
      const isEnoughOnTop = anchorElementRect.bottom > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.bottom + globalThis.scrollY > hintRect.height;
      return isEnoughOnRight && (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop);
    },
  },
  bottom: {
    /** проверяем, что хинту хватит места снизу и по центру anchorElementRect */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + globalThis.scrollY) > hintRect.height;

      const isEnoughOnLeft = anchorElementRect.left + anchorElementRect.width / 2 > hintRect.width / 2;
      const isEnoughOnRight =
        document.documentElement.clientWidth - anchorElementRect.right + anchorElementRect.width / 2 >
        hintRect.width / 2;

      return (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) && isEnoughOnLeft && isEnoughOnRight;
    },
  },
  top: {
    /** проверяем, что хинту хватит места сверху и по центру anchorElementRect */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.top + globalThis.scrollY > hintRect.height;

      const isEnoughOnLeft = anchorElementRect.left + anchorElementRect.width / 2 > hintRect.width / 2;
      const isEnoughOnRight =
        document.documentElement.clientWidth - anchorElementRect.right + anchorElementRect.width / 2 >
        hintRect.width / 2;

      return (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop) && isEnoughOnLeft && isEnoughOnRight;
    },
  },
  left: {
    /** проверяем, что хинту хватит места слева и по центру anchorElementRect */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width;

      const isEnoughOnTop = anchorElementRect.top > (hintRect.height - anchorElementRect.height) / 2;
      const isEnoughOnTopWithScroll =
        anchorElementRect.top + globalThis.screenY > (hintRect.height - anchorElementRect.height) / 2;

      const isEnoughOnBottom =
        document.documentElement.clientHeight - anchorElementRect.bottom >
        (hintRect.height - anchorElementRect.height) / 2;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + globalThis.scrollY) >
        (hintRect.height - anchorElementRect.height) / 2;

      return (
        isEnoughOnLeft &&
        (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop) &&
        (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom)
      );
    },
  },
  right: {
    /** проверяем, что хинту хватит места справа и по центру anchorElementRect */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnRight = document.documentElement.clientWidth - anchorElementRect.right > hintRect.width;

      const isEnoughOnTop = anchorElementRect.top > (hintRect.height - anchorElementRect.height) / 2;
      const isEnoughOnTopWithScroll =
        anchorElementRect.top + globalThis.screenY > (hintRect.height - anchorElementRect.height) / 2;

      const isEnoughOnBottom =
        document.documentElement.clientHeight - anchorElementRect.bottom >
        (hintRect.height - anchorElementRect.height) / 2;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + globalThis.scrollY) >
        (hintRect.height - anchorElementRect.height) / 2;

      return (
        isEnoughOnRight &&
        (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop) &&
        (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom)
      );
    },
  },
  bottomPageCenter: {
    /** проверяем, что хинту хватит места снизу и по центру страницы */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean, viewportScrollHeight: number) => {
      const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnBottomWithScroll =
        viewportScrollHeight - (anchorElementRect.bottom + globalThis.scrollY) > hintRect.height;
      const isEnoughOnCenter = hintRect.width < document.documentElement.clientWidth;
      return (withScroll ? isEnoughOnBottomWithScroll : isEnoughOnBottom) && isEnoughOnCenter;
    },
  },
  topPageCenter: {
    /** проверяем, что хинту хватит места сверху и по центру страницы */
    check: (anchorElementRect: DOMRect, hintRect: DOMRect, withScroll: boolean) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnTopWithScroll = anchorElementRect.top + globalThis.scrollY > hintRect.height;
      const isEnoughOnCenter = hintRect.width < document.documentElement.clientWidth;
      return isEnoughOnCenter && (withScroll ? isEnoughOnTopWithScroll : isEnoughOnTop);
    },
  },
};

const defaultHintPosition = (hintPosition?: HintPositionType) => {
  switch (hintPosition) {
    case 'left':
      return 'leftBottom';
    case 'right':
      return 'rightBottom';
    case 'top':
      return 'topRight';
    case 'bottom':
    default:
      return 'bottomRight';
  }
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

  /** Если задан параметр hintPosition, то тултип обязательно должен отрендериться в указанном направлении
   * (с возможностью сдвига по горизонтальной оси при hintPosition === 'top' | 'bottom',
   * и по вертикальной оси при hintPosition = 'right' | 'left').
   * Н-р, если hintPosition === 'top', то происходит проверка позиций topRight|topLeft|top|topPageCenter
   */
  let compatiblePositions = hintPosition
    ? positions.filter((kv) => {
        return kv[0].includes(hintPosition) && kv[1].check(anchorElementRect, hintRect, false, viewportScrollHeight);
      })
    : positions.filter((kv) => {
        return kv[1].check(anchorElementRect, hintRect, false, viewportScrollHeight);
      });

  // вычисляем позицию хинта с учетом вертикального скролла
  if (compatiblePositions.length === 0) {
    compatiblePositions = hintPosition
      ? positions.filter((kv) => {
          return kv[0].includes(hintPosition) && kv[1].check(anchorElementRect, hintRect, true, viewportScrollHeight);
        })
      : positions.filter((kv) => {
          return kv[1].check(anchorElementRect, hintRect, true, viewportScrollHeight);
        });
  }

  const defaultPosition = defaultHintPosition(hintPosition);
  return compatiblePositions.length ? compatiblePositions[0][0] : defaultPosition;
}
