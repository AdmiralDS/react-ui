import * as React from 'react';

import { FileUploader, TextButton } from '@admiral-ds/react-ui';
import type { FileUploaderProps } from '@admiral-ds/react-ui';
import { ReactComponent as UploadSVG } from '@admiral-ds/icons/build/system/UploadOutline.svg';

export const FileUploaderCustomTemplate = (props: FileUploaderProps) => {
  return (
    <FileUploader {...props} style={{ maxWidth: '288px' }} dimension="xl" fileDimension="m">
      <p>Загрузите не более 3-х файлов до 5 MB каждый, в формате JPG</p>
      <TextButton dimension="m" icon={<UploadSVG />} text="Загрузить документы" />
    </FileUploader>
  );
};
