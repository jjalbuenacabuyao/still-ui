import { Meta, StoryObj } from "@storybook/react";
import Button from "../src/Button";
import React from "react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  render: (props) => <Button {...props}>Default</Button>,
};

export const Success: Story = {
  render: (props) => <Button {...props}>Success</Button>,
  args: {
    variant: "success",
  },
};

export const Danger: Story = {
  render: (props) => <Button {...props}>Danger</Button>,
  args: {
    variant: "danger",
  },
};

export const Outline: Story = {
  render: (props) => <Button {...props}>Outline</Button>,
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  render: (props) => <Button {...props}>Ghost</Button>,
  args: {
    variant: "ghost",
  },
};

export const Rounded: Story = {
  render: (props) => <Button {...props}>Rounded</Button>,
  args: {
    rounded: true,
  },
};

export const Small: Story = {
  render: (props) => <Button {...props}>Small</Button>,
  args: {
    size: "sm"
  },
};

export const MediumDefault: Story = {
  render: (props) => <Button {...props}>Medium</Button>,
  args: {
    size: "md",
  },
};

export const Large: Story = {
  render: (props) => <Button {...props}>Large</Button>,
  args: {
    size: "lg",
  },
};

export const XL: Story = {
  render: (props) => <Button {...props}>Extra Large</Button>,
  args: {
    size: "xl",
  },
};