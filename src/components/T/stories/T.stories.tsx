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
    Text — компонент для работы с Typography. Компонент отображает текст{' '}
    <a target="_blank" href="https://styled-components.com/docs/api#as-polymorphic-prop" rel="noopener noreferrer">
      в соответствии с заданными HTML-тегом
    </a>{' '}
    и стилем шрифта.
    <br />
    <br />
    <strong>!!!ВАЖНО:</strong> при использовании компонента T без стилизации необходимо использовать prop "as". Если
    необходимо кастомизировать компонент (с помощью styled(T)),{' '}
    <a target="_blank" href="https://styled-components.com/docs/api#forwardedas-prop" rel="noopener noreferrer">
      следует использовать prop forwardedAs
    </a>
    .
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
const TextStatusStory: StoryFn<typeof T> = (props) => <TTextStatusTemplate {...props} />;

export const TextStatus = {
  render: TextStatusStory,

  parameters: {
    docs: {
      source: {
        code: TTextStatusRaw,
      },
    },
  },

  name: 'Варианты использования',
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
    },
  },
};
