export type ImageMiniatureDimension = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
export type ImageViewerAppearance = 'single' | 'multiple';

export interface ImageViewerControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  renderPanel?: () => React.ReactNode;
}

export interface ImageMiniatureProps {
  /** Image path */
  src: string;
  /** Image description */
  alt?: string;
  /** Image miniature size */
  dimension?: ImageMiniatureDimension;
  /** Load failed callback */
  onError?: (event: Event) => void;
}

export interface ImageViewerProps extends Omit<ImageViewerControlsProps, 'onError'>, ImageMiniatureProps {
  /** Show one item or multiple */
  appearance?: ImageViewerAppearance;
}
