const GAP = 8; // отступы вокруг HintDialog

type HintPositionType = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
export type CalculationResult = {
  check: (anchorElementRect: ClientRect, hintRect: ClientRect) => boolean;
  getStyles: (anchorElementRect: ClientRect, hintRect: ClientRect) => string;
};

// расположены в порядке приоритета при подборе стороны открытия тултипа
const POSITION_MAPPER: Record<HintPositionType, CalculationResult> = {
  'bottom-right': {
    /** проверяем, что тултипу хватит места снизу и справа */
    check: (anchorElementRect: ClientRect, hintRect: ClientRect) => {
      const isEnoughOnBottom = window.innerHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnRight = window.innerWidth - anchorElementRect.right >= hintRect.width - anchorElementRect.width;
      return isEnoughOnBottom && isEnoughOnRight;
    },
    getStyles: (anchorElementRect: ClientRect) => `
      translate3d(${Math.floor(anchorElementRect.left - GAP)}px, ${Math.floor(
      anchorElementRect.bottom + window.pageYOffset,
    )}px, 0px)
    `,
  },
  'bottom-left': {
    /** проверяем, что тултипу хватит места снизу и слева */
    check: (anchorElementRect: ClientRect, hintRect: ClientRect) => {
      const isEnoughOnBottom = window.innerHeight - anchorElementRect.bottom > hintRect.height;
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width - anchorElementRect.width;
      return isEnoughOnBottom && isEnoughOnLeft;
    },
    getStyles: (anchorElementRect: ClientRect, hintRect: ClientRect) => `
      translate3d(${Math.floor(
        anchorElementRect.left - (hintRect.width - anchorElementRect.width) + GAP,
      )}px, ${Math.floor(anchorElementRect.bottom + window.pageYOffset)}px, 0px)
    `,
  },
  'top-right': {
    /** проверяем, что тултипу хватит места сверху и справа */
    check: (anchorElementRect: ClientRect, hintRect: ClientRect) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnRight = window.innerWidth - anchorElementRect.right >= hintRect.width - anchorElementRect.width;
      return isEnoughOnRight && isEnoughOnTop;
    },
    getStyles: (anchorElementRect: ClientRect, hintRect: ClientRect) => `
      translate3d(${Math.floor(anchorElementRect.left - GAP)}px, ${Math.floor(
      anchorElementRect.top - hintRect.height + window.pageYOffset,
    )}px, 0px)
    `,
  },
  'top-left': {
    /** проверяем, что тултипу хватит места сверху и слева */
    check: (anchorElementRect: ClientRect, hintRect: ClientRect) => {
      const isEnoughOnTop = anchorElementRect.top > hintRect.height;
      const isEnoughOnLeft = anchorElementRect.left > hintRect.width - anchorElementRect.width;
      return isEnoughOnLeft && isEnoughOnTop;
    },
    getStyles: (anchorElementRect: ClientRect, hintRect: ClientRect) => `
    translate3d(${Math.floor(
      anchorElementRect.left - (hintRect.width - anchorElementRect.width) + GAP,
    )}px, ${Math.floor(anchorElementRect.top - hintRect.height + window.pageYOffset)}px, 0px)
    `,
  },
};

export function calculateDirection(anchorElement: HTMLElement, hintElement: HTMLElement): CalculationResult {
  const anchorElementRect: ClientRect = anchorElement.getBoundingClientRect();
  const hintRect: ClientRect = hintElement.getBoundingClientRect();
  const positions = Object.entries(POSITION_MAPPER) as [HintPositionType, CalculationResult][];

  const compatiblePositions = positions.filter((kv) => {
    return kv[1].check(anchorElementRect, hintRect);
  });
  return compatiblePositions.length ? compatiblePositions[0][1] : POSITION_MAPPER['bottom-left'];
}
