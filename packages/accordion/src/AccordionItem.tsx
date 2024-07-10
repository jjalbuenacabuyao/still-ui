import { ElementRef, ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";
import React from "react";
import { Item } from "@radix-ui/react-accordion";

const item = tv({
  base: [
    "group border-b border-b-slate-200 last:border-0",
    "group-data-[splitted=true]/accordion:rounded group-data-[splitted=true]/accordion:border group-data-[splitted=true]/accordion:border-slate-200 group-data-[splitted=true]/accordion:shadow-md group-data-[splitted=true]/accordion:last:border",
  ],
});

const AccordionItem = React.forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => {
  return <Item ref={ref} className={item({ class: className })} {...props} />;
});

export default AccordionItem;
