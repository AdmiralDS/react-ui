export const ALL_DIMENSIONS_VALUES = ['m', 's'] as const;

/** Размеры компонента */
export type CheckboxDimension = (typeof ALL_DIMENSIONS_VALUES)[number];
