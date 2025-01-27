import styled from 'styled-components';

import { FileUploader, TextButton, T } from '@admiral-ds/react-ui';
import type { FileUploaderProps } from '@admiral-ds/react-ui';
import { ReactComponent as UploadSVG } from '@admiral-ds/icons/build/system/UploadOutline.svg';

const StyledP = styled.p`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const FileUploaderCustomTemplate = (props: FileUploaderProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        В случае, если необходимо добавить функционал загрузчика к другому компоненту, данный компонент нужно вложить в
        компонент FileUploader.
      </T>
      <FileUploader {...props} style={{ maxWidth: '288px' }} dimension="xl" fileDimension="m">
        <StyledP>Загрузите не более 3-х файлов до 5 MB каждый, в формате JPG</StyledP>
        <TextButton dimension="m" icon={<UploadSVG />} text="Загрузить документы" />
      </FileUploader>
    </>
  );
};
