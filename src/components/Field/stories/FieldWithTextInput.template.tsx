import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Field, TextInput } from '@admiral-ds/react-ui';
import type { FieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Container = styled.div`
  > *:not(:first-child) {
    margin-top: 24px;
  }
`;

export const FieldWithTextInputTemplate = ({
  label = 'some label of wrapped component',
  id = 'props_id',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const inputProps = { disabled: props.disabled, skeleton: props.skeleton };
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Container>
        <Field {...props} label={label} id={id}>
          <TextInput {...inputProps} id={id} />
        </Field>
        <Field label="Inline label" id="some_id" displayInline>
          <TextInput id="some_id" />
        </Field>
      </Container>
    </ThemeProvider>
  );
};
