import type { Background, Basic, Color, Special, Status, Text } from '../common';

const BASIC: Basic = {
  primary: '#4789EB',
  secondary: '#E2E5E9',
  tertiary: '#576375',
  hover: '#1A6BE5',
  press: '#1455B8',
  disable: '#414A58',
  primaryLight: '#75A6F0',
};

const BACKGROUND: Background = {
  primary: '#1A1E23',
  secondary: '#252A32',
  tertiary: '#2B313B',
  tertiaryHover: '#323943',
  card: '#21252C',
  cardHover: '#2B313B',
  inversion: '#E2E5E9',
  shadow: '#000000',
  header: '#2B313B',
  surfaceDanger: '#252A32',
  surfaceWarn: '#252A32',
  surfaceSuccess: '#252A32',
};

const TEXT: Text = {
  primary: '#E2E5E9',
  secondary: '#8A96A8',
  tertiary: '#4C5767',
  inversion: '#1A1E23',
  staticWhite: '#FFFFFF',
  staticBlack: '#2B313B',
};

const STATUS: Status = {
  warn: '#FF9F19',
  hoverWarn: '#E58600',
  pressWarn: '#CC7700',
  success: '#4AB56E',
  hoverSuccess: '#339956',
  pressSuccess: '#267340',
  danger: '#E15664',
  hoverDanger: '#CC3342',
  pressDanger: '#A32935',
};

const SPECIAL: Special = {
  blue: '#3F7DFE',
  softBlue: '#E2E5E9',
  lightBlue: '#0ABBFB',
  softLightBlue: '#2B313B',
  turquoise: '#4AD2CA',
  softTurquoise: '#2B313B',
  green: '#5ECF70',
  softGreen: '#2B313B',
  yellow: '#FFAF37',
  softYellow: '#2B313B',
  red: '#FF525C',
  softRed: '#2B313B',
  magenta: '#E052BD',
  softMagenta: '#2B313B',
  purple: '#BF67C7',
  softPurple: '#2B313B',
  violet: '#8742F0',
  softViolet: '#2B313B',
  gray: '#98ABCD',
  softGray: '#2B313B',
  blueDark: '#252A32',
} as const;

export const COLOR: Color = {
  basic: BASIC,
  background: BACKGROUND,
  text: TEXT,
  status: STATUS,
  special: SPECIAL,
};
