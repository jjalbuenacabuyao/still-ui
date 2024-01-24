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

interface AccordionProp {
  classes?: {
    container?: string;
    content?: string;
    item?: string;
    subtitle?: string;
    trigger: string;
  };
  defaultValue: string;
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
  items,
  variant,
  ...props
}: AccordionProp & AccordionImplSingleProps) => {
  return (
    <AccordionRoot className={classes?.container} {...props}>
      {items.map(({ heading, subtitle, content, value }) => (
        <Item className={classes?.item} value={value} key={heading}>
          <AccordionHeader>
            <Trigger className={classes?.trigger}>
              {heading}
              <span className={cn("", classes?.subtitle)}>
                {subtitle && subtitle}
              </span>
            </Trigger>
          </AccordionHeader>
          <Content className={classes?.content}>
            {content}
          </Content>
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
    <Root className={cn("", className)} type="single" {...props} collapsible>
      {children}
    </Root>
  );
};

const Item = ({ children, className, value, ...props }: AccordionItemProps) => {
  return (
    <AccordionItem className={cn("", className)} value={value} {...props}>
      {children}
    </AccordionItem>
  );
};

const Trigger = ({ children, className, ...props }: AccordionTriggerProps) => {
  return (
    <AccordionTrigger className={cn("", className)} {...props}>
      {children}
    </AccordionTrigger>
  );
};

const Content = ({children, className, ...props}: AccordionContentProps) => {
  return (
    <AccordionContent className={cn("", className)} {...props}>
      {children}
    </AccordionContent>
  )
}

export default Accordion;
