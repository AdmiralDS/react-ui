import type { Meta, StoryObj } from '@storybook/react';

import { Button, Dimension } from "@admiral-ds/react-ui";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's', undefined],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    appearance: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    dimension: 'xl'
  },
};

export const Small: Story = {
  args: {
    dimension: 's'
  },
};
