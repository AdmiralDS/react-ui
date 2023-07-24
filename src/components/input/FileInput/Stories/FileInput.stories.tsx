import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { FileInput, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { FileInputBaseTemplate, FileInputCustomTemplate, FileInputWithStatusTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import FileInputBaseRaw from './Templates/FileInputBase?raw';
import FileInputWithStatusRaw from './Templates/FileInputWithStatus?raw';
import FileInputCustomRaw from './Templates/FileInputCustom?raw';

const Separator = styled.div`
  height: 40px;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент позволяет выбирать локальные файлы пользователя для последующей загрузки их на сервер. Выбирать файлы
    можно как через нажатие на компонент, так и через Drag and Drop на компонент. Компонент имеет две разновидности
    отображения — размер XL с превью изображения или иконкой формата файла и размер M без превью, передается параметром
    fileDimension.
    <Separator />
    Для отображения компонента в другом варианте можно использовать параметр renderCustomFileInput.
    <Separator />В компоненте есть возможность синхронизировать внешний стейт списка файлов с внутренним стейтом
    нативного инпута через параметр files.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Input/FileInput',
  decorators: undefined,
  component: FileInput,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27281',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27389',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27519',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27563',
      },
    ],
    componentSubtitle: <Description />,
    layout: 'centered',
  },
  argTypes: {
    dimension: {
      options: ['xl', 'm'],
      control: { type: 'radio' },
    },
    title: {
      control: false,
    },
    disabled: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    width: {
      control: { type: 'text' },
    },
    description: {
      control: false,
    },
    files: {
      control: false,
    },
    extraText: {
      control: false,
    },
  },
} as Meta<typeof FileInput>;

//<editor-fold desc="FileInput XL">
const FileInputDimensionXLStory: StoryFn<typeof FileInput> = (props) => (
  <FileInputBaseTemplate {...cleanUpProps(props)} dimension={'xl'} width={'480px'} />
);

export const FileInputDimensionXL = {
  render: FileInputDimensionXLStory,
  name: 'FileInput XL',

  parameters: {
    docs: {
      source: {
        code: FileInputBaseRaw,
      },
      description: {
        story: `Компонент позволяет загружать файлы на сервер. Используется в двух вариантах - для загрузки одного или 
        нескольких файлов. Позволяет как загружать файлы через браузер файлов, так и через Drag and Drop (перетаскивание файлов). 
        Компонент можно изменять по ширине, минимальная ширина 320px.`,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="FileInput M">
const FileInputDimensionMStory: StoryFn<typeof FileInput> = (props) => (
  <FileInputBaseTemplate {...cleanUpProps(props)} dimension={'m'} width={'350px'} />
);

export const FileInputDimensionM = {
  render: FileInputDimensionMStory,
  name: 'FileInput M',

  parameters: {
    docs: {
      source: {
        code: FileInputBaseRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="FileInput со статусом загрузки">
const FileInputWithStatusStory: StoryFn<typeof FileInput> = (props) => (
  <FileInputWithStatusTemplate dimension={'xl'} {...cleanUpProps(props)} />
);

export const FileInputWithStatus = {
  render: FileInputWithStatusStory,
  name: 'FileInput со статусом загрузки',

  parameters: {
    docs: {
      source: {
        code: FileInputWithStatusRaw,
      },
      description: {
        story: `Для отображения статуса загрузки файла или ошибки при валидации, компонент файла через параметр status принимает состояния Uploaded, Loading, Error, Queue, а через параметр error - текст ошибки.`,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="File Input. Кастомизация">
const FileInputCustomStory: StoryFn<typeof FileInput> = (props) => (
  <FileInputCustomTemplate dimension={'m'} {...cleanUpProps(props)} />
);

export const FileInputCustom = {
  render: FileInputCustomStory,
  name: 'FileInput. Кастомизация',

  parameters: {
    docs: {
      source: {
        code: FileInputCustomRaw,
      },
      description: {
        story: `Функцию загрузки файла можно “повесить” на другие компоненты, например, кнопки, сделав соответствующие 
        текстовые инструкции. В этом случае нужно воспользоваться методом renderCustomFileInput для отрисовки реакт-компонента. 
        Для отображения выбранных файлов можно использовать кастомные компоненты.`,
      },
    },
  },
};
