import {
  AccordionTriggerProps as RadixAccordionTriggerProps,
  AccordionTrigger as Trigger,
  AccordionHeader,
} from "@radix-ui/react-accordion";
import { useContext, ReactNode, ElementRef } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

type AccordionTriggerProps = {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  icon?: ReactNode;
  classNames?: {
    innerWrapper?: string;
    title?: string;
    subtitle?: string;
    icon?: string;
  };
};

const trigger = tv({
  slots: {
    wrapper:
      "group flex w-full items-center justify-between gap-4 p-4 text-left",
    innerWrapper: "flex flex-col gap-1",
    tvTitle: "text-base",
    tvSubtitle: "text-xs",
    tvIcon: "transition-transform group-data-[state=open]:rotate-180",
  },
  variants: {
    splitted: {
      true: { wrapper: "p-6" },
    },
  },
});

const { wrapper, innerWrapper, tvTitle, tvSubtitle, tvIcon } = trigger();

const AccordionTrigger = React.forwardRef<
  ElementRef<typeof Trigger>,
  RadixAccordionTriggerProps & AccordionTriggerProps
>(({ className, classNames, icon, subtitle, title, ...props }, ref) => {
  const { splitted } = useContext(AccordionContext);

  return (
    <AccordionHeader>
      <Trigger
        ref={ref}
        className={wrapper({ class: className, splitted })}
        {...props}
      >
        <div className={innerWrapper({ class: classNames?.innerWrapper })}>
          <span className={tvTitle({ class: classNames?.title })}>{title}</span>
          <span className={tvSubtitle({ class: classNames?.subtitle })}>
            {subtitle}
          </span>
        </div>
          {icon ? icon : <ChevronDownIcon className={tvIcon({class: classNames?.icon})} />}
      </Trigger>
    </AccordionHeader>
  );
});

export default AccordionTrigger;
