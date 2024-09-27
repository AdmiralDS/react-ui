import type { css } from 'styled-components';

export type ImageMiniatureDimension = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
export type ImageViewerAppearance = 'single' | 'multiple';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** Путь для элемента */
  src: string;
}

export interface ImageMiniatureProps extends ImageProps {
  /** Размер миниатюры элемента */
  dimension?: ImageMiniatureDimension;
}

export interface ImageCounterProps {
  /** Текущий номер */
  activeImg: number;
  /** Общее количество */
  totalImg: number;
}

export interface ImageViewerControlsProps extends React.HTMLAttributes<HTMLDivElement>, ImageCounterProps {
  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
  /** Отображение счетчика */
  showCounter?: boolean;
  /** Отображение кнопок вперед/назад */
  showNavigation?: boolean;
  /** Обработчик смены элемента, открытого для просмотра */
  onActiveImgChange: (newIndex: number) => void;
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

export interface ImagePreviewProps extends ImageViewerControlsProps {
  /** Элемент для просмотра */
  item: string | ImageProps;
  /** Контейнер, в котором происходит размещение модального окна (BODY по умолчанию) */
  container?: Element;
  /** Обработчик закрытия компонента. Срабатывает:
   * 1) при клике на крестик в верхнем правому углу
   * 2) при нажатии Escape и closeOnEscapeKeyDown равным true
   * 3) при клике извне и closeOnOutsideClick равным true
   */
  onClose?: () => void;
}

export interface ImageViewerProps
  extends Pick<ImageMiniatureProps, 'dimension'>,
    Omit<ImagePreviewProps, 'item' | 'totalImg'> {
  /** Массив элементов для просмотра */
  items: string[] | ImageProps[];
  /** Индекс элемента для просмотра по умолчанию, также используется для выбора элемента при appearance=single */
  defaultActiveImg?: number;
  /** Показ миниатюр всех элементов или только одного */
  appearance?: ImageViewerAppearance;
  /** Миксин для стилизации отображения миниатюр */
  previewGroupMixin?: ReturnType<typeof css>;
}
