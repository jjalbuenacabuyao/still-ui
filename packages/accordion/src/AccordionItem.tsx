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
    ui: {
      brutal: "",
      glassmorphic: "",
      neumorphic: "",
    },
  },
  compoundVariants: [
    {
      splitted: true,
      ui: undefined,
      class: "shadow-slate-100",
    },
    {
      splitted: true,
      ui: "brutal",
      class:
        "rounded-2xl border-0 bg-white shadow-none outline outline-2 outline-black drop-shadow-[4px_6px_#000] last:border-0",
    },
    {
      splitted: undefined,
      ui: "brutal",
      class: "border-black",
    },
    {
      ui: "glassmorphic",
      class: "border-slate-300 bg-white/50 backdrop-blur-md",
    },
    {
      ui: "glassmorphic",
      splitted: true,
      class: "shadow-none",
    },
    {
      splitted: true,
      ui: "neumorphic",
      class: "border-0 shadow-[-5px_5px_20px_#9ca3af,5px_-5px_20px_#ffffff]",
    },
  ],
});

const AccordionItem = React.forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => {
  const { splitted, ui } = useContext(AccordionContext);
  return (
    <Item
      ref={ref}
      className={item({ splitted, ui: ui, class: className })}
      {...props}
    />
  );
});

export default AccordionItem;
