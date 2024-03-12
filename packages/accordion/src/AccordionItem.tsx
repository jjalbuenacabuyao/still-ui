import { useContext, ElementRef, ComponentPropsWithoutRef } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";
import React from "react";
import { Item } from "@radix-ui/react-accordion";

const item = tv({
  base: "group border-b border-b-slate-200 last:border-0",
  variants: {
    splitted: {
      true: "rounded border border-slate-200 shadow-md last:border",
    },
  },
});

const AccordionItem = React.forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => {
  const { splitted } = useContext(AccordionContext);
  return (
    <Item
      ref={ref}
      className={item({ splitted, class: className })}
      {...props}
    />
  );
});

export default AccordionItem;
