import type { Meta, StoryObj } from "@storybook/react";

import AccordionRoot, { AccordionRootProps } from "../src/AccordionRoot";
import AccordionItem from "../src/AccordionItem";
import AccordionTrigger from "../src/AccordionTrigger";
import AccordionContent from "../src/AccordionContent";
import React from "react";

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
      <AccordionTrigger
        title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit?"}
      />
      <AccordionContent>
        Nulla ornare, nulla at commodo condimentum, nibh elit cursus enim, a
        imperdiet dolor urna ut felis. Curabitur finibus efficitur dolor, eu
        blandit odio fermentum imperdiet. Cras tincidunt ut libero nec
        fringilla. Aenean consequat egestas efficitur. Pellentesque ultricies
        cursus velit, eu sodales sapien semper quis.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger title={"Pellentesque vel sapien nisl?"} />
      <AccordionContent>
        Fusce finibus justo ut dui auctor fermentum. Nulla facilisi. Curabitur
        quis enim vel felis accumsan faucibus. Maecenas mattis lacus sit amet
        risus porttitor tristique. Duis mollis fringilla nunc, at vulputate odio
        faucibus eget. Sed tortor metus, eleifend id tellus id, interdum gravida
        purus. Integer at vehicula diam.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger
        title={"Donec consectetur dolor at leo ultricies ultrices?"}
      />
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

const AccordionWithSubtitleTemplate = (args: AccordionRootProps) => (
  <AccordionRoot {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger
        title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit?"}
        subtitle={
          "Aenean condimentum, urna ac pellentesque scelerisque, massa tellus rhoncus sapien, congue tristique odio ex mollis nunc."
        }
      />
      <AccordionContent>
        Nulla ornare, nulla at commodo condimentum, nibh elit cursus enim, a
        imperdiet dolor urna ut felis. Curabitur finibus efficitur dolor, eu
        blandit odio fermentum imperdiet. Cras tincidunt ut libero nec
        fringilla. Aenean consequat egestas efficitur. Pellentesque ultricies
        cursus velit, eu sodales sapien semper quis.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger
        title={"Pellentesque vel sapien nisl?"}
        subtitle={
          "Fusce placerat pellentesque urna quis condimentum. Vivamus vitae tellus molestie, ultricies justo ac, volutpat ipsum."
        }
      />
      <AccordionContent>
        Fusce finibus justo ut dui auctor fermentum. Nulla facilisi. Curabitur
        quis enim vel felis accumsan faucibus. Maecenas mattis lacus sit amet
        risus porttitor tristique. Duis mollis fringilla nunc, at vulputate odio
        faucibus eget. Sed tortor metus, eleifend id tellus id, interdum gravida
        purus. Integer at vehicula diam.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger
        title={"Donec consectetur dolor at leo ultricies ultrices?"}
        subtitle={
          "In vehicula, dui ullamcorper dapibus varius, odio augue porta tellus, eget iaculis neque dui auctor mauris."
        }
      />
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

export const WithSubtitle: Story = {
  render: AccordionWithSubtitleTemplate,
  args: {
    type: "single",
    collapsible: true,
  },
};

export const Splitted: Story = {
  render: AccordionWithSubtitleTemplate,
  args: {
    type: "single",
    collapsible: true,
    splitted: true,
  },
};

export const NeoBrutalism: Story = {
  render: AccordionWithSubtitleTemplate,
  args: {
    type: "single",
    collapsible: true,
    ui: "brutal",
  },
};

export const SplittedNeoBrutalism: Story = {
  render: AccordionWithSubtitleTemplate,
  args: {
    type: "single",
    collapsible: true,
    splitted: true,
    ui: "brutal",
  },
};

export const Glassmorphism: Story = {
  render: AccordionWithSubtitleTemplate,
  args: {
    type: "single",
    collapsible: true,
    ui: "glassmorphic",
  },
};

export const SplittedGlassmorphism: Story = {
  render: AccordionWithSubtitleTemplate,
  args: {
    type: "single",
    collapsible: true,
    splitted: true,
    ui: "glassmorphic",
  },
};

export const Neomorphism: Story = {
  render: AccordionWithSubtitleTemplate,
  args: {
    type: "single",
    collapsible: true,
    ui: "neumorphic",
  },
};