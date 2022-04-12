import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './index';

import { withDesign } from 'storybook-addon-designs';
import { ALL_DIMENSIONS_VALUES } from '#/components/Checkbox/CheckboxDimension';
import styled from 'styled-components';

export default {
  title: 'Atoms/Checkbox',
  decorators: [withDesign],
  component: Checkbox,
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
  },
} as ComponentMeta<typeof Checkbox>;
const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 16px;
  }
`;
const CheckboxDemo: ComponentStory<typeof Checkbox> = (props) => {
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
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <Checkbox dimension="s" />
      <Checkbox disabled defaultChecked />
      <Checkbox error />
      <Checkbox dimension="s" indeterminate />
    </Container>
  );
};

export const Example = CheckboxDemo.bind({});
