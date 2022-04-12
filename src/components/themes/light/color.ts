import type { Background, Basic, Color, Special, Status, Text } from '../common';

const BASIC: Basic = {
  primary: '#0D69F2',
  secondary: '#2B313B',
  tertiary: '#8A96A8',
  hover: '#0A54C2',
  press: '#083F91',
  disable: '#C4CAD4',
  primaryLight: '#6EA5F7',
} as const;

const BACKGROUND: Background = {
  primary: '#FFFFFF',
  secondary: '#F1F2F4',
  tertiary: '#E2E5E9',
  tertiaryHover: '#D3D8DE',
  card: '#FFFFFF',
  cardHover: '#FFFFFF',
  inversion: '#2B313B',
  shadow: '#8A96A8',
  header: '#0949AA',
  surfaceDanger: '#FEF0F1',
  surfaceWarn: '#FFF7F0',
  surfaceSuccess: '#F2FCF5',
} as const;

const TEXT: Text = {
  primary: '#2B313B',
  secondary: '#626F84',
  tertiary: '#A7B0BE',
  inversion: '#FFFFFF',
  staticWhite: '#FFFFFF',
  staticBlack: '#2B313B',
} as const;

const STATUS: Status = {
  warn: '#F59300',
  hoverWarn: '#E57300',
  pressWarn: '#CC6600',
  success: '#05A13A',
  hoverSuccess: '#219246',
  pressSuccess: '#186832',
  danger: '#DA0B20',
  hoverDanger: '#A90919',
  pressDanger: '#790612',
} as const;

const SPECIAL: Special = {
  blue: '#3F7DFE',
  softBlue: '#E6EEFF',
  lightBlue: '#0ABBFB',
  softLightBlue: '#E6F8FF',
  turquoise: '#4AD2CA',
  softTurquoise: '#EAFAF9',
  green: '#5ECF70',
  softGreen: '#EBF9EE',
  yellow: '#FFAF37',
  softYellow: '#FFF5E5',
  red: '#FF525C',
  softRed: '#FFE5E7',
  magenta: '#E052BD',
  softMagenta: '#FBE9F7',
  purple: '#BF67C7',
  softPurple: '#F7ECF8',
  violet: '#8742F0',
  softViolet: '#F0E7FD',
  gray: '#98ABCD',
  softGray: '#EDF1F8',
  blueDark: '#001157',
} as const;

export const COLOR: Color = {
  basic: BASIC,
  background: BACKGROUND,
  text: TEXT,
  status: STATUS,
  special: SPECIAL,
} as const;
