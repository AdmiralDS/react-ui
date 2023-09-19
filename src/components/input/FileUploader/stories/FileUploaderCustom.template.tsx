import styled from 'styled-components';

import { FileUploader, TextButton } from '@admiral-ds/react-ui';
import type { FileUploaderProps } from '@admiral-ds/react-ui';
import { ReactComponent as UploadSVG } from '@admiral-ds/icons/build/system/UploadOutline.svg';

const StyledP = styled.p`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

export const FileUploaderCustomTemplate = (props: FileUploaderProps) => {
  return (
    <FileUploader {...props} style={{ maxWidth: '288px' }} dimension="xl" fileDimension="m">
      <StyledP>Загрузите не более 3-х файлов до 5 MB каждый, в формате JPG</StyledP>
      <TextButton dimension="m" icon={<UploadSVG />} text="Загрузить документы" />
    </FileUploader>
  );
};
