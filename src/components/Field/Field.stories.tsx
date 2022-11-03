import { Field } from '#src/components/Field';
import { TextInput } from '#src/components/input';
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';

export default {
  title: 'Admiral-2.1/Atoms/Field',
  component: Field,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
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
    themeBorderKind: {
      options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Field>;
const Container = styled.div`
  > *:not(:first-child) {
    margin-top: 24px;
  }
`;
const Template: ComponentStory<typeof Field> = (props) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
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
