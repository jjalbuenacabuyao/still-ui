import {
  AccordionContentProps as RadixAccordionContentProps,
} from "@radix-ui/react-accordion";
import { FC, useContext } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";

const content = tv({
  base: "grid grid-rows-[0fr] px-4 pb-0 text-justify text-sm transition-[grid-template-rows] ease-[cubic-bezier(0.87,0,0.13,1)] group-data-[state=open]:grid-rows-[1fr] group-data-[state=open]:pb-4",
  variants: {
    ui: {
      brutal: "",
      glassmorphic: "bg-white/50 backdrop-blur-md",
      neumorphic: "",
    },
  },
});

const AccordionContent: FC<RadixAccordionContentProps> = ({
  className,
  children,
  ...props
}) => {
  const options = useContext(AccordionContext);

  return (
    <div className={content({ class: className, ui: options.ui })} {...props}>
        <p className="overflow-hidden">{children}</p>
    </div>
  );
};

export default AccordionContent;
