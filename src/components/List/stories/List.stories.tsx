import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { OrderedList } from '@admiral-ds/react-ui';
import type { UnorderedListProps, UnorderedList } from '@admiral-ds/react-ui';

import { ListNestedTemplate } from './ListNested.template';
import { ListMarkerColorTemplate } from './ListMarkerColor.template';
import { ListMultiLineTemplate } from './ListMultiline.template';
import { ListMarkerCustomTemplate } from './ListMarkerCustom.template';

// Imports of text sources
import ListNestedRaw from './ListNested.template?raw';
import ListMarkerColorRaw from './ListMarkerColor.template?raw';
import ListMultilineRaw from './ListMultiline.template?raw';
import ListMarkerCustomRaw from './ListMarkerCustom.template?raw';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height ?? 20}px;
  width: 8px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент для вертикальной группировки связанных по смыслу текстовых пунктов. Представлен в двух вариантах
    OrderedList и UnorderedList.
    <Separator />
    Рекомендации:
    <Separator />- Используйте список, если у вас есть два и более пунктов.
    <Separator $height={8} />- Простые списки, разделенные запятыми, могут не нуждаться в разметке, но длинные списки
    или группы ссылок должны ее иметь.
    <Separator $height={8} />- Организуйте списки так, чтобы пользователи могли понять взаимосвязь и группировку
    информации.
    <Separator $height={8} />- Создавайте структурированные списки. Их легче использовать, чем простые таблицы.
  </Desc>
);

export default {
  title: 'Admiral-2.1/List/Общие примеры',
  decorators: undefined,
  component: OrderedList,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18581',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18684',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    styleType: {
      options: ['bullet', 'virgule', 'icon'],
      control: { type: 'radio' },
    },
    gap: {
      control: { type: 'text' },
    },
  },
} as Meta<UnorderedListProps>;

//<editor-fold desc="Nested">
const ListNestedStory: StoryFn = () => <ListNestedTemplate />;

export const ListNestedExample = {
  render: ListNestedStory,

  parameters: {
    docs: {
      source: {
        code: ListNestedRaw,
      },
    },
  },

  name: 'Вложенные списки',
};

//</editor-fold>

//<editor-fold desc="Custom">
const ListMarkerColorStory: StoryFn<typeof UnorderedList> = () => <ListMarkerColorTemplate />;

export const ListMarkerColorExample = {
  render: ListMarkerColorStory,

  parameters: {
    docs: {
      source: {
        code: ListMarkerColorRaw,
      },
    },
  },

  name: 'Кастомный цвет маркера',
};

//</editor-fold>

//<editor-fold desc="Custom marker">
const ListMarkerCustomStory: StoryFn<typeof UnorderedList> = () => <ListMarkerCustomTemplate />;

export const ListMarkerCustomExample = {
  render: ListMarkerCustomStory,

  parameters: {
    docs: {
      source: {
        code: ListMarkerCustomRaw,
      },
    },
  },

  name: 'Кастомизация маркеров',
};

//</editor-fold>

//<editor-fold desc="MultiLine">
const ListMultiLineStory: StoryFn<typeof UnorderedList> = () => <ListMultiLineTemplate />;

export const ListMultiLineExample = {
  render: ListMultiLineStory,

  parameters: {
    docs: {
      source: {
        code: ListMultilineRaw,
      },
    },
  },

  name: 'Многострочность и регулировка ширины списка',
};

//</editor-fold>
