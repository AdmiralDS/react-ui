import type { Theme } from '../common';
import { COLOR as color } from './color';
import { shadow } from './shadow';
import { zIndex } from '../common/zIndex';

export const DARK_THEME: Theme = {
  color,
  shadow,
  zIndex,
  name: 'dark',
  shape: { borderRadiusKind: 'Border radius 4' },
};
