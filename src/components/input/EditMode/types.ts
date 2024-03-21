import type { css } from 'styled-components';

export type EditModeDimension = 's' | 'm' | 'xl' | 'xxl';
type Dimension = EditModeDimension;

export interface EditModeComponentProps {
  /** Значение компонента */
  value: string | number;
  /** Размер компонента */
  dimension?: Dimension;
  /** Жирное начертание текста. В размерах xl и xxl текст всегда жирный */
  bold?: boolean;
  /** Позволяет добавлять миксин на контейнер компонента, созданный с помощью styled css. */
  containerCssMixin?: ReturnType<typeof css>;
  /** Функция обработчика события нажатия кнопки начала редактирования
   * @param value - значение поля ввода для редактирования */
  onEdit?: (value: string | number) => void;
  /** Функция обработчика события нажатия кнопки подтверждения введенного значения
   * @param value - отредактированное значение поля ввода */
  onConfirm?: (value: string | number) => void;
  /** Функция обработчика события нажатия кнопки отмены
   * @param value - значение поля ввода до нажатия кнопки редактирования */
  onCancel?: (value: string | number) => void;
}
