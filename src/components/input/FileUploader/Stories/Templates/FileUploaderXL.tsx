import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { FileUploader } from '@admiral-ds/react-ui';
import type { FileUploaderProps, Theme } from '@admiral-ds/react-ui';

export const FileUploaderXLTemplate = (props: FileUploaderProps) => {
  const accept = ['image/*', '.pdf', 'application/json'];

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <FileUploader
        {...props}
        accept={accept.join(', ')}
        style={{ maxWidth: '480px' }}
        dimension="xl"
        fileDimension="xl"
        title={`Загрузите не более 3-х файлов типа ${accept.join(', ')} до 5 MB каждый`}
        onChange={(e) =>
          console.log(
            `files change event: ${JSON.stringify(
              Array.from(e.target.files || []).map(({ name, type, size }) => ({ name, type, size })),
            )}`,
          )
        }
      />
    </ThemeProvider>
  );
};
