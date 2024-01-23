import { cn } from "../lib/utils";
import {
  Root,
  AccordionSingleProps,
  AccordionHeader,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
  AccordionMultipleProps,
} from "@radix-ui/react-accordion";
import React from "react";

interface AccordionProp {
  classes?: {
    container?: string;
    content?: string;
    contentWrapper?: string;
    heading?: string;
    headingWrapper?: string;
    itemWrapper?: string;
    subtitle?: string;
  };
  collapsible: boolean;
  defaultValue: string | string[];
  variant?: string;
  items: {
    value: string;
    heading: string;
    subtitle?: string;
    content: string;
  }[];
}

const Accordion = ({
  classes,
  collapsible = true,
  items,
  variant,
  ...props
}: AccordionProp & (AccordionMultipleProps | AccordionSingleProps)) => {
  return (
    <Root collapsible={collapsible} className={cn("", classes?.container)} {...props}>
      {items.map(({ heading, subtitle, content, value }) => (
        <AccordionItem
          className={cn("", classes?.itemWrapper)}
          value={value ? value : ""}
          key={heading}
        >
          <AccordionHeader className={cn("", classes?.headingWrapper)}>
            <AccordionTrigger>
              <span className={cn("", classes?.heading)}>{heading}</span>
              <span className={cn("", classes?.subtitle)}>
                {subtitle && subtitle}
              </span>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className={cn("", classes?.contentWrapper)}>
            <span className={cn("", classes?.content)}>{content}</span>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Root>
  );
};

export default Accordion;
