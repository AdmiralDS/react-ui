import * as React from 'react';

import { FileUploader, T } from '@admiral-ds/react-ui';
import type { FileUploaderProps, FileProps } from '@admiral-ds/react-ui';

import type { FileUploadStatus } from '#src/components/input/FileUploader/utils';

export const FileUploaderWithStatusTemplate = (props: FileUploaderProps) => {
  const [files, setFiles] = React.useState<FileProps[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const statusOptions: FileUploadStatus[] = ['Loading', 'Queue', 'Uploaded', 'Error'];
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
      const timeout = setTimeout(() => {
        setIsLoading(false);
        const updatedFiles = files.map((file) => ({
          ...file,
          status: statusOptions[Math.floor(Math.random() * (3 - 2 + 1)) + 2],
          error: file.status === 'Error' ? 'Ошибка загрузки' : '',
        }));
        setFiles(updatedFiles);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading, files]);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Для отображения статуса загрузки файла или ошибки при валидации, компонент файла через параметр status принимает
        состояния Uploaded, Loading, Error, Queue, а через параметр error - текст ошибки.
      </T>
      <FileUploader
        {...props}
        uploadedFiles={files}
        style={{ maxWidth: '480px' }}
        dimension="xl"
        fileDimension="xl"
        onChange={handleChange}
        title="Загрузите не более 3-х файлов до 5 MB каждый"
      />
    </>
  );
};
