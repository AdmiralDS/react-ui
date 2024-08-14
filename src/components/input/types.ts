export const INPUT_DIMENSIONS_VALUES = ['xl', 'm', 's'] as const;
/** Размеры компонента относительно начального */
export type ComponentDimension = (typeof INPUT_DIMENSIONS_VALUES)[number];

export const INPUT_STATUS_VALUES = ['error', 'success'] as const;
export type InputStatus = (typeof INPUT_STATUS_VALUES)[number];

export interface ExtraProps {
  /** Делает высоту компонента больше или меньше обычной */
  $dimension?: ComponentDimension;

  /** Количество иконок отображаемых в конце */
  $iconsAfterCount?: number;

  /** Количество иконок отображаемых в начале */
  $iconsBeforeCount?: number;

  $autoHeight?: boolean;
}
