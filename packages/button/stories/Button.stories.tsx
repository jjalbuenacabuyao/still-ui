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

const ButtonComponent = (args: ButtonProps) => <Button>Default</Button>;

export const DefaultButton: Story = {
  render: ButtonComponent,
};
