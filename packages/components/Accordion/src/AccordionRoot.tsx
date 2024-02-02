import {
  AccordionMultipleProps,
  AccordionSingleProps,
  Root,
} from "@radix-ui/react-accordion";
import { FC } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";
import { AccordionOptions } from "./types";

export type AccordionRootProps = AccordionOptions & (AccordionMultipleProps | AccordionSingleProps);

const root = tv({
  variants: {
    variant: {
      splitted: "border-0 p-0 shadow-none flex flex-col gap-4",
    },
    bordered: {
      true: "rounded border border-slate-200 p-3 shadow-md shadow-slate-100",
    },
  },
});

const AccordionRoot: FC<AccordionRootProps> = ({
  children,
  className,
  variant,
  bordered,
  ...props
}) => {
  return (
    <Root className={root({ variant: variant, bordered: bordered, class: className })} {...props}>
      <AccordionContext.Provider value={{ variant, bordered }}>
        {children}
      </AccordionContext.Provider>
    </Root>
  );
};

export default AccordionRoot;
