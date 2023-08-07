import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { T } from '@admiral-ds/react-ui';

import { TTextStatusTemplate } from './TTextStatus.template';
import { TFontsDemoTemplate } from './TFontsDemo.template';

// Imports of text sources
import TTextStatusRaw from './TTextStatus.template?raw';
import TFontsDemoRaw from './TFontsDemo.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI', serif;
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Text — компонент для работы с Typography. Компонент отображает текст в соответствии с заданными HTML-тегом и стилем
    шрифта.
  </Desc>
);

export default {
  title: 'Admiral-2.1/T',
  decorators: undefined,
  component: T,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=9%3A24',
    },
  },
  argTypes: {
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof T>;

//<editor-fold desc="Text">
const TextStatusStory: StoryFn<typeof T> = (props) => <TTextStatusTemplate font={'Main/XXL'} {...props} />;

export const TextStatus = {
  render: TextStatusStory,

  parameters: {
    docs: {
      source: {
        code: TTextStatusRaw,
      },
    },
  },

  name: 'Text',
};

//</editor-fold>

//<editor-fold desc="Список стилей">
const FontsDemoStory: StoryFn<typeof T> = () => <TFontsDemoTemplate />;

export const FontsDemo = {
  render: FontsDemoStory,
  name: 'Список стилей',

  parameters: {
    docs: {
      source: {
        code: TFontsDemoRaw,
      },
      description: {
        story: `Ниже представлены таблицы стилей типографики, старая и обновленная версия, на которую постепенно будет произведен перевод библиотеки.
        Каждый из этих стилей можно передавать в компонент T в виде параметра font и в качестве результата получать StyledComponent с
        необходимыми стилями. \n\nТакже возможен случай, когда пользователю нужен css миксин (ThemedCssFunction) с определенными
        стилями типографики для последующего использования этого миксина в своих styled-компонентах.
        В таком случае можно воспользоваться объектом typography, экспортируемым из нашей библиотеки. Ключами
        этого объекта служат названия стилей типографики, а значениями css миксины.\n\nРядом с названием стиля типографики
        находится иконка копирования, по нажатию на которую можно будет скопировать
        пример кода для каждого стиля в отдельности.`,
      },
    },
  },
};
