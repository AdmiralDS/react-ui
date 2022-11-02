import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import styled, { DefaultTheme, FlattenInterpolation, ThemeProps, ThemeProvider } from 'styled-components';
import { FileInput, RenderFileInputProps } from '#src/components/input/FileInput';
import { Theme } from '#src/components/themes';
import { ChangeEvent, HTMLAttributes, useRef, useState } from 'react';
import { FileAttributeProps, FileItem } from '#src/components/input/FileInput/FileItem';
import { fullWidthPositionMixin, halfWidthPositionMixin } from '#src/components/input/FileInput/style';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { Button } from '#src/components/Button';
import { uid } from '#src/components/common/uid';
import { InputStatus } from '#src/components/input';

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
  decorators: [withDesign],
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
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof FileInput>;

const FileInputDemoTemplate: ComponentStory<typeof FileInput> = (props) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);
  const [fileAttributesMap, setFileAttributesMap] = useState(new Map<File, FileAttributeProps>());
  const [status, setStatus] = React.useState<InputStatus | undefined>(undefined);
  const [extraText, setExtraText] = React.useState<React.ReactNode | undefined>(undefined);

  const filesAreEqual = (file1: File, file2: File) =>
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified;

  const accept = ['image/*', '.pdf', 'application/json'];
  const maxFilesNumber = 3;

  const handlePreviewIconClick = (file: File) => {
    console.log(`Preview icon on file "${file.name}" was clicked`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      } else {
        updatedFileAttributesMap.delete(file);
      }
      return acc;
    }, []);
    if (userSelectedFileList.length + updatedFileList.length > maxFilesNumber) {
      userSelectedFileList.splice(maxFilesNumber - updatedFileList.length);
      setStatus('error');
      setExtraText('Несколько файлов не было загружено, так как превышен лимит количества загружаемых файлов');
    } else {
      setStatus(undefined);
      setExtraText(undefined);
    }
    userSelectedFileList.forEach((file) => {
      const imageURL = file.type.startsWith('image') ? URL.createObjectURL(file) : undefined;
      const onPreviewIconClick = file.type.startsWith('image') ? () => handlePreviewIconClick(file) : undefined;
      updatedFileAttributesMap.set(file, {
        fileId: uid(),
        fileName: file.name.substring(0, file.name.lastIndexOf('.')),
        fileType: file.type,
        fileSize: file.size,
        status: 'Uploaded',
        errorMessage: 'Что-то явно пошло не так...',
        previewImageURL: imageURL,
        onPreviewIconClick: onPreviewIconClick,
      });
    });
    setFileList([...updatedFileList, ...userSelectedFileList]);
    setFileAttributesMap(updatedFileAttributesMap);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFileList = fileList.filter((file) => !filesAreEqual(file, fileToRemove));
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const attributes = fileAttributesMap.get(fileToRemove);
    if (attributes && attributes.previewImageURL) {
      URL.revokeObjectURL(attributes.previewImageURL);
    }
    updatedFileAttributesMap.delete(fileToRemove);
    setFileList(updatedFileList);
    setFileAttributesMap(updatedFileAttributesMap);
    setStatus(undefined);
    setExtraText(undefined);
  };

  const renderFileList = () => {
    return fileList.map((file) => {
      const attributes = fileAttributesMap.get(file);
      if (attributes) {
        return (
          <FileItem
            fileId={attributes.fileId}
            key={attributes.fileId}
            fileName={attributes.fileName}
            fileType={attributes.fileType}
            fileSize={attributes.fileSize}
            status={attributes.status}
            errorMessage={attributes.errorMessage}
            previewImageURL={attributes.previewImageURL}
            onCloseIconClick={() => handleRemoveFile(file)}
            onPreviewIconClick={attributes.onPreviewIconClick}
            dimension={props.dimension}
            filesLayoutCssMixin={props.dimension === 'm' ? halfWidthPositionMixin : fullWidthPositionMixin}
          />
        );
      }
    });
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <FileInput
        dimension={props.dimension}
        disabled={props.disabled}
        width={props.width}
        title={`Загрузите не более 3-х файлов типа ${accept.join(', ')}`}
        description="Добавьте файлы"
        ref={inputRef}
        onInput={handleChange}
        accept={accept.join(', ')}
        files={fileList}
        status={status}
        extraText={extraText}
      >
        {renderFileList()}
      </FileInput>
    </ThemeProvider>
  );
};

