import * as React from 'react';

import { FileInput, FileItem, fullWidthPositionMixin } from '@admiral-ds/react-ui';
import type { FileInputProps } from '@admiral-ds/react-ui';

const IMAGE_PREVIEW_URL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';
const IMAGE_WITH_PREVIEW_NAME = 'Pasport-04.jpg';
const IMAGE_WITHOUT_PREVIEW_NAME = 'Изображение без миниатюры.jpg';

const initialFiles = [
  new File(['image'], IMAGE_WITH_PREVIEW_NAME, { type: 'image/jpeg' }),
  new File(['image'], IMAGE_WITHOUT_PREVIEW_NAME, { type: 'image/jpeg' }),
  new File(['pdf'], 'Иконка для PDF.pdf', { type: 'application/pdf' }),
  new File(['presentation'], 'Иконка для PPT.ppt', { type: 'application/vnd.ms-powerpoint' }),
  new File(['text'], 'Иконка для Word.doc', { type: 'application/msword' }),
  new File(['table'], 'Иконка для Excel.xls', { type: 'application/vnd.ms-excel' }),
  new File(['archive'], 'Иконка для архива ZIP.zip', { type: 'application/zip' }),
  new File(['attachment'], 'Любое другое вложение.xyz', { type: 'application/x-xyz' }),
];

export const FileInputFileTypeIconsTemplate = ({ dimension = 'xl', width = '480px', ...props }: FileInputProps) => {
  const [files, setFiles] = React.useState(initialFiles);

  const removeFile = (fileToRemove: File) => {
    setFiles((currentFiles) => currentFiles.filter((file) => file !== fileToRemove));
  };

  const renderFile = (file: File, previewImageURL?: string) => (
    <FileItem
      key={file.name}
      fileId={file.name}
      fileName={file.name.substring(0, file.name.lastIndexOf('.'))}
      fileType={file.type}
      fileSize={file.size}
      formatFileSizeInfo={() => '1,5 Mb'}
      status="Uploaded"
      dimension={dimension}
      filesLayoutCssMixin={fullWidthPositionMixin}
      previewImageURL={previewImageURL}
      onPreviewIconClick={previewImageURL ? () => window.open(previewImageURL, '_blank') : undefined}
      onCloseIconClick={() => removeFile(file)}
    />
  );

  const imageWithPreview = files.find((file) => file.name === IMAGE_WITH_PREVIEW_NAME);
  const imageWithoutPreview = files.find((file) => file.name === IMAGE_WITHOUT_PREVIEW_NAME);
  const standardFiles = files.filter((file) => file.type !== 'image/jpeg' && file.type !== 'application/x-xyz');
  const rareFile = files.find((file) => file.type === 'application/x-xyz');

  return (
    <FileInput {...props} dimension={dimension} width={width} title="Загрузите файлы" files={files}>
      {imageWithPreview && renderFile(imageWithPreview, IMAGE_PREVIEW_URL)}
      {imageWithoutPreview && renderFile(imageWithoutPreview)}
      {standardFiles.map((file) => renderFile(file))}
      {rareFile && renderFile(rareFile)}
    </FileInput>
  );
};
