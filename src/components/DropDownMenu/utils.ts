type MenuFocusCalculator = (
  parent: HTMLUListElement | null,
  child: Element | null,
  stop?: boolean,
) => Element | null;

export const moveFocus = (
  parent: HTMLUListElement | null,
  currentFocus: Element | null,
  calcNextFocus: MenuFocusCalculator,
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
): Element | null => {
  if (child?.nextElementSibling) {
    return child.nextElementSibling;
  }
  if (stop) {
    return null;
  }
  return parent?.firstElementChild ?? null;
};

export const previousItem = (
  parent: Element | null,
  child: Element | null,
  stop?: boolean,
): Element | null => {
  if (child?.previousElementSibling) {
    return child.previousElementSibling;
  }
  if (stop) {
    return null;
  }
  return parent?.lastElementChild ?? null;
};