//<editor-fold desc="Status demo">
const file1 = new File(['foo'], 'example1.jpeg', {
  type: 'image/jpeg',
});
const file2 = new File(['foo'], 'veryveryveryveryveryveryveryveryverylongfilenameexample2.pdf', {
  type: 'application/pdf',
});
const file3 = new File(['foo'], 'example3.doc', {
  type: 'application/msword',
});
const file4 = new File(['foo'], 'example4.xls', {
  type: 'application/vnd.ms-excel',
});

const filesInitial = [file1, file2, file3, file4];
const filesAttributesInitial: FileAttributeProps[] = [
  {
    fileId: '1',
    fileName: 'example1',
    fileType: file1.type,
    fileSize: file1.size,
    status: 'Uploaded',
  },
  {
    fileId: '2',
    fileName: 'veryveryveryveryveryveryveryveryverylongfilenameexample2',
    fileType: file2.type,
    fileSize: file2.size,
    status: 'Error',
    errorMessage: 'Что-то явно пошло не так...',
  },
  {
    fileId: '3',
    fileName: 'example3',
    fileType: file3.type,
    fileSize: file3.size,
    status: 'Loading',
  },
  {
    fileId: '4',
    fileName: 'example4',
    fileType: file4.type,
    fileSize: file4.size,
    status: 'Queue',
  },
];
const filesMapInitial = () => {
  const initialMap = new Map<File, FileAttributeProps>();
  filesInitial.forEach((file, index) => initialMap.set(file, filesAttributesInitial[index]));
  return initialMap;
};
//</editor-fold>

const FileInputWithStatus: ComponentStory<typeof FileInput> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([...filesInitial]);
  const [fileAttributesMap, setFileAttributesMap] = useState(filesMapInitial());

  const filesAreEqual = (file1: File, file2: File) =>
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified;

  const handlePreviewIconClick = (file: File) => {
    console.log(`Preview icon on file "${file.name}" was clicked`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      } else {
        updatedFileAttributesMap.delete(file);
      }
      return acc;
    }, []);
    userSelectedFileList.forEach((file) => {
      const imageURL = file.type.startsWith('image') ? URL.createObjectURL(file) : undefined;
      const onPreviewIconClick = file.type.startsWith('image') ? () => handlePreviewIconClick(file) : undefined;
      updatedFileAttributesMap.set(file, {
        fileId: uid(),
        fileName: file.name.substring(0, file.name.lastIndexOf('.')),
        fileType: file.type,
        fileSize: file.size,
        status: 'Uploaded',
        errorMessage: 'Что-то явно пошло не так...',
        previewImageURL: imageURL,
        onPreviewIconClick: onPreviewIconClick,
      });
    });
    setFileList([...updatedFileList, ...userSelectedFileList]);
    setFileAttributesMap(updatedFileAttributesMap);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFileList = fileList.filter((file) => !filesAreEqual(file, fileToRemove));
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const attributes = fileAttributesMap.get(fileToRemove);
    if (attributes && attributes.previewImageURL) {
      URL.revokeObjectURL(attributes.previewImageURL);
    }
    updatedFileAttributesMap.delete(fileToRemove);
    setFileList(updatedFileList);
    setFileAttributesMap(updatedFileAttributesMap);
  };

  const renderFileList = () => {
    return fileList.map((file) => {
      const attributes = fileAttributesMap.get(file);
      if (attributes) {
        return (
          <FileItem
            fileId={attributes.fileId}
            key={attributes.fileId}
            fileName={attributes.fileName}
            fileType={attributes.fileType}
            fileSize={attributes.fileSize}
            status={attributes.status}
            errorMessage={attributes.errorMessage}
            previewImageURL={attributes.previewImageURL}
            onCloseIconClick={() => handleRemoveFile(file)}
            onPreviewIconClick={attributes.onPreviewIconClick}
            dimension={props.dimension}
            filesLayoutCssMixin={fullWidthPositionMixin}
          />
        );
      }
    });
  };

  return (
    <FileInput
      dimension={props.dimension}
      disabled={props.disabled}
      width={props.dimension === 'xl' ? '480px' : '288px'}
      description="Добавьте файлы"
      title={`Загрузите файлы изображений`}
      ref={inputRef}
      onInput={handleChange}
      accept="image/*"
      files={fileList}
    >
      {renderFileList()}
    </FileInput>
  );
};

