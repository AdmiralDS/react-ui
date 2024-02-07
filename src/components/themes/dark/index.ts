import type { Theme } from '../common';
import { COLOR as color } from './color';
import { shadow } from './shadow';
import { zIndex } from '../common/zIndex';
import { locales } from '../common/locales';
import { typography } from '#src/components/Typography';

export const DARK_THEME: Theme = {
  color,
  shadow,
  zIndex,
  name: 'dark',
  shape: { borderRadiusKind: 'Border radius 4' },
  currentLocale: 'ru',
  locales,
  typography,
  fontFamily: `'VTB Group UI', sans-serif`,
};
