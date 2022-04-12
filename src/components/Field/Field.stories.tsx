import { Field } from '#/components/Field';
import { TextInput } from '#/components/input';
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

export default {
  title: 'Atoms/Field',
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
      control: false,
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
    <Container>
      <Field {...props}>
        <TextInput id={props.id} />
      </Field>
      <Field label="Inline label" id="some_id" displayInline>
        <TextInput id="some_id" />
      </Field>
    </Container>
  );
};

export const FieldStory = Template.bind({});

FieldStory.args = {
  label: 'some label of wrapped component',
  id: 'some_id',
};

FieldStory.storyName = 'Пример обертывания компонента TextInput';
