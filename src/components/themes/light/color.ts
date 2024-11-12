import type { Color } from '../common/color';

export const COLOR: Color = {
  //<editor-fold desc="Neutral">
  'Neutral/Neutral 00': '#FFFFFF',
  'Neutral/Neutral 05': '#F5F5F6',
  'Neutral/Neutral 10': '#EAEBEC',
  'Neutral/Neutral 20': '#D7D8DA',
  'Neutral/Neutral 30': '#B2B5B8',
  'Neutral/Neutral 40': '#9EA0A4',
  'Neutral/Neutral 50': '#74767B',
  'Neutral/Neutral 60': '#67696D',
  'Neutral/Neutral 70': '#515256',
  'Neutral/Neutral 80': '#37383B',
  'Neutral/Neutral 90': '#252629',
  //</editor-fold>

  //<editor-fold desc="Primary">
  'Primary/Primary 10': '#EDF5FF',
  'Primary/Primary 20': '#DDE9FF',
  'Primary/Primary 30': '#A7C7FF',
  'Primary/Primary 40': '#6FA3FF',
  'Primary/Primary 50': '#3A85FF',
  'Primary/Primary 60 Main': '#0062FF',
  'Primary/Primary 70': '#0046E2',
  'Primary/Primary 80': '#0132B0',
  //</editor-fold>

  //<editor-fold desc="Special">
  'Special/Static White': '#FFFFFF',
  'Special/Elevated BG': '#FFFFFF',
  'Special/Dark Static Neutral 00': '#131314',
  'Special/Dark Static Neutral 05': '#1B1C1D',
  'Special/Dark Static Neutral 10': '#252627',
  'Special/Dark Static Neutral 20': '#3B3C3E',
  'Special/Dark Static Neutral 30': '#515357',
  'Special/Dark Static Neutral 50': '#82868B',
  'Special/Dark Static Neutral 70': '#A8ABAF',
  'Special/Dark Static Neutral 80': '#C9CACD',
  'Special/Dark Static Neutral 90': '#E3E5E7',
  'Special/Dark Static Primary 60': '#3984FF',
  'Special/Dark Static Primary 70': '#5290FF',
  'Special/Dark Static Primary 80': '#689FFF',
  'Special/Dark Static Error 60': '#EA3C3C',
  'Special/Dark Static Success 50': '#16913F',
  //</editor-fold>

  //<editor-fold desc="Opacity">
  'Opacity/Hover': '#0000000D',
  'Opacity/Focus': '#00000017',
  'Opacity/Press': '#0000001F',
  'Opacity/Modal': '#0000009A',
  'Opacity/Dark Static Hover': '#FFFFFF0F',
  'Opacity/Dark Static Focus': '#FFFFFF17',
  'Opacity/Dark Static Press': '#FFFFFF1F',
  'Opacity/Neutral 4': '#0000000A',
  'Opacity/Neutral 8': '#00000014',
  'Opacity/Neutral 12': '#0000001F',
  'Opacity/Neutral 16': '#00000029',
  //</editor-fold>

  //<editor-fold desc="Error">
  'Error/Error 10': '#FFEFEF',
  'Error/Error 20': '#FFDDDD',
  'Error/Error 30': '#FFA7A7',
  'Error/Error 40': '#FF7C7C',
  'Error/Error 50': '#F64E4E',
  'Error/Error 60 Main': '#D92020',
  'Error/Error 70': '#BA1717',
  'Error/Error 80': '#981111',
  //</editor-fold>

  //<editor-fold desc="Success">
  'Success/Success 10': '#EAFCF1',
  'Success/Success 20': '#C3F4D3',
  'Success/Success 30': '#80DCA0',
  'Success/Success 40': '#32C665',
  'Success/Success 50 Main': '#1BA049',
  'Success/Success 60': '#128238',
  'Success/Success 70': '#0B682A',
  //</editor-fold>

  //<editor-fold desc="Warning">
  'Warning/Warning 10': '#FFF1E5',
  'Warning/Warning 20': '#FFDECE',
  'Warning/Warning 30': '#FFB799',
  'Warning/Warning 40': '#FF8D64',
  'Warning/Warning 50 Main': '#FF5C22',
  'Warning/Warning 60': '#D63F09',
  'Warning/Warning 70': '#A63208',
  //</editor-fold>

  //<editor-fold desc="Attention">
  'Attention/Attention 10': '#FEF5D7',
  'Attention/Attention 20': '#FEE7A0',
  'Attention/Attention 30': '#FDDD77',
  'Attention/Attention 40': '#FDD14C',
  'Attention/Attention 50 Main': '#FFC400',
  'Attention/Attention 60': '#F0B902',
  'Attention/Attention 70': '#DFAB00',
  //</editor-fold>

  //<editor-fold desc="Purple">
  'Purple/Purple 10': '#F6F2FF',
  'Purple/Purple 20': '#EBE0FF',
  'Purple/Purple 30': '#D4BBFF',
  'Purple/Purple 40': '#BE95FF',
  'Purple/Purple 50': '#A56EFF',
  'Purple/Purple 60 Main': '#8A3FFC',
  'Purple/Purple 70': '#6929C4',
  'Purple/Purple 80': '#491D8B',
  //</editor-fold>

  //<editor-fold desc="Magenta">
  'Magenta/Magenta 10': '#FFF0F7',
  'Magenta/Magenta 20': '#FFDBEB',
  'Magenta/Magenta 30': '#FFAFD2',
  'Magenta/Magenta 40': '#FF7EB6',
  'Magenta/Magenta 50': '#EE5396',
  'Magenta/Magenta 60 Main': '#D02670',
  'Magenta/Magenta 70': '#9F1853',
  'Magenta/Magenta 80': '#740937',
  //</editor-fold>

  //<editor-fold desc="Cyan">
  'Cyan/Cyan 10': '#E5F6FF',
  'Cyan/Cyan 20': '#C4EAFF',
  'Cyan/Cyan 30': '#82CFFF',
  'Cyan/Cyan 40': '#33B1FF',
  'Cyan/Cyan 50': '#1192E8',
  'Cyan/Cyan 60 Main': '#0072C3',
  'Cyan/Cyan 70': '#00539A',
  'Cyan/Cyan 80': '#003A6D',
  //</editor-fold>

  //<editor-fold desc="Teal">
  'Teal/Teal 10': '#D9FBFB',
  'Teal/Teal 20': '#B0F0F0',
  'Teal/Teal 30': '#3DDBD9',
  'Teal/Teal 40': '#08BDBA',
  'Teal/Teal 50': '#009D9A',
  'Teal/Teal 60 Main': '#007D79',
  'Teal/Teal 70': '#005D5D',
  'Teal/Teal 80': '#004144',
  //</editor-fold>
} as const;
