import * as React from 'react';

import { FileUploader, T } from '@admiral-ds/react-ui';
import type { FileUploaderProps } from '@admiral-ds/react-ui';

export const FileUploaderMTemplate = (props: FileUploaderProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент M-размера используется на мобильных устройствах или как альтернатива большому компоненту. Не имеет
        функцию Drag and Drop. Поведение выбранных файлов такое же, как в компоненте XL-размера. Текстовое описание к
        полю носит произвольный характер, но должно точно описывать количество, размер и тип выбранных файлов.
      </T>
      <FileUploader
        {...props}
        style={{ maxWidth: '288px' }}
        dimension="m"
        fileDimension="m"
        title="Загрузите не более 3-х файлов до 5 MB каждый"
        description="Добавьте файлы"
      />
    </>
  );
};
