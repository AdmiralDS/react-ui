import { MULTISELECT_OPTIONS } from '#src/components/input/Select/stories/data';

export async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const createOptions = (length: number) => {
  return MULTISELECT_OPTIONS.concat(
    Array.from({ length }).map((_, index) => ({ text: `${index}0000`, value: String(index) })),
  );
};

export const createClearOptions = (length: number) => {
  return Array.from({ length }).map((_, index) => ({ text: `${index}0000`, value: String(index) }));
};

export const formDataToObject = (data: FormData) => {
  const obj = {} as Record<string, FormDataEntryValue>;
  data.forEach((value, key) => (obj[key] = value));
  return obj;
};
