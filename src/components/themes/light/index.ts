import type { Theme } from '../common';
import { COLOR as color } from '../light/color';
import { shadow } from './shadow';
import { zIndex } from '../common/zIndex';
import { locales } from '../common/locales';
import { typography } from '#src/components/Typography';

export const LIGHT_THEME: Theme = {
  color,
  shadow,
  zIndex,
  name: 'light',
  shape: { borderRadiusKind: 'Border radius 4' },
  currentLocale: 'ru',
  locales,
  typography,
  fontFamily: `'VTB Group UI', sans-serif`,
};
