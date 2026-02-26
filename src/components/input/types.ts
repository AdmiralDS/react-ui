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

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Иконки для отображения в начале поля */
  iconsBefore?: React.ReactNode;

  /** Иконки для отображения в конце поля */
  iconsAfter?: React.ReactNode;

  /** Статус поля */
  status?: InputStatus;

  /** Отображать статус загрузки данных */
  isLoading?: boolean;

  /**  Наличие этого атрибута отключает возможность выделения и копирования значения поля */
  disableCopying?: boolean;

  /** Состояние skeleton */
  skeleton?: boolean;
}
