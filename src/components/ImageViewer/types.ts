export type ImageMiniatureDimension = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
export type ImageViewerAppearance = 'single' | 'multiple';

export interface ImageViewerControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  renderPanel?: () => React.ReactNode;
}

export interface ImageMiniatureProps {
  src: string;
  alt?: string;
  dimension?: ImageMiniatureDimension;
}

export interface ImageViewerProps extends ImageViewerControlsProps, ImageMiniatureProps {
  appearance?: ImageViewerAppearance;
}
