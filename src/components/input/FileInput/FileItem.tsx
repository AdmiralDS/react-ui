import * as React from 'react';
import { forwardRef, HTMLAttributes } from 'react';
import { FileInputDimension } from '#src/components/input/FileInput';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { typography } from '#src/components/Typography';
import { formatBytes, getFormat } from '#src/components/input/FileInput/utils';
import { dataTransferConstructorSupported } from '#src/components/input/FileUploader/utils';
import { Spinner } from '#src/components/Spinner';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import {
  FILE_ITEM_FUNCTIONAL_ICON_SIZE_M,
  FILE_ITEM_FUNCTIONAL_ICON_SIZE_XL,
} from '#src/components/input/FileInput/style';

const ERROR_BLOCK_HEIGHT_XL = '16px';
const ERROR_BLOCK_HEIGHT_M = '20px';

export type Status = 'Uploaded' | 'Loading' | 'Error' | 'Queue';

const Container = styled.div<{
  dimension?: FileInputDimension;
  filesLayoutCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  overflow: hidden;
  ${(p) => p.filesLayoutCssMixin}

  &:nth-of-type(even) {
    margin-left: ${(p) => (p.dimension === 'xl' ? '16px' : '0')};
  }
`;

const statusMixin = css<{ status?: Status }>`
  border-color: ${(p) => {
    if (p.status === 'Error') return p.theme.color['Error/Error 60 Main'];
    if (p.status === 'Queue') return p.theme.color['Neutral/Neutral 30'];
    return p.theme.color['Neutral/Neutral 40'];
  }};
  color: ${(p) => (p.status === 'Queue' ? p.theme.color['Neutral/Neutral 30'] : p.theme.color['Neutral/Neutral 90'])};
`;

const PreviewWrapper = styled.div<{
  dimension?: FileInputDimension;
  status?: Status;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  border-width: 1px;
  border-style: solid;
  padding: ${(p) => (p.dimension === 'xl' ? '7px 3px 7px 8px' : '7px 15px')};
  ${typography['Body/Body 2 Long']};
  ${statusMixin};
`;

const sizeMixin = css`
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div<{ dimension?: FileInputDimension }>`
  ${(p) => p.dimension === 'm' && sizeMixin};
  display: flex;
  flex-direction: ${(p) => (p.dimension === 'm' ? 'row' : 'column')};
  min-width: 0;
`;

const FileName = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const FileInfo = styled.span<{ dimension?: FileInputDimension; status?: Status }>`
  color: ${(p) => (p.status === 'Queue' ? p.theme.color['Neutral/Neutral 30'] : p.theme.color['Neutral/Neutral 50'])};
  margin-left: ${(p) => (p.dimension === 'xl' ? '0' : '4px')};
  white-space: nowrap;
`;

const FunctionalWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin-left: 8px;
`;

const functionalItemSizeMixin = css<{ dimension?: FileInputDimension }>`
  width: ${(p) => (p.dimension === 'xl' ? FILE_ITEM_FUNCTIONAL_ICON_SIZE_XL : FILE_ITEM_FUNCTIONAL_ICON_SIZE_M)};
  height: ${(p) => (p.dimension === 'xl' ? FILE_ITEM_FUNCTIONAL_ICON_SIZE_XL : FILE_ITEM_FUNCTIONAL_ICON_SIZE_M)};
`;

const StyledSpinner = styled(Spinner)<{ dimension?: FileInputDimension }>`
  margin-right: 8px;
  ${functionalItemSizeMixin}
`;

const hoveredCss = css`
  &:not(:disabled) {
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      background-color: ${({ theme }) => theme.color['Opacity/Hover']};
    }
  }
`;

const Close = styled.div<{ dimension?: FileInputDimension }>`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${functionalItemSizeMixin}
  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${hoveredCss}
  & svg {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
    ${functionalItemSizeMixin}
  }
`;

export const ErrorBlock = styled.div<{ status?: Status; dimension?: FileInputDimension }>`
  margin-top: 8px;
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
  ${typography['Body/Body 2 Short']};
  height: ${(p) => (p.dimension === 'xl' ? ERROR_BLOCK_HEIGHT_XL : ERROR_BLOCK_HEIGHT_M)};
`;

export interface RenderFileListItemProps {
  key?: string | number;
  /** Отключение секции */
  disabled?: boolean;
  /** Обработчик клика по item */
  onClickItem?: () => void;
  /** Обработчик наведения мыши на item */
  onHover?: () => void;
}

export interface FileListItemProps {
  id: string;
  render: (options: RenderFileListItemProps) => React.ReactNode;
  disabled?: boolean;
}

export interface FileItemProps extends HTMLAttributes<HTMLDivElement>, RenderFileListItemProps {
  file: File;
  /** Размер FileInput */
  dimension?: FileInputDimension;
  /** Статус компонента, имеет четыре состояния: Uploaded, Loading, Error, Queue */
  status?: Status;
  /** Текст ошибки при загрузке файла */
  errorMessage?: string;
  /** Отображение превью изображений  */
  showPreview?: boolean;
  /** Позволяет добавлять миксин для компоновки загруженных файлов, созданный с помощью styled css  */
  filesLayoutCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const FileItem = forwardRef<HTMLDivElement, FileItemProps>(
  ({ children, file, dimension, status, errorMessage, showPreview, filesLayoutCssMixin, ...props }, ref) => {
    const fileFormat = getFormat(file.type);
    const fileSize = formatBytes(file.size);
    const fileInfo = `${fileFormat}・${fileSize} Mb`;
    const fileName = file.name.substring(0, file.name.lastIndexOf('.'));

    const titleRef = React.useRef<HTMLDivElement | null>(null);

    return (
      <Container ref={ref} dimension={dimension} filesLayoutCssMixin={filesLayoutCssMixin}>
        <PreviewWrapper status={status}>
          <Content dimension={dimension}>
            <FileName ref={titleRef}>{fileName}</FileName>
            <FileInfo dimension={dimension} status={status}>
              {fileInfo}
            </FileInfo>
          </Content>
          <FunctionalWrapper>
            {status === 'Loading' && <StyledSpinner dimension={dimension} />}
            {dataTransferConstructorSupported() && (
              <Close dimension={dimension} onClick={() => null}>
                <CloseOutline />
              </Close>
            )}
          </FunctionalWrapper>
        </PreviewWrapper>
        {errorMessage && status === 'Error' && <ErrorBlock status={status}>{errorMessage}</ErrorBlock>}
      </Container>
    );
  },
);
