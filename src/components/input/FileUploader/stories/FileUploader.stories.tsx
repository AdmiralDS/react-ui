import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';

import { FileUploader, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { FileUploaderCustomTemplate } from './FileUploaderCustom.template';
import { FileUploaderXLTemplate } from './FileUploaderXL.template';
import { FileUploaderCustomFilesTemplate } from './FileUploaderCustomFiles.template';
import { FileUploaderMTemplate } from './FileUploaderM.template';
import { FileUploaderWithStatusTemplate } from './FileUploaderWithStatus.template';

// Imports of text sources
import FileUploaderCustomRaw from './FileUploaderCustom.template?raw';
import FileUploaderXLRaw from './FileUploaderXL.template?raw';
import FileUploaderCustomFilesRaw from './FileUploaderCustomFiles.template?raw';
import FileUploaderMRaw from './FileUploaderM.template?raw';
import FileUploaderWithStatusRaw from './FileUploaderWithStatus.template?raw';

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
    можно как через нажатие на компонент, так и через Drag and Drop (в XL-размере) на компонент. Компонент имеет две
    разновидности отображения — размер XL с превью изображения или иконкой формата файла и размер M без превью,
    передается параметром fileDimension.
    <Separator />
    Выбранные пользователем файлы передаются списком через параметр uploadedFiles, где каждый файл это объект с
    обязательным ключом file и двумя необязательными ключами status и error.
    <Separator />
    Примечание: в IE11 нет функционала перетаскивания и удаления файлов по причине отсутствия поддержки Drag and Drop и
    конструктора DataTransfer в данном браузере.
  </Desc>
);

export default {
  title: 'Deprecated/FileUploader (Deprecated используйте FileInput)',
  decorators: undefined,
  component: FileUploader,
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
    description: {
      control: false,
    },
    accept: {
      control: false,
    },
    uploadedFiles: {
      control: false,
    },
    children: {
      control: false,
    },
    disabled: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof FileUploader>;

//<editor-fold desc="File Uploader. XL">
const FileUploaderXLStory: StoryFn<typeof FileUploader> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <FileUploaderXLTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const FileUploaderXL = {
  render: FileUploaderXLStory,

  parameters: {
    docs: {
      source: {
        code: FileUploaderXLRaw,
      },
    },
  },

  name: 'File Uploader. XL',
};

//</editor-fold>

//<editor-fold desc="File Uploader. M">
const FileUploaderMStory: StoryFn<typeof FileUploader> = (props) => <FileUploaderMTemplate {...props} />;

export const FileUploaderM = {
  render: FileUploaderMStory,
  name: 'File Uploader. M',

  parameters: {
    docs: {
      source: {
        code: FileUploaderMRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="File Uploader со статусом загрузки">
const FileUploaderWithStatusStory: StoryFn<typeof FileUploader> = (props) => (
  <FileUploaderWithStatusTemplate {...props} />
);

export const FileUploaderWithStatus = {
  render: FileUploaderWithStatusStory,
  name: 'File Uploader со статусом загрузки',

  parameters: {
    docs: {
      source: {
        code: FileUploaderWithStatusRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="'File Uploader. Кастомизированный список файлов">
const FileUploaderCustomFilesStory: StoryFn<typeof FileUploader> = (props) => (
  <FileUploaderCustomFilesTemplate {...props} />
);

export const FileUploaderCustomFiles = {
  render: FileUploaderCustomFilesStory,
  name: 'File Uploader. Кастомизированный список файлов',

  parameters: {
    docs: {
      source: {
        code: FileUploaderCustomFilesRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Другой визуальный компонент с функционалом FileUploader">
const FileUploaderCustomStory: StoryFn<typeof FileUploader> = (props) => <FileUploaderCustomTemplate {...props} />;

export const FileUploaderCustom = {
  render: FileUploaderCustomStory,
  name: 'Другой визуальный компонент с функционалом FileUploader',

  parameters: {
    docs: {
      source: {
        code: FileUploaderCustomRaw,
      },
    },
  },
};
