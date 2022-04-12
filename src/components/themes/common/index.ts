import { Color } from '#/components/themes/common/color';
import { ZIndex } from '#/components/themes/common/zIndex';

export * from './color';

export interface Shadow {
  ClickableActive: string;
  ClickableDefault: string;
  ClickableHover: string;
  NonClickable: string;
}

export interface Theme {
  color: Color;
  shadow: Shadow;
  zIndex: ZIndex;
  name: 'light' | 'dark';
}
