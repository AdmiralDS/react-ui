import { useRef, useState } from 'react';

import { FileInput, FileItem, fullWidthPositionMixin, T } from '@admiral-ds/react-ui';
import type { FileInputProps, FileAttributeProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as PDFSolid } from '@admiral-ds/icons/build/documents/PDFSolid.svg';
import { ReactComponent as PPTSolid } from '@admiral-ds/icons/build/documents/PPTSolid.svg';
import { ReactComponent as FileWordSolid } from '@admiral-ds/icons/build/documents/FileWordSolid.svg';
import { ReactComponent as XLSSolid } from '@admiral-ds/icons/build/documents/XLSSolid.svg';
import { ReactComponent as DocsSolid } from '@admiral-ds/icons/build/documents/DocsSolid.svg';
import { ReactComponent as JpgSolid } from '@admiral-ds/icons/build/documents/JpgSolid.svg';
import { ReactComponent as ZIPSolid } from '@admiral-ds/icons/build/documents/ZIPSolid.svg';
import { ReactComponent as FileCSVSolid } from '@admiral-ds/icons/build/documents/FileCSVSolid.svg';
import { ReactComponent as EmailsOutline } from '@admiral-ds/icons/build/category/EmailsOutline.svg';
import { uid } from '#src/components/common/uid';

const filesAreEqual = (file1: File, file2: File) =>
  file1.name === file2.name &&
  file1.size === file2.size &&
  file1.type === file2.type &&
  file1.lastModified === file2.lastModified;

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#important_mime_types_for_web_developers
 * https://www.iana.org/assignments/media-types/media-types.xhtml
 * @param type {string}
 */
const getCustomFileType = (type: string) => {
  if (type.startsWith('message/')) {
    return 'MSG';
  }
  switch (type) {
    case 'image/jpeg':
      return 'JPEG';
    case 'image/png':
    case 'image/apng':
      return 'PNG';
    case 'image/tiff':
      return 'TIFF';
    case 'image/svg+xml':
      return 'SVG';
    case 'image/gif':
      return 'GIF';
    case 'image/webp':
      return 'WEBP';
    case 'application/pdf':
      return 'PDF';
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return 'PPT';
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'XLS';
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'Word';
    case 'application/zip':
      return 'ZIP';
    case 'text/csv':
      return 'CSV';
    default:
      return 'Docs';
  }
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#important_mime_types_for_web_developers
 * https://www.iana.org/assignments/media-types/media-types.xhtml
 * @param type {string}
 */
const getCustomFileTypeIcon = (type: string) => {
  if (type.startsWith('message/')) {
    return EmailsOutline;
  }
  switch (type) {
    case 'image/jpeg':
    case 'image/png':
    case 'image/tiff':
    case 'image/svg+xml':
    case 'image/apng':
    case 'image/avif':
    case 'image/gif':
    case 'image/webp':
      return JpgSolid;
    case 'application/pdf':
      return PDFSolid;
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return PPTSolid;
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return XLSSolid;
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return FileWordSolid;
    case 'application/zip':
      return ZIPSolid;
    case 'text/csv':
      return FileCSVSolid;
    default:
      return DocsSolid;
  }
};

export const FileInputCustomFileTypeTemplate = ({
  dimension = 'xl',
  width = '480px',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FileInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);
  const [fileAttributesMap, setFileAttributesMap] = useState(new Map<File, FileAttributeProps>());
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
        // eslint-disable-next-line no-console
        console.log(attributes.fileType);
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
            formatFileTypeInfo={getCustomFileType}
            formatFileTypeIcon={getCustomFileTypeIcon}
            onCloseIconClick={() => handleRemoveFile(file)}
            onPreviewIconClick={attributes.onPreviewIconClick}
            dimension={dimension}
            filesLayoutCssMixin={fullWidthPositionMixin}
          />
        );
      }
    });
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Функцию загрузки файла можно “повесить” на другие компоненты, например, кнопки, сделав соответствующие текстовые
        инструкции. В этом случае нужно воспользоваться методом renderCustomFileInput для отрисовки реакт-компонента.
        Для отображения выбранных файлов можно использовать кастомные компоненты.
      </T>
      <FileInput
        dimension={dimension}
        disabled={props.disabled}
        width={width}
        title="Добавьте файлы"
        ref={inputRef}
        onInput={handleChange}
        files={fileList}
      >
        {renderFileList()}
      </FileInput>
    </>
  );
};
