"use client";

import React from "react";
import {
  Root,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

type Props = {};

const Accordion = (props: Props) => {
  return (
    <Root type="single" asChild collapsible className="bg-blue-500">
      <AccordionItem value="hello">
        <AccordionHeader>
          <AccordionTrigger>Hello</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>World!</AccordionContent>
      </AccordionItem>
    </Root>
  );
};

export default Accordion;
