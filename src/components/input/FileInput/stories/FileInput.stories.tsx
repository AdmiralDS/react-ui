import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';

import { FileInput, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { FileInputBaseTemplate } from './FileInputBase.template';
import { FileInputWithStatusTemplate } from './FileInputWithStatus.template';
import { FileInputCustomTemplate } from './FileInputCustom.template';
import { FileInputCustomFileTypeTemplate } from './FileInputCustomFileType.template';

// Imports of text sources
import FileInputBaseRaw from './FileInputBase.template?raw';
import FileInputWithStatusRaw from './FileInputWithStatus.template?raw';
import FileInputCustomRaw from './FileInputCustom.template?raw';
import FileInputCustomFileTypeRaw from './FileInputCustomFileType.template?raw';

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
const FileInputDimensionXLStory: StoryFn<typeof FileInput> = ({ width = '480px', dimension = 'xl', ...props }) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <FileInputBaseTemplate {...props} width={width} dimension={dimension} CSSCustomProps={CSSCustomProps} />;
};

export const FileInputDimensionXL = {
  render: FileInputDimensionXLStory,
  name: 'FileInput XL',

  parameters: {
    docs: {
      source: {
        code: FileInputBaseRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="FileInput M">
const FileInputDimensionMStory: StoryFn<typeof FileInput> = ({ width = '350px', dimension = 'm', ...props }) => (
  <FileInputBaseTemplate {...props} width={width} dimension={dimension} />
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
const FileInputWithStatusStory: StoryFn<typeof FileInput> = (props) => <FileInputWithStatusTemplate {...props} />;

export const FileInputWithStatus = {
  render: FileInputWithStatusStory,
  name: 'FileInput со статусом загрузки файлов',

  parameters: {
    docs: {
      source: {
        code: FileInputWithStatusRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="File Input. Кастомизация">
const FileInputCustomStory: StoryFn<typeof FileInput> = (props) => (
  <FileInputCustomTemplate {...props} dimension={'m'} />
);

export const FileInputCustom = {
  render: FileInputCustomStory,
  name: 'FileInput. Кастомизация',

  parameters: {
    docs: {
      source: {
        code: FileInputCustomRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="File Input. Кастомизация типов файлов">
const FileInputCustomFileTypeStory: StoryFn<typeof FileInput> = ({ width = '480px', dimension = 'xl', ...props }) => {
  const [{ CSSCustomProps }] = useGlobals();
  return (
    <FileInputCustomFileTypeTemplate {...props} width={width} dimension={dimension} CSSCustomProps={CSSCustomProps} />
  );
};

export const FileInputCustomFileType = {
  render: FileInputCustomFileTypeStory,
  name: 'FileInput. Кастомизация типов файлов',

  parameters: {
    docs: {
      source: {
        code: FileInputCustomFileTypeRaw,
      },
    },
  },
};

//</editor-fold>
