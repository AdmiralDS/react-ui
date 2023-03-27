import styled from 'styled-components';
import type { FileUploadStatus } from '#src/components/input/FileUploader/utils';

export const ErrorBlock = styled.div<{ status?: FileUploadStatus }>`
  margin-top: ${(p) => (p.status === 'Error' ? '8px' : '20px')};
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
`;
