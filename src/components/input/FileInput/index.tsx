import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { typography } from '#src/components/Typography';
import {
  ICON_MARGIN,
  ICON_SIZE_M,
  ICON_SIZE_XL,
  MIN_WIDTH_M,
  MIN_WIDTH_XL,
  dimensionMStyles,
  dimensionXLStyles,
  disabledStyles,
  hoverStyles,
} from '#src/components/input/FileInput/style';

export type FileInputDimension = 'xl' | 'm';

const Icon = styled(AttachFileOutline)<{ dimension?: FileInputDimension }>`
  height: ${(p) => (p.dimension === 'xl' ? ICON_SIZE_XL : ICON_SIZE_M)};
  width: ${(p) => (p.dimension === 'xl' ? ICON_SIZE_XL : ICON_SIZE_M)};
  margin-right: ${(p) => (p.dimension === 'm' ? ICON_MARGIN : '')};
  margin-bottom: ${(p) => (p.dimension === 'xl' ? ICON_MARGIN : '')};

  > * {
    fill: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  }
`;

const Description = styled.div<{ disabled?: boolean }>`
  color: ${(p) => (p.disabled ? p.theme.color['Neutral/Neutral 30'] : p.theme.color['Neutral/Neutral 90'])};
  ${typography['Body/Body 1 Long']};
`;

const TitleText = styled.div<{ dimension?: FileInputDimension; disabled?: boolean }>`
  text-align: ${(p) => (p.dimension === 'xl' ? 'center' : 'start')};
  margin: 0 ${(p) => (p.dimension === 'xl' ? '24px' : '')};
  margin-bottom: ${(p) => (p.dimension === 'm' ? '16px' : '0px')};
  max-width: 100%;
  color: ${(p) => (p.disabled ? p.theme.color['Neutral/Neutral 30'] : p.theme.color['Neutral/Neutral 90'])};
  ${typography['Body/Body 2 Long']};
`;

const StyledInput = styled.input`
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

const InputWrapper = styled.div<{ disabled?: boolean; dimension: FileInputDimension }>`
  position: relative;
  display: flex;
  align-items: center;
  border: ${(p) => `1px dashed ${p.theme.color['Neutral/Neutral 40']}`};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  pointer-events: all;
  ${(p) => (p.disabled ? disabledStyles : hoverStyles)};
  ${(p) => (p.dimension === 'm' ? dimensionMStyles : dimensionXLStyles)};
  box-sizing: border-box;
`;

const Wrapper = styled.div<{ dimension: FileInputDimension; width?: string | number }>`
  min-width: ${(p) => (p.dimension === 'm' ? MIN_WIDTH_M : MIN_WIDTH_XL)};
  ${(p) => (p.width ? `width: ${p.width};` : '')}
  box-sizing: border-box;
`;

export interface FileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'title'> {
  /** Размер компонента */
  dimension: FileInputDimension;
  /** Задает ширину */
  width?: string | number;
  /** Текст для лейбла компонента */
  title?: React.ReactNode;
  /** Текст для кнопки при dimension M */
  description?: React.ReactNode;
}

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ dimension = 'xl', width, title, description, disabled, multiple = true, ...props }, ref) => {
    const renderTitleText = () => <TitleText dimension={dimension} disabled={disabled} children={title} />;
    const renderDescription = () => <Description disabled={disabled}>{description}</Description>;

    return (
      <Wrapper dimension={dimension} width={width}>
        {title && dimension === 'm' && renderTitleText()}
        <InputWrapper dimension={dimension} disabled={disabled}>
          <Icon dimension={dimension} />
          {title && dimension === 'xl' && renderTitleText()}
          {description && dimension === 'm' && renderDescription()}
          <StyledInput {...props} ref={ref} type="file" disabled={disabled} multiple={multiple} />
        </InputWrapper>
      </Wrapper>
    );
  },
);

FileInput.displayName = 'FileInput';
