import { AccordionContentProps as RadixAccordionContentProps } from "@radix-ui/react-accordion";
import { FC, forwardRef, ForwardedRef, useContext, Ref, RefAttributes } from "react";
import { AccordionContext } from "./AccordionContext";
import { cn } from "../../lib/utils";

interface AccordionContentProps {
  ref?: Ref<HTMLDivElement>;
}

const AccordionContent: FC<AccordionContentProps & RadixAccordionContentProps> =
  forwardRef(
    ({ className, children, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
      const options = useContext(AccordionContext);

      return (
        <AccordionContent
          className={cn(
            "text-balance px-4 pb-4 text-justify text-sm transition-[height]",
            "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </AccordionContent>
      );
    },
  );

export default AccordionContent;
