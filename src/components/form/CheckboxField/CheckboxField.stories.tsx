import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckboxField } from '#/components/form/CheckboxField';

import { withDesign } from 'storybook-addon-designs';
import { ALL_DIMENSIONS_VALUES } from '#/components/Checkbox/CheckboxDimension';
import styled from 'styled-components';

export default {
  title: 'Form Field Components/CheckboxField',
  decorators: [withDesign],
  component: CheckboxField,
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=37%3A21015',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=37%3A21143',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ALL_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: false,
    },
  },
} as ComponentMeta<typeof CheckboxField>;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 16px;
  }
`;
const CheckboxFieldDemo: ComponentStory<typeof CheckboxField> = (props) => {
  const args = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [checked, setChecked] = useState<boolean>(args.checked ?? false);
  useEffect(() => {
    setChecked(Boolean(args.checked));
  }, [args.checked]);
  return (
    <Container>
      <CheckboxField
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      >
        Управляемый чекбокс
      </CheckboxField>
      <CheckboxField dimension="s">Не управляемый маленький чекбокс</CheckboxField>
      <CheckboxField disabled defaultChecked>
        Disabled не управляемый чекбокс
      </CheckboxField>
      <CheckboxField
        error
        extraText={
          <span>
            Вариация с <i>дополнительно</i> декорированным <b>текстом</b>
          </span>
        }
      >
        Error не управляемый чекбокс
      </CheckboxField>
      <CheckboxField dimension="s" indeterminate extraText="Вариация с дополнительным текстом">
        Не управляемый маленький чекбокс indeterminate
      </CheckboxField>
    </Container>
  );
};

export const Example = CheckboxFieldDemo.bind({});
