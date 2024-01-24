import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "../components/Accordion";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Accordion",
  component: Accordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    defaultValue: "1",
    items: [
      {
        value: "1",
        heading: "Hi World!",
        content: "This is the content.",
      },
      {
        value: "2",
        heading: "Hi!",
        content: "This is the content.",
      },
    ],
  },
};
