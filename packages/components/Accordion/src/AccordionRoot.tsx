import {
  AccordionMultipleProps,
  AccordionSingleProps,
  Root,
} from "@radix-ui/react-accordion";
import { FC } from "react";
import { AccordionContext } from "./hooks/AccordionContext";

interface AccordionRootProps {
  variant?: "default";
  bordered?: boolean;
}

const AccordionRoot: FC<
  AccordionRootProps & (AccordionMultipleProps | AccordionSingleProps)
> = ({ children, className, variant, bordered, ...props }) => {
  return (
    <Root
      className={className}
      {...props}
    >
      <AccordionContext.Provider value={{ variant, bordered }}>
        {children}
      </AccordionContext.Provider>
    </Root>
  );
};

export default AccordionRoot;
