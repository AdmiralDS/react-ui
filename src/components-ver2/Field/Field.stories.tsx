import { Field } from '#src/components-ver2/Field';
import { TextInput } from '#src/components-ver2/input';
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

export default {
  title: 'Admiral-2.1/Atoms/Field',
  component: Field,
  decorators: [withDesign],
  argTypes: {
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Field>;
const Container = styled.div`
  > *:not(:first-child) {
    margin-top: 24px;
  }
`;
const Template: ComponentStory<typeof Field> = (props) => {
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <Container>
        <Field {...props}>
          <TextInput id={props.id} />
        </Field>
        <Field label="Inline label" id="some_id" displayInline>
          <TextInput id="some_id" />
        </Field>
      </Container>
    </ThemeProvider>
  );
};

export const FieldStory = Template.bind({});

FieldStory.args = {
  label: 'some label of wrapped component',
  id: 'some_id',
};

FieldStory.storyName = 'Пример обертывания компонента TextInput';