//<editor-fold desc="MyFileItem">
interface MyFileItemProps extends HTMLAttributes<HTMLDivElement> {
  filesLayoutCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  onCloseIconClick?: () => void;
}
const MyFileItem = styled.div<{ filesLayoutCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  display: flex;
  align-items: center;
  user-select: none;
  flex-flow: nowrap;
  position: relative;
  justify-content: space-between;
  outline: none;
  margin: 0;
  padding: 12px 16px;
  border: dashed 2px ${(p) => p.theme.color['Neutral/Neutral 90']};
  margin-top: 16px;
  ${(p) => p.filesLayoutCssMixin}

  &:hover {
    background-color: ${(p) => p.theme.color['Opacity/Hover']};
    color: ${(p) => p.theme.color['Magenta/Magenta 60 Main']};
  }
`;

const CloseIcon = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  & *[fill^='#'] {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }
`;
const CustomFileItem = ({ children, filesLayoutCssMixin, onCloseIconClick, ...props }: MyFileItemProps) => {
  const handleCloseIconClick = () => {
    onCloseIconClick?.();
  };

  return (
    <MyFileItem filesLayoutCssMixin={filesLayoutCssMixin} {...props}>
      {children}
      <CloseIcon onClick={handleCloseIconClick}>
        <CloseOutline />
      </CloseIcon>
    </MyFileItem>
  );
};
//</editor-fold>

const FileInputCustomTemplate: ComponentStory<typeof FileInput> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);

  const filesAreEqual = (file1: File, file2: File) =>
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      }
      return acc;
    }, []);
    setFileList([...updatedFileList, ...userSelectedFileList]);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFileList = fileList.filter((file) => !filesAreEqual(file, fileToRemove));

    setFileList(updatedFileList);
  };

  const renderFileList = () => {
    return fileList.map((file) => (
      <CustomFileItem
        key={file.name}
        onCloseIconClick={() => handleRemoveFile(file)}
        filesLayoutCssMixin={fullWidthPositionMixin}
      >
        {file.name}
      </CustomFileItem>
    ));
  };

  const renderCustomInput = (options: RenderFileInputProps) => {
    const handleButtonClick = () => options.onQueryUpload();
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ textAlign: 'justify' }}>Загрузите файлы изображений</p>
        <Button onClick={handleButtonClick}>
          <AttachFileOutline />
          Загрузить документы
        </Button>
      </div>
    );
  };

  return (
    <FileInput
      dimension={props.dimension}
      disabled={props.disabled}
      width="260px"
      description="Добавьте файлы"
      ref={inputRef}
      onInput={handleChange}
      renderCustomFileInput={renderCustomInput}
      files={fileList}
    >
      {renderFileList()}
    </FileInput>
  );
};

export const FileInputDemoXL = FileInputDemoTemplate.bind({});
FileInputDemoXL.storyName = 'File Input XL';
FileInputDemoXL.args = { dimension: 'xl', width: '480px' };
FileInputDemoXL.parameters = {
  docs: {
    description: {
      story: `Компонент позволяет загружать файлы на сервер. Используется в двух вариантах - для загрузки одного или 
      нескольких файлов. Позволяет как загружать файлы через браузер файлов, так и через Drag and Drop (перетаскивание файлов). 
      Компонент можно изменять по ширине, минимальная ширина 320px.`,
    },
  },
};

export const FileInputDemoM = FileInputDemoTemplate.bind({});
FileInputDemoM.storyName = 'File Input M';
FileInputDemoM.args = { dimension: 'm', width: '350px' };
FileInputDemoM.parameters = {
  docs: {
    description: {
      story: `Компонент M-размера используется на мобильных устройствах или как альтернатива большому компоненту. Не имеет функцию
    Drag and Drop. Поведение выбранных файлов такое же, как в компоненте XL-размера. Текстовое описание к полю носит
    произвольный характер, но должно точно описывать количество, размер и тип выбранных файлов.`,
    },
  },
};

export const FileInputWithStatusDemo = FileInputWithStatus.bind({});
FileInputWithStatusDemo.storyName = 'File Uploader со статусом загрузки';
FileInputWithStatusDemo.args = { dimension: 'xl' };
FileInputWithStatusDemo.parameters = {
  docs: {
    description: {
      story: `Для отображения статуса загрузки файла или ошибки при валидации, компонент файла через параметр status принимает состояния Uploaded, Loading, Error, Queue, а через параметр error - текст ошибки.`,
    },
  },
};

export const FileInputCustom = FileInputCustomTemplate.bind({});
FileInputCustom.storyName = 'File Input. Кастомизация';
FileInputCustom.args = { dimension: 'm' };
FileInputDemoM.parameters = {
  docs: {
    description: {
      story: `Функцию загрузки файла можно “повесить” на другие компоненты, например, кнопки, сделав соответствующие 
      текстовые инструкции. В этом случае нужно воспользоваться методом renderCustomFileInput для отрисовки реакт-компонента. 
      Для отображения выбранных файлов можно использовать кастомные компоненты.`,
    },
  },
};
