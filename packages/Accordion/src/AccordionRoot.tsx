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
      brutal: "rounded-lg",
      glassmorphic:
        "before:absolute before:-right-4 before:-top-4 before:-z-10 before:block before:h-36 before:w-36 before:rounded-full before:bg-sky-500 after:absolute after:-bottom-4 after:-left-4 after:-z-10 after:block after:h-36 after:w-36 after:rounded-full after:bg-sky-800",
      neomorphic: "",
    },
  },
  compoundVariants: [
    {
      splitted: undefined,
      ui: "brutal",
      class:
        "z-10 bg-white outline outline-2 outline-black drop-shadow-[4px_6px_#000]",
    },
    {
      splitted: true,
      ui: "brutal",
      class: "gap-6",
    },
    {
      splitted: undefined,
      bordered: true,
      ui: "brutal",
      class: "rounded-lg shadow-none",
    },
    {
      splitted: true,
      bordered: true,
      ui: "brutal",
      class: "rounded-2xl p-5",
    },
    {
      splitted: undefined,
      ui: "glassmorphic",
      class:
        "rounded-md border border-white shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
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
