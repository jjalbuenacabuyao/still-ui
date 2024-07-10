import type { Meta, StoryObj } from "@storybook/react";

import { AccordionRootProps } from "../src/AccordionRoot";
//@ts-ignore
import React from "react";
import {
  AccordionHeader,
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../src";

const meta = {
  title: "Accordion",
  component: AccordionRoot,
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultStyleTemplate = (args: AccordionRootProps) => (
  <AccordionRoot {...args}>
    <AccordionItem value="item-1">
      <AccordionHeader>
        <AccordionTrigger>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>
        Nulla ornare, nulla at commodo condimentum, nibh elit cursus enim, a
        imperdiet dolor urna ut felis. Curabitur finibus efficitur dolor, eu
        blandit odio fermentum imperdiet. Cras tincidunt ut libero nec
        fringilla. Aenean consequat egestas efficitur. Pellentesque ultricies
        cursus velit, eu sodales sapien semper quis.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionHeader>
        <AccordionTrigger>Pellentesque vel sapien nisl?</AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>
        Fusce finibus justo ut dui auctor fermentum. Nulla facilisi. Curabitur
        quis enim vel felis accumsan faucibus. Maecenas mattis lacus sit amet
        risus porttitor tristique. Duis mollis fringilla nunc, at vulputate odio
        faucibus eget. Sed tortor metus, eleifend id tellus id, interdum gravida
        purus. Integer at vehicula diam.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionHeader>
        <AccordionTrigger>
          Donec consectetur dolor at leo ultricies ultrices?
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris porta enim et eros vulputate, at dapibus leo
        semper. Sed et justo pretium, porttitor urna eget, dictum est. Nulla
        quis feugiat nisl. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
);

export const Default: Story = {
  render: DefaultStyleTemplate,
  args: {
    type: "single",
    collapsible: true,
  },
};

export const Multiple: Story = {
  render: DefaultStyleTemplate,
  args: {
    type: "multiple",
  },
};

export const Bordered: Story = {
  render: DefaultStyleTemplate,
  args: {
    type: "single",
    collapsible: true,
    bordered: true,
  },
};

export const Splitted: Story = {
  render: DefaultStyleTemplate,
  args: {
    type: "single",
    collapsible: true,
    splitted: true,
  },
};
