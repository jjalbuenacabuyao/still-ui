import {
  AccordionTriggerProps as RadixAccordionTriggerProps,
  AccordionTrigger as Trigger,
  AccordionHeader,
} from "@radix-ui/react-accordion";
import { useContext, FC, ReactNode } from "react";
import { AccordionContext } from "./hooks/AccordionContext";

interface AccordionTriggerProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
}

const AccordionTrigger: FC<
  RadixAccordionTriggerProps & AccordionTriggerProps
> = ({ className, title, subtitle, ...props }) => {
  const options = useContext(AccordionContext);

  return (
    <AccordionHeader>
      <Trigger
        className="group flex w-full items-center justify-between gap-4 p-4 text-left"
        {...props}
      >
        <div className="flex flex-col gap-1">
          <span className="text-base">{title}</span>
          <span className="text-xs">{subtitle}</span>
        </div>
        <i className="ri-arrow-down-s-line transition-transform group-data-[state=open]:rotate-180"></i>
      </Trigger>
    </AccordionHeader>
  );
};

export default AccordionTrigger;
