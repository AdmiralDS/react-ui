export type HighlightFormat = 'word' | 'wholly';

export const getTextHighlightMeta = (text = '', highlight = '', highlightFormat: HighlightFormat = 'word') => {
  const splittedHighlight = highlightFormat === 'word' ? highlight.split(' ') : [highlight];
  const chunks = splittedHighlight.filter(Boolean).map((chunk) => chunk.toLowerCase());

  const specialCharacters = ['.', '?', '*', '+', '-', '^', '$', '[', ']', '\\', '(', ')', '{', '}', '|'];

  const pattern = chunks
    .map((chunk) => {
      const chunkForRegExp = chunk
        .split('')
        .map((letter) => (specialCharacters.includes(letter) ? `\\${letter}` : letter))
        .join('');
      return `(${chunkForRegExp})?`;
    })
    .join('');

  const parts = text.split(new RegExp(pattern, 'gi')).filter(Boolean);

  const shouldHighlight = !highlight ? true : parts.some((part) => chunks.includes(part.toLowerCase()));

  return { shouldHighlight, parts, chunks };
};
