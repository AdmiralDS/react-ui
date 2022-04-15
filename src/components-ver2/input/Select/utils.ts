import type { HighlightFormat } from './types';
import type { BaseSyntheticEvent } from 'react';

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

  const specialCaracters = ['[', ']', '\\', '^', '$', '.', '|', '?', '*', '+', '(', ')'];

  const pattern = chunks
    .map((chunk) => {
      const chunkForRegExp = chunk
        .split('')
        .map((letter) => (specialCaracters.includes(letter) ? `\\${letter}` : letter))
        .join('');
      return `(${chunkForRegExp})?`;
    })
    .join('');

  const parts = text.split(new RegExp(pattern, 'gi')).filter(Boolean);

  const shouldHiglight = !highlight ? true : parts.some((part) => chunks.includes(part.toLowerCase()));

  return { shouldHiglight, parts, chunks };
};

export const preventDefault = (e: BaseSyntheticEvent) => e.preventDefault();
