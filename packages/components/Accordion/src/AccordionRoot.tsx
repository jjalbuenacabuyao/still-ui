import {
  AccordionMultipleProps,
  AccordionSingleProps,
  Root,
} from "@radix-ui/react-accordion";
import { FC } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";

export type AccordionRootProps = {
    variant?: "default";
    bordered?: boolean;
  } & (AccordionMultipleProps | AccordionSingleProps)

const root = tv({
  variants: {
    bordered: {
      true: "border p-3",
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
    <Root className={root({ bordered: bordered, class: className })} {...props}>
      <AccordionContext.Provider value={{ variant, bordered }}>
        {children}
      </AccordionContext.Provider>
    </Root>
  );
};

export default AccordionRoot;
