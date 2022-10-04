import { forwardRef } from 'react';
import styled from 'styled-components';
import * as React from 'react';
import { FileListItemProps } from '#src/components/input/FileInput/FileItem';
import { FileInputDimension } from '#src/components/input/FileInput';

const FileWrapper = styled.div<{ width?: string | number }>`
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
}

export const FileList = forwardRef<HTMLDivElement, FileListProps>(({ model, dimension, width, ...props }, ref) => {
  const renderChildren = () => {
    return model.map((item) =>
      item.render({
        disabled: item.disabled,
      }),
    );
  };
  return (
    <FileWrapper ref={ref} width={width}>
      {renderChildren()}
    </FileWrapper>
  );
});
