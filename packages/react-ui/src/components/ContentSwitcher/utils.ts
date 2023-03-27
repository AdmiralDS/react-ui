export const moveFocus = (
  parent: HTMLDivElement | null,
  currentFocus: Element | null,
  calcNextFocus: (parent: HTMLDivElement | null, child: Element | null) => any,
): void => {
  let wrappedOnce = false;
  let nextFocus = calcNextFocus(parent, currentFocus);
  while (nextFocus) {
    if (nextFocus === parent?.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }

    if (nextFocus.hasAttribute('disabled')) {
      nextFocus = calcNextFocus(parent, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};

export const nextItem = (parent: Element | null, child: Element | null): Element | null | undefined | ChildNode => {
  if (child?.nextElementSibling) {
    return child.nextElementSibling;
  }
  return parent?.firstChild;
};

export const previousItem = (parent: Element | null, child: Element | null): Element | null | undefined | ChildNode => {
  if (child?.previousElementSibling) {
    return child.previousElementSibling;
  }
  return parent?.lastChild;
};
