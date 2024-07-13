import {
  AccordionTriggerProps as RadixAccordionTriggerProps,
  AccordionTrigger as Trigger,
} from "@radix-ui/react-accordion";
import { ReactNode, ElementRef } from "react";
import { tv } from "tailwind-variants";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

type AccordionTriggerProps = {
  icon?: ReactNode;
};

const trigger = tv({
  slots: {
    wrapper:
      "group/trigger flex w-full items-center justify-between gap-4 py-3 text-left group-data-[splitted=true]/accordion:p-4",
    chevronIcon:
      "transition-transform group-data-[state=open]/trigger:rotate-180",
  },
});

const { wrapper, chevronIcon } = trigger();

const AccordionTrigger = React.forwardRef<
  ElementRef<typeof Trigger>,
  RadixAccordionTriggerProps & AccordionTriggerProps
>(({ className, children, icon, ...props }, ref) => {
  return (
      <Trigger
        ref={ref}
        className={wrapper({ class: className })}
        {...props}
      >
        {children}
        {icon ? icon : <ChevronDownIcon width={20} height={20} className={chevronIcon()} />}
      </Trigger>
  );
});

export default AccordionTrigger;
