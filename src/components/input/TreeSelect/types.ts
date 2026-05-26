import type { DropdownContainer } from '#src/components/DropdownContainer';

export interface TreeSelectItemProps {
  /** идентификатор записи */
  id: string;
  /** Заголовок опции */
  label: React.ReactNode;
  // /**
  //  * Размер опции, по умолчанию "l"
  //  */
  // dimension?: ItemDimension;
  checked: boolean;
  /**
   * Признак опция отключена
   */
  disabled?: boolean;
  /**
   * Опция достуна только для чтения
   */
  readOnly?: boolean;
  /**
   * Дочерние опции в дереве
   */
  children?: Array<TreeSelectItemProps>;
}

export const SHOW_CHECKED_STRATEGY_VALUES = ['SHOW_ALL', 'SHOW_CHILD', 'SHOW_PARENT'] as const;
/** Стратегия отображения выбранных чипсов */
export type ShowCheckedStrategyProps = (typeof SHOW_CHECKED_STRATEGY_VALUES)[number];

export type DropdownContainerProps = React.ComponentProps<typeof DropdownContainer>;
