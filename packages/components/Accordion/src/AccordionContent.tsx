import {
  AccordionContentProps as RadixAccordionContentProps,
  AccordionContent as RadixAccordionContent,
} from "@radix-ui/react-accordion";
import { FC, useContext } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";

const content = tv({
  base: "text-balance px-4 pb-4 text-justify text-sm transition-[height] data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
});

const AccordionContent: FC<RadixAccordionContentProps> = ({
  className,
  children,
  ...props
}) => {
  const options = useContext(AccordionContext);

  return (
    <RadixAccordionContent className={content({ class: className })} {...props}>
      {children}
    </RadixAccordionContent>
  );
};

export default AccordionContent;
