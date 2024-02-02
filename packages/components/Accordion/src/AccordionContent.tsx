import {
  AccordionContentProps as RadixAccordionContentProps,
  AccordionContent as RadixAccordionContent,
} from "@radix-ui/react-accordion";
import { FC, useContext } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";
//@ts-ignore
import style from "./styles/index.module.css";

const content = tv({
  base: "px-4 pb-4 text-justify text-sm",
});

const AccordionContent: FC<RadixAccordionContentProps> = ({
  className,
  children,
  ...props
}) => {
  const options = useContext(AccordionContext);

  return (
    <RadixAccordionContent className={`${style.accordionContent} ` + content({ class: className })} {...props}>
      {children}
    </RadixAccordionContent>
  );
};

export default AccordionContent;
