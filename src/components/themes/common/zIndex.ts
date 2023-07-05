export interface ZIndex {
  /** @deprecated do not use */
  spinner: number;
  tooltip: number;
  notification: number;
  hint: number;
  modal: number;
  dropdown: number;
  drawer: number;
}

const Z_INDEX_BASE_NUMBER = 100;

export const zIndex = {
  spinner: Z_INDEX_BASE_NUMBER,
  tooltip: Z_INDEX_BASE_NUMBER,
  notification: Z_INDEX_BASE_NUMBER - 1,
  hint: Z_INDEX_BASE_NUMBER - 2,
  dropdown: Z_INDEX_BASE_NUMBER - 3,
  modal: Z_INDEX_BASE_NUMBER - 4,
  drawer: Z_INDEX_BASE_NUMBER - 4,
} as ZIndex;
