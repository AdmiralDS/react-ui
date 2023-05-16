import * as React from 'react';
import type { TableRow } from '#src/components/Table';
import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import type { Color } from '../components/themes/common';

export const COLORS: any = {
  Neutral: {
    'Neutral/Neutral 00': {
      name: 'Neutral 00',
      contrast: '-',
      description: 'Основной цвет фона страниц, цвет форм с обводкой, цвет текста, иконок',
    },
    'Neutral/Neutral 05': { name: 'Neutral 05', contrast: '1.1', description: 'Альтернативный цвет фона страниц' },
    'Neutral/Neutral 10': {
      name: 'Neutral 10',
      contrast: '1.23',
      description: 'Цвет фона элементов без обводки, форм в состоянии Disable',
    },
    'Neutral/Neutral 20': {
      name: 'Neutral 20',
      contrast: '1.42',
      description: 'Линии, подчеркивания, мягкие обводки, отбивки',
    },
    'Neutral/Neutral 30': {
      name: 'Neutral 30',
      contrast: '2.06',
      description: 'Текст, иконки в состоянии Disable',
      bold: true,
    },
    'Neutral/Neutral 40': {
      name: 'Neutral 40',
      contrast: '2.62',
      description: 'Обводки форм, например Input и Select',
    },
    'Neutral/Neutral 50': {
      name: 'Neutral 50',
      contrast: '4.55',
      description: 'Вторичный текст, основной цвет иконок',
      bold: true,
    },
    'Neutral/Neutral 60': { name: 'Neutral 60', contrast: '5.51', description: 'Hover обводок Input и Select' },
    'Neutral/Neutral 70': { name: 'Neutral 70', contrast: '7.81', description: 'Редкое применение' },
    'Neutral/Neutral 80': {
      name: 'Neutral 80',
      contrast: '11.73',
      description: 'Подложка контрастных компонентов, тултипы, аватары, бэйджи',
    },
    'Neutral/Neutral 90': {
      name: 'Neutral 90',
      contrast: '15.14',
      description: 'Основной цвет текста системы',
      bold: true,
    },
  },
  Primary: {
    'Primary/Primary 10': { name: 'Primary 10', contrast: '1.09', description: 'Фон статусных элементов' },
    'Primary/Primary 20': {
      name: 'Primary 20',
      contrast: '1.22',
      description: 'Фон статусных ховеров, например строки в таблицах',
    },
    'Primary/Primary 30': { name: 'Primary 30', contrast: '1.71', description: 'Primary Disable', bold: true },
    'Primary/Primary 40': { name: 'Primary 40', contrast: '2.51', description: 'Редкое использование' },
    'Primary/Primary 50': { name: 'Primary 50', contrast: '3.51', description: 'Обводка информеров', bold: true },
    'Primary/Primary 60 Main': {
      name: 'Primary 60 Main',
      contrast: '5.01',
      description: 'Основной интерактивный цвет системы',
    },
    'Primary/Primary 70': { name: 'Primary 70', contrast: '7.06', description: 'Состояние Hover' },
    'Primary/Primary 80': { name: 'Primary 80', contrast: '10.07', description: 'Состояние Press' },
  },
  Special: {
    'Special/Static White': {
      name: 'Static White',
      contrast: '-',
      description: 'Статичный белый цвет, например текст или иконка на Primary кнопке',
    },
    'Special/Elevated BG': {
      name: 'Elevated BG',
      contrast: '-',
      description: 'Цвет фона приподнятых относительно основного фона объектов – Dropdown Menu, Modal, Hint',
    },
    'Special/Dark Static Neutral 00': {
      name: 'Dark Static Neutral 00',
      contrast: '-',
      description: 'Статичный цвет фона',
    },
    'Special/Dark Static Neutral 05': {
      name: 'Dark Static Neutral 05',
      contrast: '-',
      description: 'Статичный альтернативный цвет фона',
    },
    'Special/Dark Static Neutral 10': {
      name: 'Dark Static Neutral 10',
      contrast: '-',
      description: 'Статичный цвет для фона темных компонентов',
    },
    'Special/Dark Static Neutral 20': {
      name: 'Dark Static Neutral 20',
      contrast: '-',
      description: 'Статичный цвет для линий, подчеркиваний, мягких обводок, отбивок',
    },
    'Special/Dark Static Neutral 30': {
      name: 'Dark Static Neutral 30',
      contrast: '-',
      description: 'Статичный цвет для Disable элементов на темном фоне. Например иконки, текст.',
    },
    'Special/Dark Static Neutral 50': {
      name: 'Dark Static Neutral 50',
      contrast: '-',
      description: 'Статичный цвет вторичного текста или иконок на темном фоне',
    },
    'Special/Dark Static Neutral 70': {
      name: 'Dark Static Neutral 70',
      contrast: '-',
      description: 'Статичный цвет для кастомных элементов',
    },
    'Special/Dark Static Neutral 80': {
      name: 'Dark Static Neutral 80',
      contrast: '-',
      description: 'Статичный цвет контрастных объектов на темном фоне',
    },
    'Special/Dark Static Neutral 90': {
      name: 'Dark Static Neutral 90',
      contrast: '-',
      description: 'Статичный цвет текста на темном фоне',
    },
    'Special/Dark Static Primary 60': {
      name: 'Dark Static Primary 60',
      contrast: '-',
      description: 'Статичный основной интерактивный цвет на темном фоне',
    },
    'Special/Dark Static Primary 70': {
      name: 'Dark Static Primary 70',
      contrast: '-',
      description: 'Статичный цвет. Состояние Hover для цвета Static Primary.',
    },
    'Special/Dark Static Primary 80': {
      name: 'Dark Static Primary 80',
      contrast: '-',
      description: 'Статичный цвет. Состояние Press для цвета Static Primary.',
    },
    'Special/Dark Static Error 60': {
      name: 'Dark Static Error 60',
      contrast: '-',
      description: 'Статичный цвет. Основной цвет Error на темном фоне.',
    },
    'Special/Dark Static Success 50': {
      name: 'Dark Static Success 50',
      contrast: '-',
      description: 'Статичный цвет. Основной цвет Success на темном фоне.',
    },
  },
  Opacity: {
    'Opacity/Hover': {
      name: 'Hover',
      contrast: '-',
      description: 'Hover на светлых поверхностях',
      opacity: '5%',
    },
    'Opacity/Focus': {
      name: 'Focus',
      contrast: '-',
      description: 'Focus на светлых поверхностях',
      opacity: '9%',
    },
    'Opacity/Press': {
      name: 'Press',
      contrast: '-',
      description: 'Press на светлых поверхностях',
      opacity: '12%',
    },
    'Opacity/Modal': {
      name: 'Modal',
      contrast: '-',
      description: 'Затемнение всего экрана при всплывающих окнах.',
      opacity: '40%',
    },
    'Opacity/Dark Static Hover': {
      name: 'Dark Static Hover',
      contrast: '-',
      description: 'Статичный Hover на темных поверхностях',
      opacity: '6%',
    },
    'Opacity/Dark Static Focus': {
      name: 'Dark Static Focus',
      contrast: '-',
      description: 'Статичный Focus на темных поверхностях',
      opacity: '9%',
    },
    'Opacity/Dark Static Press': {
      name: 'Dark Static Press',
      contrast: '-',
      description: 'Статичный Press на темных поверхностях',
      opacity: '12%',
    },
  },
  Error: {
    'Error/Error 10': { name: 'Error 10', contrast: '-', description: 'Фон статусных элементов' },
    'Error/Error 20': {
      name: 'Error 20',
      contrast: '-',
      description: 'Фон статусных ховеров, например строки в таблицах',
    },
    'Error/Error 30': { name: 'Error 30', contrast: '-', description: 'Error Disable' },
    'Error/Error 40': { name: 'Error 40', contrast: '-', description: 'Редкое использование' },
    'Error/Error 50': { name: 'Error 50', contrast: '-', description: 'Обводка информеров' },
    'Error/Error 60 Main': { name: 'Error 60 Main', contrast: '5.02', description: 'Основной цвет состояния Error' },
    'Error/Error 70': { name: 'Error 70', contrast: '-', description: 'Состояние Hover' },
    'Error/Error 80': { name: 'Error 80', contrast: '-', description: 'Состояние Press' },
  },
  Success: {
    'Success/Success 10': { name: 'Success 10', contrast: '-', description: 'Фон статусных элементов' },
    'Success/Success 20': {
      name: 'Success 20',
      contrast: '-',
      description: 'Фон статусных ховеров, например строки в таблицах',
    },
    'Success/Success 30': { name: 'Success 30', contrast: '-', description: 'Success Disable' },
    'Success/Success 40': { name: 'Success 40', contrast: '-', description: 'Обводка информеров' },
    'Success/Success 50 Main': {
      name: 'Success 50 Main',
      contrast: '3.4',
      description: 'Основоной цвет состояния Success',
    },
    'Success/Success 60': { name: 'Success 60', contrast: '-', description: 'Состояние Hover' },
    'Success/Success 70': { name: 'Success 70', contrast: '-', description: 'Состояние Press' },
  },
  Warning: {
    'Warning/Warning 10': { name: 'Warning 10', contrast: '-', description: 'Фон статусных элементов' },
    'Warning/Warning 20': {
      name: 'Warning 20',
      contrast: '-',
      description: 'Фон статусных ховеров, например строки в таблицах',
    },
    'Warning/Warning 30': { name: 'Warning 30', contrast: '-', description: 'Редкое использование' },
    'Warning/Warning 40': { name: 'Warning 40', contrast: '-', description: 'Обводка информеров' },
    'Warning/Warning 50 Main': {
      name: 'Warning 50 Main',
      contrast: '3.08',
      description: 'Основной цвет состояния Warning',
    },
    'Warning/Warning 60': { name: 'Warning 60', contrast: '-', description: 'Редкое использование' },
    'Warning/Warning 70': { name: 'Warning 70', contrast: '-', description: 'Редкое использование' },
  },
  Attention: {
    'Attention/Attention 10': { name: 'Attention 10', contrast: '-', description: 'Фон статусных элементов' },
    'Attention/Attention 20': {
      name: 'Attention 20',
      contrast: '-',
      description: 'Фон статусных ховеров',
    },
    'Attention/Attention 30': { name: 'Attention 30', contrast: '-', description: 'Редкое использование' },
    'Attention/Attention 40': { name: 'Attention 40', contrast: '-', description: 'Редкое использование' },
    'Attention/Attention 50 Main': {
      name: 'Attention 50 Main',
      contrast: '1.59',
      description: 'Основной цвет состояния Attention',
    },
    'Attention/Attention 60': { name: 'Attention 60', contrast: '-', description: 'Редкое использование' },
    'Attention/Attention 70': { name: 'Attention 70', contrast: '-', description: 'Редкое использование' },
  },
  Purple: {
    'Purple/Purple 10': { name: 'Purple 10', contrast: '-', description: '-' },
    'Purple/Purple 20': { name: 'Purple 20', contrast: '-', description: '-' },
    'Purple/Purple 30': { name: 'Purple 30', contrast: '-', description: '-' },
    'Purple/Purple 40': { name: 'Purple 40', contrast: '-', description: '-' },
    'Purple/Purple 50': { name: 'Purple 50', contrast: '-', description: '-' },
    'Purple/Purple 60 Main': { name: 'Purple 60 Main', contrast: '5.1', description: 'Основной цвет' },
    'Purple/Purple 70': { name: 'Purple 70', contrast: '-', description: '-' },
    'Purple/Purple 80': { name: 'Purple 80', contrast: '-', description: '-' },
  },
  Magenta: {
    'Magenta/Magenta 10': { name: 'Magenta 10', contrast: '-', description: '-' },
    'Magenta/Magenta 20': { name: 'Magenta 20', contrast: '-', description: '-' },
    'Magenta/Magenta 30': { name: 'Magenta 30', contrast: '-', description: '-' },
    'Magenta/Magenta 40': { name: 'Magenta 40', contrast: '-', description: '-' },
    'Magenta/Magenta 50': { name: 'Magenta 50', contrast: '-', description: '-' },
    'Magenta/Magenta 60 Main': { name: 'Magenta 60 Main', contrast: '5.1', description: 'Основной цвет' },
    'Magenta/Magenta 70': { name: 'Magenta 70', contrast: '-', description: '-' },
    'Magenta/Magenta 80': { name: 'Magenta 80', contrast: '-', description: '-' },
  },
  Cyan: {
    'Cyan/Cyan 10': { name: 'Cyan 10', contrast: '-', description: '-' },
    'Cyan/Cyan 20': { name: 'Cyan 20', contrast: '-', description: '-' },
    'Cyan/Cyan 30': { name: 'Cyan 30', contrast: '-', description: '-' },
    'Cyan/Cyan 40': { name: 'Cyan 40', contrast: '-', description: '-' },
    'Cyan/Cyan 50': { name: 'Cyan 50', contrast: '-', description: '-' },
    'Cyan/Cyan 60 Main': { name: 'Cyan 60 Main', contrast: '5.1', description: 'Основной цвет' },
    'Cyan/Cyan 70': { name: 'Cyan 70', contrast: '-', description: '-' },
    'Cyan/Cyan 80': { name: 'Cyan 80', contrast: '-', description: '-' },
  },
  Teal: {
    'Teal/Teal 10': { name: 'Teal 10', contrast: '-', description: '-' },
    'Teal/Teal 20': { name: 'Teal 20', contrast: '-', description: '-' },
    'Teal/Teal 30': { name: 'Teal 30', contrast: '-', description: '-' },
    'Teal/Teal 40': { name: 'Teal 40', contrast: '-', description: '-' },
    'Teal/Teal 50': { name: 'Teal 50', contrast: '-', description: '-' },
    'Teal/Teal 60 Main': { name: 'Teal 60 Main', contrast: '5.1', description: 'Основной цвет' },
    'Teal/Teal 70': { name: 'Teal 70', contrast: '-', description: '-' },
    'Teal/Teal 80': { name: 'Teal 80', contrast: '-', description: '-' },
  },
};

