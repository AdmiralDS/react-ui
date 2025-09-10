import type { FC, FieldsetHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

import { ExtraTextContainer } from '#src/components/Field';
import type { InputStatus } from '#src/components/input';
import { typography } from '#src/components/Typography';

export const ALL_FIELDSET_DIMENSIONS_VALUES = ['m', 's'] as const;

/** Размеры компонента относительно начального */
export type FieldSetDimension = (typeof ALL_FIELDSET_DIMENSIONS_VALUES)[number];

const Legend = styled.legend<{ $dimension?: FieldSetDimension }>`
  padding-inline: 0;
  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  fieldset:disabled & {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    cursor: default;
  }

  [aria-required='true'] &:after {
    content: ' *';
    color: var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  [data-status='error'] & {
    color: var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }
`;

const FieldSetExtrasContainer = styled.div`
  flex: 1 1 100%;
  display: flex;
  margin: 0;
`;

const FieldSetContainer = styled.fieldset<{
  $dimension?: FieldSetDimension;
  $flexDirection?: 'column' | 'row';
}>`
  border: none;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'column'};

  && > *:not(${FieldSetExtrasContainer}) {
    margin-top: ${(props) => (props.$dimension === 's' ? 12 : 16)}px;
    margin-right: 16px;
  }

  ${Legend} {
    margin-top: 0;
  }
`;

export interface PropsType extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: ReactNode;
  dimension?: FieldSetDimension;

  /** Текст будет виден ниже компонента */
  extraText?: ReactNode;

  /** Установка статуса поля */
  status?: InputStatus;

  /** Установка статуса поле обязательно для заполнения */
  required?: boolean;

  /** Установка статуса disabled */
  disabled?: boolean;

  /** Расположение контента по вертикали или горизонтали */
  flexDirection?: 'column' | 'row';
}

export const FieldSet: FC<PropsType> = (props) => {
  const { legend, children, extraText, dimension, flexDirection, ...fieldsetProps } = props;
  return (
    <FieldSetContainer
      {...fieldsetProps}
      $dimension={dimension}
      $flexDirection={flexDirection}
      data-dimension={dimension}
      aria-required={props.required}
      data-status={props.status}
      data-required-within={props.required ? '' : undefined}
      data-disabled={props.disabled ? '' : undefined}
    >
      {legend && <Legend $dimension={dimension} children={legend} />}
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
