import type { ThemeTypographyType } from '@admiral-ds/react-ui';

interface FontProps {
  name: keyof ThemeTypographyType;
  style: { name: string; value: string }[];
  description: string;
}

export const FONTS: FontProps[] = [
  {
    name: 'Main/XXL',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '42px' },
      { name: 'Высота строки:', value: '52px' },
    ],
    description: 'Большой заголовок для лендингов. Не применяется на мобильных устройствах.',
  },
  {
    name: 'Main/XL',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '36px' },
      { name: 'Высота строки:', value: '44px' },
    ],
    description:
      'Большой заголовок. Используется в редких случаях, когда нужно сделать визуальный акцент. Не применяется на мобильных устройствах.',
  },
  {
    name: 'Main/L',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '32px' },
      { name: 'Высота строки:', value: '40px' },
    ],
    description:
      'Большой базовый заголовок. Используется в случаях, когда много пространства и используются компоненты размера XL',
  },
  {
    name: 'Main/M',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '28px' },
      { name: 'Высота строки:', value: '36px' },
    ],
    description: 'Базовый заголовок первого уровня',
  },
  {
    name: 'Main/S',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '22px' },
      { name: 'Высота строки:', value: '28px' },
    ],
    description: 'Базовый заголовок второго уровня',
  },
  {
    name: 'Main/XS-bold',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '18px' },
      { name: 'Высота строки:', value: '24px' },
    ],
    description: 'Базовый заголовок третьего уровня',
  },
  {
    name: 'Main/XS',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '18px' },
      { name: 'Высота строки:', value: '24px' },
    ],
    description: 'Крупный шрифт параграфа, может использоваться как подзаголовок',
  },
  {
    name: 'Additional/L-bold',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '16px' },
      { name: 'Высота строки:', value: '24px' },
    ],
    description: 'Акцентированный текст, подзаголовок',
  },
  {
    name: 'Additional/L',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '16px' },
      { name: 'Высота строки:', value: '24px' },
    ],
    description: 'Базовый шрифт системы для набора текстов',
  },
  {
    name: 'Additional/M',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '16px' },
      { name: 'Высота строки:', value: '20px' },
    ],
    description: 'Базовый шрифт системы для набора текста длинною в 1-2 строки (опционально)',
  },
  {
    name: 'Additional/S',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '14px' },
      { name: 'Высота строки:', value: '20px' },
    ],
    description: 'Акцентированный текст, подзаголовок',
  },
  {
    name: 'Additional/S-bold',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '14px' },
      { name: 'Высота строки:', value: '20px' },
    ],
    description: 'Базовый шрифт системы для набора текстов',
  },
  {
    name: 'Additional/XS',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '14px' },
      { name: 'Высота строки:', value: '16px' },
    ],
    description: 'Базовый шрифт системы для набора текста длинною в 1-2 строки (опционально)',
  },
  {
    name: 'Button/M',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '16px' },
      { name: 'Высота строки:', value: '24px' },
    ],
    description: 'Шрифт используется только в кнопках',
  },
  {
    name: 'Button/S',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '14px' },
      { name: 'Высота строки:', value: '20px' },
    ],
    description: 'Шрифт используется только в кнопках',
  },
  {
    name: 'Caption/XS',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '12px' },
      { name: 'Высота строки:', value: '16px' },
    ],
    description: 'Самый маленький шрифт системы. Применяется в компонентах, сносках, примечаниях, счетчиках и тд.',
  },
];
export const NEW_FONTS: FontProps[] = [
  {
    name: 'Header/HL1',
    style: [
      { name: 'Вес:', value: '550' },
      { name: 'Размер:', value: '72px' },
      { name: 'Высота строки:', value: '80px' },
    ],
    description: 'Большой заголовок для лендингов. Не применяется на мобильных устройствах.',
  },
  {
    name: 'Header/HL2',
    style: [
      { name: 'Вес:', value: '550' },
      { name: 'Размер:', value: '56px' },
      { name: 'Высота строки:', value: '64px' },
    ],
    description: 'Большой заголовок для лендингов. Не применяется на мобильных устройствах.',
  },
  {
    name: 'Header/HL3',
    style: [
      { name: 'Вес:', value: '550' },
      { name: 'Размер:', value: '48px' },
      { name: 'Высота строки:', value: '56px' },
    ],
    description: 'Большой заголовок для лендингов. Не применяется на мобильных устройствах.',
  },
  {
    name: 'Header/H1',
    style: [
      { name: 'Вес:', value: '550' },
      { name: 'Размер:', value: '40px' },
      { name: 'Высота строки:', value: '48px' },
    ],
    description:
      'Заголовок первого уровня. Используется в случаях, когда много пространства и используются компоненты размера XL.',
  },
  {
    name: 'Header/H2',
    style: [
      { name: 'Вес:', value: '550' },
      { name: 'Размер:', value: '34px' },
      { name: 'Высота строки:', value: '40px' },
    ],
    description:
      'Заголовок второго уровня. Используется в случаях, когда много пространства и используются компоненты размера XL.',
  },
  {
    name: 'Header/H3',
    style: [
      { name: 'Вес:', value: '550' },
      { name: 'Размер:', value: '28px' },
      { name: 'Высота строки:', value: '36px' },
    ],
    description:
      'Заголовок третьего уровня. Как правило, самый большой размер для стандартных интерфейсов размера M и S.',
  },
  {
    name: 'Header/H4',
    style: [
      { name: 'Вес:', value: '550' },
      { name: 'Размер:', value: '24px' },
      { name: 'Высота строки:', value: '32px' },
    ],
    description: 'Заголовок четвертого уровня. Рекомендуемый максимальный размер заголовка для мобильных устройств.',
  },
  {
    name: 'Header/H5',
    style: [
      { name: 'Вес:', value: '550' },
      { name: 'Размер:', value: '20px' },
      { name: 'Высота строки:', value: '28px' },
    ],
    description: 'Заголовок пятого уровня.',
  },
  {
    name: 'Header/H6',
    style: [
      { name: 'Вес:', value: '550' },
      { name: 'Размер:', value: '18px' },
      { name: 'Высота строки:', value: '24px' },
    ],
    description: 'Заголовок шестого уровня.',
  },
  {
    name: 'Subtitle/Subtitle 1',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '18px' },
      { name: 'Высота строки:', value: '24px' },
    ],
    description: 'Крупный шрифт параграфа, может использоваться как подзаголовок.',
  },
  {
    name: 'Subtitle/Subtitle 2',
    style: [
      { name: 'Вес:', value: '550' },
      { name: 'Размер:', value: '16px' },
      { name: 'Высота строки:', value: '24px' },
    ],
    description: 'Акцентированный текст, подзаголовок.',
  },
  {
    name: 'Subtitle/Subtitle 3',
    style: [
      { name: 'Вес:', value: '550' },
      { name: 'Размер:', value: '14px' },
      { name: 'Высота строки:', value: '20px' },
    ],
    description: 'Акцентированный текст, подзаголовок.',
  },
  {
    name: 'Body/Body 1 Long',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '16px' },
      { name: 'Высота строки:', value: '24px' },
    ],
    description: 'Основной шрифт системы первого уровня для набора больших текстов.',
  },
  {
    name: 'Body/Body 1 Short',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '16px' },
      { name: 'Высота строки:', value: '20px' },
    ],
    description: 'Шрифт системы первого уровня для набора коротких текстов в 1-2 строки (необязательный сценарий).',
  },
  {
    name: 'Body/Body 2 Long',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '14px' },
      { name: 'Высота строки:', value: '20px' },
    ],
    description: 'Основной шрифт системы второго уровня для набора больших текстов.',
  },
  {
    name: 'Body/Body 2 Short',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '14px' },
      { name: 'Высота строки:', value: '16px' },
    ],
    description: 'Шрифт системы второго уровня для набора коротких текстов в 1-2 строки (необязательный сценарий).',
  },
  {
    name: 'Button/Button 1',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '16px' },
      { name: 'Высота строки:', value: '24px' },
    ],
    description: 'Шрифт используется только в кнопках.',
  },
  {
    name: 'Button/Button 2',
    style: [
      { name: 'Вес:', value: '500' },
      { name: 'Размер:', value: '14px' },
      { name: 'Высота строки:', value: '20px' },
    ],
    description: 'Шрифт используется только в кнопках.',
  },
  {
    name: 'Caption/Caption 1',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '12px' },
      { name: 'Высота строки:', value: '16px' },
    ],
    description: 'Самый маленький шрифт системы. Применяется в компонентах, сносках, примечаниях, счетчиках и тд.',
  },
  {
    name: 'Caption/Caption 2',
    style: [
      { name: 'Вес:', value: '400' },
      { name: 'Размер:', value: '10px' },
      { name: 'Высота строки:', value: '12px' },
    ],
    description:
      'Самый маленький шрифт системы. Не используется в компонентах системы, не рекомендуется для набора текстов. Использовать только в крайних случаях.',
  },
];
