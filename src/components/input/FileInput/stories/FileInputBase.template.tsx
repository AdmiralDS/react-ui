import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { FileInput, FileItem, fullWidthPositionMixin, halfWidthPositionMixin, T } from '@admiral-ds/react-ui';
import type { FileAttributeProps, FileInputProps, InputStatus, BorderRadiusType } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const filesAreEqual = (file1: File, file2: File) =>
  file1.name === file2.name &&
  file1.size === file2.size &&
  file1.type === file2.type &&
  file1.lastModified === file2.lastModified;

const accept = ['image/*', '.pdf', 'application/json'];
const ACCEPT_STR = accept.join(', ');
const maxFilesNumber = 3;

export const FileInputBaseTemplate = ({
  dimension = 'xl',
  width = '480px',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FileInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = React.useState<File[]>([]);
  const [fileAttributesMap, setFileAttributesMap] = React.useState(new Map<File, FileAttributeProps>());
  const [status, setStatus] = React.useState<InputStatus | undefined>(undefined);
  const handlePreviewIconClick = (file: File) => {
    // eslint-disable-next-line no-console
    console.log(`Preview icon on file "${file.name}" was clicked`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    // eslint-disable-next-line no-console
    userSelectedFileList.forEach((file) => console.log(`change ${file.name}`));
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
    } else {
      setStatus(undefined);
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
            dimension={dimension}
            filesLayoutCssMixin={dimension === 'xl' ? halfWidthPositionMixin : fullWidthPositionMixin}
          />
        );
      }
    });
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент позволяет загружать файлы на сервер. Используется в двух вариантах - для загрузки одного или
        нескольких файлов. Позволяет как загружать файлы через браузер файлов, так и через Drag and Drop (перетаскивание
        файлов). Компонент можно изменять по ширине, минимальная ширина 320px.
      </T>
      <FileInput
        dimension={dimension}
        disabled={props.disabled}
        width={width}
        title={dimension === 'xl' ? `Загрузите не более 3-х файлов типа ${ACCEPT_STR}` : 'Добавьте файлы'}
        ref={inputRef}
        onInput={handleChange}
        accept={ACCEPT_STR}
        files={fileList}
        status={status}
      >
        {renderFileList()}
      </FileInput>
    </ThemeProvider>
  );
};
