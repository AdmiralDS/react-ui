import { Field } from '#src/components/Field';
import { TextInput } from '#src/components/input';
import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

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
      options: ALL_BORDER_RADIUS_VALUES,
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
