import * as React from 'react';

import { FileInfo, FileUploader, T } from '@admiral-ds/react-ui';
import type { FileUploaderProps, FileProps } from '@admiral-ds/react-ui';

export const FileUploaderCustomFilesTemplate = (props: FileUploaderProps) => {
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
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        В случае, если необходима кастомизация компонента выбранного файла, нужно воспользоваться методом
        renderFileInfoList для отрисовки реакт-компонента.
      </T>
      <FileUploader
        {...props}
        uploadedFiles={files}
        accept={accept.join(',')}
        style={{ maxWidth: '480px' }}
        renderFileInfoList={({ files, onRemoveFile }) => {
          return files.map((file, index) => {
            return (
              <FileInfo
                key={index}
                dimension="xl"
                fileDimension="xl"
                file={file}
                onCloseClick={() => {
                  onRemoveFile(index);
                  handleRemove(index);
                }}
              >
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
    </>
  );
};
