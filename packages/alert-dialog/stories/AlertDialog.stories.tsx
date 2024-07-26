import { Meta, StoryObj } from "@storybook/react";
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogOverlay, AlertDialogPortal, AlertDialogRoot, AlertDialogTitle, AlertDialogTrigger } from "../src";
import React from "react";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";

const meta = {
  title: "Alert Dialog",
  component: AlertDialogRoot,
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialogRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

const AlertDialogTemplate = (props: AlertDialogProps) => (
  <AlertDialogRoot {...props}>
    <AlertDialogTrigger>Click</AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>Title</AlertDialogTitle>
        <AlertDialogDescription>dhfksjhdkhfkjhsdf</AlertDialogDescription>
        <AlertDialogAction>Save</AlertDialogAction>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
)

export const Default: Story = {
  render: (props) => <AlertDialogTemplate {...props} />,
  args: {
    defaultOpen: true,
  }
}