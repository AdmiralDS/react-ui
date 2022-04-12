import type { HighlightFormat } from './types';

export const scrollToNotVisibleELem = (elem: HTMLElement, scrollElem: HTMLElement) => {
  const offsetFromScrollWrap = elem.offsetTop - scrollElem.offsetTop;
  const overTop = offsetFromScrollWrap < scrollElem.scrollTop;
  const overBottom = offsetFromScrollWrap + elem.clientHeight > scrollElem.scrollTop + scrollElem.clientHeight;

  if (overTop) {
    scrollElem.scrollTop = offsetFromScrollWrap;
  }
  if (overBottom) {
    scrollElem.scrollTop = offsetFromScrollWrap + elem.clientHeight - scrollElem.clientHeight;
  }
};

export const getTextHighlightMeta = (text = '', highlight = '', highlightFormat: HighlightFormat = 'word') => {
  const splitedHighlight = highlightFormat === 'word' ? highlight.split(' ') : [highlight];
  const chunks = splitedHighlight.filter(Boolean).map((chunk) => chunk.toLowerCase());

  const pattern = chunks.map((chunk) => `(${chunk})?`).join('');

  const parts = text.split(new RegExp(pattern, 'gi')).filter(Boolean);

  const shouldHiglight = !highlight ? true : parts.some((part) => chunks.includes(part.toLowerCase()));

  return { shouldHiglight, parts, chunks };
};

export const preventDefault = (e: React.BaseSyntheticEvent) => e.preventDefault();
