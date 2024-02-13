import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "../src/Button";
import React from "react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonComponent = (args: ButtonProps) => <Button {...args}>Default</Button>;

export const DefaultButton: Story = {
  render: ButtonComponent,
};

export const Success: Story = {
  render: ButtonComponent,
  args: {
    variant: "success"
  }
};

export const Danger: Story = {
  render: ButtonComponent,
  args: {
    variant: "danger",
  },
};

export const Outline: Story = {
  render: ButtonComponent,
  args: {
    variant: "outline",
  },
};

export const DangerButton: Story = {
  render: ButtonComponent,
  args: {
    variant: "ghost",
  },
};