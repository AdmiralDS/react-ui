type FocusCalculator = (
  parent: HTMLDivElement | null,
  child: Element | null,
  stop?: boolean,
  onMenuReachTop?: () => void,
  onMenuReachBottom?: () => void,
) => Element | null;

export const moveFocus = (
  parent: HTMLDivElement | null,
  currentFocus: Element | null,
  calcNextFocus: FocusCalculator,
  stop?: boolean,
  menuFocus?: boolean,
  onMenuReachTop?: () => void,
  onMenuReachBottom?: () => void,
): void => {
  let wrappedOnce = false;
  let nextFocus = menuFocus
    ? calcNextFocus(parent, currentFocus, stop, onMenuReachTop, onMenuReachBottom)
    : calcNextFocus(parent, currentFocus, stop);
  while (nextFocus) {
    if (nextFocus === parent?.firstElementChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }

    if (!nextFocus.hasAttribute('tabindex') || nextFocus.hasAttribute('disabled')) {
      nextFocus = menuFocus
        ? calcNextFocus(parent, nextFocus, stop, onMenuReachTop, onMenuReachBottom)
        : calcNextFocus(parent, nextFocus, stop);
    } else {
      nextFocus.focus();
      return;
    }
  }
};

export const nextItem = (
  parent: HTMLDivElement | null,
  child: Element | null,
  stop?: boolean,
  _onMenuReachTop?: () => void,
  onMenuReachBottom?: () => void,
): Element | null => {
  if (child?.nextElementSibling) {
    return child.nextElementSibling;
  }
  onMenuReachBottom?.();
  if (stop) {
    return null;
  }
  return parent?.firstElementChild ?? null;
};

export const previousItem = (
  parent: HTMLDivElement | null,
  child: Element | null,
  stop?: boolean,
  onMenuReachTop?: () => void,
): Element | null => {
  if (child?.previousElementSibling) {
    return child.previousElementSibling;
  }
  onMenuReachTop?.();
  if (stop) {
    return null;
  }
  return parent?.lastElementChild ?? null;
};
