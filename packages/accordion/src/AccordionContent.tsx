import { Content } from "@radix-ui/react-accordion";
import { ComponentPropsWithoutRef, ElementRef } from "react";
import { tv } from "tailwind-variants";
import React from "react";

const content = tv({
  base: "overflow-hidden pb-0 text-justify text-sm data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown  group-data-[splitted=true]/accordion:px-5",
});

const AccordionContent = React.forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ children, className, ...props }, ref) => {
  return (
    <Content className={content({ class: className })} ref={ref} {...props}>
      <p className="pb-4">{children}</p>
    </Content>
  );
});

export default AccordionContent;
