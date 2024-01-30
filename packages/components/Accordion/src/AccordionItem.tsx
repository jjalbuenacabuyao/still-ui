import {
  AccordionItem as Item,
  AccordionItemProps,
} from "@radix-ui/react-accordion";
import { useContext, FC } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";

const item = tv({
  base: "border-b border-b-slate-200 last:border-0",
});

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  className,
  value,
  ...props
}) => {
  const options = useContext(AccordionContext);

  return (
    <Item className={item({ class: className })} value={value} {...props}>
      {children}
    </Item>
  );
};

export default AccordionItem;
