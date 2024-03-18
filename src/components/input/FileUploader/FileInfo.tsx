import * as React from 'react';
import type { HTMLAttributes, MouseEventHandler } from 'react';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ErrorBlock } from '#src/components/input/FileUploader/ErrorBlock';
import { Spinner } from '#src/components/Spinner';
import { Tooltip } from '#src/components/Tooltip';
import type { Dimension, FileUploadStatus } from './utils';
import { dataTransferConstructorSupported, formatBytes } from './utils';
import { ReactComponent as FilePDFSolid } from '@admiral-ds/icons/build/documents/FilePDFSolid.svg';
import { ReactComponent as FilePPTSolid } from '@admiral-ds/icons/build/documents/FilePPTSolid.svg';
import { ReactComponent as FileWordSolid } from '@admiral-ds/icons/build/documents/FileWordSolid.svg';
import { ReactComponent as FileXLSSolid } from '@admiral-ds/icons/build/documents/FileXLSSolid.svg';
import { ReactComponent as DocsSolid } from '@admiral-ds/icons/build/documents/DocsSolid.svg';
import { ReactComponent as JpgSolid } from '@admiral-ds/icons/build/documents/JpgSolid.svg';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

export type FileProps = {
  file: File;
  /** Статус компонента, имеет четыре состояния: Uploaded, Loading, Error, Queue */
  status?: FileUploadStatus;
  /** Ошибка при загрузке файла */
  error?: string;
  /** Отображение превью изображений  */
  showPreview?: boolean;
};

export interface FilePreviewProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  file: FileProps;
  /** Размер инпута */
  dimension?: Dimension;
  /** Размер файлового компонента */
  fileDimension?: Dimension;
  onCloseClick?: MouseEventHandler<HTMLDivElement>;
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

const Container = styled.div<{ $dimension?: Dimension }>`
  display: flex;
  flex-direction: column;
  flex: ${(p) => (p.$dimension === 'xl' ? '1 1 36%' : '1 1 auto')};
  margin-top: 16px;
  overflow: hidden;

  &:nth-of-type(even) {
    margin-left: ${(p) => (p.$dimension === 'xl' ? '16px' : '0')};
  }
`;

const statusMixin = css<{ $status?: FileUploadStatus }>`
  border-color: ${(p) => {
    if (p.$status === 'Error') {
      return `var(--admiral-color-Error_Error60Main, ${p.theme.color['Error/Error 60 Main']})`;
    }
    return `var(--admiral-color-Neutral_Neutral40, ${p.theme.color['Neutral/Neutral 40']})`;
  }};
  color: ${(p) =>
    p.$status === 'Queue'
      ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`};
  background: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
`;

const PreviewWrapper = styled.div<{ $dimension?: Dimension; $fileDimension?: Dimension; $status?: FileUploadStatus }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  border-width: 1px;
  border-style: solid;
  padding: ${(p) => (p.$fileDimension === 'xl' ? '7px 3px 7px 8px' : '7px 15px')};
  ${statusMixin};
`;

const InfoBlock = styled.div<{ $dimension?: Dimension }>`
  display: ${(p) => (p.$dimension === 'm' ? 'block' : 'flex')};
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

const IconWrapper = styled.div<{ $status?: FileUploadStatus }>`
  margin-right: 8px;
  border-radius: 4px;

  & svg {
    width: 40px;
    height: 40px;
    fill: ${(p) => {
      if (p.$status === 'Queue') {
        return `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`;
      }
      return `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`;
    }};
  }
`;

const sizeMixin = css`
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div<{ $fileDimension?: Dimension }>`
  ${(p) => p.$fileDimension === 'm' && sizeMixin};
  display: flex;
  flex-direction: ${(p) => (p.$fileDimension === 'm' ? 'row' : 'column')};
  min-width: 0;
`;

const Title = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Size = styled.span<{ $fileDimension?: Dimension; $status?: FileUploadStatus }>`
  color: ${(p) =>
    p.$status === 'Queue'
      ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
  margin-left: ${(p) => (p.$fileDimension === 'xl' ? '0' : '4px')};
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
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  &:hover {
    border-radius: 50%;
    background-color: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }
  & svg {
    width: 24px;
    height: 24px;
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;

export const FileInfo = ({
  file,
  onCloseClick = () => undefined,
  dimension,
  fileDimension,
  children,
  ...props
}: FilePreviewProps) => {
  const {
    file: { type, name, size },
    status,
    error,
    showPreview,
  } = file;
  const PreviewIcon = getIcon(type);
  const fileFormat = getFormat(type);
  const fileSize = formatBytes(size);
  const fileName = name.substring(0, name.lastIndexOf('.'));
  const [imageSrc, setImageSrc] = React.useState('');
  const imageFile = showPreview && type.startsWith('image');
  const fileInfo = `${fileFormat}・${fileSize} Mb`;

  const titleRef = React.useRef<HTMLDivElement | null>(null);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const [titleOverflow, setTitleOverflow] = React.useState(false);

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
    const element = titleRef.current;
    if (element && checkOverflow(element) !== titleOverflow) {
      setTitleOverflow(checkOverflow(element));
    }
  }, [tooltipVisible, setTitleOverflow]);

  useEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const title = titleRef.current;
    if (title) {
      title.addEventListener('mouseenter', show);
      title.addEventListener('mouseleave', hide);
      return () => {
        title.removeEventListener('mouseenter', show);
        title.removeEventListener('mouseleave', hide);
      };
    }
  }, [setTooltipVisible]);

  useEffect(() => {
    if (file && imageFile && !children) {
      getImageUrl(file);
    }
  }, [file]);

  return (
    <Container $dimension={dimension}>
      <PreviewWrapper {...props} $dimension={dimension} $fileDimension={fileDimension} $status={status}>
        {children ? (
          children
        ) : (
          <InfoBlock $dimension={dimension}>
            {fileDimension === 'xl' &&
              (imageFile ? (
                <ImagePreview>
                  <img src={imageSrc} alt={''} />
                </ImagePreview>
              ) : (
                <IconWrapper $status={status}>
                  <PreviewIcon />
                </IconWrapper>
              ))}
            <Content $fileDimension={fileDimension}>
              <Title ref={titleRef}>{fileName}</Title>
              {tooltipVisible && titleOverflow && (
                <Tooltip targetElement={titleRef.current} renderContent={() => `${fileName}`} />
              )}
              <Size $fileDimension={fileDimension} $status={status}>
                {fileInfo}
              </Size>
            </Content>
          </InfoBlock>
        )}
        <FunctionalWrapper>
          {status === 'Loading' && <StyledSpinner />}
          {dataTransferConstructorSupported() && (
            <Close onClick={onCloseClick}>
              <CloseOutline />
            </Close>
          )}
        </FunctionalWrapper>
      </PreviewWrapper>
      {error && status === 'Error' && <ErrorBlock $status={status}>{error}</ErrorBlock>}
    </Container>
  );
};