const Cell = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Group = styled(Cell)`
  ${typography['Subtitle/Subtitle 3']};
`;

const ColorCircle = styled.div<{ $color: keyof Color; $size?: number; border?: boolean }>`
  display: flex;
  flex: 0 0 auto;
  width: ${({ $size = 16 }) => $size}px;
  height: ${({ $size = 16 }) => $size}px;
  border-radius: 50%;
  background: ${({ theme, $color }) => theme.color[$color]};
  ${({ border, theme }) => border && `border: 1px solid ${theme.color['Neutral/Neutral 20']};`}
`;

export const VERSION_COLUMNS = [
  { name: 'version2.0', width: '300px', title: 'Admiral 2.0' },
  {
    name: 'version2.1',
    width: '300px',
    title: 'Admiral 2.1',
    renderCell: (data: any) => (
      <Cell>
        {data}
        {data !== 'Нет сопоставлений' && (
          <ColorCircle
            $color={data}
            border={data == 'Special/Elevated BG' || data == 'Neutral/Neutral 00' || data == 'Special/Static White'}
          />
        )}
      </Cell>
    ),
  },
];

export const VERSIONS_ROWS: Array<TableRow & { 'version2.0'?: any; 'version2.1'?: any }> = [
  { id: '1', 'version2.0': <Group>Basic</Group> },
  { id: '2', 'version2.0': 'Light web/Basic/Primary', 'version2.1': 'Primary/Primary 60 Main' },
  { id: '3', 'version2.0': 'Light web/Basic/Secondary', 'version2.1': 'Neutral/Neutral 90' },
  { id: '4', 'version2.0': 'Light web/Basic/Tertiary', 'version2.1': 'Neutral/Neutral 40' },
  { id: '5', 'version2.0': 'Light web/Basic/Hover', 'version2.1': 'Primary/Primary 70' },
  { id: '6', 'version2.0': 'Light web/Basic/Press', 'version2.1': 'Primary/Primary 80' },
  { id: '7', 'version2.0': 'Light web/Basic/Disable', 'version2.1': 'Neutral/Neutral 20' },
  { id: '8', 'version2.0': 'Light web/Basic/Primary light', 'version2.1': 'Primary/Primary 40' },
  { id: '9', 'version2.0': <Group>Background</Group> },
  { id: '10', 'version2.0': 'Light web/Background/Primary', 'version2.1': 'Neutral/Neutral 00' },
  { id: '11', 'version2.0': 'Light web/Background/Secondary', 'version2.1': 'Neutral/Neutral 05' },
  { id: '12', 'version2.0': 'Light web/Background/Tertiary', 'version2.1': 'Neutral/Neutral 10' },
  { id: '13', 'version2.0': 'Light web/Background/Tertiary Hover', 'version2.1': 'Neutral/Neutral 20' },
  { id: '14', 'version2.0': 'Light web/Background/Card', 'version2.1': 'Special/Elevated BG' },
  { id: '15', 'version2.0': 'Light web/Background/Card Hover', 'version2.1': 'Нет сопоставлений' },
  { id: '16', 'version2.0': 'Light web/Background/Inversion', 'version2.1': 'Neutral/Neutral 90' },
  { id: '17', 'version2.0': 'Light web/Background/Shadow', 'version2.1': 'Нет сопоставлений' },
  { id: '18', 'version2.0': 'Light web/Background/Header', 'version2.1': 'Primary/Primary 80' },
  { id: '19', 'version2.0': 'Light web/Background/Surface Danger', 'version2.1': 'Error/Error 10' },
  { id: '20', 'version2.0': 'Light web/Background/Surface Warn', 'version2.1': 'Warning/Warning 10' },
  { id: '21', 'version2.0': 'Light web/Background/Surface Success', 'version2.1': 'Success/Success 10' },
  { id: '22', 'version2.0': 'Light web/Background/Page', 'version2.1': 'Neutral/Neutral 05' },
  { id: '23', 'version2.0': <Group>Text</Group> },
  { id: '24', 'version2.0': 'Light web/Text/Primary', 'version2.1': 'Neutral/Neutral 90' },
  { id: '25', 'version2.0': 'Light web/Text/Secondary', 'version2.1': 'Neutral/Neutral 50' },
  { id: '26', 'version2.0': 'Light web/Text/Tertiary', 'version2.1': 'Neutral/Neutral 30' },
  { id: '27', 'version2.0': 'Light web/Text/Inversion', 'version2.1': 'Neutral/Neutral 00' },
  { id: '28', 'version2.0': 'Light web/Text/Static White', 'version2.1': 'Special/Static White' },
  { id: '29', 'version2.0': 'Light web/Text/Static Black', 'version2.1': 'Special/Dark Static Neutral 05' },
  { id: '30', 'version2.0': <Group>Status</Group> },
  { id: '31', 'version2.0': 'Light web/Status/Warn', 'version2.1': 'Warning/Warning 50 Main' },
  { id: '32', 'version2.0': 'Light web/Status/Hover Warn', 'version2.1': 'Warning/Warning 60' },
  { id: '33', 'version2.0': 'Light web/Status/Press Warn', 'version2.1': 'Warning/Warning 70' },
  { id: '34', 'version2.0': 'Light web/Status/Success', 'version2.1': 'Success/Success 50 Main' },
  { id: '35', 'version2.0': 'Light web/Status/Hover Success', 'version2.1': 'Success/Success 60' },
  { id: '36', 'version2.0': 'Light web/Status/Press Success', 'version2.1': 'Success/Success 70' },
  { id: '37', 'version2.0': 'Light web/Status/Danger', 'version2.1': 'Error/Error 60 Main' },
  { id: '38', 'version2.0': 'Light web/Status/Hover Danger', 'version2.1': 'Error/Error 70' },
  { id: '39', 'version2.0': 'Light web/Status/Press Danger', 'version2.1': 'Error/Error 80' },
];
