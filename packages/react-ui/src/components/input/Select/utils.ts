import type { SearchFormat } from '#src/components/input/Select/types';

export const defaultFilterItem = (value = '', searchValue = '', searchFormat: SearchFormat = 'wholly') => {
  const strings = searchFormat === 'word' ? searchValue.split(' ') : [searchValue];
  const chunks = strings.filter(Boolean).map((chunk) => chunk.toLowerCase());

  const specialCharacters = ['[', ']', '\\', '^', '$', '.', '|', '?', '*', '+', '(', ')'];

  const pattern = chunks
    .map((chunk) => {
      const chunkForRegExp = chunk
        .split('')
        .map((letter) => (specialCharacters.includes(letter) ? `\\${letter}` : letter))
        .join('');
      return `(${chunkForRegExp})?`;
    })
    .join('');

  const parts = value.split(new RegExp(pattern, 'gi')).filter(Boolean);

  return !searchValue ? true : parts.some((part) => chunks.includes(part.toLowerCase()));
};
