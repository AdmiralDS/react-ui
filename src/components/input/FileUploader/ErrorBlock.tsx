import styled from 'styled-components';
import { Status } from '#src/components/input/FileUploader/utils';

export const ErrorBlock = styled.div<{ status?: Status }>`
  margin-top: ${(p) => (p.status === 'Error' ? '8px' : '20px')};
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
`;
