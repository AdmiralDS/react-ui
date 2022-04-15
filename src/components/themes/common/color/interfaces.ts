export type Basic = {
  primary: string;
  secondary: string;
  tertiary: string;
  hover: string;
  press: string;
  disable: string;
  primaryLight: string;
};

export type Background = {
  primary: string;
  secondary: string;
  tertiary: string;
  tertiaryHover: string;
  card: string;
  cardHover: string;
  inversion: string;
  shadow: string;
  header: string;
  surfaceDanger: string;
  surfaceWarn: string;
  surfaceSuccess: string;
  page: string;
};

export type Text = {
  primary: string;
  secondary: string;
  tertiary: string;
  inversion: string;
  staticWhite: string;
  staticBlack: string;
};

export type Status = {
  warn: string;
  hoverWarn: string;
  pressWarn: string;
  success: string;
  hoverSuccess: string;
  pressSuccess: string;
  danger: string;
  hoverDanger: string;
  pressDanger: string;
};

export type Special = {
  blueLight: string;
  /**
   * @deprecated Используйте цвет blueLight
   */
  lightBlue: string;
  blue: string;
  blueDeep: string;
  greenLight: string;
  green: string;
  greenDeep: string;
  tiffany: string;
  tiffanyDeep: string;
  tiffanyDark: string;
  tiffanyBlue: string;
  yellow: string;
  orangeLight: string;
  orange: string;
  orangeDeep: string;
  violetLight: string;
  violet: string;
  violetDeep: string;
  fuchsia: string;
  fuchsiaDeep: string;
  rainySky: string;
  night: string;
  gray: string;
  softBlue: string;
  softNiceBlue: string;
  softSkyBlue: string;
  softTiffany: string;
  softGreen: string;
  softYellow: string;
  softPapaya: string;
  softRed: string;
  softPink: string;
  softPurple: string;
  softMallowPurple: string;
  softGray: string;
  /**
   * @deprecated Используйте другой цвет
   */
  softLightBlue: string;
  /**
   * @deprecated Используйте другой цвет
   */
  turquoise: string;
  /**
   * @deprecated Используйте другой цвет
   */
  softTurquoise: string;
  /**
   * @deprecated Используйте другой цвет
   */
  red: string;
  /**
   * @deprecated Используйте другой цвет
   */
  magenta: string;
  /**
   * @deprecated Используйте другой цвет
   */
  softMagenta: string;
  /**
   * @deprecated Используйте другой цвет
   */
  purple: string;
  /**
   * @deprecated Используйте другой цвет
   */
  softViolet: string;
  /**
   * @deprecated Используйте другой цвет или blueDark из SpecialInvert
   */
  blueDark: string;
};

export type SpecialInvert = {
  blueLight: string;
  blue: string;
  blueDeep: string;
  greenLight: string;
  green: string;
  greenDeep: string;
  tiffany: string;
  tiffanyDeep: string;
  tiffanyDark: string;
  tiffanyBlue: string;
  yellow: string;
  orangeLight: string;
  orange: string;
  orangeDeep: string;
  violetLight: string;
  violet: string;
  violetDeep: string;
  fuchsia: string;
  fuchsiaDeep: string;
  rainySky: string;
  gray: string;
  blueDark: string;
  softBlue: string;
  softNiceBlue: string;
  softSkyBlue: string;
  softTiffany: string;
  softGreen: string;
  softYellow: string;
  softPapaya: string;
  softRed: string;
  softPink: string;
  softPurple: string;
  softMallowPurple: string;
  softGray: string;
};

export type Color = {
  basic: Basic;
  background: Background;
  text: Text;
  status: Status;
  special: Special;
  specialInvert: SpecialInvert;
};
