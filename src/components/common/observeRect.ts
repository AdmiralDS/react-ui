// inspired by https://github.com/reach/observe-rect
export type Rect = Omit<DOMRect, 'toJSON'> & {
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
};

export type RectProps = {
  rafId?: number;
  rect?: Rect;
  isObserving?: boolean;
};

const objectKeys = <T extends object>(obj: T) => {
  return Object.keys(obj) as Array<keyof T>;
};

const rectChanged = (a: Rect, b: Rect) => objectKeys(a).some((prop) => a[prop] !== b[prop]);

/** использовать только внутри useEffect или useLayoutEffect */
export default function observeRect(
  node: Element,
  cb: (rect: Rect | undefined) => void,
): { observe: () => void; unobserve: () => void } {
  const state: RectProps = {};
  return {
    observe() {
      if (state.rafId) cancelAnimationFrame(state.rafId);
      const run = () => {
        if (state.isObserving) {
          const { scrollHeight, scrollLeft, scrollTop, scrollWidth } = node;
          const { bottom, height, left, right, top, width, x, y } = node.getBoundingClientRect();

          //IE fix: The returned object lacks x & y values
          const newRect = {
            bottom,
            height,
            left,
            right,
            top,
            width,
            x: x || left,
            y: y || top,
            scrollHeight,
            scrollLeft,
            scrollTop,
            scrollWidth,
          } as const;

          if (rectChanged(newRect, state.rect || ({} as Rect))) {
            state.rect = newRect;
            cb(newRect);
          }
          state.rafId = requestAnimationFrame(run);
        }
      };

      state.rafId = requestAnimationFrame(run);
      state.isObserving = true;
    },

    unobserve() {
      if (state.rafId) cancelAnimationFrame(state.rafId);
      if (state.isObserving) state.isObserving = false;
    },
  };
}
