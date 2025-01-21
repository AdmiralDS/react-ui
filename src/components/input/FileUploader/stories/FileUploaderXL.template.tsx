import { ThemeProvider } from 'styled-components';
import { FileUploader } from '@admiral-ds/react-ui';
import type { BorderRadiusType, FileUploaderProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const FileUploaderXLTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FileUploaderProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const accept = ['image/*', '.pdf', 'application/json'];

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <FileUploader
        {...props}
        accept={accept.join(', ')}
        style={{ maxWidth: '480px' }}
        dimension="xl"
        fileDimension="xl"
        title={`Загрузите не более 3-х файлов типа ${accept.join(', ')} до 5 MB каждый`}
        onChange={(e) =>
          // eslint-disable-next-line no-console
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
