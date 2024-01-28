import {
  AccordionContentProps as RadixAccordionContentProps,
  AccordionContent as RadixAccordionContent,
} from "@radix-ui/react-accordion";
import { FC, useContext } from "react";
import { AccordionContext } from "./hooks/AccordionContext";

const AccordionContent: FC<RadixAccordionContentProps> = ({
  className,
  children,
  ...props
}) => {
  const options = useContext(AccordionContext);

  return (
    <RadixAccordionContent
      className="text-balance px-4 pb-4 text-justify text-sm transition-[height] data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
      {...props}
    >
      {children}
    </RadixAccordionContent>
  );
};

export default AccordionContent;
