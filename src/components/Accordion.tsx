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
    <AccordionRoot className={classes?.container} {...props}>
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
  ...props
}: AccordionImplSingleProps) => {
  return (
    <Root
      className={cn(
        "flex flex-col gap-3 rounded-md border border-slate-200 p-3",
        className,
      )}
      type="single"
      {...props}
      collapsible
    >
      {children}
    </Root>
  );
};

const Item = ({ children, className, value, ...props }: AccordionItemProps) => {
  return (
    <AccordionItem
      className={cn("rounded-md border", className)}
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
        "group flex w-full items-center justify-between p-4",
        className,
      )}
      {...props}
    >
      <div>
        <span className={cn("", classes?.heading)}>{heading}</span>
        <span className={cn("", classes?.subtitle)}>
          {subtitle && subtitle}
        </span>
      </div>
      <i className="ri-arrow-down-s-line block transition-transform group-data-[state=open]:rotate-180"></i>
    </AccordionTrigger>
  );
};

const Content = ({ children, className, ...props }: AccordionContentProps) => {
  return (
    <AccordionContent className={cn("", className)} {...props}>
      {children}
    </AccordionContent>
  );
};

export default Accordion;
