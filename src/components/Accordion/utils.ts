type AccordionFocusCalculator = (parent: HTMLDivElement | null, child: Element | null, stop?: boolean) => Element | null;

export const moveFocus = (
  parent: HTMLDivElement | null,
  currentFocus: Element | null,
  calcNextFocus: AccordionFocusCalculator,
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

export const nextItem = (parent: Element | null, child: Element | null, stop?: boolean): Element | null => {
  if (child?.nextElementSibling?.firstElementChild) {
    return child.nextElementSibling.firstElementChild;
  }
  if (stop) {
    return null;
  }
  return parent?.firstElementChild?.firstElementChild ?? null;
};

export const previousItem = (parent: Element | null, child: Element | null, stop?: boolean): Element | null => {
  if (child?.previousElementSibling?.firstElementChild) {
    return child.previousElementSibling.firstElementChild;
  }
  if (stop) {
    return null;
  }
  return parent?.lastElementChild?.firstElementChild ?? null;
};
