import type { FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';
import type { CSSProperties } from 'react';
import type { Color } from '#src/components/themes';

export type Dimension = 'xl' | 'l' | 'm' | 's';

type FilterProps = {
  /** Функция закрытия меню фильтра */
  closeMenu: () => void;
  /**
   * @deprecated взамен используйте параметр isFilterActive, задаваемый для столбца
   * Функция установки состояния фильтра (активный/неактивный).
   * Необходимо для окрашивания иконки фильтра в синий цвет при активном фильтре и в серый при неактивном фильтре.
   */
  setFilterActive?: (isActive: boolean) => void;
};

export type Column = {
  /** Уникальное название столбца */
  name: string;
  /** Заголовок столбца */
  title: React.ReactNode;
  /** Дополнительный текст заголовка столбца */
  extraText?: React.ReactNode;
  /** Ширина столбца. В качестве ширины можно использовать любое валидное css значение (пиксели, проценты, функция calc...).
   * По умолчанию 100px */
  width?: number | string;
  /** Выравнивание контента ячеек столбца по левому или правому краю. По умолчанию left */
  cellAlign?: 'left' | 'right';
  /** Является ли столбец сортируемым. По умолчанию false */
  sortable?: boolean;
  /** Сортировка столбца (по возрастанию или по убыванию) */
  sort?: 'asc' | 'desc';
  /** Порядковый номер в многоуровневой сортировке */
  sortOrder?: number;
  /** Отображение столбца как фиксированного (которые остаются при скролле на месте).
   * Столбец с чекбоксами по умолчанию фиксированный.
   * Фиксированные столбцы располагаются по левому краю таблицы и идут друг за другом
   * (в columnList фиксированные столбцы должны быть в начале массива и идти друг за другом).
   */
  sticky?: boolean;
  /** Отключение возможности ресайза колонки */
  disableResize?: boolean;
  /** Включение возможности drag & drop столбца */
  draggable?: boolean;
  /** Состояние фильтра.
   * Необходимо для окрашивания иконки фильтра в синий цвет при активном фильтре и в серый при неактивном фильтре.
   */
  isFilterActive?: boolean;
  /** Функция отрисовки содержимого фильтра (выпадающего меню фильтра). Если её не передать, значок фильтра отображаться не будет */
  renderFilter?: (obj: FilterProps, column: Column) => React.ReactNode;
  /** Функция отрисовки иконки фильтра. По умолчанию в качестве иконки фильтра применяется OverflowIcon (троеточие) */
  renderFilterIcon?: () => React.ReactNode;
  /** Колбек на клик вне меню фильтра */
  onFilterMenuClickOutside?: (obj: FilterProps, event: Event) => void;
  /** Колбек на открытие меню фильтра */
  onFilterMenuOpen?: () => void;
  /** Колбек на закрытие меню фильтра */
  onFilterMenuClose?: () => void;
  /**
   *  Позволяет выравнивать меню фильтра относительно столбца
   *  https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  filterMenuAlignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Позволяет добавлять миксин для меню фильтра, созданный с помощью styled css  */
  filterMenuCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  filterMenuClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  filterMenuStyle?: CSSProperties;
  /**
   * Метод для переопределения стандартного вида ячейки
   * @param data - контент ячейки
   * @param row - объект строки
   * @param rowIdx - индекс строки
   */
  renderCell?(data: any, row: TableRow, rowIdx: number): React.ReactNode;
};

export type RowId = string | number;
export type IdSelectionStatusMap = Record<RowId, boolean>;

export interface TableRow {
  id: RowId;
  className?: string;
  /** Строка в состоянии selected */
  selected?: boolean;
  /** Строка в состоянии disabled  */
  disabled?: boolean;
  /** Чекбокс строки в состоянии disabled */
  checkboxDisabled?: boolean;
  // TODO: Удалить в 8.x.x версии
  /**
   * @deprecated Будет удалено в 8.x.x версии.
   * Взамен используйте параметр status='error'
   * Строка в состоянии error
   **/
  error?: boolean;
  // TODO: Удалить в 8.x.x версии
  /**
   * @deprecated Будет удалено в 8.x.x версии.
   * Взамен используйте параметр status='success'
   * Строка в состоянии success
   **/
  success?: boolean;
  /** Статус строки. По умолчанию таблица предоставляет статусы error и success.
   * Также пользователь может создать свои кастомные статусы, для этого нужно будет придумать название статуса,
   * описать его в параметре таблицы rowBackgroundColorByStatusMap и прописать данный статус в объектах строк */
  status?: string;
  /** Строка в раскрытом состоянии */
  expanded?: boolean;
  /** Окраска строки по Hover. Данная окраска должна применяться, если строка кликабельна и ведет к каким-либо действиям */
  hover?: boolean;
  /** Название группы */
  groupTitle?: string;
  /** Строки таблицы, находящиеся в группе */
  groupRows?: Array<string>;
  /** Функция рендера содержимого раскрытой части строки (детализации строки) */
  expandedRowRender?: (row: any) => React.ReactNode;
  /** Функция рендера OverflowMenu для строки.
   * Входные параметры: сама строка, колбек onVisibilityChange.
   * Колбек необходимо вызывать при открытии/закрытии меню для того, чтобы таблица могла управлять видимостью OverflowMenu.
   * OverflowMenu отображается при ховере на строку или при открытом меню
   * и располагается по правому краю строки в видимой области таблицы.
   *
   * В качестве результата функция должна возвращать OverflowMenu.
   * Для таблицы с dimension='s' или dimension='m' используется OverflowMenu c dimension='m'.
   * Для таблицы с dimension='l' или dimension='xl' используется OverflowMenu c dimension='l'.
   */
  overflowMenuRender?: (row: any, onVisibilityChange?: (isVisible: boolean) => void) => React.ReactNode;
  /** Функция рендера одиночного действия над строкой.
   * Одиночное действие отображается в виде иконки при ховере на строку
   * и располагается по правому краю строки в видимой области таблицы.
   *
   * В качестве результата функция должна возвращать компонент RowAction,
   * внутрь которого нужно передать произвольную иконку для отображения действия.
   */
  actionRender?: (row: any) => React.ReactNode;
  /**
   * Метод для переопределения стандартного вида заголовка группы
   * @param row - объект строки
   */
  renderGroupTitle?(row: TableRow): React.ReactNode;
}

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Массив столбцов */
  columnList: Column[];
  /** Массив строк */
  rowList: TableRow[];
  /** Установка чекбокса в шапке таблицы в состояние checked.
   * По умолчанию состояние checked вычисляется на основе анализа параметра selected у строк таблицы
   */
  headerCheckboxChecked?: boolean;
  /** Установка чекбокса в шапке таблицы в состояние indeterminate (состояние, при котором выбрана только часть строк).
   * По умолчанию состояние checked вычисляется на основе анализа параметра selected у строк таблицы
   */
  headerCheckboxIndeterminate?: boolean;
  /** Установка чекбокса в шапке таблицы в состояние disabled.
   * По умолчанию состояние disabled устанавливается при отсутствии строк в таблице
   */
  headerCheckboxDisabled?: boolean;
  /** Колбек на изменение состояния чекбокса, находящегося в хедере
   * Возвращает параметр selectAll (если true - выбраны все строки в таблице, false - выбор снят со всех строк таблицы)
   */
  onHeaderSelectionChange?: (selectAll: boolean) => void;
  /** Колбек на выбор/снятие выбора со строки (на нажатие по чекбоксу строки).
   * idSelectionStatusMap - это объект, ключами которого являются id строк, чье состояние checked было изменено,
   * а значениями ключей - значение checked
   */
  onRowSelectionChange?: (idSelectionStatusMap: IdSelectionStatusMap, id?: RowId) => void;
  /** Колбек на раскрытие/свертывание строки (на нажатие по стрелке слева).
   * idSelectionStatusMap - это объект, ключами которого являются id строк, чье состояние expanded было изменено,
   * а значениями ключей - значение expanded
   */
  onRowExpansionChange?: (idSelectionStatusMap: IdSelectionStatusMap) => void;
  /** Колбек для клика по строке таблицы */
  onRowClick?: (rowId: RowId) => void;
  /** Колбек для двойного клика по строке таблицы */
  onRowDoubleClick?: (rowId: RowId) => void;
  /** Размер таблицы */
  dimension?: Dimension;
  /** Отображение столбца с чекбоксами, позволяющими выбрать необходимые строки */
  displayRowSelectionColumn?: boolean;
  /** Отображение столбца со стрелками для детализации (раскрытия) строк */
  displayRowExpansionColumn?: boolean;
  /** Окрашивание шапки таблицы в серый цвет */
  greyHeader?: boolean;
  /** Окрашивание строк таблицы через одну в цвет вторичного фона (зебра) */
  greyZebraRows?: boolean;

  /** Параметр, который влияет на внешний вид заголовка и отвечает одновременно за размер правого бокового отступа внутри заголовка и
   * за расстояние между иконкой фильтра (при её наличии) и остальным содержимым заголовка.
   * Минимальное значение 12px, для таблиц S и M, и 16px для таблиц L и XL.
   */
  spacingBetweenItems?: string;
  /** Колбек на изменение сортировки. Возвращает уникальное имя столбца, к которому применили сортировку,
   * и порядок сортировки (возрастающий/убывающий или сброс сортировки до первоначального состояния (initial))
   */
  onSortChange?: (sortObj: { name: string; sort: 'asc' | 'desc' | 'initial' }) => void;
  /** Колбек, который срабатывает при изменении ширины столбца.
   * Данный колбек обязателен в случае, если таблица должна поддерживать ресайзинг.
   * При срабатывании колбек сообщает пользователю о попытке ресайзинга столбца,
   * после чего пользователь должен обновить ширину соответствующего столбца.
   * Таким образом контроль за ресайзингом происходит на стороне пользователя.
   */
  onColumnResize?: (colObj: { name: string; width: string }) => void;
  /**
   * @deprecated use renderCell prop in Column type
   * Рендер функция для отрисовки контента ячейки. Входные параметры - объект строки и название столбца
   */
  renderCell?: (row: TableRow, columnName: string) => React.ReactNode;
  /** Рендер функция для отрисовки обертки вокруг строки.
   * Входные параметры - объект строки, её порядковый номер и элемент который должен быть отрисован внутри создаваемой обертки
   * */
  renderRowWrapper?: (row: TableRow, index: number, rowNode: React.ReactNode) => React.ReactNode;
  /** Параметр, определяющий максимальное количество строк, которое может занимать заголовок столбца таблицы.
   * По умолчанию заголовок занимает не более одной строки
   */
  headerLineClamp?: number;
  /** Параметр, определяющий максимальное количество строк, которое может занимать дополнительный текст заголовка столбца таблицы.
   * По умолчанию дополнительный текст занимает не более одной строки
   */
  headerExtraLineClamp?: number;
  /** Отображение разделителя для последней колонки. По умолчанию разделитель не отображается */
  showDividerForLastColumn?: boolean;
  /** Отключение возможности ресайза колонок. По умолчанию эта возможность включена */
  disableColumnResize?: boolean;
  /** Отображение серой линии подчеркивания для последней строки. По умолчанию линия отображается */
  showLastRowUnderline?: boolean;
  /** Включение постоянной видимости иконок действий над строками (OverflowMenu и иконки одиночных действий).
   * По умолчанию showRowsActions = false, при этом иконки действий видны только при ховере строк. */
  showRowsActions?: boolean;
  /** Включение виртуального скролла для тела таблицы.
   * У таблицы обязательно должна быть задана высота, тогда тело таблицы растянется по высоте и подстроится под высоту таблицы.
   */
  virtualScroll?: {
    /** Фиксированная высота строки, для правильного функционирования виртуального скролла
     * все строки должны быть одной фиксированной высоты
     */
    fixedRowHeight: number;
  };
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Сообщение, отображаемое при отсутствии совпадений в строках после применения фильтра */
    emptyMessage?: React.ReactNode;
  };
  /** Колбек, который срабатывает при попытке перетащить столбец таблицы на новое место.
   * columnName - name столбца, который перетаскивается;
   * nextColumnName - name столбца, перед которым пытается встать передвигаемый столбец.
   * Если nextColumnName равен null, значит столбец передвигают в самый конец списка.
   */
  onColumnDrag?: (columnName: string, nextColumnName: string | null) => void;
  /** Объект, который описывает соответствие цвета строки и её статуса.
   *
   * Данный параметр нужно применять при создании кастомных статусов строк,
   * либо при желании перезадать цвета для статусов error и success, предоставляемых таблицей по умолчанию.
   *
   * Ключом объекта должно быть название статуса.
   * Значением свойства объекта должен быть цвет строки, соответствующий статусу, заданному в ключе.
   * Цвет можно задать либо в виде строки со значением цвета, либо в виде функции,
   * которая на вход получает объект color (равный theme.color) и возвращает строку со значением цвета. */
  rowBackgroundColorByStatusMap?: { [key: string]: ((color: Color) => string) | string };
}

export type GroupInfo = {
  rows: Array<string>;
  expanded: boolean;
};

type RowInfo = {
  groupId: string;
  checked: boolean;
};

export type Group = Record<string, GroupInfo>;
export type GroupRows = Record<string, RowInfo>;
export type ZebraRows = Record<string, 'odd' | 'even' | 'ingroup odd' | 'ingroup even' | 'group'>;