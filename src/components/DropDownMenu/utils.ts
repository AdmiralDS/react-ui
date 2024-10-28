export const moveFocus = (
  parent: HTMLUListElement | null,
  currentFocus: Element | null,
  calcNextFocus: (parent: HTMLUListElement | null, child: Element | null, stop?: boolean) => any,
  stop?: boolean,
): void => {
  let wrappedOnce = false;
  let nextFocus = calcNextFocus(parent, currentFocus, stop);
  while (nextFocus) {
    if (nextFocus === parent?.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }

    if (!nextFocus.hasAttribute('tabindex') || nextFocus.hasAttribute('disabled')) {
      nextFocus = calcNextFocus(parent, nextFocus, stop);
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
): Element | null | undefined | ChildNode => {
  if (child?.nextElementSibling) {
    return child.nextElementSibling;
  }
  return stop ? null : parent?.firstChild;
};

export const previousItem = (
  parent: Element | null,
  child: Element | null,
  stop?: boolean,
): Element | null | undefined | ChildNode => {
  if (child?.previousElementSibling) {
    return child.previousElementSibling;
  }
  return stop ? null : parent?.lastChild;
};
