const sharpMatcherRegex = /#([\S ]+)$/;

interface Section {
  link: string;
  top: number;
}

export const getInternalCurrentAnchor = (
  container: Element | Window,
  _links: string[],
  _offsetTop = 0,
  _bounds = 5,
): string => {
  const linkSections: Section[] = [];

  _links.forEach((link) => {
    const sharpLinkMatch = sharpMatcherRegex.exec(link?.toString());
    if (!sharpLinkMatch) {
      return;
    }
    const target = document.getElementById(sharpLinkMatch[1]);

    if (target) {
      const top = getOffsetTop(target, container);
      if (top <= _offsetTop + _bounds) {
        linkSections.push({ link, top });
      }
    }
  });

  if (linkSections.length) {
    const maxSection = linkSections.reduce((prev, curr) => (curr.top > prev.top ? curr : prev));
    return maxSection.link;
  }
  return '';
};

function getOffsetTop(element: HTMLElement, container: Element | Window): number {
  if (!element.getClientRects().length) {
    return 0;
  }

  const rect = element.getBoundingClientRect();

  if (rect.width || rect.height) {
    if (container === window) {
      return rect.top - element.ownerDocument!.documentElement!.clientTop;
    }
    return rect.top - (container as HTMLElement).getBoundingClientRect().top;
  }

  return rect.top;
}
