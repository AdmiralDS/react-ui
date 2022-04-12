import * as React from 'react';
import { HTMLAttributes, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ErrorBlock } from '#/components/input/FileUploader/ErrorBlock';
import { Spinner } from '#/components/Spinner';
import { Tooltip } from '#/components/Tooltip';
import { formatBytes, Dimension, Status, dataTransferConstructorSupported } from './utils';
import { ReactComponent as FilePDFSolid } from '@admiral-ds/icons/build/documents/FilePDFSolid.svg';
import { ReactComponent as FilePPTSolid } from '@admiral-ds/icons/build/documents/FilePPTSolid.svg';
import { ReactComponent as FileWordSolid } from '@admiral-ds/icons/build/documents/FileWordSolid.svg';
import { ReactComponent as FileXLSSolid } from '@admiral-ds/icons/build/documents/FileXLSSolid.svg';
import { ReactComponent as DocsSolid } from '@admiral-ds/icons/build/documents/DocsSolid.svg';
import { ReactComponent as JpgSolid } from '@admiral-ds/icons/build/documents/JpgSolid.svg';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';

export type FileProps = {
  file: File;
  /** Статус компонента, имеет четыре состояния: Uploaded, Loading, Error, Queue */
  status?: Status;
  /** Ошибка при загрузке файла */
  error?: string;
};

export interface FilePreviewProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'onClick'> {
  file: FileProps;
  id: number;
  /** Размер инпута */
  dimension?: Dimension;
  /** Размер файлового компонента */
  fileDimension?: Dimension;
  onClick?: (id: number) => void;
  maxFileSize?: number;
}

const getIcon = (type: string) => {
  switch (type) {
    case 'image/jpeg':
    case 'image/png':
    case 'image/tiff':
      return JpgSolid;
    case 'application/pdf':
      return FilePDFSolid;
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return FilePPTSolid;
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return FileXLSSolid;
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return FileWordSolid;
    default:
      return DocsSolid;
  }
};

const getFormat = (type: string) => {
  switch (type) {
    case 'image/jpeg':
      return 'JPEG';
    case 'image/png':
      return 'PNG';
    case 'image/tiff':
      return 'TIFF';
    case 'application/pdf':
      return 'PDF';
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return 'PPT';
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'XLS';
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'Word';
    default:
      return 'Docs';
  }
};

const Container = styled.div<{ dimension?: Dimension }>`
  display: flex;
  flex-direction: column;
  flex: ${(p) => (p.dimension === 'xl' ? '1 1 36%' : '1 1 auto')};
  margin-top: 16px;
  overflow: hidden;
  &:nth-of-type(even) {
    margin-left: ${(p) => (p.dimension === 'xl' ? '16px' : '0')};
  }
`;

const statusMixin = css<{ status?: Status }>`
  border-color: ${(p) => {
    if (p.status === 'Error') return p.theme.color.status.danger;
    return p.theme.color.basic.disable;
  }};
  color: ${(p) => (p.status === 'Queue' ? p.theme.color.text.tertiary : p.theme.color.text.primary)};
  background: ${(p) =>
    p.status === 'Loading' ? p.theme.color.background.secondary : p.theme.color.background.primary};
`;

const PreviewWrapper = styled.div<{ dimension?: Dimension; fileDimension?: Dimension; status?: Status }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  padding: ${(p) => (p.fileDimension === 'xl' ? '7px 8px' : '7px 15px')};
  ${statusMixin};
`;

const InfoBlock = styled.div<{ dimension?: Dimension }>`
  display: ${(p) => (p.dimension === 'm' ? 'block' : 'flex')};
  align-items: center;
  overflow: hidden;
`;

const ImagePreview = styled.div`
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 8px;
  overflow: hidden;
  > img {
    height: 100%;
    width: 100%;
  }
`;

const IconWrapper = styled.div<{ status?: Status }>`
  margin-right: 8px;
  border-radius: 4px;
  & svg {
    width: 40px;
    height: 40px;
    fill: ${(p) => {
      if (p.status === 'Loading') return p.theme.color.text.secondary;
      if (p.status === 'Queue') return p.theme.color.text.tertiary;
      return p.theme.color.text.primary;
    }};
  }
`;

const sizeMixin = css`
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div<{ fileDimension?: Dimension }>`
  ${(p) => p.fileDimension === 'm' && sizeMixin};
  display: flex;
  flex-direction: ${(p) => (p.fileDimension === 'm' ? 'row' : 'column')};
  min-width: 0;
`;

const Title = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Size = styled.span<{ fileDimension?: Dimension; status?: Status }>`
  color: ${(p) => (p.status === 'Queue' ? p.theme.color.text.tertiary : p.theme.color.text.secondary)};
  margin-left: ${(p) => (p.fileDimension === 'xl' ? '0' : '4px')};
  white-space: nowrap;
`;

const FunctionalWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin-left: 8px;
`;

const StyledSpinner = styled(Spinner)`
  margin-right: 8px;
`;

const Close = styled.div`
  cursor: pointer;
  display: flex;
  & svg {
    width: 24px;
    height: 24px;
    fill: ${(p) => p.theme.color.basic.tertiary};
  }
  & svg:hover {
    fill: ${(p) => p.theme.color.basic.hover};
  }
`;

export const FileInfo = ({ id, file, dimension, fileDimension, onClick, children, ...props }: FilePreviewProps) => {
  const {
    file: { type, name, size },
    status,
    error,
  } = file;
  const PreviewIcon = getIcon(type);
  const fileFormat = getFormat(type);
  const fileSize = formatBytes(size);
  const fileName = name.substring(0, name.lastIndexOf('.'));
  const [imageSrc, setImageSrc] = React.useState('');
  const imageFile = type.startsWith('image');
  const fileInfo = `${fileFormat}・${fileSize} Mb`;

  const handleClick = useCallback(() => {
    onClick?.(id);
  }, [onClick, id]);

  const getImageUrl = (file: FileProps) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      if (typeof reader.result === 'string') {
        setImageSrc(reader.result);
      }
    };
    if (file) {
      reader.readAsDataURL(file.file);
    } else {
      setImageSrc('');
    }
  };

  useEffect(() => {
    if (file && imageFile && !children) {
      getImageUrl(file);
    }
  }, [file]);

  return (
    <Container dimension={dimension}>
      <PreviewWrapper {...props} dimension={dimension} fileDimension={fileDimension} status={status}>
        {children ? (
          children
        ) : (
          <InfoBlock dimension={dimension}>
            {fileDimension === 'xl' &&
              (imageFile ? (
                <ImagePreview>
                  <img src={imageSrc} alt={''} />
                </ImagePreview>
              ) : (
                <IconWrapper status={status}>
                  <PreviewIcon />
                </IconWrapper>
              ))}
            <Content fileDimension={fileDimension}>
              <Tooltip renderContent={() => `${fileName}`}>
                <Title>{fileName}</Title>
              </Tooltip>
              <Size fileDimension={fileDimension} status={status}>
                {fileInfo}
              </Size>
            </Content>
          </InfoBlock>
        )}
        <FunctionalWrapper>
          {status === 'Loading' && <StyledSpinner />}
          {dataTransferConstructorSupported() && (
            <Close onClick={handleClick}>
              <CloseOutline />
            </Close>
          )}
        </FunctionalWrapper>
      </PreviewWrapper>
      {error && status === 'Error' && <ErrorBlock status={status}>{error}</ErrorBlock>}
    </Container>
  );
};
