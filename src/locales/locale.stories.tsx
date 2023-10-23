import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { LocaleThemeCurrentLocaleTemplate } from './LocaleThemeCurrentLocale.template';
import { LocaleThemeNewLocaleTemplate } from './LocaleThemeNewLocale.template';
import { LocalePropTemplate } from './LocaleProp.template';

// Imports of text sources
import LocaleThemeCurrentLocaleRaw from './LocaleThemeCurrentLocale.template?raw';
import LocaleThemeNewLocaleRaw from './LocaleThemeNewLocale.template?raw';
import LocalePropRaw from './LocaleProp.template?raw';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компоненты Admiral 2.1 поддерживают локализацию, и все текстовые константы в компонентах меняют своё значение при
    смене локали.
    <Separator />
    Текущая локаль задается в теме в свойстве currentLocale (значение по умолчанию - ru). В качестве значения
    currentLocale выступает строковый код локали, совместимый с методами Intl, и перечисленный в качестве ключа в другом
    свойстве темы - в объекте locales.
    <Separator />
    Объект theme.locales предтавляет собой перечисление локалей, поддерживаемых библиотекой: где ключами объекта
    выступают строковые коды локалей, а значениями объекты типа Locale с набором текстовых констант, соответствующих
    определенной локали.
    <Separator />
    Библиотека поддерживает три локали: ru, en, en-US. Чтобы переключить дефолтную русскую локаль на иную достаточно с
    помощью ThemeProvider изменить значение theme.currentLocale и убедиться, что данное значение содержится в
    theme.locales. Также пользователь всегда может добавить свою локаль, добавив соответствующий объект в theme.locales.
  </Desc>
);

export default {
  title: 'Locales',
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
  },
} as Meta<any>;

//<editor-fold desc="Theme Current Locale">
const LocaleThemeCurrentLocaleStory: StoryFn<any> = () => <LocaleThemeCurrentLocaleTemplate />;

export const ThemeCurrentLocale = {
  render: LocaleThemeCurrentLocaleStory,

  parameters: {
    docs: {
      source: {
        code: LocaleThemeCurrentLocaleRaw,
      },
    },
  },
  name: 'Пример использования календаря в русской и американской локалях',
};

//</editor-fold>

//<editor-fold desc="Theme new Locale">
const LocaleThemeNewLocaleStory: StoryFn<any> = () => <LocaleThemeNewLocaleTemplate />;

export const ThemeNewLocale = {
  render: LocaleThemeNewLocaleStory,

  parameters: {
    docs: {
      source: {
        code: LocaleThemeNewLocaleRaw,
      },
      description: {
        story: `Пользователь может создать свою локаль. Для этого в объект theme.locales 
        добавляется соответсвующий ключ, значением которого является объект типа Locale.
        Данный объект содержит в себе перечисление текстовых констант для компонентов библиотеки, а также содержит
        свойство firstDayOfWeek. Свойство firstDayOfWeek (значение св-ва - число от 0 до 6) обозначает, 
        с какого дня начинается неделя для данной локали, где 0 - это воскресенье.`,
      },
    },
  },
  name: 'Пример определения новой локали (немецкой)',
};

//</editor-fold>

//<editor-fold desc="Locale Prop">
const LocalePropStory: StoryFn<any> = () => <LocalePropTemplate />;

export const ComponentProp = {
  render: LocalePropStory,

  parameters: {
    docs: {
      source: {
        code: LocalePropRaw,
      },
      description: {
        story: `В некоторых случаях может быть необходимо изменить значения текстовых констант для отдельных
          компонентов. Для этого у компонентов, использующих текстовые константы, есть специальный параметр locale - объект, в
          котором можно задать альтернативные значения текстовых констант, отличные от тех, что заданы в theme.locales.
          Текстовая константа, заданная через пропс locale компонента имеет больший приоритет, чем та же константа, заданная в
          theme.locale.`,
      },
    },
  },
  name: 'Пример переопределения текстовых констант с помощью пропса locale в компоненте ProgressStepper',
};

//</editor-fold>
