import type { Shape } from '#src/components/themes/common';
export const ALL_BORDER_RADIUS_VALUES = [
  'Border radius 0',
  'Border radius 2',
  'Border radius 4',
  'Border radius 6',
  'Border radius 8',
  'Border radius 10',
] as const;

export function smallGroupBorderRadius(shape: Shape): string {
  switch (shape.borderRadiusKind) {
    case 'Border radius 0':
      return '0';
    case 'Border radius 2':
      return '2px';
    case 'Border radius 4':
      return '4px';
    case 'Border radius 6':
      return '4px';
    case 'Border radius 8':
      return '4px';
    case 'Border radius 10':
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
    case 'Border radius 6':
      return '6px';
    case 'Border radius 8':
      return '8px';
    case 'Border radius 10':
      return '10px';
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
    case 'Border radius 6':
      return '12px';
    case 'Border radius 8':
      return '16px';
    case 'Border radius 10':
      return '20px';
    default:
      return '8px';
  }
}
