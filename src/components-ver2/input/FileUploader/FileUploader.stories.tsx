import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { FileUploader } from '#src/components-ver2/input';
import { FileInfo, FileProps } from '#src/components-ver2/input/FileUploader/FileInfo';
import { T } from '#src/components-ver2/T';
import { Status } from './utils';
import { TextButton } from '#src/components-ver2/TextButton';
import { ReactComponent as UploadSVG } from '@admiral-ds/icons/build/system/UploadOutline.svg';
import { useDarkMode } from 'storybook-dark-mode';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

const Separator = styled.div`
  height: 40px;
`;

const StyledP = styled.p`
  height: 40px;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
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
  title: 'Admiral-2.1/Input/FileUploader',
  decorators: [withDesign],
  component: FileUploader,
  parameters: {
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
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    dimension: {
      options: ['xl', 'm'],
      control: { type: 'radio' },
    },
    title: {
      control: false,
    },
  },
} as ComponentMeta<typeof FileUploader>;

const FileUploaderXL: ComponentStory<typeof FileUploader> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const accept = ['.png', '.jpg', '.jpeg'];

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <FileUploader
        {...cleanProps}
        acceptFiles={accept}
        style={{ maxWidth: '480px' }}
        dimension="xl"
        fileDimension="xl"
      />
    </ThemeProvider>
  );
};

const FileUploaderM: ComponentStory<typeof FileUploader> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <FileUploader
        {...cleanProps}
        style={{ maxWidth: '288px' }}
        dimension="m"
        fileDimension="m"
        title="Загрузите не более 3-х файлов до 5 MB каждый"
      />
    </ThemeProvider>
  );
};

const FileUploaderWithStatus: ComponentStory<typeof FileUploader> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [files, setFiles] = React.useState<FileProps[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const statusOptions: Status[] = ['Loading', 'Queue', 'Uploaded', 'Error'];
  const previewOptions = [true, false];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesToAdd = Array.from(e.target.files).map((file, i) => ({
        file,
        status: i === 0 ? statusOptions[0] : statusOptions[1],
        showPreview: i === 0 ? previewOptions[0] : previewOptions[1],
      }));
      setFiles(filesToAdd);
      setIsLoading(true);
      props.onChange?.(e);
    }
  };

  /** Для имитации загрузки файлов */
  React.useEffect(() => {
    if (isLoading && files) {
      const timeout = window.setTimeout(() => {
        setIsLoading(false);
        const updatedFiles = files.map((file) => ({
          ...file,
          status: statusOptions[Math.floor(Math.random() * (3 - 2 + 1)) + 2],
          error: file.status === 'Error' ? 'Ошибка загрузки' : '',
        }));
        setFiles(updatedFiles);
      }, 3000);
      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [isLoading, files]);

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <FileUploader
        {...cleanProps}
        uploadedFiles={files}
        style={{ maxWidth: '480px' }}
        dimension="xl"
        fileDimension="xl"
        onChange={handleChange}
      />
    </ThemeProvider>
  );
};

const FileUploaderCustomFiles: ComponentStory<typeof FileUploader> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [files, setFiles] = React.useState<FileProps[]>([]);
  const accept = ['.jpg', '.jpeg'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesToAdd = Array.from(e.target.files).map((file) => ({ file }));
      setFiles(filesToAdd);
      props.onChange?.(e);
    }
  };

  const handleRemove = (index: number) => {
    files.splice(index, 1);
    setFiles([...files]);
    props.onRemoveFile?.(index);
  };

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <FileUploader
        {...cleanProps}
        uploadedFiles={files}
        acceptFiles={accept}
        style={{ maxWidth: '480px' }}
        renderFileInfoList={(files) => {
          return files.map((file, index) => {
            return (
              <FileInfo key={index} id={index} dimension="xl" fileDimension="xl" file={file} onClick={handleRemove}>
                <T
                  font="Body/Body 2 Long"
                  as="p"
                  style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                >
                  {file.file.name}
                </T>
              </FileInfo>
            );
          });
        }}
        dimension="xl"
        fileDimension="xl"
        title="Загрузите не более 5-х файлов до 5 MB каждый, в формате JPG"
        onChange={handleChange}
      />
    </ThemeProvider>
  );
};

const FileUploaderCustom: ComponentStory<typeof FileUploader> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <FileUploader {...cleanProps} style={{ maxWidth: '288px' }} dimension="xl" fileDimension="m">
        <StyledP>Загрузите не более 3-х файлов до 5 MB каждый, в формате JPG</StyledP>
        <TextButton dimension="m" icon={<UploadSVG />} text="Загрузить документы" />
      </FileUploader>
    </ThemeProvider>
  );
};

export const FileUploaderDemoXL = FileUploaderXL.bind({});
FileUploaderDemoXL.args = {};
FileUploaderDemoXL.storyName = 'File Uploader. XL';

export const FileUploaderDemoM = FileUploaderM.bind({});
FileUploaderDemoM.args = {};
FileUploaderDemoM.storyName = 'File Uploader. M';
FileUploaderDemoM.parameters = {
  docs: {
    description: {
      story: `Компонент M-размера используется на мобильных устройствах или как альтернатива большому компоненту. Не имеет функцию
    Drag and Drop. Поведение выбранных файлов такое же, как в компоненте XL-размера. Текстовое описание к полю носит
    произвольный характер, но должно точно описывать количество, размер и тип выбранных файлов.`,
    },
  },
};

export const FileUploaderWithStatusDemo = FileUploaderWithStatus.bind({});
FileUploaderWithStatusDemo.args = {};
FileUploaderWithStatusDemo.storyName = 'File Uploader со статусом загрузки';
FileUploaderWithStatusDemo.parameters = {
  docs: {
    description: {
      story: `Для отображения статуса загрузки файла или ошибки при валидации, компонент файла через параметр status принимает состояния Uploaded, Loading, Error, Queue, а через параметр error - текст ошибки.`,
    },
  },
};

export const FileUploaderCustomFilesDemo = FileUploaderCustomFiles.bind({});
FileUploaderCustomFilesDemo.args = {};
FileUploaderCustomFilesDemo.storyName = 'File Uploader. Кастомизированный список файлов';
FileUploaderCustomFilesDemo.parameters = {
  docs: {
    description: {
      story: `В случае, если необходима кастомизация компонента выбранного файла, нужно воспользоваться методом renderFileInfoList для отрисовки реакт-компонента.`,
    },
  },
};

export const FileUploaderCustomDemo = FileUploaderCustom.bind({});
FileUploaderCustomDemo.args = {};
FileUploaderCustomDemo.storyName = 'Другой визуальный компонент с функционалом FileUploader';
FileUploaderCustomDemo.parameters = {
  docs: {
    description: {
      story: `В случае, если необходимо добавить функционал загрузчика к другому компоненту, данный компонент нужно вложить в компонент FileUploader.`,
    },
  },
};
