export const moveFocus = (
  parent: HTMLDivElement | null,
  currentFocus: Element | null,
  calcNextFocus: (parent: HTMLDivElement | null, child: Element | null, stop?: boolean) => any,
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

    if (nextFocus.getAttribute('aria-disabled') == 'true') {
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
    return child.nextElementSibling.firstElementChild;
  }
  return stop ? null : parent?.firstChild?.firstChild;
};

export const previousItem = (
  parent: Element | null,
  child: Element | null,
  stop?: boolean,
): Element | null | undefined | ChildNode => {
  if (child?.previousElementSibling) {
    return child.previousElementSibling.firstElementChild;
  }
  return stop ? null : parent?.lastChild?.firstChild;
};
