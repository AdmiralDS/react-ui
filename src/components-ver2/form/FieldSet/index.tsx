import * as React from 'react';
import { ExtraTextContainer } from '#src/components-ver2/Field';
import { InputStatus } from '#src/components-ver2/input';
import styled from 'styled-components';
import { typography } from '#src/components-ver2/Typography';

export const ALL_FIELDSET_DIMENSIONS_VALUES = ['m', 's'] as const;

/** Размеры компонента относительно начального */
export type FieldSetDimension = typeof ALL_FIELDSET_DIMENSIONS_VALUES[number];

const Legend = styled.legend<{ dimension?: FieldSetDimension }>`
  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Short'] : typography['Body/Body 1 Short'])}
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};
  fieldset:disabled & {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
    cursor: default;
  }

  [aria-required] &:before {
    content: '* ';
    color: ${(props) => props.theme.color['Error/Error 60 Main']};
  }
`;

const FieldSetExtrasContainer = styled.div`
  flex: 1 1 100%;
  display: flex;
  margin: 0;
`;

const FieldSetContainer = styled.fieldset<{
  dimension?: FieldSetDimension;
  flexDirection?: 'column' | 'row';
}>`
  border: none;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};

  && > *:not(${FieldSetExtrasContainer}) {
    margin-top: ${(props) => (props.dimension === 's' ? 12 : 16)}px;
    margin-right: 16px;
  }

  ${Legend} {
    margin-top: 0;
  }
`;

export interface PropsType extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: React.ReactNode;
  dimension?: FieldSetDimension;

  /** Текст будет виден ниже компонента */
  extraText?: React.ReactNode;

  /** Установка статуса поля */
  status?: InputStatus;

  /** Установка статуса поле обязательно для заполнения */
  required?: boolean;

  /** Установка статуса disabled */
  disabled?: boolean;

  /** Расположение контента по вертикали или горизонтали */
  flexDirection?: 'column' | 'row';
}

export const FieldSet: React.FC<PropsType> = (props) => {
  const { legend, children, extraText, ...fieldsetProps } = props;
  return (
    <FieldSetContainer
      {...fieldsetProps}
      data-dimension={fieldsetProps.dimension}
      aria-required={props.required}
      data-status={props.status}
      data-required-within={props.required ? '' : undefined}
      data-disabled={props.disabled ? '' : undefined}
    >
      {legend && <Legend dimension={props.dimension} children={legend} />}
      {children}
      {extraText && (
        <FieldSetExtrasContainer>
          <ExtraTextContainer>{extraText}</ExtraTextContainer>
        </FieldSetExtrasContainer>
      )}
    </FieldSetContainer>
  );
};

FieldSet.displayName = 'FieldSet';
