import {
  AccordionTriggerProps as RadixAccordionTriggerProps,
  AccordionTrigger as Trigger,
  AccordionHeader,
} from "@radix-ui/react-accordion";
import { useContext, FC, forwardRef, ForwardedRef, ReactNode } from "react";
import { AccordionContext } from "./AccordionContext";
import { cn } from "../../lib/utils";

interface AccordionTriggerProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
}

const AccordionTrigger: FC<RadixAccordionTriggerProps & AccordionTriggerProps> =
  forwardRef(
    (
      { className, title, subtitle, ...props },
      ref: ForwardedRef<HTMLButtonElement>,
    ) => {
      const options = useContext(AccordionContext);

      return (
        <AccordionHeader>
          <Trigger
            className={cn(
              "group flex w-full items-center justify-between gap-4 p-4 text-left",
              className,
            )}
            ref={ref}
            {...props}
          >
            <div className="flex flex-col gap-1">
              <span className="text-base">{title}</span>
              <span className="text-xs">{subtitle}</span>
            </div>
            <i
              className={cn(
                "ri-arrow-down-s-line",
                "transition-transform group-data-[state=open]:rotate-180",
              )}
            ></i>
          </Trigger>
        </AccordionHeader>
      );
    },
  );

export default AccordionTrigger;
