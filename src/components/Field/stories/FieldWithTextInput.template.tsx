import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Field, TextInput } from '@admiral-ds/react-ui';
import type { FieldProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

const Container = styled.div`
  > *:not(:first-child) {
    margin-top: 24px;
  }
`;

export const FieldWithTextInputTemplate = ({
  label = 'some label of wrapped component',
  id = 'props_id',
  themeBorderKind,
  ...props
}: FieldProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Container>
        <Field {...props} label={label} id={id}>
          <TextInput id={id} />
        </Field>
        <Field label="Inline label" id="some_id" displayInline>
          <TextInput id="some_id" />
        </Field>
      </Container>
    </ThemeProvider>
  );
};
