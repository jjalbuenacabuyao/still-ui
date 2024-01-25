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
    items: [
      {
        value: "item-1",
        heading: "Lorem ipsum dolor sit amet?",
        subtitle:
          "Pharetra et ultrices neque ornare aenean euismod elementum nisi.",
        content:
          "Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        value: "item-2",
        heading:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
        subtitle: "Egestas dui id ornare arcu odio ut sem.",
        content:
          "Morbi tristique senectus et netus. Tristique senectus et netus et malesuada fames ac turpis egestas. Ullamcorper malesuada proin libero nunc consequat interdum varius sit.",
      },
    ],
  },
};
