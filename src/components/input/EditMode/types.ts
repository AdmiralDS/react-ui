import type { css, DataAttributes } from 'styled-components';

import type { EditButton, EditIcon } from './style';
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
  /** Конфиг функция пропсов для кнопки подтверждения редактирования. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  confirmButtonPropsConfig?: (
    props: React.ComponentProps<typeof EditButton>,
  ) => Partial<React.ComponentProps<typeof EditButton> & DataAttributes>;
  /** Конфиг функция пропсов для кнопки отмены редактирования. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  cancelButtonPropsConfig?: (
    props: React.ComponentProps<typeof EditButton>,
  ) => Partial<React.ComponentProps<typeof EditButton> & DataAttributes>;

  /** Конфиг функция пропсов для кнопки начала редактирования. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  editButtonPropsConfig?: (
    props: React.ComponentProps<typeof EditIcon>,
  ) => Partial<React.ComponentProps<typeof EditIcon> & DataAttributes>;
}
