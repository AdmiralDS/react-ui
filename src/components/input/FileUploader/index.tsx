import { refSetter } from '#/components/common/utils/refSetter';
import { FileInfo, FileProps } from './FileInfo';
import { typography } from '#/components/Typography';
import { ReactComponent as UploadSVG } from '@admiral-ds/icons/build/system/UploadOutline.svg';
import * as React from 'react';
import { InputHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Dimension } from './utils';

export * from './FileInfo';

export interface FileUploaderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'title'> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Размер компонента загруженного файла */
  fileDimension?: Dimension;
  /** Текстовое описание загрузчика */
  title?: React.ReactNode;
  /** Принимаемые типы файлов, например, .jpg */
  acceptFiles?: string[];
  /** Список файлов */
  uploadedFiles?: FileProps[];
  /** Обработчик удаления файла */
  onRemoveFile?: (index: number) => void;
  /** Функция, возвращающая компонент с кастомным списком файлов */
  renderFileInfoList?: (files: FileProps[]) => ReactNode;
}

const Icon = styled(UploadSVG)<{ dimension?: Dimension }>`
  height: ${(p) => (p.dimension === 'xl' ? '40px' : '24px')};
  width: ${(p) => (p.dimension === 'xl' ? '40px' : '24px')};
  margin-right: ${(p) => (p.dimension === 'm' ? '14px' : '')};
  margin-bottom: ${(p) => (p.dimension === 'xl' ? '14px' : '')};

  > * {
    fill: ${(p) => p.theme.color.basic.primary};
  }
`;

const disabledStyles = css`
  border: ${(p) => `1px dashed ${p.theme.color.background.tertiary}`};
  color: ${(p) => p.theme.color.text.tertiary};

  & svg {
    > * {
      fill: ${(p) => p.theme.color.basic.tertiary};
    }
  }
`;

const hoverStyles = css`
  &:hover {
    cursor: pointer;
    border: 1px dashed ${(p) => p.theme.color.basic.hover};
    background: ${(p) => p.theme.color.background.secondary};

    & svg {
      > * {
        fill: ${(p) => p.theme.color.basic.hover};
      }
    }
  }
`;

const UploaderWrapperXL = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  padding: 24px 0;
  border: ${(p) => `1px dashed ${p.theme.color.text.secondary}`};
  border-radius: 8px;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'default')};
  ${(p) => (p.disabled ? disabledStyles : hoverStyles)};
`;

const UploaderWrapperM = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 8px 0;
  border: ${(p) => `1px dashed ${p.theme.color.text.secondary}`};
  border-radius: 8px;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'default')};
  ${(p) => (p.disabled ? disabledStyles : hoverStyles)};
`;

const TitleText = styled.div<{ dimension?: Dimension }>`
  text-align: ${(p) => (p.dimension === 'xl' ? 'center' : 'start')};
  margin: 0 ${(p) => (p.dimension === 'xl' ? '24px' : '')};
  margin-bottom: ${(p) => (p.dimension === 'm' ? '16px' : '0px')};
  max-width: 100%;
  ${typography['Additional/S']}
`;

const Desc = styled.div`
  ${typography['Additional/L']};
`;

const FileInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  ${typography['Additional/S']};
`;

const FileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FileUploader = React.forwardRef<HTMLInputElement, FileUploaderProps>(
  (
    {
      multiple = true,
      dimension = 'xl',
      fileDimension = 'xl',
      renderFileInfoList: r,
      disabled,
      title,
      acceptFiles,
      uploadedFiles,
      style,
      className,
      onRemoveFile,
      ...props
    },
    ref,
  ) => {
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [files, setFiles] = React.useState<FileProps[] | undefined>(uploadedFiles);
    const previewProps = { dimension, fileDimension };

    const Title = title || <>Для добавления файлов перетащите или нажмите на компонент</>;

    const validateFileFormat = (files: FileProps[], acceptFiles: string[]) => {
      return files.filter(({ file }) =>
        acceptFiles.some((ext) => ext === file.name.substring(file.name.lastIndexOf('.')).toLowerCase()),
      );
    };

    const validFiles = (file: FileProps[]) => {
      return acceptFiles?.length ? validateFileFormat(file, acceptFiles) : file;
    };

    const eventListener = () => {
      if (inputRef.current?.files) {
        const filesToAdd = Array.from(inputRef.current.files).map((file) => ({ file }));
        setFiles(validFiles(filesToAdd));
      }
    };

    React.useEffect(() => {
      if (uploadedFiles !== undefined) {
        setFiles(validFiles(uploadedFiles));
      }
    }, [uploadedFiles]);

    React.useEffect(() => {
      const input = inputRef.current;
      if (input) {
        input.addEventListener('change', eventListener);
        return () => input.removeEventListener('change', eventListener);
      }
    }, [inputRef.current, files]);

    const handleRemoveFile = (index: number) => {
      if (inputRef.current && files) {
        const dt = new DataTransfer();
        for (let i = 0; i < files.length; i++) {
          const file = files[i].file;
          if (index !== i) {
            dt.items.add(file);
          }
        }
        inputRef.current.files = dt.files;
        let event;
        if (typeof Event === 'function') {
          event = new Event('change', { bubbles: true });
        } else {
          event = document.createEvent('Event');
          event.initEvent('change', true, true);
        }

        inputRef.current.dispatchEvent(event);
      }
      onRemoveFile?.(index);
    };

    const renderFileInfoList =
      r ??
      ((files) =>
        files.map((file, index) => {
          return <FileInfo {...previewProps} id={index} key={index} file={file} onClick={handleRemoveFile} />;
        }));

    return (
      <Wrapper ref={wrapperRef} style={style} className={className}>
        {dimension === 'xl' ? (
          <>
            <UploaderWrapperXL disabled={disabled}>
              <Icon dimension={dimension} />
              <TitleText dimension={dimension} children={Title} />
              <FileInput
                {...props}
                ref={refSetter(ref, inputRef)}
                accept={acceptFiles?.join(',') || '*'}
                type="file"
                multiple={multiple}
              />
            </UploaderWrapperXL>
            {files && <FileWrapper>{renderFileInfoList(files)}</FileWrapper>}
          </>
        ) : (
          <>
            <TitleText dimension={dimension} children={Title} />
            <UploaderWrapperM disabled={disabled}>
              <Icon dimension={dimension} />
              <Desc>Добавьте файлы</Desc>
              <FileInput
                {...props}
                ref={refSetter(ref, inputRef)}
                accept={acceptFiles?.join(',') || '*'}
                type="file"
                multiple={multiple}
              />
            </UploaderWrapperM>
            {files && <FileWrapper>{renderFileInfoList(files)}</FileWrapper>}
          </>
        )}
      </Wrapper>
    );
  },
);
