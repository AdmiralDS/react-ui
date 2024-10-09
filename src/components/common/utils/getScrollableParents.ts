export const getScrollableParents = (parent: Element | null | undefined) => {
  const parents: Array<Element> = [];

  if (parent) {
    let currentParent = parent;
    while (currentParent) {
      const computedStyle = getComputedStyle(currentParent);
      if (
        computedStyle.getPropertyValue('overflow') === 'auto' ||
        computedStyle.getPropertyValue('overflow') === 'scroll' ||
        computedStyle.getPropertyValue('overflow-x') === 'auto' ||
        computedStyle.getPropertyValue('overflow-x') === 'scroll' ||
        computedStyle.getPropertyValue('overflow-y') === 'auto' ||
        computedStyle.getPropertyValue('overflow-y') === 'scroll'
      ) {
        parents.push(currentParent);
      }
      currentParent = currentParent.parentElement as Element;
    }
  }
  return parents;
};
