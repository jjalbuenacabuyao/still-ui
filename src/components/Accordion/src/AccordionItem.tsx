import {
  AccordionItem as Item,
  AccordionItemProps,
} from "@radix-ui/react-accordion";
import { useContext, FC } from "react";
import { AccordionContext } from "./hooks/AccordionContext";

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  className,
  value,
  ...props
}) => {
  const options = useContext(AccordionContext);

  return (
    <Item
      className="border-b border-b-slate-300 last:border-0"
      value={value}
      {...props}
    >
      {children}
    </Item>
  );
};

export default AccordionItem;
