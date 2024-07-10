import {
  AccordionMultipleProps,
  AccordionSingleProps,
  Root,
} from "@radix-ui/react-accordion";
import { ElementRef } from "react";
import { tv } from "tailwind-variants";
import { AccordionOptions } from "./types";
import React from "react";

export type AccordionRootProps = AccordionOptions &
  (AccordionMultipleProps | AccordionSingleProps);

const root = tv({
  base: "group/accordion",
  variants: {
    splitted: {
      true: "flex flex-col gap-4 border-0 p-0 shadow-none",
    },
    bordered: {
      true: "rounded-md border border-slate-200 p-3 shadow-md shadow-slate-100",
    },
  },
});

const AccordionRoot = React.forwardRef<
  ElementRef<typeof Root>,
  AccordionRootProps
>(({ bordered, children, className, splitted, ...props }, ref) => (
  <Root
    ref={ref}
    {...props}
    className={root({
      splitted,
      bordered,
      class: className,
    })}
    data-splitted={splitted}
  >
    {children}
  </Root>
));

export default AccordionRoot;
