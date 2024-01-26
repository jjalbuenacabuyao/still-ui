import {
  AccordionContent,
  AccordionHeader,
  AccordionImplSingleProps,
  AccordionItem,
  AccordionTrigger,
  AccordionTriggerProps,
  Root,
} from "@radix-ui/react-accordion";
import { cn } from "../lib/utils";
import React from "react";
import "remixicon/fonts/remixicon.css";

interface AccordionProp {
  classes?: {
    container?: string;
    content?: string;
    item?: string;
    subtitle?: string;
    trigger: string;
    heading: string;
  };
  defaultValue?: string;
  variant?: string;
  items: {
    value: string;
    heading: string;
    subtitle?: string;
    content: string;
  }[];
}

interface TriggerProps {
  heading: string;
  subtitle?: string;
  icon?: React.ReactNode;
  classes?: {
    heading?: string;
    subtitle?: string;
  };
}

const Accordion = ({
  classes,
  items,
  variant,
  ...props
}: AccordionProp & AccordionImplSingleProps) => {
  return (
    <Root
      type="single"
      collapsible
      className={cn(classes?.container, {
        "rounded-md border p-4": variant === "bordered",
      })}
      {...props}
    >
      {items.map(({ heading, subtitle, content, value }) => (
        <AccordionItem
          className={cn(
            "border-b border-b-slate-300 last:border-0",
            classes?.item,
          )}
          value={value}
          key={heading}
        >
          <Trigger
            className={cn(
              "group flex w-full items-center justify-between gap-4 p-4 text-left",
              classes?.trigger,
            )}
            classes={{
              heading: cn("text-base", classes?.heading),
              subtitle: cn("text-xs", classes?.subtitle)
            }}
            heading={heading}
            subtitle={subtitle}
          />
          <AccordionContent
            className={cn(
              "text-balance px-4 pb-4 text-justify text-sm transition-[height]",
              "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
              classes?.content,
            )}
          >
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Root>
  );
};

const Trigger = ({
  className,
  heading,
  subtitle,
  classes,
  ...props
}: TriggerProps & AccordionTriggerProps) => {
  return (
    <AccordionHeader>
      <AccordionTrigger
        className={className}
        {...props}
      >
        <div className="flex flex-col gap-1">
          <span className={classes?.heading}>{heading}</span>
          <span className={classes?.subtitle}>
            {subtitle && subtitle}
          </span>
        </div>
        <i
          className={cn(
            "ri-arrow-down-s-line",
            "transition-transform group-data-[state=open]:rotate-180",
          )}
        ></i>
      </AccordionTrigger>
    </AccordionHeader>
  );
};

export default Accordion;
