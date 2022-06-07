import { Shape } from '#src/components/themes/common';

export function smallGroupBorderRadius(shape: Shape): string {
  switch (shape.borderRadiusKind) {
    case 'Border radius 0':
      return '0';
    case 'Border radius 2':
      return '2px';
    case 'Border radius 4':
      return '4px';
    case 'Border radius 8':
      return '4px';
    default:
      return '4px';
  }
}
export function mediumGroupBorderRadius(shape: Shape): string {
  switch (shape.borderRadiusKind) {
    case 'Border radius 0':
      return '0';
    case 'Border radius 2':
      return '2px';
    case 'Border radius 4':
      return '4px';
    case 'Border radius 8':
      return '8px';
    default:
      return '4px';
  }
}

export function largeGroupBorderRadius(shape: Shape): string {
  switch (shape.borderRadiusKind) {
    case 'Border radius 0':
      return '0';
    case 'Border radius 2':
      return '4px';
    case 'Border radius 4':
      return '8px';
    case 'Border radius 8':
      return '16px';
    default:
      return '8px';
  }
}
