import { Content } from "@radix-ui/react-accordion";
import { Children, ComponentPropsWithoutRef, ElementRef, useContext } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";
import React from "react";

const content = tv({
  base: "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden px-4 pb-0 text-justify text-sm",
  variants: {
    ui: {
      brutal: "",
      glassmorphic: "bg-white/50 backdrop-blur-md",
      neumorphic: "",
    },
  },
});

const AccordionContent = React.forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ children, className, ...props }, ref) => {
  const options = useContext(AccordionContext);

  return (
    <Content
      className={content({ class: className, ui: options.ui })}
      ref={ref}
      {...props}
    >
      <p className="pb-4">{children}</p>
    </Content>
  );
});

export default AccordionContent;
