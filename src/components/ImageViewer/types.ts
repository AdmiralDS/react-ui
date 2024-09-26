import type { css } from 'styled-components';

export type ImageMiniatureDimension = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
export type ImageViewerAppearance = 'single' | 'multiple';

export interface ImageViewerControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
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

export interface ImageCounterProps {
  /** Текущий номер */
  current: number;
  /** Общее количество */
  total: number;
}

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** Image path */
  src: string;
}

export interface ImageMiniatureProps extends ImageProps {
  /** Image miniature size */
  dimension?: ImageMiniatureDimension;
}

export interface ImageViewerProps {
  /** Preview items */
  items: string[] | ImageProps[];
  /** Show one item or multiple */
  appearance?: ImageViewerAppearance;
  /** Image miniature size */
  dimension?: ImageMiniatureDimension;
  /** Preview group css mixin */
  previewGroupMixin?: ReturnType<typeof css>;
}
