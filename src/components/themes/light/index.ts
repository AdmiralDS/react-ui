import type { Theme } from '../common';
import { COLOR as color } from './color';
import { shadow } from './shadow';
import { zIndex } from '../common/zIndex';

export const LIGHT_THEME = {
  color,
  shadow,
  zIndex,
  name: 'light',
} as Theme;
