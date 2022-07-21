import * as React from 'react';
import { ForwardedRef, InputHTMLAttributes } from 'react';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ComponentDimension, containerHeights, ExtraProps, InputStatus } from '#src/components/input';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { InputIconButton } from '#src/components/InputIconButton';
import { refSetter } from '#src/components/common/utils/refSetter';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

const iconSizeValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};
const horizontalPaddingValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 16;
    case 's':
      return 12;
    default:
      return 16;
  }
};

const extraPadding = css<ExtraProps>`
  padding-right: ${(props) =>
    horizontalPaddingValue(props) +
    (iconSizeValue(props) + 8) * (props.iconCount ?? 0) -
    8 * (props.iconCount ? 1 : 0)}px;
`;

const BorderedDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid ${(props) => props.theme.color['Neutral/Neutral 40']};
  border-radius: inherit;

  [data-status='error'] & {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] & {
    border: 1px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  [data-read-only] & {
    border-color: transparent;
  }
`;

const colorsBorderAndBackground = css<{ disabled?: boolean }>`
  &:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Primary/Primary 60 Main']};
  }

  &:disabled + ${BorderedDiv} {
    border-color: transparent;
  }

  &:hover:not(:focus) + ${BorderedDiv} {
    border-color: ${(props) => (props.disabled ? 'transparent' : props.theme.color['Neutral/Neutral 60'])};
  }

  &:invalid + ${BorderedDiv}, &:invalid:hover + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='error'] &:hover + ${BorderedDiv}, [data-status='error'] &:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] &:hover + ${BorderedDiv}, [data-status='success'] &:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  &:disabled {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-read-only] &:hover + ${BorderedDiv}, [data-read-only] &:focus + ${BorderedDiv} {
    border-color: transparent;
  }
`;

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

const Input = styled.input<ExtraProps>`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: ${(props) => props.theme.color['Neutral/Neutral 90']};

  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:disabled::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-read-only] & {
    user-select: none;
    pointer-events: none;
  }

  ${colorsBorderAndBackground}
  ${extraPadding}
  ${ieFixes}
`;

const PrefixContainer = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  align-self: center;
  border-right: solid 1px ${(props) => props.theme.color['Neutral/Neutral 20']};
  padding-right: 8px;
  margin-right: 8px;
  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])};
  color: ${(props) =>
    props.disabled ? props.theme.color['Neutral/Neutral 30'] : props.theme.color['Neutral/Neutral 50']};
`;

const IconPanel = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;

  padding-right: ${horizontalPaddingValue}px;

  & > svg {
    border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
    display: block;
    width: ${iconSizeValue}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
    }
  }

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`;

const preventDefault = (e: React.MouseEvent) => e.preventDefault();

const Container = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  padding: 0 ${horizontalPaddingValue}px;
  background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};
  &[data-read-only],
  &[data-disabled] {
    background-color: ${(props) => props.theme.color['Neutral/Neutral 10']};
  }
  ${containerHeights}
`;

export interface InputExProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Иконки для отображения в правом углу поля */
  icons?: React.ReactNode;

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Статус поля */
  status?: InputStatus;

  /** Ref контейнера компонента */
  containerRef?: ForwardedRef<HTMLDivElement>;

  /**  Наличие этого атрибута отключает возможность выделения и копирования значения поля */
  disableCopying?: boolean;

  prefix?: React.ReactNode;
}

export const InputEx = React.forwardRef<HTMLInputElement, InputExProps>(
  (
    { type, displayClearIcon, status, containerRef, icons, children, className, style, placeholder, prefix, ...props },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const iconArray = React.Children.toArray(icons);

    if (!props.readOnly && displayClearIcon) {
      iconArray.unshift(
        <InputIconButton
          icon={CloseOutlineSvg}
          key="clear-icon"
          onClick={() => {
            if (inputRef.current) {
              changeInputData(inputRef.current, { value: '' });
            }
          }}
          aria-hidden
        />,
      );
    }

    const iconCount = iconArray.length;

    return (
      <Container
        className={className}
        style={style}
        data-disabled={props.disabled ? true : undefined}
        dimension={props.dimension}
        ref={containerRef}
        data-read-only={props.readOnly ? true : undefined}
        data-status={status}
        {...(props.disableCopying && {
          onMouseDown: preventDefault,
        })}
      >
        {!!prefix && <PrefixContainer dimension={props.dimension}>{prefix}</PrefixContainer>}
        <Input ref={refSetter(ref, inputRef)} {...props} placeholder={placeholder} iconCount={iconCount} />
        <BorderedDiv />
        {iconCount > 0 && (
          <IconPanel disabled={props.disabled} dimension={props.dimension}>
            {iconArray}
          </IconPanel>
        )}
        {children}
      </Container>
    );
  },
);

InputEx.defaultProps = {
  dimension: 'm',
  prefix: 'Prefix',
} as const;

InputEx.displayName = 'InputEx';
