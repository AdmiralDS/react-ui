export const moveFocus = (
  parent: HTMLDivElement | null,
  currentFocus: Element | null,
  calcNextFocus: (
    parent: HTMLDivElement | null,
    child: Element | null,
    stop?: boolean,
    onMenuReachTop?: () => void,
    onMenuReachBottom?: () => void,
  ) => any,
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
    if (nextFocus === parent?.firstChild) {
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
  parent: Element | null,
  child: Element | null,
  stop?: boolean,
  _onMenuReachTop?: () => void,
  onMenuReachBottom?: () => void,
): Element | null | undefined | ChildNode => {
  if (child?.nextElementSibling) {
    return child.nextElementSibling;
  }
  onMenuReachBottom?.();
  return stop ? null : parent?.firstChild;
};

export const previousItem = (
  parent: Element | null,
  child: Element | null,
  stop?: boolean,
  onMenuReachTop?: () => void,
): Element | null | undefined | ChildNode => {
  if (child?.previousElementSibling) {
    return child.previousElementSibling;
  }
  onMenuReachTop?.();
  return stop ? null : parent?.lastChild;
};
