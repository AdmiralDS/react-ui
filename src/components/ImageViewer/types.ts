import type { css } from 'styled-components';

export type ImageMiniatureDimension = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
export type ImageViewerAppearance = 'single' | 'multiple';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** Путь для элемента */
  src: string;
}

export interface ImageMiniatureProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Элемент для просмотра */
  item: string | ImageProps;
  /** Размер миниатюры элемента */
  dimension?: ImageMiniatureDimension;
}

export interface ImageCounterProps {
  /** Текущий номер */
  activeImg: number;
  /** Общее количество */
  totalImg: number;
}

export interface ToolbarActionProps {
  /** Обработчик смены элемента, открытого для просмотра */
  onActiveImgChange?: (index: number) => void;
  /** Обработчик отражения элемента по вертикали */
  onFlipY: () => void;
  /** Обработчик отражения элемента по горизонтали */
  onFlipX: () => void;
  /** Обработчик поворота элемента влево */
  onRotateLeft: () => void;
  /** Обработчик поворота элемента вправо */
  onRotateRight: () => void;
  /** Обработчик увеличения элемента */
  onZoomOut: () => void;
  /** Обработчик уменьшения элемента */
  onZoomIn: () => void;
  /** Обработчик закрытия компонента. Срабатывает:
   * 1) при клике на крестик в верхнем правому углу
   * 2) при нажатии Escape и closeOnEscapeKeyDown равным true
   * 3) при клике извне и closeOnOutsideClick равным true
   */
  onClose: () => void;
}

export interface TransformType {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  flipX: boolean;
  flipY: boolean;
}
export type TransformAction =
  | 'flipY'
  | 'flipX'
  | 'rotateLeft'
  | 'rotateRight'
  | 'zoomChange'
  | 'move'
  | 'touchZoom'
  | 'reset';

export interface ImageViewerToolbarProps extends React.HTMLAttributes<HTMLDivElement>, ImageCounterProps {
  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
  /** Отображение счетчика */
  showCounter?: boolean;
  /** Отображение кнопок вперед/назад */
  showNavigation?: boolean;
  /** Обработчики панели инструментов */
  actions: ToolbarActionProps;
  /** Отключает обработчики панели инструментов */
  actionsDisabled?: boolean;
  /** Параметры отображения элемента */
  transform: TransformType;
  /** Минимальный размер уменьшения — 70% высоты экрана, либо 1:1, если картинка при таком масштабе занимает менее 70% высоты экрана. */
  minScale: number;
  /** Максимальный размер увеличения, по умолчанию x10 от исходного разрешения картинки.  */
  maxScale: number;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Текст, описывающий кнопку отражения изображения по горизонтали */
    flipHorizontallyText: string;
    /** Текст, описывающий кнопку отражения изображения по вертикали */
    flipVerticallyText: string;
    /** Текст, описывающий кнопку поворота изображения влево */
    rotateLeftText: string;
    /** Текст, описывающий кнопку поворота изображения вправо */
    rotateRightText: string;
    /** Текст, описывающий кнопку уменьшения изображения */
    zoomOutText: string;
    /** Текст, описывающий кнопку увеличения изображения */
    zoomInText: string;
    /** Текст, описывающий кнопку переключения назад */
    backwardText: string;
    /** Текст, описывающий кнопку переключения вперед */
    forwardText: string;
  };
}

export interface ImagePreviewProps
  extends Omit<ImageViewerToolbarProps, 'transform' | 'actions' | 'actionsDisabled' | 'minScale' | 'maxScale'> {
  /** Элемент для просмотра */
  item: string | ImageProps;
  /** Контейнер, в котором происходит размещение модального окна (BODY по умолчанию) */
  container?: Element | null;
  /** Шаг для изменения масштаба, по умолчанию 0,5 */
  scaleStep?: number;
  /** Обработчик изменения видимости окна просмотра элемента */
  onVisibleChange?: (newState: boolean) => void;
  /** Обработчик смены элемента, открытого для просмотра */
  onActiveChange?: (index: number) => void;
  /** Минимальный размер уменьшения — 70% высоты экрана, либо 1:1, если картинка при таком масштабе занимает менее 70% высоты экрана. */
  minScale?: number;
  /** Максимальный размер увеличения, по умолчанию x10 от исходного разрешения картинки.  */
  maxScale?: number;
  /** Элемент для отображения при ошибке загрузки */
  errorMiniature?: React.ReactNode;
  /** Обработчик на изменение состояния изображения */
  onTransform?: (info: { transform: TransformType; action: TransformAction }) => void;
}

export interface ImageViewerProps
  extends Pick<ImageMiniatureProps, 'dimension'>,
    Omit<ImagePreviewProps, 'item' | 'totalImg' | 'activeImg'> {
  /** Массив элементов для просмотра */
  items: string[] | ImageProps[];
  /** Индекс элемента для просмотра по умолчанию, также используется для выбора элемента при appearance=single */
  defaultActiveImg?: number;
  /** Показ миниатюр всех элементов или только одного */
  appearance?: ImageViewerAppearance;
  /** Миксин для стилизации отображения миниатюр */
  previewGroupMixin?: ReturnType<typeof css>;
  /** Мобильное отображение компонента */
  mobile?: boolean;
  /** Состояние видимости просмотра элемента */
  visible?: boolean;
  /** Текущий номер */
  activeImg?: number;
}
