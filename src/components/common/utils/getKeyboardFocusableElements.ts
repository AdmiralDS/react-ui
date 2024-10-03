// https://github.com/zellwk/zellwk.com/blob/master/src/posts/2020-01-29-getting-focusable-elements.md

/**
 * Gets keyboard-focusable elements within a specified element
 * @param {HTMLElement | null} [element=document] element
 * @return {Array<Element>}
 */

export function getKeyboardFocusableElements(element: HTMLElement | Document | null): Element[] {
  return [
    ...(element ?? document).querySelectorAll(
      'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])',
    ),
  ].filter((el) => !el.hasAttribute('disabled'));
}
