import {
  AccordionMultipleProps,
  AccordionSingleProps,
  Root,
} from "@radix-ui/react-accordion";
import { FC } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";
import { AccordionOptions } from "./types";

export type AccordionRootProps = AccordionOptions &
  (AccordionMultipleProps | AccordionSingleProps);

const root = tv({
  variants: {
    splitted: {
      true: "flex flex-col gap-4 border-0 p-0 shadow-none",
    },
    bordered: {
      true: "rounded border border-slate-200 p-3 shadow-md shadow-slate-100",
    },
    ui: {
      brutal: "",
      glassmorphic: "",
      neomorphic: "",
    },
  },
  compoundVariants: [
    {
      splitted: undefined,
      ui: "brutal",
      class:
        "rounded-lg bg-white outline outline-2 outline-black drop-shadow-[4px_6px_#000]",
    },
    {
      splitted: true,
      ui: "brutal",
      class: "gap-6 rounded-lg bg-white",
    },
  ],
});

const AccordionRoot: FC<AccordionRootProps> = ({
  children,
  className,
  splitted,
  bordered,
  ui,
  ...props
}) => {
  return (
    <Root
      className={root({
        splitted,
        bordered: bordered,
        ui: ui,
        class: className,
      })}
      {...props}
    >
      <AccordionContext.Provider value={{ splitted, bordered, ui }}>
        {children}
      </AccordionContext.Provider>
    </Root>
  );
};

export default AccordionRoot;
