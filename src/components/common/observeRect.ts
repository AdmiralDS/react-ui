// inspired by https://github.com/reach/observe-rect
export type RectProps = {
  rafId?: number;
  rect?: DOMRect;
  // isObserving should become false on node unmount
  isObserving?: boolean;
};

const props: (keyof DOMRect)[] = ['bottom', 'height', 'left', 'right', 'top', 'width'];

const rectChanged = (a: DOMRect = {} as DOMRect, b: DOMRect = {} as DOMRect) =>
  props.some((prop) => a[prop] !== b[prop]);

export default function observeRect(
  node: Element,
  cb: (rect: DOMRect | undefined) => void,
): { observe: () => void; unobserve: () => void } {
  const state: RectProps = {};
  return {
    observe() {
      if (state.rafId) cancelAnimationFrame(state.rafId);
      const run = () => {
        if (state.isObserving) {
          const { bottom, height, left, right, top, width, x, y } = node.getBoundingClientRect();

          //IE fix: The returned object lacks x & y values
          const newRect = { bottom, height, left, right, top, width, x: x || left, y: y || top } as DOMRect;
  
          if (rectChanged(newRect, state.rect)) {
            state.rect = newRect;
            cb(state.rect);
          }
          state.rafId = window.requestAnimationFrame(run);
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
