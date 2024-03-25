import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { CheckboxField, FieldSet } from '@admiral-ds/react-ui';
import type { PropsType as FieldSetPropsType, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const Container = styled.div`
  > * {
    margin-top: 24px;
  }
`;

export const FieldSetCheckboxTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FieldSetPropsType & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Container>
        <FieldSet data-container-id="fieldSetIdOne" {...props} legend={'Группа чекбоксов:'}>
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2">Text 2</CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdTwo" disabled legend={'Disabled группа чекбоксов:'}>
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2" defaultChecked>
            Text 2
          </CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdThree" dimension="s" legend={'Группа маленьких чекбоксов:'} required>
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2">Text 2</CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdFour" legend={'Горизонтальная группа чекбоксов:'} flexDirection="row">
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2">Text 2</CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
      </Container>
    </ThemeProvider>
  );
};
