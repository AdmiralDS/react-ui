import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { CheckboxComponent, FieldSet } from '#src/index';
import type { PropsType as FieldSetPropsType, BorderRadiusType } from '#src/index';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const Container = styled.div`
  > * {
    margin-top: 24px;
  }
`;

export const FieldSetCheckboxComponentTemplate = ({
  themeBorderKind,
  ...props
}: FieldSetPropsType & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <Container>
        <FieldSet data-container-id="fieldSetIdOne" {...props} legend={'Группа чекбоксов:'}>
          <CheckboxComponent name="check1">Text 1</CheckboxComponent>
          <CheckboxComponent name="check2">Text 2</CheckboxComponent>
          <CheckboxComponent name="check3">Text 3</CheckboxComponent>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdTwo" disabled legend={'Disabled группа чекбоксов:'}>
          <CheckboxComponent name="check1">Text 1</CheckboxComponent>
          <CheckboxComponent name="check2" defaultChecked>
            Text 2
          </CheckboxComponent>
          <CheckboxComponent name="check3">Text 3</CheckboxComponent>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdThree" dimension="s" legend={'Группа маленьких чекбоксов:'} required>
          <CheckboxComponent name="check1">Text 1</CheckboxComponent>
          <CheckboxComponent name="check2">Text 2</CheckboxComponent>
          <CheckboxComponent name="check3">Text 3</CheckboxComponent>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdFour" legend={'Горизонтальная группа чекбоксов:'} flexDirection="row">
          <CheckboxComponent name="check1">Text 1</CheckboxComponent>
          <CheckboxComponent name="check2">Text 2</CheckboxComponent>
          <CheckboxComponent name="check3">Text 3</CheckboxComponent>
        </FieldSet>
      </Container>
    </ThemeProvider>
  );
};
