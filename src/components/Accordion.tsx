import { cn } from "@/lib/utils";
import {
  Root,
  AccordionSingleProps,
  AccordionHeader,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React, { ReactNode } from "react";

interface AccordionProps extends AccordionSingleProps {
  variant: string;
  dropDownIcon: ReactNode;
  items: {
    header: string;
    content: string;
  }[];
};

const Accordion = ({
  className,
  dropDownIcon,
  items,
  type="single",
  variant,
  ...props
}: AccordionProps) => {
  return (
    <Root type={type} className={cn("", className)} {...props}>
      {items.map(({ header, content }) => (
        <AccordionItem value={header} key={header}>
          <AccordionHeader>
            <AccordionTrigger>
              {header}
              {dropDownIcon}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Root>
  );
};

export default Accordion;
