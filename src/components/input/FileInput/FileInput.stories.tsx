import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FileInput } from '#src/components/input/FileInput';
import { Theme } from '#src/components/themes';
import { useEffect, useMemo, useRef, useState } from 'react';
import { acceptFile } from '#src/components/input/FileInput/utils';
import { FileItem, FileItemProps, RenderFileListItemProps } from '#src/components/input/FileInput/FileItem';
import { FileList } from '#src/components/input/FileInput/FileList';
import { uid } from '#src/components/common/uid';
import { fullWidthPositionMixin, halfWidthPositionMixin } from '#src/components/input/FileInput/style';

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
  title: 'Admiral-2.1/Input/FileInput',
  decorators: [withDesign],
  component: FileInput,
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
    disabled: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof FileInput>;

const file1 = new File(['foo'], 'example1.jpeg', {
  type: 'image/jpeg',
});
const file2 = new File(['foo'], 'veryveryveryveryveryveryverylongfilenameexample2.pdf', {
  type: 'application/pdf',
});
const file3 = new File(['foo'], 'example3.doc', {
  type: 'application/msword',
});
const file4 = new File(['foo'], 'example4.xls', {
  type: 'application/vnd.ms-excel',
});

interface filesProps extends FileItemProps {
  id: string;
}
const filesInitial: filesProps[] = [
  {
    id: '1',
    file: file1,
    status: 'Uploaded',
    showPreview: false,
  },
  {
    id: '2',
    file: file2,
    status: 'Loading',
  },
  {
    id: '3',
    file: file3,
    status: 'Error',
    errorMessage: 'Что-то явно пошло не так...',
  },
  {
    id: '4',
    file: file4,
    status: 'Queue',
  },
];

const FileInputBaseTemplate: ComponentStory<typeof FileInput> = (props) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<filesProps[]>(filesInitial);

  const accept = 'image/*, .pdf, application/json';

  useEffect(() => {
    function onChangeEventHandler(this: HTMLInputElement) {
      const filesToAdd: filesProps[] = Array.from(this.files || [])
        .filter((file) => !accept || acceptFile(file, accept))
        .map((file) => {
          return {
            file: file,
            id: uid(),
          };
        });

      const dt = new DataTransfer();
      filesToAdd.forEach(({ file }) => dt.items.add(file));
      this.files = dt.files;
      setFiles([...files, ...filesToAdd]);
    }
    const input = inputRef.current;

    if (input) {
      input.addEventListener('change', onChangeEventHandler, true);
      return () => input.removeEventListener('change', onChangeEventHandler, true);
    }
  }, [inputRef.current, files, accept]);

  const handleRemoveFile = (id: string) => {
    console.log(`File ${id} deleted`);
    const updatedFiles = files.filter((file) => file.id !== id);
    setFiles(updatedFiles);
  };

  const model = useMemo(() => {
    if (files.length) {
      return files.map((item) => {
        return {
          id: item.id,
          render: (options: RenderFileListItemProps) => (
            <FileItem
              file={item.file}
              dimension={props.dimension}
              status={item.status}
              errorMessage={item.errorMessage}
              showPreview={item.showPreview}
              filesLayoutCssMixin={props.dimension === 'm' ? halfWidthPositionMixin : fullWidthPositionMixin}
              {...options}
              key={item.id}
            >
              {item.file.name}
            </FileItem>
          ),
        };
      });
    }
  }, [files, props.dimension]);

  useEffect(() => console.log(files), [files]);

  return (
    <ThemeProvider theme={swapBorder}>
      <FileInput
        dimension={props.dimension}
        disabled={props.disabled}
        width="480px"
        title={`Загрузите не более 10-ти файлов типа ${accept} до 5 MB каждый`}
        description="Добавьте файлы"
        ref={inputRef}
      />
      {model && model.length && (
        <FileList model={model} dimension={props.dimension} width="480px" onRemoveFile={handleRemoveFile} />
      )}
    </ThemeProvider>
  );
};

export const FileInputBase = FileInputBaseTemplate.bind({});
FileInputBase.storyName = 'File Input. Базовый пример';
FileInputBase.args = { dimension: 'xl' };
