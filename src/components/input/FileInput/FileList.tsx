import { forwardRef } from 'react';
import styled from 'styled-components';
import * as React from 'react';
import { FileListItemProps } from '#src/components/input/FileInput/FileItem';
import { FileInputDimension } from '#src/components/input/FileInput';
import { FILE_INPUT_MIN_WIDTH_M, FILE_INPUT_MIN_WIDTH_XL } from '#src/components/input/FileInput/style';

const FileWrapper = styled.div<{ dimension: FileInputDimension; width?: string | number }>`
  min-width: ${(p) => (p.dimension === 'm' ? FILE_INPUT_MIN_WIDTH_M : FILE_INPUT_MIN_WIDTH_XL)};
  ${(p) => (p.width ? `width: ${p.width};` : '')}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export interface FileListProps {
  /** Модель данных, с рендер-пропсами*/
  model: Array<FileListItemProps>;
  /** Размер компонента */
  dimension: FileInputDimension;
  /** Задает ширину */
  width?: string | number;
  /** Обработчик удаления файла */
  onRemoveFile?: (id: string) => void;
}

export const FileList = forwardRef<HTMLDivElement, FileListProps>(
  ({ model, dimension, width, onRemoveFile, ...props }, ref) => {
    const handleRemoveFile = (id: string) => {
      onRemoveFile?.(id);
    };

    const renderChildren = () => {
      return model.map((item) =>
        item.render({
          disabled: item.disabled,
          onCloseIconClick: () => handleRemoveFile(item.id),
        }),
      );
    };

    return (
      <FileWrapper {...props} ref={ref} dimension={dimension} width={width}>
        {renderChildren()}
      </FileWrapper>
    );
  },
);
