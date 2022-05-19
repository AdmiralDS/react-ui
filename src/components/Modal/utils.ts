import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';

const ownerDocument = (node: Node | null | undefined): Document => {
  return (node && node.ownerDocument) || document;
};

const ownerWindow = (node: Node | undefined): Window => {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
};

const getPaddingRight = (element: Element): number => {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
};

// Is a vertical scrollbar displayed
const isOverflow = (container: Element): boolean => {
  const doc = ownerDocument(container);

  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
};

// the main idea is from https://github.com/mui-org/material-ui/blob/master/packages/mui-core/src/ModalUnstyled/ModalManager.ts
export const restoreContainer = (wrapper: Element) => {
  const container = wrapper as HTMLElement;
  const initialStyle: Array<{
    /** CSS property name (hyphen separated) to be modified. */
    property: string;
    el: HTMLElement | SVGElement;
    value: string;
  }> = [];

  if (isOverflow(container)) {
    initialStyle.push({
      value: container.style.paddingRight,
      property: 'padding-right',
      el: container,
    });

    container.style.paddingRight = `${getPaddingRight(container) + getScrollbarSize()}px`;

    const fixedElements = ownerDocument(container).querySelectorAll('*[style="position:fixed"]');
    [].forEach.call(fixedElements, (element: HTMLElement | SVGElement) => {
      initialStyle.push({
        value: element.style.paddingRight,
        property: 'padding-right',
        el: element,
      });
      element.style.paddingRight = `${getPaddingRight(element) + getScrollbarSize()}px`;
    });
  }

  const parent = container.parentElement;
  const containerWindow = ownerWindow(container);
  const scrollContainer =
    parent?.nodeName === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;

  initialStyle.push(
    {
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer,
    },
    {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer,
    },
    {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer,
    },
  );

  scrollContainer.style.overflow = 'hidden';

  const restoreInitialStyle = () => {
    initialStyle.forEach(({ value, el, property }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };

  return restoreInitialStyle;
};

export function findIndexOf<T>(items: readonly T[], callback: (item: T) => boolean): number {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
