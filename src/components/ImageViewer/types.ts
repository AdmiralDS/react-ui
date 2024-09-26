import type { css } from 'styled-components';

export type ImageMiniatureDimension = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
export type ImageViewerAppearance = 'single' | 'multiple';

export interface ImageViewerControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  renderPanel?: () => React.ReactNode;
}

export interface ImageCounterProps {
  total: number;
  current: number;
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
