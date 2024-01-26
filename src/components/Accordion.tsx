import {
  AccordionContent,
  AccordionContentProps,
  AccordionHeader,
  AccordionImplSingleProps,
  AccordionItem,
  AccordionItemProps,
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
    <AccordionRoot
      className={cn(classes?.container, {
        "border p-4 rounded-md": variant === "bordered",
      })}
      {...props}
    >
      {items.map(({ heading, subtitle, content, value }) => (
        <Item className={classes?.item} value={value} key={heading}>
          <AccordionHeader>
            <Trigger
              className={classes?.trigger}
              heading={heading}
              subtitle={subtitle}
            />
          </AccordionHeader>
          <Content className={classes?.content}>{content}</Content>
        </Item>
      ))}
    </AccordionRoot>
  );
};

const AccordionRoot = ({
  children,
  className,
  collapsible,
  variant,
  ...props
}: AccordionImplSingleProps & { variant?: string }) => {
  return (
    <Root className={className} type="single" {...props} collapsible>
      {children}
    </Root>
  );
};

const Item = ({ children, className, value, ...props }: AccordionItemProps) => {
  return (
    <AccordionItem
      className={cn("border-b border-b-slate-300 last:border-0", className)}
      value={value}
      {...props}
    >
      {children}
    </AccordionItem>
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
    <AccordionTrigger
      className={cn(
        "group flex w-full items-center justify-between gap-4 p-4 text-left",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-1">
        <span className={cn("text-base", classes?.heading)}>{heading}</span>
        <span className={cn("text-xs", classes?.subtitle)}>
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
  );
};

const Content = ({ children, className, ...props }: AccordionContentProps) => {
  return (
    <AccordionContent
      className={cn(
        "text-balance px-4 pb-4 text-justify text-sm transition-[height]",
        "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
        className,
      )}
      {...props}
    >
      {children}
    </AccordionContent>
  );
};

export default Accordion;
