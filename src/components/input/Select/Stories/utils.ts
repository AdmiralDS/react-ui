import type { SearchFormat } from '#src/components/input/Select/Stories/types';
import { MULTISELECT_OPTIONS } from '#src/components/input/Select/Stories/data';

export const shouldRender = (text = '', searchValue = '', searchFormat: SearchFormat = 'wholly') => {
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

  const parts = text.split(new RegExp(pattern, 'gi')).filter(Boolean);

  return !searchValue ? true : parts.some((part) => chunks.includes(part.toLowerCase()));
};

export async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const createOptions = (length: number) => {
  return MULTISELECT_OPTIONS.concat(
    Array.from({ length }).map((option, index) => ({ text: `${index}0000`, value: String(index) })),
  );
};

export const formDataToObject = (data: FormData) => {
  const obj = {} as Record<string, any>;
  data.forEach((value, key) => (obj[key] = value));
  return obj;
};
