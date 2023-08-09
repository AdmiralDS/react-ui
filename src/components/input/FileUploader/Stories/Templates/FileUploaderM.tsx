import * as React from 'react';

import { FileUploader } from '@admiral-ds/react-ui';
import type { FileUploaderProps } from '@admiral-ds/react-ui';

export const FileUploaderMTemplate = (props: FileUploaderProps) => {
  return (
    <FileUploader
      {...props}
      style={{ maxWidth: '288px' }}
      dimension="m"
      fileDimension="m"
      title="Загрузите не более 3-х файлов до 5 MB каждый"
      description="Добавьте файлы"
    />
  );
};
