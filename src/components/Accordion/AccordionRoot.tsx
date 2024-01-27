import {
  AccordionMultipleProps,
  AccordionSingleProps,
  Root,
} from "@radix-ui/react-accordion";
import { FC, forwardRef, ForwardedRef } from "react";
import { AccordionContext } from "./AccordionContext";
import { cn } from "../../lib/utils";

interface AccordionRootProps {
  variant?: "default";
  bordered?: boolean;
}

const AccordionRoot: FC<
  AccordionRootProps & (AccordionMultipleProps | AccordionSingleProps)
> = forwardRef(
  (
    { children, className, variant, bordered, ...props },
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <Root
      className={cn(className, {
        "rounded-md border p-4": bordered,
      })}
      {...props}
      ref={ref}
    >
      <AccordionContext.Provider value={{ variant, bordered }}>
        {children}
      </AccordionContext.Provider>
    </Root>
  ),
);

export default AccordionRoot;
