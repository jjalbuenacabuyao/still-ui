import {
  AccordionTriggerProps as RadixAccordionTriggerProps,
  AccordionTrigger as Trigger,
  AccordionHeader,
} from "@radix-ui/react-accordion";
import { useContext, ReactNode, ElementRef } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";
import {ChevronDownIcon} from "@radix-ui/react-icons"
import React from "react";

type AccordionTriggerProps = {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  icon?: ReactNode;
};

const trigger = tv({
  slots: {
    wrapper:
      "group flex w-full items-center justify-between gap-4 p-4 text-left",
    innerWrapper: "flex flex-col gap-1",
    tvTitle: "text-base",
    tvSubtitle: "text-xs",
    tvIcon:
      "transition-transform group-data-[state=open]:rotate-180",
  },
  variants: {
    ui: {
      brutal: "",
      glassmorphic: {
        wrapper: "bg-white/50 backdrop-blur-md",
      },
      neumorphic: "",
    },
    splitted: {
      true: { wrapper: "p-6" },
    },
  },
});

const { wrapper, innerWrapper, tvTitle, tvSubtitle, tvIcon } = trigger();

const AccordionTrigger = React.forwardRef<
  ElementRef<typeof Trigger>,
  RadixAccordionTriggerProps & AccordionTriggerProps
>(({ className, icon, subtitle, title, ...props }, ref) => {
  const { splitted, ui } = useContext(AccordionContext);
  return (
    <AccordionHeader>
      <Trigger
        ref={ref}
        className={wrapper({ class: className, ui, splitted })}
        {...props}
      >
        <div className={innerWrapper()}>
          <span className={tvTitle()}>{title}</span>
          <span className={tvSubtitle()}>{subtitle}</span>
        </div>
        {icon ? icon : <ChevronDownIcon className={tvIcon()} />}
      </Trigger>
    </AccordionHeader>
  );
});

export default AccordionTrigger;
