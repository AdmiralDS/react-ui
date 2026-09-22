import * as React from 'react';
import styled, { css } from 'styled-components';

import { Field, TextInput, typography } from '@admiral-ds/react-ui';
import type { FieldProps, BorderRadiusType } from '@admiral-ds/react-ui';

const Forms = styled.div`
  width: 480px;

  > *:not(:first-child) {
    margin-top: 40px;
  }
`;

const Form = styled.form`
  > *:not(:first-child) {
    margin-top: 24px;
  }
`;

const FormTitle = styled.h3`
  margin: 0;
  ${typography['Header/H6']}
`;

const labelWrapperMixin = css`
  pointer-events: none;
`;

const labelTextMixin = css`
  flex: 0 1 auto;
  pointer-events: auto;
`;

const labelCssMixins = {
  labelWrapper: labelWrapperMixin,
  label: labelTextMixin,
  additionalLabel: labelTextMixin,
};

export const FieldWithClickableLabelTextTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <Forms>
      <Form aria-labelledby="default-form-title" data-form-id="default-label-form">
        <FormTitle id="default-form-title">Default: вся область лейбла кликабельная</FormTitle>
        <Field
          {...props}
          data-container-id="default-label-field-one"
          id="default-label-input-one"
          label="Label text"
          additionalLabel="Additional label text"
        >
          <TextInput id="default-label-input-one" />
        </Field>
        <Field data-container-id="default-label-field-two" id="default-label-input-two" label="Next field">
          <TextInput id="default-label-input-two" />
        </Field>
      </Form>

      <Form aria-labelledby="custom-form-title" data-form-id="custom-label-form">
        <FormTitle id="custom-form-title">Custom labelCssMixins: только текст лейбла кликабельный</FormTitle>
        <Field
          {...props}
          data-container-id="custom-label-field-one"
          id="custom-label-input-one"
          label="Label text"
          additionalLabel="Additional label text"
          labelCssMixins={labelCssMixins}
        >
          <TextInput id="custom-label-input-one" />
        </Field>
        <Field
          data-container-id="custom-label-field-two"
          id="custom-label-input-two"
          label="Next field"
          labelCssMixins={labelCssMixins}
        >
          <TextInput id="custom-label-input-two" />
        </Field>
      </Form>
    </Forms>
  );
};
