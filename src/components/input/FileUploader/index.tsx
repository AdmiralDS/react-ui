import { refSetter } from '#src/components/common/utils/refSetter';
import type { FileProps } from './FileInfo';
import { FileInfo } from './FileInfo';
import { typography } from '#src/components/Typography';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';
import * as React from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import type { Dimension } from './utils';
import { acceptFile } from './utils';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

export * from './FileInfo';

export interface FileUploaderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'title'> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Размер компонента загруженного файла */
  fileDimension?: Dimension;
  /** Текст для лейбла компонента */
  title?: React.ReactNode;
  /** Текст для кнопки */
  description?: React.ReactNode;
  /** Строка принимаемых типов файлов разделенных запятой.
   *  Например ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
   *  {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept}
   *  */
  accept?: string;
  /** Список файлов */
  uploadedFiles?: FileProps[];
  /** Обработчик удаления файла */
  onRemoveFile?: (index: number) => void;
  /** Функция, возвращающая компонент с кастомным списком файлов */
  renderFileInfoList?: (renderProps: { files: FileProps[]; onRemoveFile: (index: number) => void }) => ReactNode;
  /** Кастомные элементы содержимого компонента */
  children?: ReactNode;
}

const Icon = styled(AttachFileOutline)<{ $dimension?: Dimension }>`
  height: ${(p) => (p.$dimension === 'xl' ? '40px' : '24px')};
  width: ${(p) => (p.$dimension === 'xl' ? '40px' : '24px')};
  margin-right: ${(p) => (p.$dimension === 'm' ? '14px' : '')};
  margin-bottom: ${(p) => (p.$dimension === 'xl' ? '14px' : '')};

  > * {
    fill: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  }
`;

const disabledStyles = css`
  border: 1px dashed var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});

  & svg {
    > * {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }

  cursor: not-allowed;
  & > * {
    pointer-events: none;
  }
`;

const hoverStyles = css`
  &:hover {
    cursor: pointer;
    background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }
  &:active {
    background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
  }
`;

const CustomWrapper = styled.div`
  position: relative;
`;

const UploaderWrapperXL = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  padding: 24px 0;
  border: 1px dashed var(--admiral-color-Neutral_Neutral40, ${(p) => p.theme.color['Neutral/Neutral 40']});
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  ${(p) => (p.disabled ? disabledStyles : hoverStyles)};
`;

const UploaderWrapperM = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 8px 0;
  border: 1px dashed var(--admiral-color-Neutral_Neutral40, ${(p) => p.theme.color['Neutral/Neutral 40']});
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  ${(p) => (p.disabled ? disabledStyles : hoverStyles)};
`;

const TitleText = styled.div<{ $dimension?: Dimension; disabled?: boolean }>`
  text-align: ${(p) => (p.$dimension === 'xl' ? 'center' : 'start')};
  margin: 0 ${(p) => (p.$dimension === 'xl' ? '24px' : '')};
  margin-bottom: ${(p) => (p.$dimension === 'm' ? '16px' : '0px')};
  max-width: 100%;
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`};
  ${typography['Body/Body 2 Long']};
`;

const Desc = styled.div<{ disabled?: boolean }>`
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`};
  ${typography['Body/Body 1 Long']};
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
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  ${typography['Body/Body 2 Long']};
`;

const FileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

/**
 * @deprecated Помечено как deprecated в версии 3.0.1, будет удалено в 9.x.x версии.
 * Используйте FileInput, FileList, FileItem
 **/
export const FileUploader = React.forwardRef<HTMLInputElement, FileUploaderProps>(
  (
    {
      multiple = true,
      dimension = 'xl',
      fileDimension = 'xl',
      renderFileInfoList: r,
      disabled,
      title,
      description,
      children,
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

    React.useEffect(() => {
      if (uploadedFiles !== undefined) {
        setFiles(uploadedFiles);
      }
    }, [uploadedFiles]);

    React.useEffect(() => {
      function onChangeEventHandler(this: HTMLInputElement) {
        const filesToAdd = Array.from(this.files || [])
          .filter((file) => !props.accept || acceptFile(file, props.accept))
          .map((file) => ({ file }));

        const dt = new DataTransfer();
        filesToAdd.forEach(({ file }) => dt.items.add(file));
        this.files = dt.files;
        setFiles(filesToAdd);
      }

      const input = inputRef.current;

      if (input) {
        input.addEventListener('change', onChangeEventHandler, true);
        return () => input.removeEventListener('change', onChangeEventHandler, true);
      }
    }, [inputRef.current, files, props.accept]);

    const handleRemoveFile = (index: number) => {
      if (inputRef.current && inputRef.current.files) {
        const files = inputRef.current.files;
        const dt = new DataTransfer();
        for (let i = 0; i < files.length; i++) {
          const file = files.item(i);
          if (index !== i && file) {
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
      (({ files, onRemoveFile }) =>
        files.map((file, index) => {
          return <FileInfo {...previewProps} key={index} file={file} onCloseClick={() => onRemoveFile(index)} />;
        }));

    return (
      <Wrapper ref={wrapperRef} style={style} className={className}>
        {dimension === 'xl' ? (
          <>
            {React.Children.count(children) ? (
              <CustomWrapper>
                {children}
                <FileInput
                  {...props}
                  ref={refSetter(ref, inputRef)}
                  type="file"
                  multiple={multiple}
                  disabled={disabled}
                />
              </CustomWrapper>
            ) : (
              <UploaderWrapperXL disabled={disabled}>
                <Icon $dimension={dimension} />
                {title && <TitleText $dimension={dimension} disabled={disabled} children={title} />}
                <FileInput
                  {...props}
                  ref={refSetter(ref, inputRef)}
                  type="file"
                  multiple={multiple}
                  disabled={disabled}
                />
              </UploaderWrapperXL>
            )}
            {files && <FileWrapper>{renderFileInfoList({ files, onRemoveFile: handleRemoveFile })}</FileWrapper>}
          </>
        ) : (
          <>
            {React.Children.count(children) ? (
              <CustomWrapper>
                {children}
                <FileInput
                  {...props}
                  ref={refSetter(ref, inputRef)}
                  type="file"
                  multiple={multiple}
                  disabled={disabled}
                />
              </CustomWrapper>
            ) : (
              <>
                {title && <TitleText $dimension={dimension} disabled={disabled} children={title} />}
                <UploaderWrapperM disabled={disabled}>
                  <Icon $dimension={dimension} />
                  {description && <Desc disabled={disabled}>{description}</Desc>}
                  <FileInput
                    {...props}
                    ref={refSetter(ref, inputRef)}
                    type="file"
                    multiple={multiple}
                    disabled={disabled}
                  />
                </UploaderWrapperM>
              </>
            )}
            {files && <FileWrapper>{renderFileInfoList({ files, onRemoveFile: handleRemoveFile })}</FileWrapper>}
          </>
        )}
      </Wrapper>
    );
  },
);

FileUploader.displayName = 'FileUploader';
