import { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "@admiral-ds/date-picker";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args: JSX.IntrinsicAttributes & ButtonProps) => (
  <Button data-test-id="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};

export const Secondary: Story = (
  args: JSX.IntrinsicAttributes & ButtonProps
) => <Button data-test-id="InputField-id" {...args} />;
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (
  args: JSX.IntrinsicAttributes & ButtonProps
) => <Button data-test-id="InputField-id" {...args} />;
Disabled.args = {
  primary: false,
  disabled: true,
  text: "Disabled",
};

export const Small: Story = (args: JSX.IntrinsicAttributes & ButtonProps) => (
  <Button data-test-id="InputField-id" {...args} />
);
Small.args = {
  primary: true,
  disabled: false,
  size: "small",
  text: "Small",
};

export const Medium: Story = (args: JSX.IntrinsicAttributes & ButtonProps) => (
  <Button data-test-id="InputField-id" {...args} />
);
Medium.args = {
  primary: true,
  disabled: false,
  size: "medium",
  text: "Medium",
};

export const Large: Story = (args: JSX.IntrinsicAttributes & ButtonProps) => (
  <Button data-test-id="InputField-id" {...args} />
);
Large.args = {
  primary: true,
  disabled: false,
  size: "large",
  text: "Large",
};
